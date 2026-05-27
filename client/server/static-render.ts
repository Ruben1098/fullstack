import { readdir, mkdir, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fetchContentList, fetchContent } from './api.ts';
import { renderHomePage } from './templates/home.ts';
import { renderCategoryPage } from './templates/category.ts';
import { renderArticlePage } from './templates/article.ts';
import type { ContentDetail, ContentListItem } from './types.ts';

const API_URL = (process.env.API_URL ?? 'http://localhost:4001').replace(/\/$/, '');
const API_KEY = process.env.API_KEY ?? '';

export const STATIC_OUTPUT_DIR = resolve(process.cwd(), process.env.STATIC_OUTPUT_DIR ?? '.framework/static');
export const STATIC_DB_DIR = resolve(process.cwd(), process.env.STATIC_DB_DIR ?? '../db');

let running = false;

type RawContentItem = {
  slug?: unknown;
  title?: unknown;
  excerpt?: unknown;
  category?: unknown;
  course?: unknown;
  argument?: unknown;
  featuredImage?: unknown;
  school?: unknown;
  class?: unknown;
  has_pdf_resource?: unknown;
  heading?: unknown;
  content?: unknown;
  faqs?: unknown;
};

type ParseResponse = {
  html: string;
  dynamicCss?: string;
};

function serializeDirectiveProps(props: Record<string, unknown>): string {
  return Object.entries(props)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(([key, value]) => `${key}="${String(value).replace(/"/g, '&quot;')}"`)
    .join(' ');
}

function getBlockProps(block: { name: string; type?: string; text?: string; props?: { [key: string]: unknown }; [key: string]: unknown }) {
  const { name, type, text, props, ...rest } = block;

  return {
    ...rest,
    ...(props || {}),
  };
}

function blocksToMarkdown(block: any, wrapStrings = false): string {
  if (typeof block === 'string') {
    if (block.includes('|') && block.includes('\n')) {
      const lines = block.replace(/\r\n/g, '\n').split('\n');
      const nonEmpty = lines.filter((l: string) => l.trim().length > 0);
      const isTableLike = nonEmpty.length > 1 && nonEmpty.every((l: string) => l.includes('|'));

      if (isTableLike) {
        const indents = nonEmpty.map((l: string) => (l.match(/^\s*/) ?? [''])[0].length).filter((n: number) => n > 0);
        const minIndent = indents.length > 0 ? Math.min(...indents) : 0;
        return lines
          .map((l: string) => (minIndent > 0 ? l.slice(minIndent) : l))
          .map((l: string) => l.replace(/\s+$/, ''))
          .join('\n')
          .trim();
      }
    }

    if (wrapStrings && block !== '[[br]]' && !block.startsWith('::')) {
      return `\n\n${block}\n\n`;
    }

    return block;
  }

  if (Array.isArray(block)) {
    return block
      .map((b: any) =>
        // Nested arrays are children of a container (e.g. P, Box).
        // Their inline strings must NOT be wrapped as paragraphs.
        Array.isArray(b)
          ? blocksToMarkdown(b, false)
          : blocksToMarkdown(b, wrapStrings),
      )
      .join('\n');
  }

  const blockProps = getBlockProps(block);
  const type = block.type || block?.props?.type;

  if (['open', 'close'].includes(String(type))) {
    return `::${block.name}{${serializeDirectiveProps(Object.assign({ type }, blockProps))}}`;
  }

  if (block?.props?.children) {
    const { children, ...props } = blockProps as any;
    return `::${block.name}{${serializeDirectiveProps(Object.assign({ type: 'open' }, props))}}\n${children.map((c: any) => blocksToMarkdown(c, wrapStrings)).join('\n')}\n::${block.name}{${serializeDirectiveProps(Object.assign({ type: 'close' }, props))}}`;
  }

  if (typeof block.text === 'string') {
    if (block.name === 'MathML' || block.name === 'InlineMath') {
      const attrs = Object.keys(blockProps).length > 0 ? `{${serializeDirectiveProps(blockProps)}}` : '';
      return `:${block.name}[${block.text}]${attrs}`;
    }

    return Object.keys(blockProps).length > 0
      ? `::${block.name}[${block.text}]{${serializeDirectiveProps(blockProps)}}`
      : `:${block.name}[${block.text}]`;
  }

  if (Object.keys(blockProps).length > 0) {
    return `::${block.name}{${serializeDirectiveProps(blockProps)}}`;
  }

  return '';
}

function slugifyCategory(value: string): string {
  return value.toLowerCase().trim().replace(/\s+/g, '-');
}

function stripInjectedDynamicStyle(html: string): string {
  return html.replace(/^<style data-instanswer-dynamic-css>[\s\S]*?<\/style>/, '');
}

async function parseMarkdown(markdown: string): Promise<ParseResponse> {
  if (!API_KEY) {
    throw new Error('[static] API_KEY not set: required to call /parse');
  }

  const res = await fetch(`${API_URL}/parse`, {
    method: 'POST',
    headers: {
      'x-api-key': API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ markdown, directives: true }),
  });

  if (!res.ok) {
    throw new Error(`[static] Parse API failed with ${res.status}`);
  }

  const body = (await res.json()) as { data: ParseResponse };
  return body.data;
}

async function collectJsonFiles(dir: string): Promise<string[]> {
  if (!existsSync(dir)) return [];

  const out: string[] = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const abs = join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await collectJsonFiles(abs)));
      continue;
    }
    if (entry.isFile() && entry.name.toLowerCase().endsWith('.json')) {
      out.push(abs);
    }
  }
  return out;
}

async function loadDbItems(): Promise<RawContentItem[]> {
  const files = await collectJsonFiles(STATIC_DB_DIR);
  if (files.length === 0) return [];

  const list: RawContentItem[] = [];

  for (const file of files) {
    const raw = await Bun.file(file).json().catch(() => null);
    if (!raw) continue;

    if (Array.isArray(raw)) {
      for (const item of raw) {
        if (item && typeof item === 'object') list.push(item as RawContentItem);
      }
      continue;
    }

    if (typeof raw === 'object') {
      list.push(raw as RawContentItem);
    }
  }

  return list;
}

function toListItem(item: RawContentItem): ContentListItem | null {
  if (typeof item.slug !== 'string' || !item.slug.trim()) return null;

  return {
    slug: item.slug,
    title: typeof item.title === 'string' ? item.title : item.slug,
    excerpt: typeof item.excerpt === 'string' ? item.excerpt : '',
    category: typeof item.category === 'string' ? item.category : 'Generale',
    course: typeof item.course === 'string' ? item.course : '',
    argument: typeof item.argument === 'string' ? item.argument : 'Contenuti',
    featuredImage: typeof item.featuredImage === 'string' ? item.featuredImage : '',
  };
}

function normalizeFaqs(value: unknown): { question: string; answer: string }[] {
  if (!Array.isArray(value)) return [];
  return value
    .map(v => {
      if (!v || typeof v !== 'object') return null;
      const q = (v as any).question;
      const a = (v as any).answer;
      if (typeof q !== 'string' || typeof a !== 'string') return null;
      return { question: q, answer: a };
    })
    .filter(Boolean) as { question: string; answer: string }[];
}

async function toDetailItem(item: RawContentItem): Promise<ContentDetail | null> {
  const listItem = toListItem(item);
  if (!listItem) return null;

  const headingMarkdown = typeof item.heading === 'string' ? item.heading : '';
  const bodyMarkdown = blocksToMarkdown(item.content ?? [], true);

  const [headingParsed, bodyParsed] = await Promise.all([
    parseMarkdown(headingMarkdown || ':P[]'),
    parseMarkdown(bodyMarkdown || ':P[]'),
  ]);

  const dynamicCss = [headingParsed.dynamicCss, bodyParsed.dynamicCss].filter(Boolean).join('\n');

  return {
    ...listItem,
    school: typeof item.school === 'string' ? item.school : '',
    class: typeof item.class === 'string' ? item.class : '',
    has_pdf_resource: Boolean(item.has_pdf_resource),
    headingHtml: stripInjectedDynamicStyle(headingParsed.html),
    html: stripInjectedDynamicStyle(bodyParsed.html),
    dynamicCss,
    faqs: normalizeFaqs(item.faqs),
  };
}

function routeToFilePath(routePath: string): string {
  if (routePath === '/') {
    return join(STATIC_OUTPUT_DIR, 'index.html');
  }
  return join(STATIC_OUTPUT_DIR, routePath.replace(/^\//, ''), 'index.html');
}

async function writeRouteHtml(routePath: string, html: string): Promise<void> {
  const filePath = routeToFilePath(routePath);
  const dir = dirname(filePath);
  await mkdir(dir, { recursive: true });
  await writeFile(filePath, html, 'utf8');
}

function mergeItems(apiItems: ContentListItem[], dbItems: RawContentItem[]): ContentListItem[] {
  const bySlug = new Map<string, ContentListItem>();
  for (const item of apiItems) bySlug.set(item.slug, item);
  for (const raw of dbItems) {
    const normalized = toListItem(raw);
    if (normalized) bySlug.set(normalized.slug, normalized);
  }
  return [...bySlug.values()];
}

export async function rebuildStaticSite(reason = 'manual'): Promise<{ pages: number; sourceDbItems: number }> {
  if (running) {
    return { pages: 0, sourceDbItems: 0 };
  }

  running = true;
  try {
    const dbItems = await loadDbItems();
    const apiItems = await fetchContentList().catch(() => [] as ContentListItem[]);
    const mergedList = mergeItems(apiItems, dbItems);

    await mkdir(STATIC_OUTPUT_DIR, { recursive: true });

    let pages = 0;

    await writeRouteHtml('/', renderHomePage(mergedList));
    pages += 1;

    const categories = new Map<string, ContentListItem[]>();
    for (const item of mergedList) {
      const categorySlug = slugifyCategory(item.category);
      const arr = categories.get(categorySlug) ?? [];
      arr.push(item);
      categories.set(categorySlug, arr);
    }

    for (const [categorySlug, categoryItems] of categories.entries()) {
      await writeRouteHtml(`/${categorySlug}`, renderCategoryPage(categorySlug, categoryItems));
      pages += 1;
    }

    const detailBySlug = new Map<string, ContentDetail>();

    for (const item of apiItems) {
      const detail = await fetchContent(item.slug).catch(() => null);
      if (detail) {
        detailBySlug.set(detail.slug, detail);
      }
    }

    for (const rawItem of dbItems) {
      const detail = await toDetailItem(rawItem).catch(() => null);
      if (!detail) continue;
      // DB content wins over API when same slug exists.
      detailBySlug.set(detail.slug, detail);
    }

    for (const detail of detailBySlug.values()) {
      const categorySlug = slugifyCategory(detail.category);
      await writeRouteHtml(`/${categorySlug}/${detail.slug}`, renderArticlePage(detail, process.env.BASE_URL ?? ''));
      pages += 1;
    }

    console.info(
      JSON.stringify({
        ts: new Date().toISOString(),
        level: 'info',
        msg: 'Static site rebuilt',
        reason,
        outputDir: STATIC_OUTPUT_DIR,
        dbDir: STATIC_DB_DIR,
        pages,
        dbItems: dbItems.length,
      }),
    );

    return { pages, sourceDbItems: dbItems.length };
  } finally {
    running = false;
  }
}

export function staticPathToFile(urlPath: string): string {
  const normalizedPath = (urlPath || '/').split('?')[0].split('#')[0];
  const sanitized = normalizedPath.replace(/\.{2,}/g, '').replace(/\\/g, '/');
  return routeToFilePath(sanitized === '' ? '/' : sanitized);
}

if (import.meta.main) {
  rebuildStaticSite('cli').catch(err => {
    console.error('[static] Build failed:', err);
    process.exitCode = 1;
  });
}

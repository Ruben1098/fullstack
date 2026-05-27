import type { ContentItem, ContentBlock } from '@/types/index.ts';
import { config } from '@/config/index.ts';
import { resolve } from 'path';

class ContentService {
	private items: ContentItem[] = [];
	private indexBySlug = new Map<string, ContentItem>();
	private loaded = false;

	async load(): Promise<void> {
		if (this.loaded) return;

		const absPath = resolve(import.meta.dir, '../../', config.contentsPath);

		const file = Bun.file(absPath);
		if (!(await file.exists())) {
			console.warn(`[content] contents.json not found at ${absPath}. Content endpoints will return 404.`);
			this.loaded = true;
			return;
		}

		this.items = (await file.json()) as ContentItem[];
		for (const item of this.items) {
			this.indexBySlug.set(item.slug, item);
		}
		console.info(`[content] Loaded ${this.items.length} content items.`);
		this.loaded = true;
	}

	getBySlug(slug: string): ContentItem | undefined {
		return this.indexBySlug.get(slug);
	}

	list(): ContentItem[] {
		return this.items;
	}
}

// ─── Client parser ported to server (kept intentionally equivalent) ─────────

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

export function blocksToMarkdown(
	block:
		| {
				name: string;
				type?: string;
				text?: string;
				props?: { [key: string]: unknown };
				[key: string]: unknown;
		  }
		| string
		| Array<ContentBlock | string>,
	wrapStrings = false,
): string {
	if (typeof block === 'string') {
		if (block.includes('|') && block.includes('\n')) {
			const lines = block.replace(/\r\n/g, '\n').split('\n');
			const nonEmpty = lines.filter(l => l.trim().length > 0);
			const isTableLike = nonEmpty.length > 1 && nonEmpty.every(l => l.includes('|'));

			if (isTableLike) {
				const indents = nonEmpty.map(l => (l.match(/^\s*/) ?? [''])[0].length).filter(n => n > 0);
				const minIndent = indents.length > 0 ? Math.min(...indents) : 0;
				return lines
					.map(l => (minIndent > 0 ? l.slice(minIndent) : l))
					.map(l => l.replace(/\s+$/, ''))
					.join('\n')
					.trim();
			}
		}

		// Wrap bare strings as markdown paragraphs (double newlines → remark creates native <p>)
		// [[br]] and :: directives are excluded from wrapping
		if (wrapStrings && block !== '[[br]]' && !block.startsWith('::')) {
			return `\n\n${block}\n\n`;
		}

		return block;
	}
	if (Array.isArray(block)) {
		return block
			.map(b =>
				// Nested arrays are children of an open/close container (e.g. P, Box).
				// Their inline strings must NOT be wrapped as paragraphs.
				Array.isArray(b)
					? blocksToMarkdown(b as any, false)
					: blocksToMarkdown(b as any, wrapStrings),
			)
			.join('\n');
	}

	const blockProps = getBlockProps(block);
	const type = block.type || (block as any)?.props?.type;

	if (['open', 'close'].includes(String(type))) {
		return `::${block.name}{${serializeDirectiveProps(Object.assign({ type }, blockProps))}}`;
	}

	if ((block as any).props?.children) {
		const { children, ...props } = blockProps as any;
		return `::${block.name}{${serializeDirectiveProps(
			Object.assign({ type: 'open' }, props),
		)}}\n${children.map(blocksToMarkdown).join('\n')}\n::${block.name}{${serializeDirectiveProps(Object.assign({ type: 'close' }, props))}}`;
	}

	if (typeof block.text === 'string') {
		if (block.name === 'MathML' || block.name === 'InlineMath') {
			const attrs = Object.keys(blockProps).length > 0 ? `{${serializeDirectiveProps(blockProps)}}` : '';
			return `:${block.name}[${block.text}]${attrs}`;
		}

		return Object.keys(blockProps).length > 0 ?
				`::${block.name}[${block.text}]{${serializeDirectiveProps(blockProps)}}`
			:	`:${block.name}[${block.text}]`;
	}

	if (Object.keys(blockProps).length > 0) {
		return `::${block.name}{${serializeDirectiveProps(blockProps)}}`;
	}

	return '';
}

export const contentService = new ContentService();

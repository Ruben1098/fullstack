import { existsSync, readFileSync, writeFileSync } from 'fs';
import { dirname, resolve } from 'path';

// Lazy-loaded to avoid Bun bootstrap JSON parse errors from @tailwindcss/postcss workspace scanning
let _postcss: typeof import('postcss').default | null = null;
let _tailwindcss: typeof import('@tailwindcss/postcss').default | null = null;
let _tailwindPatched = false;

function patchTailwindResolver(): void {
	if (_tailwindPatched) return;

	const resolverCandidates = [
		resolve(process.cwd(), 'node_modules/@tailwindcss/node/dist/index.js'),
		resolve(import.meta.dir, '../../node_modules/@tailwindcss/node/dist/index.js'),
		resolve(import.meta.dir, '../../../node_modules/@tailwindcss/node/dist/index.js'),
	];

	const resolverFile = resolverCandidates.find(p => existsSync(p));
	if (!resolverFile) {
		_tailwindPatched = true;
		return;
	}

	let text = readFileSync(resolverFile, 'utf8');
	const replacements: Array<[string, string]> = [
		['conditionNames:["style"],modules:De});async function ii', 'conditionNames:["style"],modules:De,symlinks:!1});async function ii'],
		['conditionNames:["style"],modules:Le});async function nn', 'conditionNames:["style"],modules:Le,symlinks:!1});async function nn'],
		['conditionNames:["node","import"],modules:De}),oi', 'conditionNames:["node","import"],modules:De,symlinks:!1}),oi'],
		['conditionNames:["node","import"],modules:Le}),ln', 'conditionNames:["node","import"],modules:Le,symlinks:!1}),ln'],
		[
			'conditionNames:["node","require"],modules:De});async function Ct',
			'conditionNames:["node","require"],modules:De,symlinks:!1});async function Ct',
		],
		[
			'conditionNames:["node","require"],modules:Le});async function St',
			'conditionNames:["node","require"],modules:Le,symlinks:!1});async function St',
		],
	];

	let changed = false;
	for (const [from, to] of replacements) {
		if (text.includes(from)) {
			text = text.replace(from, to);
			changed = true;
		}
	}

	if (changed) {
		writeFileSync(resolverFile, text);
	}

	_tailwindPatched = true;
}

async function getProcessors() {
	patchTailwindResolver();

	if (!_postcss || !_tailwindcss) {
		const [postcssModule, tailwindModule] = await Promise.all([import('postcss'), import('@tailwindcss/postcss')]);
		_postcss = postcssModule.default;
		_tailwindcss = tailwindModule.default;
	}
	return { postcss: _postcss!, tailwindcss: _tailwindcss! };
}

function resolveDynamicInputPath(): string {
	const candidates = [
		resolve(import.meta.dir, '../../../client/app/__dynamic_tailwind_input.css'),
		resolve(import.meta.dir, '../../client/app/__dynamic_tailwind_input.css'),
		resolve(process.cwd(), '../client/app/__dynamic_tailwind_input.css'),
	];

	for (const candidate of candidates) {
		const appDir = dirname(candidate);
		const clientRoot = resolve(appDir, '..');
		if (existsSync(resolve(clientRoot, 'package.json')) && existsSync(resolve(clientRoot, 'tailwind.config.ts'))) {
			return candidate;
		}
	}

	return candidates[0];
}

const DYNAMIC_INPUT_PATH = resolveDynamicInputPath();

const DYNAMIC_TAILWIND_SOURCE = `@import "tailwindcss";
@config "../tailwind.config.ts";
@import "../styles/vars.css" layer(utility);
@import "../styles/utility.css" layer(utility);
@custom-variant dark (&:where(.dark, [data-theme=dark], .dark *, [data-theme=dark] *));
`;

const dynamicCssCache = new Map<string, string>();

function escapeSourceInline(value: string): string {
	return value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

export function extractDynamicClassNames(markdown: string): string[] {
	const matches = new Set<string>();
	const attrRegex = /(?:className|class)\s*=\s*(["'])(.*?)\1/gms;

	for (const match of markdown.matchAll(attrRegex)) {
		const raw = match[2]?.trim();
		if (!raw) continue;

		for (const token of raw.split(/\s+/)) {
			const value = token.trim();
			if (value) matches.add(value);
		}
	}

	return [...matches].sort();
}

export async function compileDynamicCssFromMarkdown(markdown: string): Promise<string> {
	const classes = extractDynamicClassNames(markdown);
	if (classes.length === 0) return '';

	const cacheKey = classes.join(' ');
	const cached = dynamicCssCache.get(cacheKey);
	if (cached) return cached;

	const cssInput = `${DYNAMIC_TAILWIND_SOURCE}\n@source inline("${escapeSourceInline(classes.join(' '))}");\n`;

	try {
		const { postcss, tailwindcss } = await getProcessors();
		const result = await postcss([tailwindcss()]).process(cssInput, {
			from: DYNAMIC_INPUT_PATH,
		});

		const css = String(result.css).trim();
		dynamicCssCache.set(cacheKey, css);
		return css;
	} catch (error) {
		console.warn('[dynamicCss] compile failed, using empty fallback:', error);
		dynamicCssCache.set(cacheKey, '');
		return '';
	}
}

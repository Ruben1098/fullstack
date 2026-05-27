import { resolve } from 'path';

// Lazy-loaded to avoid Bun bootstrap JSON parse errors from @tailwindcss/postcss workspace scanning
let _postcss: typeof import('postcss').default | null = null;
let _tailwindcss: typeof import('@tailwindcss/postcss').default | null = null;

async function getProcessors() {
	if (!_postcss || !_tailwindcss) {
		const [postcssModule, tailwindModule] = await Promise.all([
			import('postcss'),
			import('@tailwindcss/postcss'),
		]);
		_postcss = postcssModule.default;
		_tailwindcss = tailwindModule.default;
	}
	return { postcss: _postcss!, tailwindcss: _tailwindcss! };
}

const DYNAMIC_INPUT_PATH = resolve(import.meta.dir, '../../../client/app/__dynamic_tailwind_input.css');

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
	const { postcss, tailwindcss } = await getProcessors();
	const result = await postcss([tailwindcss()]).process(cssInput, {
		from: DYNAMIC_INPUT_PATH,
	});

	const css = String(result.css).trim();
	dynamicCssCache.set(cacheKey, css);
	return css;
}

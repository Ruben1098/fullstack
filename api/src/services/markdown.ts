import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeKatex from 'rehype-katex';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import { visit, SKIP } from 'unist-util-visit';
import type { Root } from 'mdast';
import type { Element, ElementContent, Root as HRoot } from 'hast';
import katex from 'katex';

// ─── KaTeX helpers (ported from client/components/mathml.tsx) ─────────────────

const KATEX_OPTIONS = {
	throwOnError: false,
	strict: false,
	macros: {
		'\\red': '\\textcolor{#ef4444}',
		'\\black': '\\textcolor{#0f0f0f}',
		'\\root': '\\sqrt[#1]{#2}',
	},
} as const;

function autoFormatLatex(latex: string): string {
	if (!latex || typeof latex !== 'string') return latex;
	const formatted = '\\displaystyle ' + latex.trim();
	return formatted
		.replace(/(?<!\\)\(\s*/g, '\\left(')
		.replace(/\s*(?<!\\)\)/g, '\\right)')
		.replace(/(?<!sqrt)(?<!root)(?<!\\)\[\s*/g, '\\left[')
		.replace(/\s*(?<!\\)\]/g, '\\right]')
		.replace(/\\\{\s*/g, '\\left\\{')
		.replace(/\s*\\\}/g, '\\right\\}')
		.replace(/(?<!\\)\|(.+?)(?<!\\)\|/g, '\\left|$1\\right|');
}

function renderKatex(expr: string, displayMode: boolean): string {
	try {
		return katex.renderToString(autoFormatLatex(expr), {
			...(KATEX_OPTIONS as any),
			output: 'html',
			displayMode,
		});
	} catch {
		return String(expr);
	}
}

function escapeAttr(s: string): string {
	return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function cn(...classes: (string | undefined | null | false)[]): string {
	return classes.filter(Boolean).join(' ');
}

// ─── Component variant maps ────────────────────────────────────────────────────

const BOX_VARIANT_CLASSES: Record<string, string> = {
	intro: 'border-box-intro bg-box-intro-bg',
	step: 'border-box-step bg-box-step-bg',
	theory: 'border-box-theory bg-box-theory-bg',
	alert: 'border-box-alert bg-box-alert-bg',
	result: 'border-box-result bg-box-result-bg',
};

// ─── Custom directive → HTML plugin ──────────────────────────────────────────
//
// Converts the client's ::Component{props} syntax to exact Tailwind HTML.
// Emits raw HTML strings for MathML/InlineMath (rendered via KaTeX directly).
// Uses allowDangerousHtml + rehype-raw to process the raw nodes.
//

function remarkClientDirectives() {
	function toText(children: any[] | undefined): string {
		if (!children || children.length === 0) return '';
		return children
			.map((c: any) => {
				if (c.type === 'text') return c.value ?? '';
				if (Array.isArray(c.children)) return toText(c.children);
				return '';
			})
			.join('');
	}

	function mapDirectiveToNode(child: any): any {
		const type = child?.type as string | undefined;
		if (!type?.includes('Directive')) return child;

		const name: string = child.name;
		const attrs: Record<string, string> = child.attributes ?? {};
		const className = attrs.className || attrs.class || '';

		// ── Math ──────────────────────────────────────────────────────────────────
		if (name === 'MathML') {
			const expr = toText(child.children);
			const katexHtml = renderKatex(expr, true);
			const cls = cn(
				'text-base [&:where(#box_*)]:text-lg text-katex font-bold inline-block contrast-110 opacity-100! drop-shadow-foreground/65 mx-auto dark:w-4 leading-none *:contents *:m-0!',
				className,
			);
			return { type: 'html', value: `<span class="${escapeAttr(cls)}">${katexHtml}</span>` };
		}

		if (name === 'InlineMath') {
			const expr = toText(child.children);
			const displayHtml = renderKatex(expr, true);
			const inlineHtml = renderKatex(expr, false);
			const innerCls =
				'text-base [&:where(#box_*)]:text-lg text-katex font-bold inline-block contrast-110 opacity-100! drop-shadow-foreground/65 mx-auto dark:w-4 leading-none *:contents *:m-0! sr-only';
			const outerCls = cn(
				'relative text-lg font-bold inline-block contrast-110 opacity-100! drop-shadow-foreground/65 text-katex',
				className,
			);
			return {
				type: 'html',
				value: `<span class="${escapeAttr(outerCls)}"><span class="${escapeAttr(innerCls)}" aria-hidden="true">${displayHtml}</span><span>${inlineHtml}</span></span>`,
			};
		}

		// ── Layout containers ─────────────────────────────────────────────────────
		if (name === 'Shell') {
			child.data = {
				hName: 'div',
				hProperties: {
					className: cn(
						'lg:bg-shell lg:rounded-2xl lg:shadow-[0_0_8px_-1px] lg:shadow-foreground/35 p-4 lg:p-6 w-full grid grid-flow-row grid-cols-1 auto-rows-[minmax(5vh,auto)] items-center gap-4 lg:gap-5',
						className,
					),
				},
			};
			return child;
		}

		if (name === 'Slide') {
			child.data = {
				hName: 'div',
				hProperties: {
					className: cn(
						'md:px-5 lg:px-19 grid auto-cols-fr auto-rows-subgrid grid-flow-dense items-center lg:gap-9 gap-6.5',
						className,
					),
				},
			};
			return child;
		}

		if (name === 'SubParagraph') {
			child.data = {
				hName: 'div',
				hProperties: { className: cn('*:leading-relaxed px-4', className) },
			};
			return child;
		}

		if (name === 'Box') {
			const variant = attrs.variant || 'intro';
			const variantClass = BOX_VARIANT_CLASSES[variant] ?? BOX_VARIANT_CLASSES.intro;
			child.data = {
				hName: 'div',
				hProperties: {
					id: 'box',
					className: cn(
						'flex flex-col items-start justify-center text-left rounded-2xl p-5 gap-3 border-l-6 shadow-md [&>math]:text-2xl! col-span-full w-full',
						variantClass,
						className,
					),
				},
			};
			return child;
		}

		if (name === 'Table') {
			child.data = {
				hName: 'div',
				hProperties: {
					// marker so rehypeDecorateComponents can merge class onto inner <table>
					dataTableWrapper: 'true',
					className: cn('w-full grid grid-cols-1 auto-rows-fr gap-1.5 grid-flow-row', className),
				},
			};
			return child;
		}

		if (name === 'Row') {
			child.data = {
				hName: 'tr',
				hProperties: { className: cn('grid grid-rows-1 auto-cols-fr grid-flow-col', className) },
			};
			return child;
		}

		// ── Heading / text elements ────────────────────────────────────────────────
		if (name === 'H1') {
			child.data = {
				hName: 'h1',
				hProperties: {
					className: cn('text-2xl lg:text-3xl font-black text-black', className),
					dataComponent: 'H1',
				},
			};
			return child;
		}

		if (name === 'H2') {
			child.data = {
				hName: 'h2',
				hProperties: {
					className: cn(
						'text-xl lg:text-2xl font-bold leading-normal flex flex-row items-center justify-start gap-x-1.5 lg:gap-x-5',
						className,
					),
					dataComponent: 'H2',
				},
			};
			return child;
		}

		if (name === 'H3') {
			child.data = {
				hName: 'h3',
				hProperties: { className: cn('text-xl font-semibold italic leading-normal', className) },
			};
			return child;
		}

		if (name === 'H4') {
			child.data = {
				hName: 'h4',
				hProperties: { className: cn('text-xl font-bold italic leading-none!', className) },
			};
			return child;
		}

		if (name === 'P') {
			child.data = {
				hName: 'p',
				hProperties: { className: cn('opacity-75 leading-normal inline m-0 text-left', className) },
			};
			return child;
		}

		if (name === 'Bold') {
			child.data = {
				hName: 'strong',
				hProperties: { className: cn('font-bold text-black', className) },
			};
			return child;
		}

		// ── Leaf elements ─────────────────────────────────────────────────────────
		if (name === 'Image') {
			const src = attrs.src || '';
			return {
				type: 'html',
				value: `<div class="w-full h-auto"><img class="${escapeAttr(className)}" src="${escapeAttr(src)}"></div>`,
			};
		}

		if (name === 'YSeparator') {
			return {
				type: 'html',
				value: `<div class="${escapeAttr(cn('border-t border-gray-300 w-full mask-[radial-gradient(closest-side,black_30%,transparent_70%)]', className || 'my-4'))}"></div>`,
			};
		}

		if (name === 'XSeparator') {
			return {
				type: 'html',
				value: `<div class="${escapeAttr(cn('border-l border-gray-300 h-full mask-[radial-gradient(closest-side,black_30%,transparent_70%)]', className))}"></div>`,
			};
		}

		if (name === 'Separator') {
			return {
				type: 'html',
				value: `<tr class="${escapeAttr(cn('border-t-2 border-gray-300', className))}"><td colspan="1000"></td></tr>`,
			};
		}

		// ── Fallback ──────────────────────────────────────────────────────────────
		child.data = {
			hName: 'div',
			hProperties: { className: `md-${name.toLowerCase()}${className ? ` ${className}` : ''}` },
		};
		return child;
	}

	return (tree: Root) => {
		// 1. Replace [[br]] with <br>
		visit(tree, 'text', (node: any, index: number | undefined, parent: any) => {
			if (!node.value?.includes('[[br]]') || index === undefined) return;
			const parts: string[] = node.value.split('[[br]]');
			const newNodes: any[] = parts.flatMap((part: string, i: number) => {
				const acc: any[] = [];
				if (part) acc.push({ type: 'text', value: part });
				if (i < parts.length - 1) acc.push({ type: 'br', data: { hName: 'br' } });
				return acc;
			});
			parent.children.splice(index, 1, ...newNodes);
			return [SKIP, index + newNodes.length];
		});

		// 2. Rebuild open/close container directives into proper container nodes
		visit(tree, (node: any) => {
			if (!node.children || !Array.isArray(node.children)) return;

			const newChildren: any[] = [];
			const stack: any[] = [];

			for (const child of node.children) {
				const attributes = child.attributes ?? {};
				const directiveType = attributes.type;

				if (directiveType === 'open') {
					const container: any = {
						type: 'containerDirective',
						name: child.name,
						attributes: Object.fromEntries(Object.entries(attributes).filter(([k]) => k !== 'type')),
						children: [],
					};
					mapDirectiveToNode(container); // sets container.data.hName/hProperties
					// A container-directive mapped to <p> cannot hold block-level children
					// (inner paragraphs, headings) without producing invalid HTML that
					// rehypeUnwrapBlock would silently discard. Promote to <div> instead.
					if (container.data?.hName === 'p') {
						container.data.hName = 'div';
					}
					stack.push(container);
					continue;
				}

				if (directiveType === 'close') {
					const last = stack.pop();
					if (!last) continue;
					if (stack.length > 0) stack[stack.length - 1].children.push(last);
					else newChildren.push(last);
					continue;
				}

				// Preserve already reconstructed container directives (from a parent pass).
				// Re-mapping them here would overwrite hName/hProperties and can turn
				// promoted containers (e.g. P -> div) back into invalid <p> wrappers.
				const mapped = child.type === 'containerDirective' ? child : mapDirectiveToNode(child);
				if (stack.length > 0) stack[stack.length - 1].children.push(mapped);
				else newChildren.push(mapped);
			}

			// Push any unclosed containers
			for (const container of stack) newChildren.push(container);
			node.children = newChildren;
		});
	};
}

// ─── rehype: H2 dot, strong class, table wrapper ──────────────────────────────
//
// Runs after remarkRehype + rehypeRaw, before rehypeSanitize.
//

function rehypeDecorateComponents() {
	return (tree: HRoot) => {
		// H2: prepend dot decoration; H1: just remove data-component marker
		visit(tree, 'element', (node: Element) => {
			const dc = (node.properties as any)?.dataComponent;

			if (node.tagName === 'h2' && dc === 'H2') {
				delete (node.properties as any).dataComponent;
				const dot: ElementContent = {
					type: 'element',
					tagName: 'div',
					properties: {
						className:
							'size-2.5 bg-brand rounded-full mb-1 -ml-0.5 mask-[radial-gradient(closest-side,black_30%,transparent_70%)]',
					},
					children: [],
				};
				node.children.unshift(dot);
			} else if (dc) {
				delete (node.properties as any).dataComponent;
			}

			// Add font-bold text-black to <strong> that have no class
			if (node.tagName === 'strong' && !(node.properties as any)?.class && !(node.properties as any)?.className) {
				(node.properties as any).className = 'font-bold text-black';
			}
		});

		// Table: merge wrapper div classes onto inner <table>, then unwrap the div
		visit(tree, 'element', (node: Element, index: number | undefined, parent: any) => {
			if (node.tagName !== 'div' || (node.properties as any)?.dataTableWrapper !== 'true' || index === undefined || !parent) return;

			const wrapperClass = (node.properties as any)?.className ?? '';
			const innerTable = node.children.find((c): c is Element => c.type === 'element' && (c as Element).tagName === 'table');

			if (innerTable) {
				const existingClass = (innerTable.properties as any)?.className ?? '';
				(innerTable.properties as any).className = cn(wrapperClass, existingClass) || undefined;
				// Replace the wrapper div with its children (puts the <table> in place)
				parent.children.splice(index, 1, ...node.children);
				return [SKIP, index];
			} else {
				// No inner GFM table found — convert the wrapper div itself to a <table>
				node.tagName = 'table';
				delete (node.properties as any).dataTableWrapper;
			}
		});
	};
}

function rehypePostSanitizeFixes() {
	return (tree: HRoot) => {
		visit(tree, 'element', (node: Element, index: number | undefined, parent: any) => {
			if (node.tagName === 'h2') {
				const current = (node.properties as any)?.className;
				if (!current || (Array.isArray(current) && current.length === 0) || current === '') {
					(node.properties as any).className =
						'text-xl lg:text-2xl font-bold leading-normal flex flex-row items-center justify-start gap-x-1.5 lg:gap-x-5';
				}

				const hasDot = node.children.some(
					(c: any) =>
						c.type === 'element' &&
						c.tagName === 'div' &&
						String((c.properties as any)?.className ?? '').includes('bg-brand'),
				);
				if (!hasDot) {
					node.children.unshift({
						type: 'element',
						tagName: 'div',
						properties: {
							className:
								'size-2.5 bg-brand rounded-full mb-1 -ml-0.5 mask-[radial-gradient(closest-side,black_30%,transparent_70%)]',
						},
						children: [],
					} as ElementContent);
				}
			}

			if (node.tagName === 'p' && parent && parent.tagName !== 'td' && parent.tagName !== 'th') {
				const current = (node.properties as any)?.className;
				if (!current || (Array.isArray(current) && current.length === 0) || current === '') {
					(node.properties as any).className = 'opacity-75 leading-normal inline m-0 text-left';
				}
			}

			if (node.tagName === 'tr') {
				const current = (node.properties as any)?.className;
				if (!current || (Array.isArray(current) && current.length === 0) || current === '') {
					(node.properties as any).className = 'grid grid-rows-1 auto-cols-fr grid-flow-col';
				}
			}

			if (node.tagName === 'td') {
				const current = (node.properties as any)?.className;
				if (!current || (Array.isArray(current) && current.length === 0) || current === '') {
					(node.properties as any).className = 'col-span-1';
				}

				const normalizedChildren: ElementContent[] = [];
				for (const child of node.children) {
					if (
						child.type === 'element' &&
						child.tagName === 'p' &&
						(!child.properties || Object.keys(child.properties).length === 0)
					) {
						normalizedChildren.push(...(child.children as ElementContent[]));
					} else {
						normalizedChildren.push(child as ElementContent);
					}
				}
				node.children = normalizedChildren;
			}
		});
	};
}

// ─── rehype: unwrap <p> that only contain element nodes ──────────────────────

function rehypeUnwrapBlock() {
	return (tree: HRoot) => {
		visit(tree, 'element', (node: Element, index: number | undefined, parent: any) => {
			if (node.tagName !== 'p' || index === undefined || !parent) return;
			const hasText = node.children.some(c => c.type === 'text' && (c as any).value?.trim().length > 0);
			if (!hasText) {
				parent.children.splice(index, 1, ...node.children);
				return [SKIP, index];
			}
		});
	};
}

// ─── Sanitization schema ─────────────────────────────────────────────────────

const sanitizeSchema = {
	...defaultSchema,
	clobberPrefix: '',
	attributes: {
		...defaultSchema.attributes,
		'*': [...((defaultSchema.attributes?.['*'] as string[]) ?? []), 'className', 'class', 'style', 'id', 'aria-hidden', 'aria-label'],
		span: [...((defaultSchema.attributes?.['span'] as string[]) ?? []), 'style', 'className'],
		math: ['xmlns', 'display'],
		annotation: ['encoding'],
		svg: ['xmlns', 'viewBox', 'width', 'height', 'class'],
		path: ['d', 'clip-rule', 'fill-rule'],
		line: ['x1', 'y1', 'x2', 'y2', 'stroke'],
		circle: ['cx', 'cy', 'r'],
		rect: ['x', 'y', 'width', 'height'],
		use: ['href', 'x', 'y'],
		defs: [],
		table: ['class', 'className'],
		tr: ['class', 'className'],
		td: ['class', 'className', 'colSpan', 'colspan'],
		th: ['class', 'className', 'colSpan', 'colspan', 'scope'],
		img: ['src', 'alt', 'class', 'className', 'width', 'height', 'loading'],
	},
	tagNames: [
		...(defaultSchema.tagNames ?? []),
		'math',
		'mfrac',
		'mi',
		'mn',
		'mo',
		'mrow',
		'msup',
		'msub',
		'msubsup',
		'msqrt',
		'mroot',
		'mtext',
		'mtable',
		'mtr',
		'mtd',
		'menclose',
		'annotation',
		'semantics',
		'svg',
		'path',
		'g',
		'defs',
		'use',
		'line',
		'circle',
		'rect',
		'div',
		'section',
		'article',
		'table',
		'thead',
		'tbody',
		'tfoot',
		'tr',
		'th',
		'td',
		'img',
		'h1',
		'h2',
		'h3',
		'h4',
	],
};

// ─── Processors ──────────────────────────────────────────────────────────────

/** Standard markdown (GFM + math) → sanitized HTML */
const standardProcessor = unified()
	.use(remarkParse)
	.use(remarkGfm)
	.use(remarkMath)
	.use(remarkRehype, { allowDangerousHtml: false })
	.use(rehypeKatex, { throwOnError: false, strict: false })
	.use(rehypeUnwrapBlock)
	.use(rehypeSanitize, sanitizeSchema as any)
	.use(rehypeStringify);

/** Directive-aware processor — adds the client's ::Component{} syntax */
const directiveProcessor = unified()
	.use(remarkParse)
	.use(remarkGfm)
	.use(remarkDirective)
	.use(remarkClientDirectives)
	.use(remarkMath)
	.use(remarkRehype, { allowDangerousHtml: true })
	.use(rehypeRaw)
	.use(rehypeKatex, { throwOnError: false, strict: false })
	.use(rehypeDecorateComponents)
	.use(rehypeUnwrapBlock)
	.use(rehypeSanitize, sanitizeSchema as any)
	.use(rehypePostSanitizeFixes)
	.use(rehypeStringify);

// ─── Public API ──────────────────────────────────────────────────────────────

export async function parseMarkdown(markdown: string, directives = false): Promise<string> {
	const processor = directives ? directiveProcessor : standardProcessor;
	const result = await processor.process(markdown);
	return String(result);
}

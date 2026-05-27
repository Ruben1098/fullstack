import { Hono } from 'hono';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';
import { parseMarkdown } from '@/services/markdown.ts';
import { compileDynamicCssFromMarkdown } from '@/services/dynamicCss.ts';
import { markdownCache } from '@/services/cache.ts';
import { ok } from '@/utils/response.ts';
import { Errors, errorResponse } from '@/utils/errors.ts';
import { config } from '@/config/index.ts';
import type { ParseOutput } from '@/types/index.ts';

const parseSchema = z.object({
	markdown: z
		.string({ required_error: 'markdown is required' })
		.min(1, 'markdown cannot be empty')
		.max(config.bodyLimit, `markdown exceeds maximum size of ${config.bodyLimit} bytes`),
	directives: z.boolean().optional().default(false),
});

const parseRoute = new Hono();

parseRoute.post(
	'/',
	zValidator('json', parseSchema, (result, c) => {
		if (!result.success) {
			return errorResponse(c, Errors.validation(result.error.errors.map(e => e.message).join(', ')));
		}
	}),
	async c => {
		const { markdown, directives } = c.req.valid('json');

		// Cache key: hash of (markdown + directives flag)
		const hashBuf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${directives}:${markdown}`));
		const cacheKey = Array.from(new Uint8Array(hashBuf))
			.map(b => b.toString(16).padStart(2, '0'))
			.join('');

		const cached = markdownCache.get(cacheKey);
		const cachedDynamicCss = markdownCache.get(`dynamic-css:${cacheKey}`);
		if (cached) {
			c.header('X-Cache', 'HIT');
			const payload: ParseOutput = {
				html: cached,
				dynamicCss: cachedDynamicCss || undefined,
				processingMs: 0,
			};
			return ok(c, payload);
		}

		const t0 = performance.now();
		const [html, dynamicCss] = await Promise.all([parseMarkdown(markdown, directives), compileDynamicCssFromMarkdown(markdown)]);
		const finalHtml = dynamicCss ? `<style data-instanswer-dynamic-css>${dynamicCss}</style>${html}` : html;
		const processingMs = Math.round(performance.now() - t0);

		markdownCache.set(cacheKey, finalHtml);
		markdownCache.set(`dynamic-css:${cacheKey}`, dynamicCss);
		c.header('X-Cache', 'MISS');

		return ok<ParseOutput>(c, { html: finalHtml, dynamicCss, processingMs });
	},
);

export default parseRoute;

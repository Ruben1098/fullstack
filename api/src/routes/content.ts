import { Hono } from 'hono';
import { contentService, blocksToMarkdown } from '@/services/content.ts';
import { parseMarkdown } from '@/services/markdown.ts';
import { compileDynamicCssFromMarkdown } from '@/services/dynamicCss.ts';
import { markdownCache } from '@/services/cache.ts';
import { ok } from '@/utils/response.ts';
import { Errors, errorResponse } from '@/utils/errors.ts';

const contentRoute = new Hono();

/** GET /content — list all content items (slug + metadata, no body) */
contentRoute.get('/', c => {
	const items = contentService.list().map(({ slug, title, excerpt, category, course, argument, featuredImage }) => ({
		slug,
		title,
		excerpt,
		category,
		course,
		argument,
		featuredImage,
	}));
	return ok(c, items);
});

/** GET /content/:slug — full content item with server-rendered HTML */
contentRoute.get('/:slug', async c => {
	const { slug } = c.req.param();

	const item = contentService.getBySlug(slug);
	if (!item) return errorResponse(c, Errors.notFound(`Content "${slug}"`));

	const cacheKey = `content:${slug}`;
	let cached = markdownCache.get(cacheKey);
	let headingHtmlCached = markdownCache.get(`heading:${slug}`);
	let dynamicCssCached = markdownCache.get(`dynamic-css:${slug}`);

	let html: string;
	let headingHtml: string;
	let dynamicCss: string;

	if (cached && headingHtmlCached && dynamicCssCached !== undefined) {
		c.header('X-Cache', 'HIT');
		html = cached;
		headingHtml = headingHtmlCached;
		dynamicCss = dynamicCssCached;
	} else {
		// Convert JSON blocks → directive markdown → HTML
		// wrapStrings=true: top-level bare strings become ::P{} blocks
		const markdown = blocksToMarkdown(item.content as any, true);
		const headingMarkdown = item.heading;
		[html, headingHtml, dynamicCss] = await Promise.all([
			parseMarkdown(markdown, true),
			parseMarkdown(headingMarkdown, true),
			compileDynamicCssFromMarkdown(`${headingMarkdown}\n${markdown}`),
		]);
		markdownCache.set(cacheKey, html);
		markdownCache.set(`heading:${slug}`, headingHtml);
		markdownCache.set(`dynamic-css:${slug}`, dynamicCss);
		c.header('X-Cache', 'MISS');
	}

	return ok(c, {
		slug: item.slug,
		title: item.title,
		excerpt: item.excerpt,
		category: item.category,
		school: item.school,
		class: item.class,
		course: item.course,
		argument: item.argument,
		featuredImage: item.featuredImage,
		has_pdf_resource: item.has_pdf_resource,
		dynamicCss,
		headingHtml,
		html,
		faqs: item.faqs,
	});
});

export default contentRoute;

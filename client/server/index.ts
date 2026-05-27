/**
 * Instanswer SSR Server
 *
 * Hono server that:
 * 1. Handles incoming HTTP requests
 * 2. Fetches content from the internal API (with caching)
 * 3. Renders full HTML pages server-side
 * 4. Returns them to the browser
 *
 * Port:  process.env.PORT (default 3000)
 * API:   process.env.API_URL (default http://localhost:4001)
 */

import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';
import { pageCache } from './cache.ts';
import { fetchContentList, fetchContent } from './api.ts';
import { renderHomePage } from './templates/home.ts';
import { renderCategoryPage } from './templates/category.ts';
import { renderArticlePage } from './templates/article.ts';
import { rebuildStaticSite, staticPathToFile } from './static-render.ts';

const app = new Hono();
const PORT = parseInt(process.env.PORT ?? '3001', 10);
const BASE_URL = process.env.BASE_URL ?? '';
const STATIC_REBUILD_INTERVAL_MS = parseInt(process.env.STATIC_REBUILD_INTERVAL_HOURS ?? '6', 10) * 60 * 60 * 1000;
const STATIC_REBUILD_ENABLED = (process.env.STATIC_REBUILD_ENABLED ?? 'true') !== 'false';

async function tryServeStaticHtml(c: any): Promise<Response | null> {
	if (c.req.method !== 'GET') return null;
	const filePath = staticPathToFile(c.req.path || '/');
	const file = Bun.file(filePath);
	if (!(await file.exists())) return null;
	const html = await file.text();
	c.header('X-Static', 'HIT');
	return c.html(html);
}

// ─── Static files ─────────────────────────────────────────────────────────────
// Serves compiled CSS, fonts, images from the client's public/ and dist/ dirs.
app.use('/styles/*', serveStatic({ root: './', rewriteRequestPath: p => p.replace('/styles/', '/.framework/dev/') }));
app.use('/public/*', serveStatic({ root: './' }));
app.use('/fonts/*', serveStatic({ root: './public' }));
app.use('/node_modules/katex/dist/*', serveStatic({ root: './' }));

// Root-level assets like /foo.webp used throughout contents.json and article HTML.
app.get('/:asset{.+\\.(?:png|jpg|jpeg|webp|gif|svg|ico|woff|woff2|ttf)}', serveStatic({ root: './public' }));

// Generic placeholder used by many legacy content entries.
app.get('/image.webp', c => c.redirect('/derivate_fondamentali_island1.webp', 302));

// ─── Health ───────────────────────────────────────────────────────────────────
app.get('/health', c => c.json({ status: 'ok', ts: new Date().toISOString() }));

// ─── Cache invalidation (internal use) ───────────────────────────────────────
app.post('/_cache/purge', async c => {
	const secret = c.req.header('x-purge-secret');
	if (secret !== process.env.PURGE_SECRET) return c.json({ error: 'forbidden' }, 403);
	const body = await c.req.json().catch(() => ({}));
	if (body.key) {
		pageCache.invalidate(body.key as string);
		return c.json({ purged: body.key });
	}
	pageCache.purge();
	return c.json({ purged: 'all-expired' });
});

// ─── Home page ────────────────────────────────────────────────────────────────
app.get('/', async c => {
	const staticHit = await tryServeStaticHtml(c);
	if (staticHit) return staticHit;

	const cacheKey = 'page:home';
	const cached = pageCache.get(cacheKey);
	if (cached) {
		c.header('X-Cache', 'HIT');
		return c.html(cached);
	}

	try {
		const items = await fetchContentList();
		const html = renderHomePage(items);
		pageCache.set(cacheKey, html);
		c.header('X-Cache', 'MISS');
		return c.html(html);
	} catch (err) {
		return renderError(c, err, 500);
	}
});

// ─── Category page ────────────────────────────────────────────────────────────
app.get('/:category{[a-z0-9-]+}', async c => {
	const { category } = c.req.param();

	// Skip if it looks like a file request (has extension)
	if (category.includes('.')) return c.notFound();

	const staticHit = await tryServeStaticHtml(c);
	if (staticHit) return staticHit;

	const cacheKey = `page:category:${category}`;
	const cached = pageCache.get(cacheKey);
	if (cached) {
		c.header('X-Cache', 'HIT');
		return c.html(cached);
	}

	try {
		const items = await fetchContentList();
		const filtered = items.filter(
			i => i.category.toLowerCase().replace(/\s+/g, '-') === category || i.course.toLowerCase().replace(/\s+/g, '-') === category,
		);
		const html = renderCategoryPage(category, filtered);
		pageCache.set(cacheKey, html);
		c.header('X-Cache', 'MISS');
		return c.html(html);
	} catch (err) {
		return renderError(c, err, 500);
	}
});

// ─── Article page ─────────────────────────────────────────────────────────────
app.get('/:category{[a-z0-9-]+}/:slug{[a-z0-9-]+}', async c => {
	const { slug } = c.req.param();

	const staticHit = await tryServeStaticHtml(c);
	if (staticHit) return staticHit;

	const cacheKey = `page:article:${slug}`;
	const cached = pageCache.get(cacheKey);
	if (cached) {
		c.header('X-Cache', 'HIT');
		return c.html(cached);
	}

	try {
		const item = await fetchContent(slug);
		if (!item) {
			return c.html(render404(), 404);
		}

		const html = renderArticlePage(item, BASE_URL);
		pageCache.set(cacheKey, html);
		c.header('X-Cache', 'MISS');
		return c.html(html);
	} catch (err) {
		return renderError(c, err, 500);
	}
});

// ─── 404 ──────────────────────────────────────────────────────────────────────
app.notFound(c => c.html(render404(), 404));

// ─── Helpers ──────────────────────────────────────────────────────────────────
function render404(): string {
	return `<!DOCTYPE html><html lang="it"><head><meta charset="UTF-8"/><title>404 — Instanswer</title></head><body style="font-family:sans-serif;text-align:center;padding:4rem"><h1>404</h1><p>Pagina non trovata.</p><a href="/">← Torna alla home</a></body></html>`;
}

function renderError(c: any, err: unknown, status: 500): Response {
	console.error('[ssr] Error:', err);
	return c.html(
		`<!DOCTYPE html><html lang="it"><head><meta charset="UTF-8"/><title>Errore — Instanswer</title></head><body style="font-family:sans-serif;text-align:center;padding:4rem"><h1>Errore del server</h1><p>Qualcosa è andato storto. Riprova tra poco.</p><a href="/">← Torna alla home</a></body></html>`,
		status,
	);
}

// ─── Start ────────────────────────────────────────────────────────────────────
const server = Bun.serve({ port: PORT, fetch: app.fetch });

// Periodic cache purge every 5 minutes
setInterval(() => pageCache.purge(), 5 * 60 * 1000);

if (STATIC_REBUILD_ENABLED) {
	// Run once shortly after startup, then every 6 hours by default.
	setTimeout(() => {
		rebuildStaticSite('startup').catch(err => console.error('[static] startup rebuild failed:', err));
	}, 2000);

	setInterval(() => {
		rebuildStaticSite('cron').catch(err => console.error('[static] cron rebuild failed:', err));
	}, STATIC_REBUILD_INTERVAL_MS);
}

console.log(
	JSON.stringify({
		ts: new Date().toISOString(),
		level: 'info',
		msg: 'SSR server started',
		port: server.port,
		env: process.env.NODE_ENV ?? 'development',
	}),
);

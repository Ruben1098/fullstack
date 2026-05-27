import { Hono } from 'hono';
import { config } from '@/config/index.ts';
import { requestId } from '@/middlewares/requestId.ts';
import { logger } from '@/middlewares/logger.ts';
import { security } from '@/middlewares/security.ts';
import { cors } from '@/middlewares/cors.ts';
import { countRequests } from '@/middlewares/requestCounter.ts';
import { AppError, errorResponse } from '@/utils/errors.ts';
import { contentService } from '@/services/content.ts';
import { markdownCache } from '@/services/cache.ts';
import router from '@/routes/index.ts';

type AppVariables = {
	requestId: string;
	apiKeyId: string;
	maskedKey: string;
};

// ─── App ──────────────────────────────────────────────────────────────────────

const app = new Hono<{ Variables: AppVariables }>();

// Global middleware chain (order matters)
app.use('*', requestId);
app.use('*', cors);
app.use('*', security);
app.use('*', countRequests);
app.use('*', logger);

// Body size guard
app.use('*', async (c, next) => {
	const contentLength = Number(c.req.header('content-length') ?? 0);
	if (contentLength > config.bodyLimit) {
		return c.json({ error: 'Payload too large', code: 'PAYLOAD_TOO_LARGE' }, 413);
	}
	await next();
});

// Routes
app.route('/', router);

// 404
app.notFound(c => {
	const requestId = c.get('requestId') as string | undefined;
	return c.json({ error: 'Not found', code: 'NOT_FOUND', requestId }, 404);
});

// Global error handler
app.onError((err, c) => {
	if (err instanceof AppError) return errorResponse(c, err);

	// Unexpected error — log and return generic 500
	const requestId = c.get('requestId') as string | undefined;
	console.error(JSON.stringify({ ts: new Date().toISOString(), level: 'error', requestId, err: String(err) }));
	return c.json({ error: 'Internal server error', code: 'INTERNAL_ERROR', requestId }, 500);
});

// ─── Bootstrap ────────────────────────────────────────────────────────────────

async function bootstrap() {
	// Load content from compiled JSON
	await contentService.load();

	// Periodic cache purge (every 5 minutes)
	setInterval(() => markdownCache.purge(), 5 * 60 * 1000);

	const server = Bun.serve({
		port: config.port,
		fetch: app.fetch,
	});

	console.info(
		JSON.stringify({
			ts: new Date().toISOString(),
			level: 'info',
			msg: 'Server started',
			port: server.port,
			env: config.nodeEnv,
		}),
	);
}

bootstrap().catch(err => {
	console.error('Fatal error during bootstrap:', err);
	process.exit(1);
});

export default app;

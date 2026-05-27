import type { MiddlewareHandler } from 'hono';
import { config } from '@/config/index.ts';

const ALLOWED_ORIGINS = new Set(config.cors.origins);

/** CORS middleware — not open by default, restricted to configured origins */
export const cors: MiddlewareHandler = async (c, next) => {
	const origin = c.req.header('Origin') ?? '';

	if (c.req.method === 'OPTIONS') {
		// Preflight
		const allowed = ALLOWED_ORIGINS.has(origin);
		if (allowed) {
			c.header('Access-Control-Allow-Origin', origin);
			c.header('Access-Control-Allow-Credentials', 'true');
			c.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
			c.header('Access-Control-Allow-Headers', 'Content-Type, x-api-key, X-Request-Id');
			c.header('Access-Control-Max-Age', '86400');
			c.header('Vary', 'Origin');
		}
		return c.body(null, 204);
	}

	await next();

	if (ALLOWED_ORIGINS.has(origin)) {
		c.header('Access-Control-Allow-Origin', origin);
		c.header('Access-Control-Allow-Credentials', 'true');
		c.header('Vary', 'Origin');
	}
};

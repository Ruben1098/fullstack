import type { MiddlewareHandler } from 'hono';

/** Attach a UUID v4 request ID to every request context and response headers */
export const requestId: MiddlewareHandler = async (c, next) => {
	const id = crypto.randomUUID();
	c.set('requestId', id);
	c.header('X-Request-Id', id);
	await next();
};

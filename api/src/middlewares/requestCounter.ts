import type { MiddlewareHandler } from 'hono';

/** Simple request counter — populated by the global error handler */
export const requestCounter = {
	total: 0,
	success: 0,
	errors: 0,
};

export const countRequests: MiddlewareHandler = async (c, next) => {
	requestCounter.total++;
	await next();
	if (c.res.status >= 500) {
		requestCounter.errors++;
	} else {
		requestCounter.success++;
	}
};

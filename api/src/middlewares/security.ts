import type { MiddlewareHandler } from 'hono';
import { config } from '@/config/index.ts';

/** Security headers equivalent to Helmet's defaults */
export const security: MiddlewareHandler = async (c, next) => {
	await next();

	c.header('X-Content-Type-Options', 'nosniff');
	c.header('X-Frame-Options', 'DENY');
	c.header('X-XSS-Protection', '0'); // Modern browsers use CSP instead
	c.header('Referrer-Policy', 'strict-origin-when-cross-origin');
	c.header('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
	c.header(
		'Content-Security-Policy',
		[
			"default-src 'none'",
			"script-src 'none'",
			"style-src 'unsafe-inline'", // needed for inline KaTeX styles
			"img-src 'self' data:",
			"font-src 'self'",
			"frame-ancestors 'none'",
		].join('; '),
	);

	if (config.nodeEnv === 'production') {
		c.header('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
	}
};

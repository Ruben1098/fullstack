import type { MiddlewareHandler } from 'hono';
import { config } from '@/config/index.ts';

/** Structured JSON logger — emits one log line per request */
export const logger: MiddlewareHandler = async (c, next) => {
	const start = performance.now();
	const requestId = c.get('requestId') as string | undefined;

	await next();

	const elapsed = Math.round(performance.now() - start);
	const apiKeyId = c.get('apiKeyId') as string | undefined;
	const maskedKey = c.get('maskedKey') as string | undefined;

	const level =
		c.res.status >= 500 ? 'error'
		: c.res.status >= 400 ? 'warn'
		: 'info';

	if (shouldLog(level)) {
		const record = {
			ts: new Date().toISOString(),
			level,
			requestId,
			method: c.req.method,
			path: new URL(c.req.url).pathname,
			status: c.res.status,
			ms: elapsed,
			keyId: apiKeyId,
			key: maskedKey,
		};
		// JSON structured output — easy to ingest into Loki, Datadog, etc.
		process.stdout.write(JSON.stringify(record) + '\n');
	}
};

const LEVELS = { debug: 0, info: 1, warn: 2, error: 3 } as const;

function shouldLog(level: keyof typeof LEVELS): boolean {
	return LEVELS[level] >= LEVELS[config.logLevel];
}

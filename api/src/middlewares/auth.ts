import type { MiddlewareHandler } from 'hono';
import { apiKeyService } from '@/services/apiKeys.ts';
import { rateLimitStore } from '@/services/rateLimit.ts';
import { config } from '@/config/index.ts';
import { Errors, errorResponse } from '@/utils/errors.ts';
import { maskKey } from '@/utils/crypto.ts';

/** Validate x-api-key header and populate context with key metadata */
export const auth: MiddlewareHandler = async (c, next) => {
	const rawKey = c.req.header('x-api-key');

	if (!rawKey) return errorResponse(c, Errors.unauthorized('x-api-key header is required'));

	const keyCfg = await apiKeyService.validate(rawKey);
	if (!keyCfg) return errorResponse(c, Errors.unauthorized());

	// Attach to context for downstream use (logging, rate limiting)
	c.set('apiKeyId', keyCfg.id);
	c.set('maskedKey', maskKey(rawKey));

	await next();
};

/** Apply per-key sliding window rate limit */
export const rateLimit: MiddlewareHandler = async (c, next) => {
	const keyId = c.get('apiKeyId') as string;
	const limit = apiKeyService.getRateLimit(keyId);
	const result = rateLimitStore.check(keyId, limit, config.rateLimit.windowMs);

	c.header('X-RateLimit-Limit', String(result.limit));
	c.header('X-RateLimit-Remaining', String(result.remaining));
	c.header('X-RateLimit-Reset', String(Math.ceil(result.resetAt / 1000))); // Unix seconds
	c.header('Retry-After', String(Math.ceil((result.resetAt - Date.now()) / 1000)));

	if (!result.allowed) {
		return errorResponse(c, Errors.rateLimited(result.resetAt));
	}

	await next();
};

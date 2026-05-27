import type { ApiKeyConfig } from '@/types/index.ts';

function parseEnvInt(key: string, fallback: number): number {
	const v = process.env[key];
	if (!v) return fallback;
	const n = parseInt(v, 10);
	return isNaN(n) ? fallback : n;
}

function parseApiKeys(): ApiKeyConfig[] {
	const raw = process.env.API_KEYS;
	if (!raw) {
		console.warn('[config] API_KEYS not set — all requests will be rejected. Set API_KEYS in .env');
		return [];
	}
	try {
		return JSON.parse(raw) as ApiKeyConfig[];
	} catch {
		throw new Error('[config] API_KEYS is not valid JSON');
	}
}

export const config = {
	port: parseEnvInt('PORT', 4001),
	nodeEnv: (process.env.NODE_ENV ?? 'development') as 'development' | 'production' | 'test',

	apiKeys: parseApiKeys(),

	rateLimit: {
		windowMs: parseEnvInt('RATE_LIMIT_WINDOW_MS', 60_000),
		maxRequests: parseEnvInt('RATE_LIMIT_MAX', 100),
	},

	cors: {
		origins: (process.env.CORS_ORIGINS ?? 'http://localhost:3000')
			.split(',')
			.map(o => o.trim())
			.filter(Boolean),
		credentials: true,
	},

	cache: {
		ttlMs: parseEnvInt('CACHE_TTL_MS', 30 * 60 * 1000),
		maxSize: parseEnvInt('CACHE_MAX_SIZE', 1000),
	},

	bodyLimit: parseEnvInt('BODY_LIMIT', 1024 * 1024), // 1 MB

	logLevel: (process.env.LOG_LEVEL ?? 'info') as 'debug' | 'info' | 'warn' | 'error',

	contentsPath: process.env.CONTENTS_PATH ?? '../client/constants/contents.json',
} as const;

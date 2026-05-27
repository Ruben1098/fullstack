import { Hono } from 'hono';
import { ok } from '@/utils/response.ts';
import { cacheStats, markdownCache } from '@/services/cache.ts';
import { rateLimitStats } from '@/services/rateLimit.ts';
import { requestCounter } from '@/middlewares/requestCounter.ts';
import type { MetricsSnapshot } from '@/types/index.ts';

const metricsRoute = new Hono();

metricsRoute.get('/', c => {
	const mem = process.memoryUsage();
	const snapshot: MetricsSnapshot = {
		uptime: Math.round(process.uptime()),
		requests: {
			total: requestCounter.total,
			success: requestCounter.success,
			errors: requestCounter.errors,
		},
		cache: {
			hits: cacheStats.hits,
			misses: cacheStats.misses,
			size: markdownCache.size(),
		},
		rateLimit: {
			rejected: rateLimitStats.rejected,
		},
		memory: {
			heapUsedMB: Math.round(mem.heapUsed / 1024 / 1024),
			rssMB: Math.round(mem.rss / 1024 / 1024),
		},
	};

	return ok(c, snapshot);
});

export default metricsRoute;

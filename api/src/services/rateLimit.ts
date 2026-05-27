import type { RateLimitResult, RateLimitStore } from '@/types/index.ts';
import { config } from '@/config/index.ts';

/** Sliding window rate limit entry */
interface SlidingEntry {
	timestamps: number[];
}

/** Counters for observability */
export const rateLimitStats = { rejected: 0 };

/** In-memory sliding window implementation */
class MemoryRateLimitStore implements RateLimitStore {
	private readonly windows = new Map<string, SlidingEntry>();

	check(key: string, limit: number, windowMs: number): RateLimitResult {
		const now = Date.now();
		const windowStart = now - windowMs;

		let entry = this.windows.get(key);
		if (!entry) {
			entry = { timestamps: [] };
			this.windows.set(key, entry);
		}

		// Remove timestamps outside the current window
		entry.timestamps = entry.timestamps.filter(t => t > windowStart);

		const remaining = Math.max(0, limit - entry.timestamps.length);
		const resetAt = entry.timestamps[0] ? entry.timestamps[0] + windowMs : now + windowMs;

		if (entry.timestamps.length >= limit) {
			rateLimitStats.rejected++;
			return { allowed: false, limit, remaining: 0, resetAt };
		}

		entry.timestamps.push(now);
		return { allowed: true, limit, remaining: remaining - 1, resetAt };
	}

	reset(key: string): void {
		this.windows.delete(key);
	}
}

// ─── Exported singleton ───────────────────────────────────────────────────────

export const rateLimitStore: RateLimitStore = new MemoryRateLimitStore();

// ─── Redis swap-in example ───────────────────────────────────────────────────
// class RedisRateLimitStore implements RateLimitStore {
//   constructor(private readonly redis: RedisClient) {}
//
//   async check(key: string, limit: number, windowMs: number): Promise<RateLimitResult> {
//     const now = Date.now();
//     const pipeline = this.redis.pipeline();
//     pipeline.zremrangebyscore(key, 0, now - windowMs);
//     pipeline.zadd(key, now, `${now}`);
//     pipeline.zcard(key);
//     pipeline.expire(key, Math.ceil(windowMs / 1000));
//     const [,, count] = await pipeline.exec();
//     const remaining = Math.max(0, limit - (count as number));
//     return { allowed: (count as number) <= limit, limit, remaining, resetAt: now + windowMs };
//   }
//
//   reset(key: string): void { this.redis.del(key); }
// }

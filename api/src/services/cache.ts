import type { CacheEntry } from '@/types/index.ts';
import { config } from '@/config/index.ts';

/** Counters for observability */
export const cacheStats = { hits: 0, misses: 0 };

class MemoryCache<T = unknown> {
	private readonly store = new Map<string, CacheEntry<T>>();
	private readonly ttlMs: number;
	private readonly maxSize: number;

	constructor(ttlMs = config.cache.ttlMs, maxSize = config.cache.maxSize) {
		this.ttlMs = ttlMs;
		this.maxSize = maxSize;
	}

	get(key: string): T | undefined {
		const entry = this.store.get(key);
		if (!entry) {
			cacheStats.misses++;
			return undefined;
		}
		if (Date.now() > entry.expiresAt) {
			this.store.delete(key);
			cacheStats.misses++;
			return undefined;
		}
		cacheStats.hits++;
		return entry.value;
	}

	set(key: string, value: T, ttlMs = this.ttlMs): void {
		// Evict oldest entry when at capacity
		if (this.store.size >= this.maxSize) {
			const oldest = this.store.keys().next().value;
			if (oldest) this.store.delete(oldest);
		}
		this.store.set(key, { value, expiresAt: Date.now() + ttlMs });
	}

	delete(key: string): void {
		this.store.delete(key);
	}

	size(): number {
		return this.store.size;
	}

	/** Purge all expired entries */
	purge(): void {
		const now = Date.now();
		for (const [k, v] of this.store) {
			if (now > v.expiresAt) this.store.delete(k);
		}
	}
}

// Singleton cache — one instance for markdown results
export const markdownCache = new MemoryCache<string>();

// ─── Redis-compatible interface (for future swap) ───────────────────────────
// To swap in Redis, implement this interface and replace markdownCache:
//
// interface CacheAdapter<T> {
//   get(key: string): Promise<T | undefined>;
//   set(key: string, value: T, ttlMs?: number): Promise<void>;
//   delete(key: string): Promise<void>;
// }

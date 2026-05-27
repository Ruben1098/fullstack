import type { CacheEntry } from './types.ts';

const parseEnvInt = (key: string, fallback: number) => {
	const v = process.env[key];
	return v ? parseInt(v, 10) || fallback : fallback;
};

export const cacheTtlMs = parseEnvInt('CACHE_TTL_MS', 30 * 60 * 1000);

class PageCache {
	private readonly store = new Map<string, CacheEntry<string>>();
	private readonly ttlMs: number;

	constructor(ttlMs: number) {
		this.ttlMs = ttlMs;
	}

	get(key: string): string | undefined {
		const entry = this.store.get(key);
		if (!entry) return undefined;
		if (Date.now() > entry.expiresAt) {
			this.store.delete(key);
			return undefined;
		}
		return entry.value;
	}

	set(key: string, value: string): void {
		this.store.set(key, { value, expiresAt: Date.now() + this.ttlMs });
	}

	invalidate(key: string): void {
		this.store.delete(key);
	}

	purge(): void {
		const now = Date.now();
		for (const [k, v] of this.store) {
			if (now > v.expiresAt) this.store.delete(k);
		}
	}

	size(): number {
		return this.store.size;
	}
}

export const pageCache = new PageCache(cacheTtlMs);

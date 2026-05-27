import { config } from '@/config/index.ts';
import type { ApiKeyConfig } from '@/types/index.ts';
import { sha256Hex, constantTimeEqual } from '@/utils/crypto.ts';

class ApiKeyService {
	private readonly keys: Map<string, ApiKeyConfig> = new Map();

	constructor(keys: ApiKeyConfig[]) {
		for (const k of keys) {
			this.keys.set(k.hash, k);
		}
	}

	/**
	 * Validate a raw API key against the stored hashes.
	 * Returns the key config if valid, or null.
	 */
	async validate(rawKey: string): Promise<ApiKeyConfig | null> {
		const hash = await sha256Hex(rawKey);

		for (const [storedHash, cfg] of this.keys) {
			if (constantTimeEqual(hash, storedHash)) {
				return cfg;
			}
		}
		return null;
	}

	/** Retrieve rate limit for a specific key (by id), falling back to global */
	getRateLimit(id: string): number {
		for (const cfg of this.keys.values()) {
			if (cfg.id === id) return cfg.rateLimit ?? config.rateLimit.maxRequests;
		}
		return config.rateLimit.maxRequests;
	}
}

export const apiKeyService = new ApiKeyService(config.apiKeys);

// ─── Shared Types ───────────────────────────────────────────────────────────

/** Standard API response envelope */
export interface ApiResponse<T = unknown> {
	data: T;
	requestId?: string;
}

/** Standard error envelope */
export interface ApiError {
	error: string;
	code: string;
	requestId?: string;
}

// ─── API Keys ────────────────────────────────────────────────────────────────

export interface ApiKeyConfig {
	/** Stable identifier for this key (used in logs) */
	id: string;
	/** SHA-256 hex of the raw key */
	hash: string;
	/** Requests per window; falls back to config.rateLimit.maxRequests */
	rateLimit?: number;
	/** Arbitrary metadata */
	meta?: Record<string, string>;
}

// ─── Rate Limiting ───────────────────────────────────────────────────────────

export interface RateLimitResult {
	allowed: boolean;
	limit: number;
	remaining: number;
	resetAt: number; // Unix timestamp (ms)
}

/** Storage backend interface — swap Map for Redis by implementing this */
export interface RateLimitStore {
	check(key: string, limit: number, windowMs: number): RateLimitResult;
	reset(key: string): void;
}

// ─── Cache ───────────────────────────────────────────────────────────────────

export interface CacheEntry<T> {
	value: T;
	expiresAt: number; // Unix timestamp (ms)
}

// ─── Content ─────────────────────────────────────────────────────────────────

export type BlockType = 'open' | 'close';

export interface ContentBlock {
	name: string;
	type?: BlockType;
	text?: string;
	props?: Record<string, unknown>;
	children?: ContentBlock[];
}

export interface FAQItem {
	question: string;
	answer: string; // raw HTML
}

export interface ContentItem {
	slug: string;
	title: string;
	excerpt: string;
	category: string;
	school: string;
	class: string;
	course: string;
	argument: string;
	featuredImage: string;
	has_pdf_resource: boolean;
	heading: string;
	content: ContentBlock[];
	faqs: FAQItem[];
}

// ─── Markdown ─────────────────────────────────────────────────────────────────

export interface ParseInput {
	markdown: string;
	/** Enable the custom directive syntax (::Component{...}) used by the client */
	directives?: boolean;
}

export interface ParseOutput {
	html: string;
	dynamicCss?: string;
	/** Processing time in milliseconds */
	processingMs: number;
}

// ─── Metrics ─────────────────────────────────────────────────────────────────

export interface MetricsSnapshot {
	uptime: number;
	requests: {
		total: number;
		success: number;
		errors: number;
	};
	cache: {
		hits: number;
		misses: number;
		size: number;
	};
	rateLimit: {
		rejected: number;
	};
	memory: {
		heapUsedMB: number;
		rssMB: number;
	};
}

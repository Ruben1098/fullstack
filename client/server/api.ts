/**
 * Internal API client — server → api
 * Calls the internal Bun API with the configured API key.
 * Response data is cached by the page cache layer above this, so no extra
 * caching is done here.
 */

import type { ContentDetail, ContentListItem, ApiResponse } from './types.ts';

const API_URL = (process.env.API_URL ?? 'http://localhost:4001').replace(/\/$/, '');
const API_KEY = process.env.API_KEY ?? '';

if (!API_KEY) {
	console.warn('[ssr/api] API_KEY not set — all API calls will fail with 401');
}

async function apiFetch<T>(path: string): Promise<T> {
	const url = `${API_URL}${path}`;
	const res = await fetch(url, {
		headers: {
			'x-api-key': API_KEY,
			'Content-Type': 'application/json',
		},
	});

	if (!res.ok) {
		throw new Error(`API ${res.status} on ${path}`);
	}

	const body = (await res.json()) as ApiResponse<T>;
	return body.data;
}

/** List all content items (metadata only) */
export async function fetchContentList(): Promise<ContentListItem[]> {
	return apiFetch<ContentListItem[]>('/content');
}

/** Full content item with server-rendered HTML */
export async function fetchContent(slug: string): Promise<ContentDetail | null> {
	try {
		return await apiFetch<ContentDetail>(`/content/${encodeURIComponent(slug)}`);
	} catch (err: any) {
		if (err.message?.includes('API 404')) return null;
		throw err;
	}
}

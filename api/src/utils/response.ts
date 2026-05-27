import type { Context } from 'hono';
import type { ApiResponse } from '@/types/index.ts';

/** Wrap a value in the standard response envelope */
export function ok<T>(c: Context, data: T, status: 200 | 201 = 200): Response {
	const requestId = c.get('requestId') as string | undefined;
	const body: ApiResponse<T> = {
		data,
		...(requestId ? { requestId } : {}),
	};
	return c.json(body, status);
}

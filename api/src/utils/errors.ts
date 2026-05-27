import type { Context } from 'hono';
import type { ApiError } from '@/types/index.ts';

export class AppError extends Error {
	constructor(
		public readonly statusCode: number,
		public readonly code: string,
		message: string,
	) {
		super(message);
		this.name = 'AppError';
	}
}

export const Errors = {
	unauthorized: (msg = 'Invalid or missing API key') => new AppError(401, 'UNAUTHORIZED', msg),

	forbidden: (msg = 'Access denied') => new AppError(403, 'FORBIDDEN', msg),

	rateLimited: (resetAt: number) => new AppError(429, 'RATE_LIMITED', `Too many requests. Retry after ${new Date(resetAt).toISOString()}`),

	validation: (msg: string) => new AppError(400, 'VALIDATION_ERROR', msg),

	notFound: (resource: string) => new AppError(404, 'NOT_FOUND', `${resource} not found`),

	internal: (msg = 'Internal server error') => new AppError(500, 'INTERNAL_ERROR', msg),
};

/** Send a typed error response */
export function errorResponse(c: Context, err: AppError): Response {
	const requestId = c.get('requestId') as string | undefined;
	const body: ApiError = {
		error: err.message,
		code: err.code,
		...(requestId ? { requestId } : {}),
	};
	return c.json(body, err.statusCode as Parameters<typeof c.json>[1]);
}

/** SHA-256 hex digest using the Web Crypto API (available in Bun) */
export async function sha256Hex(input: string): Promise<string> {
	const encoded = new TextEncoder().encode(input);
	const hashBuffer = await crypto.subtle.digest('SHA-256', encoded);
	return Array.from(new Uint8Array(hashBuffer))
		.map(b => b.toString(16).padStart(2, '0'))
		.join('');
}

/** Compare two strings in constant time to prevent timing attacks */
export function constantTimeEqual(a: string, b: string): boolean {
	if (a.length !== b.length) return false;
	let diff = 0;
	for (let i = 0; i < a.length; i++) {
		diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
	}
	return diff === 0;
}

/** Mask all but the last 4 characters of a key (for logging) */
export function maskKey(key: string): string {
	if (key.length <= 4) return '****';
	return '*'.repeat(key.length - 4) + key.slice(-4);
}

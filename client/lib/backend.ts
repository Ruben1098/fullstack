import config from '@/config.json';

// lib/backend.ts
const getBaseDomain = () => {
	const hostParts = window.location.hostname.split('.');
	if (hostParts.length < 2) return window.location.hostname;
	return hostParts.slice(-2).join('.');
};

export const backend = {
	get: async <T = any>(path: string, callback: (response: Response) => Promise<T> | T = async res => (await res.json()).data): Promise<T> => {
		if (!path?.trim().length || !config.SERVER_URL.trim().length) return;

		// Normalizzazione del path
		if (!path.startsWith('/')) path = '/' + path;
		if (path.endsWith('/')) path = path.slice(0, -1);
		path = path.replace('//', '/');

		const domain = getBaseDomain();
		const url = new URL(path, config.MODE === 'prod' ? `https://server.${domain}` : config.SERVER_URL);

		try {
			const response = await fetch(url, {
				method: 'GET',
				mode: 'cors',
				headers: {
					// if error, cache for 7 days, and revalidate every 3 hours
					'Cache-Control': config.MODE === 'prod' ? 'min-fresh=1800, stale-if-error=604800' : 'no-cache, no-store, must-revalidate',
					'Content-Type': 'application/json',
					'X-Wup-Origin': window.location.origin,
				},

				referrer: window.location.origin,
				referrerPolicy: 'origin-when-cross-origin',
				credentials: 'include',
				cache: config.MODE === 'prod' ? 'default' : 'no-cache', // << FORZA uso della cache del browser
			});

			if (!response.ok) throw new Error(`HTTP ${response.status}; PATH => ${path}`);

			return await callback(response);
		} catch (error) {
			console.log('backend error => ', url, error);
			// throw error;
		}
	},
};

export type Callback = Parameters<typeof backend.get>[1];

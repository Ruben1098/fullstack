import { relative } from 'path';
import { createRoot } from 'react-dom/client';

export const $root = (selector: string, app: any) => {
	while (!document.querySelector(selector)) {}
	const elem = document.querySelector(selector)!;

	if (import.meta.hot && import.meta.hot.data) {
		if (!(selector in import.meta.hot.data)) import.meta.hot.data[selector] = {};
		const root = (import.meta.hot.data[selector].root ??= createRoot(elem));
		root.render(app);
	} else createRoot(elem).render(app);
};

type BuildRoutePatternOptions = {
	parentPath: string; // fs path, abs o rel
	pageDir: string; // fs path, abs o rel
};

export function buildTanstackRoutePattern({ parentPath, pageDir }: BuildRoutePatternOptions): string {
	const toPosix = (p: string) => p.replace(/\\/g, '/');

	const toTanstackSegment = (segment: string): string => {
		if (/^\[\.\.\.(.+)\]$/.test(segment)) {
			return `$${RegExp.$1}*`;
		}
		if (/^\[(.+)\]$/.test(segment)) {
			return `$${RegExp.$1}`;
		}
		return segment;
	};

	// 1. path relativo reale
	const relativeFsPath = relative(parentPath, pageDir);
	console.log(relativeFsPath);
	// 2. normalizza separatori
	const normalized = toPosix(relativeFsPath);

	// 3. split + cleanup
	const segments = normalized
		.split('/')
		.filter(Boolean)
		.filter(s => !s.startsWith('island.')) // elimina island
		.map(s => s.replace(/\.(t|j)sx?$/, '')) // elimina estensione
		.map(toTanstackSegment);

	const route = '/' + segments.join('/');

	return route.replace(/\/+/g, '/');
}

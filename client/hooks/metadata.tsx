// MetadataProvider.tsx
import { useRouterState } from '@tanstack/react-router';
import React, { useEffect, useRef } from 'react';
import useQuery from '@/hooks/useQuery';

type Metadata = {
	title?: string;
	meta?: Record<string, string>[];
	openGraph?: Record<string, string>[];
	link?: Record<string, string>[]; // esempio: { canonical: "https://..." }
	script?: Record<string, string>[]; // JSON-LD
};

const logic = ({ element, tagName }: { element: Record<string, string>; tagName: string }, prevElements: Element[]) => {
	let el: Element;

	const alreadyInPrevElements = prevElements.findIndex(
		el =>
			el.tagName === tagName &&
			Object.entries(element)
				.filter(([key]) => !['content', 'children', 'href', 'src'].includes(key))
				.every(([key, value]) => el.getAttribute(key) === value),
	);

	if (alreadyInPrevElements !== -1) el = prevElements.splice(alreadyInPrevElements, 1)[0];
	else
		el =
			document.head.querySelector(
				`${tagName}${Object.entries(element)
					.filter(([key]) => !['content', 'children', 'href', 'src'].includes(key))
					.reduce((acc, [key, value]) => `${acc}[${key}="${value}"]`, '')}`,
			) ?? document.createElement(tagName);

	Object.entries(element).forEach(([key, value]) => {
		if (key === 'children') {
			el.innerHTML = value;
		} else {
			el.setAttribute(key, value);
		}
	});

	return el as Element;
};

export const MetadataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const insertedNodesRef = useRef<Element[]>([]);
	const path = useRouterState({
		select: state => state.location.pathname,
	});

	const { data: metadata } = useQuery({
		keys: [`metadata-${path}`],
		endpoint: `/metadata${path}`,
	}) as { data: Metadata | null };

	useEffect(() => {
		if (!metadata) return;

		const updatedNodes = [];

		// 6. Inserimento structured data JSON-LD
		if (metadata.script && metadata.script.length > 0) {
			metadata.script.forEach(script => {
				updatedNodes.push(logic({ element: script, tagName: 'script' }, insertedNodesRef.current));
			});
		}

		// 2. Gestione <title>
		if (metadata.title) document.title = metadata.title;

		// 3. Inserimento <meta name="...">
		if (metadata.meta)
			metadata.meta.forEach(metaTag => {
				updatedNodes.push(logic({ element: metaTag, tagName: 'meta' }, insertedNodesRef.current));
			});

		// 4. Inserimento <meta property="..."> (Open Graph)
		if (metadata.openGraph)
			metadata.openGraph.forEach(ogTag => {
				updatedNodes.push(logic({ element: ogTag, tagName: 'meta' }, insertedNodesRef.current));
			});

		// 5. Inserimento <link> (es: canonical)
		if (metadata.link) {
			metadata.link.forEach(link => {
				updatedNodes.push(logic({ element: link, tagName: 'link' }, insertedNodesRef.current));
			});
		}

		// 7. Rimozione nodi precedenti
		insertedNodesRef.current.forEach(el => {
			el.remove();
		});

		// 8. Aggiunta dei nuovi nodi
		insertedNodesRef.current = updatedNodes;
		updatedNodes.forEach(el => {
			document.head.appendChild(el);
		});
	}, [metadata]);

	return children;
};

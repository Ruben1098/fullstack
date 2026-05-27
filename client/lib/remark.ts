// remarkAffiliateProduct.ts
import { visit } from 'unist-util-visit';

/**
 * mdast-directive — tipologie e responsabilità
 *
 * 1) textDirective
 *    Sintassi:
 *      :Component[ a + b = c ]
 *
 *    Semantica:
 *    - Inline
 *    - Contiene CONTENUTO Markdown parsato (node.children)
 *    - Ideale per componenti che ricevono un valore/espressione
 *
 *    Uso consigliato:
 *    - Inline math
 *    - Highlight semantico
 *    - Wrapper logici inline
 *
 *    Regola:
 *    - Leggi node.children
 *    - NON ri-parsare Markdown
 *    - Trasforma i children in dato strutturato
 *
 *
 * 2) leafDirective
 *    Sintassi:
 *      ::Component{ propA="x" propB=123 }
 *
 *    Semantica:
 *    - Inline
 *    - Self-closing
 *    - Nessun contenuto (node.children vuoto)
 *
 *    Uso consigliato:
 *    - Icone
 *    - Placeholder
 *    - Componenti puramente configurativi
 *
 *    Regola:
 *    - Usa SOLO node.attributes
 *    - Non aspettarti children
 *
 *
 * 3) containerDirective
 *    Sintassi:
 *      :::Component
 *      contenuto markdown
 *      :::
 *
 *    Semantica:
 *    - Block-level
 *    - Contiene children Markdown completi
 *    - Può includere paragrafi, liste, altri block
 *
 *    Uso consigliato:
 *    - Layout
 *    - Callout
 *    - Block math
 *    - Sezioni semantiche
 *
 *    Regola:
 *    - I children sono già mdast
 *    - Il componente React deve SOLO renderizzare
 *
 *
 * TL;DR mentale:
 *   []  → textDirective      → valore
 *   {}  → leafDirective      → configurazione
 *   ::: → containerDirective → struttura
 */

export default function remarkAffiliateProduct() {
	return (tree: any) => {
		const mapDirectiveToElement = (child: any) => {
			if (typeof child?.type === 'string' && child.type.includes('Directive')) {
				child.data = child.data || {};
				child.data.hName = child.name;
				child.data.hProperties = child.attributes;
			}
		};

		visit(tree, 'text', (node, index, parent) => {
			if (!parent || typeof node.value !== 'string') return;
			if (node.value.includes('[[br]]')) {
				const parts = node.value.split('[[br]]');

				const newNodes = parts.flatMap((part, i) => {
					const nodes: any[] = [];
					if (part) nodes.push({ type: 'text', value: part });
					if (i < parts.length - 1) nodes.push({ type: 'br', data: { hName: 'br' } });
					return nodes;
				});

				parent.children.splice(index, 1, ...newNodes);
			}
		});

		// Visitiamo tutti i nodi che hanno figli (root, containerDirective, ecc.)
		visit(tree, node => {
			if (!node.children || !Array.isArray(node.children)) return;

			const newChildren: any[] = [];
			const stack: any[] = [];

			node.children.forEach((child) => {
				const { attributes, name, type } = child;
				const directiveType = attributes?.type;

				// Supporto ::XSeparator[] come leafDirective
				if (type === 'leafDirective' && name === 'XSeparator') {
					child.data = child.data || {};
					child.data.hName = 'XSeparator';
					child.data.hProperties = attributes || {};
					newChildren.push(child);
					return;
				}

				// CASO 1: Apertura manuale ::Component{type="open"}
				if (directiveType === 'open') {
					const container = {
						type: 'containerDirective',
						name: name,
						attributes: { ...attributes },
						children: [],
						data: {
							hName: name,
							hProperties: { ...attributes },
						},
					};
					delete container.attributes.type; // Pulizia attributo tecnico
					stack.push(container);
					return;
				}

				// CASO 2: Chiusura manuale ::Component{type="close"}
				if (directiveType === 'close') {
					const lastContainer = stack.pop();
					if (stack.length > 0) {
						stack[stack.length - 1].children.push(lastContainer);
					} else {
						newChildren.push(lastContainer);
					}
					return;
				}

				// CASO 3: Nodo normale (testo, altre direttive, ecc.)
				// Non rimappare containerDirective già ricostruiti in un pass precedente.
				if (child.type !== 'containerDirective') {
					mapDirectiveToElement(child);
				}

				if (stack.length > 0) {
					stack[stack.length - 1].children.push(child);
				} else {
					newChildren.push(child);
				}
			});

			if (stack.length > 0) {
				newChildren.push(...stack);
			}

			node.children = newChildren;
		});
	};
}

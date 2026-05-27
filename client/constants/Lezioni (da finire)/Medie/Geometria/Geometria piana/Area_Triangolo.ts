import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'area-triangolo-formule-calcolo',
	school: 'medie',
	class: '2',
	title: 'Area del Triangolo: Formule, Erone ed Esercizi Svolti',
	excerpt: "Come si calcola l'area del triangolo? Guida completa: formula base, formula di Erone (senza altezza) e casi particolari. Include esercizi svolti e trucchi per l'esame.",
	category: 'Geometria',
	course: 'Matematica',
	argument: 'Poligoni',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Area del Triangolo: Formule e Calcolo
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: "Come si calcola l'area del triangolo?" },
		"La formula generale per calcolare l'area di un qualsiasi triangolo è il **semiprodotto tra base e altezza**.",
		{
			name: 'MathML',
			props: { className: 'text-xl mx-auto' },
			text: 'A = \\frac{b \\cdot h}{2}',
		},
		'',
		'[immagine: src/Data/Images/Geometria_piana/TriangoloScaleno.webp]',
		'',

		// TABELLA FORMULE
		{ name: 'H2', text: 'Tabella: Quale formula usare?' },
		`| Dati disponibili | Formula da usare |
| :--- | :--- |
| **Base e Altezza** | $A = \\frac{b \\cdot h}{2}$ |
| **Triangolo Rettangolo** | $A = \\frac{c_1 \\cdot c_2}{2}$ |
| **I tre lati (Erone)** | $A = \\sqrt{p(p-a)(p-b)(p-c)}$ |
| **Triangolo Equilatero** | $A = \\frac{\\sqrt{3}}{4} l^2$ |`,
		'',

		// 1. PERCHÉ DIVISO 2?
		{ name: 'H2', text: '1. La Formula Classica (Perché diviso 2?)' },
		'La formula più famosa è ',
		{ name: 'MathML', text: 'A = \\frac{b \\cdot h}{2}' },
		'. Ma perché bisogna dividere per due?',
		'Ogni triangolo è esattamente la **metà di un parallelogramma** (o di un rettangolo) che ha la stessa base e la stessa altezza.',

		// 2. CASI PARTICOLARI
		{ name: 'H2', text: '2. Casi Particolari' },

		{ name: 'H3', text: 'Triangolo Rettangolo' },
		"Non devi cercare l'altezza: i due lati perpendicolari (i **cateti**) sono già base e altezza l'uno dell'altro.",
		{
			name: 'MathML',
			props: { className: 'text-xl mx-auto' },
			text: 'A = \\frac{c_1 \\cdot c_2}{2}',
		},
		'',
		'[immagine: src/Data/Images/Geometria_piana/TriangoloRettangolo.webp]',
		'',

		{ name: 'H3', text: 'Triangolo Equilatero' },
		"Se hai un triangolo con tutti i lati uguali, puoi trovare l'area conoscendo solo il lato (l).",
		{
			name: 'MathML',
			props: { className: 'text-xl mx-auto' },
			text: 'A = \\frac{\\sqrt{3}}{4} \\cdot l^2 \\approx 0,433 \\cdot l^2',
		},

		// 3. ERONE
		{ name: 'H2', text: '3. Formula di Erone (Senza Altezza)' },
		'Se hai i tre lati (a, b, c) ma **nessuna altezza**, usi la formula di Erone.',
		'**Passo A:** Calcola il Semiperimetro (p).',
		{ name: 'MathML', text: 'p = (a + b + c) : 2' },
		'**Passo B:** Applica la formula.',
		{
			name: 'MathML',
			props: { className: 'text-xl mx-auto' },
			text: 'A = \\sqrt{p \\cdot (p-a) \\cdot (p-b) \\cdot (p-c)}',
		},

		// ESERCIZI SVOLTI
		{ name: 'H2', text: 'Esercizi Svolti Passo-Passo' },

		{ name: 'H3', text: 'Esercizio 1: Base e Altezza' },
		'**Testo:** Base = 12 cm. Altezza = metà della base + 3 cm.',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					'1. **Traduciamo i dati:**',
					{ name: 'MathML', text: 'h = (12 : 2) + 3 = 9 \\text{ cm}' },
					'2. **Applichiamo la formula:**',
					{
						name: 'MathML',
						text: 'A = \\frac{12 \\cdot 9}{2} = 54 \\text{ cm}^2',
					},
				],
			},
		},

		{ name: 'H3', text: 'Esercizio 2: Formula di Erone' },
		'**Testo:** Lati 20, 25, 15 cm.',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					'1. **Semiperimetro (p):**',
					{ name: 'MathML', text: 'p = (20+25+15) : 2 = 30' },
					'2. **Sostituiamo:**',
					{
						name: 'MathML',
						text: 'A = \\sqrt{30 \\cdot 10 \\cdot 5 \\cdot 15} = \\sqrt{22500}',
					},
				],
			},
		},
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [{ name: 'MathML', text: 'A = 150 \\text{ cm}^2' }],
			},
		},

		// ERRORI COMUNI
		{ name: 'H2', text: '⚠️ Errori Comuni' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: "L'altezza sbagliata" },
					"L'altezza deve sempre cadere perpendicolarmente sulla base che hai scelto. Non puoi moltiplicare la base AC per l'altezza che cade su BC.",
				],
			},
		},
		'[immagine: src/Data/Images/Geometria_piana/TriangoloErrore.webp]',

		{ name: 'Shell', props: { type: 'close' } },
	],
};

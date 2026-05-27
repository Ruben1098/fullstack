import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'derivata-funzione-composta-chain-rule',
	title: 'Derivata della Funzione Composta (Regola della Catena): Spiegazione Facile',
	excerpt: "Come funziona la derivata di una funzione composta? Impara la 'Chain Rule' con la metafora della Matrioska. Esempi svolti e guida agli errori comuni.",
	category: 'Analisi1',
	school: 'liceo',
	class: '5',
	course: 'Matematica',
	argument: 'Derivate',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Derivata della Funzione Composta (Regola della Catena)
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: 'Come si deriva una funzione composta?' },
		'La regola per derivare una funzione composta ',
		{ name: 'MathML', text: 'h(x) = f(g(x))' },
		' (cioè una funzione "annidata" dentro un\'altra) è semplice: devi fare la derivata della funzione più esterna (lasciando invariato il suo contenuto) e **moltiplicarla** per la derivata della funzione interna.',
		'',
		{
			name: 'MathML',
			props: { className: 'text-xl mx-auto' },
			text: "h'(x) = f'(g(x)) \\cdot g'(x)",
		},
		'',

		// INTUIZIONE (STRATI)
		{ name: 'H3', text: "🪆 L'Intuizione: gli strati" },
		'Immagina la funzione composta come una serie di strati (come una cipolla o una Matrioska). Per arrivare al centro, devi togliere uno strato alla volta.',
		'',
		'',
		'',
		'1. Derivi il guscio esterno ($f$) → *Mantieni chiuso lo strato dentro ($g$).*',
		'2. **MOLTIPLICHI** (per).',
		'3. Derivi lo strato interno ($g$).',
		'',

		// FORMULA (BOX THEORY)
		{ name: 'H2', text: '1. La Formula' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{ name: 'H3', text: 'La Regola della Catena' },
					'Se ',
					{ name: 'MathML', text: 'y = f(g(x))' },
					':',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: "D[\\text{Esterna}(\\text{Interna})] = \\text{Esterna}'(\\text{Interna}) \\cdot \\text{Interna}'",
					},
				],
			},
		},

		// ESEMPI PASSO-PASSO
		{ name: 'H2', text: '2. Esempi Passo-Passo' },

		{ name: 'H3', text: 'Esempio Base: Il Seno al Quadrato' },
		'Funzione: ',
		{ name: 'MathML', text: 'h(x) = \\sin(x^2)' },
		'.',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					'**Analisi:**',
					'* **Esterna:** ',
					{ name: 'MathML', text: '\\sin(\\dots) \\to \\cos(\\dots)' },
					,
					'* **Interna:** ',
					{ name: 'MathML', text: 'x^2 \\to 2x' },
					,
					'',
					'**Applicazione:**',
					"Derivo l'esterna (copiando l'interna): ",
					{ name: 'MathML', text: '\\cos(x^2)' },
					,
					'Moltiplico per la derivata interna: ',
					{ name: 'MathML', text: '\\cdot (2x)' },
					,
				],
			},
		},
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: "h'(x) = 2x\\cos(x^2)",
					},
				],
			},
		},

		{ name: 'H3', text: 'Esempio Avanzato: La Potenza di una Funzione' },
		'Funzione: ',
		{ name: 'MathML', text: 'h(x) = (3x^2 + 1)^5' },
		'.',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					"1. **Derivo l'esterna:** Il 5 scende e l'esponente diventa 4. **NON toccare la parentesi!**",
					{ name: 'MathML', text: '5(3x^2 + 1)^4' },
					'',
					'2. **Moltiplico per la derivata interna:** Derivo ',
					{ name: 'MathML', text: '(3x^2 + 1) \\to 6x' },
					'.',
				],
			},
		},
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: "h'(x) = 5(3x^2+1)^4 \\cdot 6x = 30x(3x^2+1)^4",
					},
				],
			},
		},

		// 3 FUNZIONI O PIU
		{ name: 'H2', text: '3. Tre o più funzioni (Matrioska Multipla)' },
		'Funzione: ',
		{ name: 'MathML', text: 'h(x) = \\ln(\\sin(2x))' },
		'.',
		'La regola è identica: derivi a cascata e moltiplichi tutto.',
		'',
		'1. Derivata di ',
		{ name: 'MathML', text: '\\ln(\\dots) \\to \\frac{1}{\\dots}' },
		'2. Derivata di ',
		{ name: 'MathML', text: '\\sin(\\dots) \\to \\cos(\\dots)' },
		'3. Derivata di ',
		{ name: 'MathML', text: '2x \\to 2' },
		'',
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: "h'(x) = \\frac{1}{\\sin(2x)} \\cdot \\cos(2x) \\cdot 2 = 2\\cot(2x)",
					},
				],
			},
		},

		// ERRORI COMUNI (BOX ALERT)
		{ name: 'H2', text: '⚠️ Errori Comuni' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: '1. Derivare tutto insieme' },
					'Se devi derivare ',
					{ name: 'MathML', text: '\\sin(x^2)' },
					', **NON** scrivere ',
					{ name: 'MathML', text: '\\cos(2x)' },
					'. L\'argomento della prima derivata deve restare "congelato".',
					'',
					{ name: 'H3', text: '2. Confondere sin²(x) con sin(x²)' },
					'* ',
					{ name: 'MathML', text: '\\sin(x^2)' },
					': Esterna = Seno, Interna = Quadrato.',
					'* ',
					{ name: 'MathML', text: '\\sin^2(x) = (\\sin x)^2' },
					': Esterna = Potenza, Interna = Seno.',
					'Le derivate sono completamente diverse!',
				],
			},
		},
		'',

		{ name: 'Shell', props: { type: 'close' } },
	],
};

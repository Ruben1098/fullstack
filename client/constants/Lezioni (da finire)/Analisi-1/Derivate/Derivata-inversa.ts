import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'teorema-derivata-funzione-inversa',
	title: 'Derivata della Funzione Inversa: Teorema e Esercizi Svolti',
	excerpt: 'Come calcolare la derivata della funzione inversa senza invertire la funzione? Spiegazione del teorema, formula del reciproco e metodo passo-passo per gli esercizi.',
	category: 'Analisi1',
	school: 'liceo',
	class: '5',
	course: 'Matematica',
	argument: 'Derivate',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Derivata della Funzione Inversa: Teorema e Metodo Pratico
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: 'Come si calcola la derivata della funzione inversa?' },
		"Il Teorema della Funzione Inversa afferma che la derivata dell'inversa è il **reciproco** della derivata della funzione originale.",
		'Se la funzione originale ',
		{ name: 'MathML', text: 'f(x)' },
		' ha una pendenza ',
		{ name: 'MathML', text: 'm' },
		', la sua funzione inversa ',
		{ name: 'MathML', text: 'f^{-1}(y)' },
		' avrà pendenza ',
		{ name: 'MathML', text: '1/m' },
		'.',
		'',

		// INTUIZIONE GEOMETRICA
		{ name: 'H3', text: "🔄 L'Intuizione Geometrica" },
		'Le funzioni inverse sono simmetriche rispetto alla bisettrice ',
		{ name: 'MathML', text: 'y=x' },
		'. Se la funzione originale è molto ripida (m=10), la sua immagine riflessa sarà molto piatta (m=1/10).',
		'',
		'',
		'',

		// FORMULA (BOX THEORY)
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{ name: 'H3', text: 'La Formula Fondamentale' },
					'Sia ',
					{ name: 'MathML', text: 'y = f(x)' },
					' invertibile e derivabile, con ',
					{ name: 'MathML', text: "f'(x) \\neq 0" },
					'.',
					"La derivata dell'inversa nel punto ",
					{ name: 'MathML', text: 'y_0' },
					' è:',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: "(f^{-1})'(y_0) = \\frac{1}{f'(x_0)}",
					},
					'',
					'**Dove:**',
					'* ',
					{ name: 'MathML', text: 'y_0' },
					' è il punto dove calcoli la derivata.',
					'* ',
					{ name: 'MathML', text: 'x_0' },
					' è il punto tale che ',
					{ name: 'MathML', text: 'f(x_0) = y_0' },
					'.',
				],
			},
		},

		// ALGORITMO ESERCIZI
		{ name: 'H2', text: '🛠️ Algoritmo per gli Esercizi' },
		'Il problema tipico è: Data ',
		{ name: 'MathML', text: 'f(x)' },
		", calcola la derivata dell'inversa in ",
		{ name: 'MathML', text: 'y=k' },
		", **senza** trovare l'inversa.",
		'',
		{ name: 'H3', text: 'Esercizio Esempio' },
		'Data ',
		{ name: 'MathML', text: 'f(x) = x^3 + x + 2' },
		', calcolare ',
		{ name: 'MathML', text: "(f^{-1})'(4)" },
		'.',
		'',

		'**Step 1: Trova la "x" originale (Il Detective)**',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					'Sappiamo che ',
					{ name: 'MathML', text: 'y_0 = 4' },
					'. Dobbiamo trovare la x che genera il 4.',
					'Risolvi a occhio: ',
					{ name: 'MathML', text: 'x^3 + x + 2 = 4' },
					'.',
					'Si vede subito che ',
					{ name: 'MathML', text: 'x_0 = 1' },
					' (infatti 1+1+2=4).',
				],
			},
		},

		'**Step 2: Calcola la derivata originale**',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					'Fai la derivata di f(x): ',
					{ name: 'MathML', text: "f'(x) = 3x^2 + 1" },
					'.',
					'Valutala nel punto trovato (x=1):',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: "f'(1) = 3(1)^2 + 1 = 4",
					},
				],
			},
		},

		'**Step 3: Fai il Reciproco**',
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [
					'Applica la formula:',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: "(f^{-1})'(4) = \\frac{1}{f'(1)} = \\frac{1}{4} = 0.25",
					},
				],
			},
		},

		// IPOTESI
		{ name: 'H2', text: "Ipotesi e Condizioni (Per l'Orale)" },
		'1. **Continuità e Invertibilità:** La funzione deve essere strettamente monotona.',
		'2. **Derivabilità:** ',
		{ name: 'MathML', text: 'f(x)' },
		' deve essere derivabile.',
		'3. **Non Stazionarietà:** ',
		{ name: 'MathML', text: "f'(x) \\neq 0" },
		". Se la tangente fosse orizzontale, l'inversa avrebbe tangente verticale (infinito), quindi non sarebbe derivabile.",

		// ERRORE COMUNE (BOX ALERT)
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: "⚠️ L'Errore Numero 1: x vs y" },
					"Ti chiedono la derivata dell'inversa in 4.",
					"L'errore comune è calcolare ",
					{ name: 'MathML', text: "1/f'(4)" },
					'. **NO!**',
					'',
					"Non devi mettere 4 nella derivata. Devi mettere la **x** che corrisponde al 4 (nell'esempio era 1).",
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

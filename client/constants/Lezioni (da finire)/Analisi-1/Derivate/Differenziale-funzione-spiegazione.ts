import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'differenziale-funzione-differenziabile',
	title: 'Differenziale e Funzione Differenziabile: Significato e Calcolo',
	excerpt: 'Cosa sono il differenziale e la differenziabilità? Spiegazione chiara della differenza tra dy e delta y, formula del differenziale e come usarlo per i calcoli approssimati.',
	category: 'Analisi1',
	school: 'liceo',
	class: '5',
	course: 'Matematica',
	argument: 'Derivate',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Differenziale e Funzione Differenziabile: Significato e Formule
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: "Che cos'è il Differenziale?" },
		'Il differenziale (indicato con dy o df) è un modo per calcolare la variazione approssimata di una funzione muovendosi lungo la sua **retta tangente** anziché lungo la curva reale.',
		'',
		"In termini pratici, è il prodotto tra la derivata della funzione e l'incremento della variabile indipendente:",
		{
			name: 'MathML',
			props: { className: 'text-xl mx-auto' },
			text: "dy = f'(x) \\cdot dx",
		},

		// DIFFERENZA CHIAVE
		{ name: 'H3', text: '🔍 Differenza Chiave: Derivata vs Differenziale' },
		"* **La Derivata (f'):** È un **numero** che indica la *velocità*.",
		'* **Il Differenziale (dy):** È una **quantità** (uno spostamento verticale).',
		'',

		// 1. SIGNIFICATO GEOMETRICO
		{ name: 'H2', text: '1. Significato Geometrico' },
		'Immagina di guardare il grafico di una funzione curva al microscopio. Se fai uno zoom su un punto, la curva sembrerà una linea retta (la tangente).',
		'',
		'',
		'',
		'Quando ti sposti di un passo orizzontale ',
		{ name: 'MathML', text: 'dx' },
		':',
		'1. **Variazione Reale (dy reale o Δy):** È quanto cambia davvero la funzione sulla curva.',
		'2. **Differenziale (dy):** È quanto cambia la retta tangente.',
		'',
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{ name: 'H3', text: 'Il concetto fondamentale' },
					"Per spostamenti piccolissimi, l'errore tra i due è trascurabile. Quindi usiamo il differenziale per approssimare la variazione reale:",
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\Delta y \\approx dy',
					},
				],
			},
		},

		// 2. DIFFERENZIABILITÀ
		{ name: 'H2', text: '2. Quando una funzione è Differenziabile?' },
		"Nelle funzioni di una variabile, c'è una notizia fantastica:",
		'**Differenziabile = Derivabile.**',
		'',
		'Se una funzione ammette derivata finita in un punto, è automaticamente differenziabile in quel punto.',

		// 3. CALCOLO ED ESEMPI
		{ name: 'H2', text: '3. Come si calcola il Differenziale? (Esempi)' },
		'La formula è sempre: ',
		{ name: 'MathML', text: 'dy = (\\text{Derivata}) \\cdot dx' },
		'',

		{ name: 'H3', text: 'Esempio 1: Polinomio' },
		'Calcola il differenziale di ',
		{ name: 'MathML', text: 'f(x) = x^3' },
		'.',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: ['1. Fai la derivata: ', { name: 'MathML', text: "f'(x) = 3x^2" }, '.', '2. Aggiungi dx.'],
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
						text: 'dy = 3x^2 \\, dx',
					},
				],
			},
		},

		{ name: 'H3', text: 'Esempio 2: Trigonometria nel punto' },
		'Calcola il differenziale di ',
		{ name: 'MathML', text: 'f(x) = \\sin(x)' },
		' in ',
		{ name: 'MathML', text: 'x = \\pi' },
		'.',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					'1. Derivata: ',
					{ name: 'MathML', text: '\\cos(x)' },
					'.',
					'2. Valuta in pi greco: ',
					{ name: 'MathML', text: '\\cos(\\pi) = -1' },
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
						text: 'dy = -1 \\cdot dx = -dx',
					},
				],
			},
		},

		// 4. APPLICAZIONE (APPROSSIMAZIONE)
		{ name: 'H2', text: '4. A cosa serve? (Il calcolo approssimato)' },
		"**Formula dell'Approssimazione Lineare:**",
		{
			name: 'MathML',
			props: { className: 'text-xl mx-auto' },
			text: "f(x_0 + \\Delta x) \\approx f(x_0) + f'(x_0) \\cdot \\Delta x",
		},
		'',
		'**Esercizio Classico:** Calcola ',
		{ name: 'MathML', text: '\\sqrt{4.01}' },
		' senza calcolatrice.',

		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{ name: 'H3', text: 'Step 1: Scelta della funzione' },
					'Funzione: ',
					{ name: 'MathML', text: '\\sqrt{x}' },
					'.',
					'Punto facile: ',
					{ name: 'MathML', text: 'x_0 = 4' },
					' (perché radice di 4 è 2).',
					'Incremento: ',
					{ name: 'MathML', text: '\\Delta x = 0.01' },
					'.',
				],
			},
		},
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{ name: 'H3', text: 'Step 2: Derivata nel punto' },
					{ name: 'MathML', text: "f'(x) = \\frac{1}{2\\sqrt{x}}" },
					'Valutata in 4: ',
					{ name: 'MathML', text: "f'(4) = \\frac{1}{4} = 0.25" },
				],
			},
		},
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [
					{ name: 'H3', text: 'Step 3: Calcolo finale' },
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\sqrt{4.01} \\approx 2 + (0.25) \\cdot 0.01 = 2.0025',
					},
				],
			},
		},

		// ERRORI COMUNI (BOX ALERT)
		{ name: 'H2', text: '⚠️ Errori Comuni da Evitare' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: '1. Dimenticare il dx' },
					'Scrivere ',
					{ name: 'MathML', text: 'dy = 2x' },
					' è un errore grave. Devi sempre scrivere ',
					{ name: 'MathML', text: 'dy = 2x \\, dx' },
					'.',
					'',
					{ name: 'H3', text: '2. Confondere Delta x e x' },
					'Nella formula, ',
					{ name: 'MathML', text: '\\Delta x' },
					' è lo spostamento piccolo (0.01), non il punto di partenza (4).',
					'',
					{ name: 'H3', text: '3. Usarlo per grandi spostamenti' },
					'Se provi a calcolare ',
					{ name: 'MathML', text: '\\sqrt{100}' },
					' partendo da ',
					{ name: 'MathML', text: '\\sqrt{4}' },
					', otterrai un risultato sbagliato. La retta tangente funziona solo **vicino** al punto di contatto.',
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'derivate-definizione-significato-geometrico',
	title: 'Derivate: Definizione, Significato Geometrico e Calcolo Tangente',
	excerpt: 'Cosa sono le derivate? Spiegazione semplice dal rapporto incrementale al significato geometrico. Come calcolare la retta tangente e la differenza tra continuità e derivabilità.',
	category: 'Analisi1',
	school: 'liceo',
	class: '5',
	course: 'Matematica',
	argument: 'Derivate',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Derivate: Definizione, Significato Geometrico e Retta Tangente
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: "Cos'è la derivata di una funzione?" },
		'La derivata di una funzione ',
		{ name: 'MathML', text: 'f\\left(x\\right)' },
		' in un punto ',
		{ name: 'MathML', text: 'x_0' },
		' è un numero che misura **quanto velocemente sta cambiando la funzione** in quel punto.',
		'',
		'Geometricamente, questo numero corrisponde esattamente al coefficiente angolare (m) della **retta tangente** al grafico.',
		'',
		'',
		'',

		// INTUIZIONE
		{
			name: 'H3',
			text: "🏎️ L'Intuizione: Dalla velocità media a quella istantanea",
		},
		'* **Rapporto Incrementale:** È la tua **velocità media** (es. 100 km in 2 ore).',
		'* **Derivata:** È la tua **velocità istantanea** (quella che leggi sul tachimetro ora).',
		'',

		// 1. RAPPORTO INCREMENTALE
		{ name: 'H2', text: '1. Il Rapporto Incrementale' },
		'Per misurare la pendenza tra due punti A e B sul grafico, usiamo il Rapporto Incrementale. Prendiamo due punti distanti ',
		{ name: 'MathML', text: 'h' },
		' tra loro.',
		'',
		'',
		'',
		'Il rapporto incrementale è il coefficiente angolare della **retta secante**:',
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'R_{inc} = \\frac{\\Delta y}{\\Delta x} = \\frac{f\\left(x_0+h\\right) - f\\left(x_0\\right)}{h}',
					},
				],
			},
		},

		// 2. DEFINIZIONE DI DERIVATA
		{ name: 'H2', text: '2. Definizione di Derivata' },
		'Immagina di ridurre ',
		{ name: 'MathML', text: 'h' },
		' fino a farla diventare quasi nulla (',
		{ name: 'MathML', text: 'h \\to 0' },
		'). Il punto B scivola lungo la curva e si sovrappone ad A. La retta secante diventa **Tangente**.',
		'',
		'',
		'',
		'La derivata ',
		{ name: 'MathML', text: "f'\\left(x_0\\right)" },
		' è il limite del rapporto incrementale:',
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: "f'\\left(x_0\\right) = \\lim_{h \\to 0} \\frac{f\\left(x_0+h\\right) - f\\left(x_0\\right)}{h}",
					},
					'',
					'**Condizione:** Il limite deve esistere ed essere finito (limite destro = limite sinistro).',
				],
			},
		},

		// 3. SIGNIFICATO GEOMETRICO
		{ name: 'H2', text: '3. Significato Geometrico e Retta Tangente' },
		'**La derivata è il coefficiente angolare della retta tangente.**',
		{ name: 'MathML', text: "m_{\\text{tangente}} = f'\\left(x_0\\right)" },
		'',
		'* Se ',
		{ name: 'MathML', text: "f'\\left(x_0\\right) > 0" },
		': la funzione cresce.',
		'* Se ',
		{ name: 'MathML', text: "f'\\left(x_0\\right) < 0" },
		': la funzione decresce.',
		'* Se ',
		{ name: 'MathML', text: "f'\\left(x_0\\right) = 0" },
		': tangente orizzontale.',
		'',

		{ name: 'H3', text: "📐 Come trovare l'equazione della Retta Tangente" },
		'Esercizio tipico: Trova la tangente a ',
		{ name: 'MathML', text: 'f\\left(x\\right) = x^2' },
		' nel punto ',
		{ name: 'MathML', text: 'x_0 = 1' },
		'.',

		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{ name: 'H3', text: 'Step 1: Trova la Y' },
					{ name: 'MathML', text: 'y_0 = f\\left(1\\right) = 1^2 = 1' },
				],
			},
		},
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{ name: 'H3', text: 'Step 2: Trova la pendenza m' },
					'Calcola la derivata: ',
					{ name: 'MathML', text: "f'\\left(x\\right) = 2x" },
					'.',
					'Sostituisci 1: ',
					{ name: 'MathML', text: "f'\\left(1\\right) = 2" },
					'. Quindi ',
					{ name: 'MathML', text: 'm=2' },
					'.',
				],
			},
		},
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [
					{ name: 'H3', text: 'Step 3: Formula della retta' },
					'Usa ',
					{
						name: 'MathML',
						text: "y - f\\left(x_0\\right) = f'\\left(x_0\\right) \\cdot \\left(x - x_0\\right)",
					},
					'',
					{
						name: 'MathML',
						text: 'y - 1 = 2\\left(x - 1\\right) \\Rightarrow y = 2x - 1',
					},
				],
			},
		},

		// 4. CONTINUITA E DERIVABILITA
		{ name: 'H2', text: '4. Continuità e Derivabilità' },
		"Che relazione c'è tra una funzione continua e una derivabile?",
		'',
		`| Relazione | Vero o Falso? |
| :--- | :--- |
| **Se è Derivabile $\\Rightarrow$ È Continua** | **VERO** |
| **Se è Continua $\\Rightarrow$ È Derivabile** | **FALSO** |`,
		'',
		"**L'Esempio Classico:** ",
		{ name: 'MathML', text: 'f\\left(x\\right) = |x|' },
		'.',
		'È continua in 0 (non ha buchi), ma **NON è derivabile** in 0 perché ha una punta (punto angoloso).',
		'',
		'',
		'',

		// TRUCCHI ED ERRORI
		{ name: 'H2', text: '💡 Trucchi ed Errori Comuni' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: "1. Confondere f(x) con f'(x)" },
					'* ',
					{ name: 'MathML', text: 'f\\left(x_0\\right)' },
					" è l'**altezza** (dove sei).",
					'* ',
					{ name: 'MathML', text: "f'\\left(x_0\\right)" },
					' è la **pendenza** (come ti muovi).',
					'',
					{ name: 'H3', text: '2. "Derivabile" vuol dire "Non verticale"' },
					'Ricorda che la retta tangente non può essere verticale. Se la pendenza è infinita, la funzione non è derivabile.',
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

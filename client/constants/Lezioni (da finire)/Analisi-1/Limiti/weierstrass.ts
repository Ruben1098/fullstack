import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'teorema-di-weierstrass',
	title: 'Teorema di Weierstrass: Enunciato, Spiegazione e Controesempi',
	excerpt: 'Cosa dice il Teorema di Weierstrass? Spiegazione chiara su massimi e minimi assoluti, importanza delle ipotesi e guida pratica per gli esercizi.',
	category: 'Analisi1',
	school: 'liceo',
	class: '5',
	course: 'Matematica',
	argument: 'Teoremi sulle Funzioni Continue',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Teorema di Weierstrass: Enunciato, Spiegazione e Ipotesi Fondamentali
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: 'Cosa dice il Teorema di Weierstrass?' },
		'Il Teorema di Weierstrass garantisce l\'esistenza degli estremi assoluti. In parole povere: se prendi una funzione continua e la "ingabbi" in un intervallo chiuso e limitato, essa avrà sicuramente un punto di **Massimo Assoluto** e un punto di **Minimo Assoluto**.',
		'',
		'',
		'',

		// ENUNCIATO (BOX THEORY)
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{ name: 'H3', text: 'Enunciato Formale' },
					'Sia ',
					{ name: 'MathML', text: 'f(x)' },
					' una funzione definita in un intervallo ',
					{ name: 'MathML', text: '[a, b]' },
					'.',
					'',
					'Le ipotesi necessarie sono due:',
					'1. **Continuità:** ',
					{ name: 'MathML', text: 'f(x)' },
					' continua in tutto ',
					{ name: 'MathML', text: '[a, b]' },
					'.',
					"2. **Intervallo Chiuso e Limitato:** L'intervallo comprende gli estremi e non va all'infinito.",
					'',
					'**Tesi:** Esistono in ',
					{ name: 'MathML', text: '[a, b]' },
					' due punti ',
					{ name: 'MathML', text: 'x_m' },
					' e ',
					{ name: 'MathML', text: 'x_M' },
					' tali che:',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'f(x_m) \\le f(x) \\le f(x_M)',
					},
					'Cioè ',
					{ name: 'MathML', text: 'f(x)' },
					' ammette Massimo (M) e Minimo (m) assoluti.',
				],
			},
		},

		// IMPORTANZA IPOTESI (CONTROESEMPI)
		{ name: 'H2', text: '⚠️ Perché le ipotesi sono cruciali?' },
		'Per capire davvero Weierstrass, devi vedere cosa succede quando **non** funziona. Se cade anche solo una delle ipotesi, il teorema non garantisce più nulla.',
		'',

		{ name: 'H3', text: '1. Intervallo NON Chiuso (Aperto)' },
		'Prendiamo ',
		{ name: 'MathML', text: 'f(x) = x' },
		" nell'intervallo aperto ",
		{ name: 'MathML', text: '(0, 1)' },
		'.',
		"La funzione si avvicina a 0 e a 1, ma non li tocca mai. Non c'è né massimo né minimo.",
		'',
		'',
		'',

		{ name: 'H3', text: '2. Intervallo NON Limitato (Infinito)' },
		'Prendiamo ',
		{ name: 'MathML', text: 'f(x) = e^x' },
		' in ',
		{ name: 'MathML', text: '[0, +\\infty)' },
		'.',
		"Minimo: Sì (1). Massimo: No! La funzione cresce all'infinito.",
		'',
		'',
		'',

		{ name: 'H3', text: '3. Funzione NON Continua' },
		'Immagina una funzione che sale fino a un punto, ma in quel punto c\'è un "buco" (o il valore scende di colpo). Il massimo non viene mai raggiunto.',
		'',
		'',
		'',

		// STRATEGIA PRATICA
		{ name: 'H2', text: '💡 Strategia Pratica: Come trovare Max e Min?' },
		'Weierstrass ti dice che *esistono*, ma non *dove sono*. Per trovarli negli esercizi, controlla questi 3 candidati:',
		'',
		"1. **Agli estremi dell'intervallo:** Calcola sempre ",
		{ name: 'MathML', text: 'f(a)' },
		' e ',
		{ name: 'MathML', text: 'f(b)' },
		'.',
		'2. **Nei punti stazionari:** Dove la derivata è zero (',
		{ name: 'MathML', text: "f'(x) = 0" },
		').',
		'3. **Nei punti di non derivabilità:** Punti angolosi o cuspidi.',
		'',

		// BOX ALERT (IL TRUCCO)
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: 'Il Trucco Finale' },
					'Raccogli tutti i valori (y) trovati nei punti candidati e confrontali.',
					'* Il più grande è il **Massimo Assoluto**.',
					'* Il più piccolo è il **Minimo Assoluto**.',
					'',
					'Non serve fare lo studio del segno della derivata seconda! Basta confrontare le "altezze".',
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

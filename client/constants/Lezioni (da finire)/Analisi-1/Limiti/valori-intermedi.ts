import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'teorema-valori-intermedi',
	title: 'Teorema dei Valori Intermedi: Spiegazione Facile e Conseguenze',
	excerpt: "Cosa dice il Teorema dei Valori Intermedi? Spiegazione intuitiva, legame con Weierstrass e Bolzano, ed esempi pratici su come trovare le soluzioni di un'equazione.",
	category: 'Analisi1',
	school: 'liceo',
	class: '5',
	course: 'Matematica',
	argument: 'Teoremi sulle Funzioni Continue',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Teorema dei Valori Intermedi: Spiegazione Facile e Conseguenze
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: 'Cosa dice il Teorema dei Valori Intermedi?' },
		'Il Teorema dei Valori Intermedi afferma che una funzione continua in un intervallo non può "saltare" i valori. Se la funzione passa da un valore minimo ',
		{ name: 'MathML', text: 'm' },
		' a un valore massimo ',
		{ name: 'MathML', text: 'M' },
		', allora deve assumere **tutti** i valori compresi tra ',
		{ name: 'MathML', text: 'm' },
		' e ',
		{ name: 'MathML', text: 'M' },
		' almeno una volta. Non esistono "buchi" verticali nel grafico.',
		'',

		// INTUIZIONE
		{ name: 'H3', text: "🌡️ L'Intuizione (La Metafora della Temperatura)" },
		'Pensa alla temperatura di una stanza. Se alle 8:00 ci sono 15°C e alle 9:00 ce ne sono 20°C, è certo che in un momento intermedio la temperatura è stata esattamente di 17.5°C, di 19°C e persino di 16.333...°C.',
		'',
		'',
		'',
		'La temperatura sale con continuità: non può passare da 15 a 20 saltando il 18. Questo teorema è la garanzia matematica che la funzione non si "teletrasporta".',
		'',

		// PREREQUISITO WEIERSTRASS
		{ name: 'H2', text: 'Prerequisito: Il Teorema di Weierstrass' },
		'Per capire appieno i Valori Intermedi, dobbiamo ricordare brevemente Weierstrass. Se ',
		{ name: 'MathML', text: 'f(x)' },
		' è continua in un intervallo chiuso e limitato ',
		{ name: 'MathML', text: '[a, b]' },
		', allora ammette sicuramente un **massimo assoluto** (M) e un **minimo assoluto** (m).',

		// ENUNCIATO FORMALE (BOX THEORY)
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{ name: 'H3', text: "L'Enunciato Formale" },
					'Sia ',
					{ name: 'MathML', text: 'f(x)' },
					" una funzione definita e continua nell'intervallo chiuso e limitato ",
					{ name: 'MathML', text: '[a, b]' },
					'.',
					'Siano ',
					{ name: 'MathML', text: 'm' },
					' e ',
					{ name: 'MathML', text: 'M' },
					' rispettivamente il minimo e il massimo assoluto.',
					'',
					'**Tesi:** La funzione assume **tutti** i valori compresi tra m e M.',
					'',
					'In termini matematici: per ogni valore ',
					{ name: 'MathML', text: 'y_0' },
					' tale che ',
					{ name: 'MathML', text: 'm < y_0 < M' },
					', esiste almeno un punto ',
					{ name: 'MathML', text: 'x_0 \\in [a, b]' },
					' tale che:',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'f(x_0) = y_0',
					},
				],
			},
		},
		"**In sintesi estrema:** L'immagine della funzione è l'intervallo chiuso ",
		{ name: 'MathML', text: '[m, M]' },
		'.',
		'',

		// LEGAME CON ZERI
		{ name: 'H2', text: 'Il legame con il Teorema degli Zeri' },
		'Il **Teorema degli Zeri** (o di Bolzano) è in realtà solo un "caso particolare" di questo teorema.',
		'* **Valori Intermedi:** Dice che la funzione assume *tutti* i valori tra A e B.',
		'* **Teorema degli Zeri:** Dice che se A è negativo e B è positivo, la funzione deve assumere il valore *zero* (che sta in mezzo).',

		// A COSA SERVE (ESERCIZI)
		{ name: 'H2', text: '💡 A cosa serve negli Esercizi?' },
		'Questo teorema serve principalmente per due scopi pratici:',
		'',
		'1. **Risolvere equazioni f(x) = k:** Capire se esiste una soluzione senza doverla calcolare esattamente.',
		"2. **Determinare l'Immagine:** Se la funzione è continua, l'immagine sono tutti i valori tra min e max.",
		'',
		{ name: 'H3', text: 'Esempio Pratico' },
		'Domanda: "L\'equazione ',
		{ name: 'MathML', text: 'e^x + x = 5' },
		" ha soluzioni nell'intervallo ",
		{ name: 'MathML', text: '[0, 2]' },
		'?"',

		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'f(0) = e^0 + 0 = 1',
					},
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'f(2) = e^2 + 2 \\approx 9.38',
					},
				],
			},
		},
		'Dato che 5 è compreso tra 1 e 9.38, la risposta è **SÌ**, esiste un punto in cui la funzione vale 5.',
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\exists x_0 \\in [0,2] : e^{x_0} + x_0 = 5',
					},
				],
			},
		},

		// ERRORI COMUNI (BOX ALERT)
		{ name: 'H2', text: '⚠️ Errori comuni' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: '1. La Discontinuità rompe tutto' },
					'Se la funzione ha un salto, il teorema non vale. Immagina un interruttore della luce: passa da 0 a 1 istantaneamente senza mai valere 0.5. Questo perché non è continua.',
					'',
					{ name: 'H3', text: "2. L'intervallo illimitato" },
					"Se l'intervallo non è chiuso e limitato, il teorema vale ancora nel senso che la funzione assume i valori tra estremo inferiore e superiore, ma questi potrebbero essere infiniti.",
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

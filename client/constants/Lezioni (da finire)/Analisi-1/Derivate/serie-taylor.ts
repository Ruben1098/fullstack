import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'sviluppi-taylor-calcolo-pratico',
	title: 'Sviluppi di Taylor e McLaurin: Come Calcolarli Facilmente',
	excerpt: 'Guida pratica agli Sviluppi di Taylor. Formula generale, tabella degli sviluppi notevoli (McLaurin) e trucchi per calcolarli velocemente tramite sostituzione.',
	category: 'Analisi1',
	school: 'liceo',
	class: '5',
	course: 'Matematica',
	argument: 'derivate',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Sviluppi di Taylor e McLaurin: Come Calcolarli Facilmente
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: 'A cosa servono gli Sviluppi di Taylor?' },
		'Gli sviluppi di Taylor servono a trasformare funzioni complicate (come ',
		{ name: 'MathML', text: 'e^x, \\sin x, \\ln x' },
		") in semplici **polinomi**. L'idea è approssimare una curva complessa, vicino a un punto ",
		{ name: 'MathML', text: 'x_0' },
		', con una somma di potenze.',
		'',
		'',
		'',
		'Più termini (o "gradi") aggiungi, più l\'approssimazione diventa precisa.',
		'',

		// FORMULA GENERALE (BOX THEORY)
		{ name: 'H2', text: '1. La Formula Generale' },
		'Se vuoi costruire il polinomio centrato in ',
		{ name: 'MathML', text: 'x_0' },
		' (se ',
		{ name: 'MathML', text: 'x_0=0' },
		' si chiama **McLaurin**), la formula è:',
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'T_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(x_0)}{k!} (x-x_0)^k + o((x-x_0)^n)',
					},
					'',
					'**Traduzione pratica:**',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: "f(x) \\approx f(x_0) + f'(x_0)(x-x_0) + \\frac{f''(x_0)}{2}(x-x_0)^2 + \\dots",
					},
				],
			},
		},

		// SVILUPPI NOTEVOLI (TABELLA)
		{ name: 'H2', text: '2. Sviluppi Notevoli e Sostituzione' },
		{ name: 'H3', text: '⚡Gli Sviluppi Fondamentali (Centrati in 0)' },
		'Memorizza questi 5 e risolverai il 90% degli esercizi.',
		'',
		`| Funzione | Sviluppo (McLaurin) |
| :--- | :--- |
| **$e^x$** | $1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots + o(x^n)$ |
| **$\\sin x$** | $x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots + o(x^{2n+1})$ (Solo dispari!) |
| **$\\cos x$** | $1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\dots + o(x^{2n})$ (Solo pari!) |
| **$\\ln(1+x)$** | $x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + \\dots + o(x^n)$ |
| **$(1+x)^\\alpha$** | $1 + \\alpha x + \\frac{\\alpha(\\alpha-1)}{2}x^2 + \\dots + o(x^n)$ |`,
		'',

		// STRATEGIE DI CALCOLO
		{ name: 'H2', text: '3. Come fare gli esercizi (Strategie di Calcolo)' },
		'Ecco le tre tecniche per non dover calcolare le derivate a mano.',
		'',

		// A. SOSTITUZIONE
		{ name: 'H3', text: 'A. Sostituzione' },
		'Se devi sviluppare ',
		{ name: 'MathML', text: 'f(x) = \\sin(2x)' },
		' fino al grado 3, non derivare! Prendi lo sviluppo noto e sostituisci.',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					'1. So che ',
					{ name: 'MathML', text: '\\sin(t) = t - \\frac{t^3}{6} + o(t^3)' },
					'.',
					'2. Pongo ',
					{ name: 'MathML', text: 't = 2x' },
					'.',
					'3. Sostituisco:',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '(2x) - \\frac{(2x)^3}{6} = 2x - \\frac{8x^3}{6}',
					},
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
						text: '\\sin(2x) = 2x - \\frac{4}{3}x^3 + o(x^3)',
					},
				],
			},
		},

		// B. MOLTIPLICAZIONE
		{ name: 'H3', text: 'B. Moltiplicazione e Somma' },
		'Se hai ',
		{ name: 'MathML', text: 'f(x) = x \\cdot e^x' },
		', moltiplica semplicemente il polinomio.',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'x \\cdot (1 + x + \\frac{x^2}{2}) = x + x^2 + \\frac{x^3}{2} + o(x^3)',
					},
				],
			},
		},

		// C. INTEGRAZIONE/DERIVAZIONE
		{ name: 'H3', text: 'C. Integrazione/Derivazione delle Serie' },
		'Se conosci lo sviluppo del seno, derivandolo ottieni quello del coseno:',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'D[x - \\frac{x^3}{6} + \\frac{x^5}{120}] = 1 - \\frac{3x^2}{6} + \\frac{5x^4}{120}',
					},
				],
			},
		},

		// ERRORE TRONCAMENTO (BOX ALERT)
		{ name: 'H2', text: '⚠️ L\'Errore del "Troncamento"' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: 'A che grado mi fermo?' },
					"Questa è la trappola numero uno. Se fai una sostituzione che alza il grado, devi **buttare via** tutto ciò che supera l'ordine richiesto.",
					'',
					'**Esempio:** Sviluppa ',
					{ name: 'MathML', text: 'e^{x^2}' },
					" all'ordine 3.",
					'Sostituendo ',
					{ name: 'MathML', text: 'x^2' },
					' in ',
					{ name: 'MathML', text: '1+t+t^2/2' },
					' ottieni ',
					{ name: 'MathML', text: '1 + x^2 + x^4/2' },
					'.',
					'',
					'Il termine ',
					{ name: 'MathML', text: 'x^4' },
					" supera l'ordine 3. Va eliminato.",
					'Risultato corretto:',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'e^{x^2} = 1 + x^2 + o(x^3)',
					},
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

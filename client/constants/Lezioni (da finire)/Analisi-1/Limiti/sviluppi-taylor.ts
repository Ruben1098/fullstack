import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'limiti-con-taylor-parte-principale',
	title: 'Calcolo dei Limiti con Taylor e Parte Principale: Guida Pratica',
	excerpt: 'Come usare gli sviluppi di Taylor per risolvere limiti impossibili. Spiegazione della Parte Principale, regola per capire a che ordine fermarsi e tabella degli sviluppi fondamentali.',
	category: 'Analisi1',
	school: 'liceo',
	class: '5',
	course: 'Matematica',
	argument: 'Limiti',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Calcolo dei Limiti con Taylor e Parte Principale: L'Arma Finale
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: 'A cosa servono gli sviluppi di Taylor nei limiti?' },
		"Gli sviluppi di Taylor sono lo strumento più potente per risolvere i limiti. Si usano quando i Limiti Notevoli e De L'Hôpital falliscono o diventano troppo complicati, tipicamente nelle forme ",
		{ name: 'MathML', text: '0/0' },
		' dove avvengono **cancellazioni** (es. ',
		{ name: 'MathML', text: '\\tan x - \\sin x' },
		').',
		'',
		'Il metodo consiste nel sostituire le funzioni complesse con Polinomi + un errore trascurabile (o-piccolo), trasformando il limite in una semplice divisione tra polinomi.',
		'',

		// CONCETTO CHIAVE (PARTE PRINCIPALE)
		{ name: 'H2', text: '🎯 Il Concetto Chiave: La Parte Principale' },
		'Ogni funzione infinitesima (che tende a 0) può essere approssimata da un monomio del tipo ',
		{ name: 'MathML', text: 'k \\cdot x^n' },
		'.',
		'Questo monomio si chiama **Parte Principale**.',
		'',
		'',
		'',
		'* Il numero ',
		{ name: 'MathML', text: 'n' },
		" è l'**ordine di infinitesimo**.",
		'* Tutto il resto della funzione è "spazzatura" che finisce nell\'',
		{ name: 'MathML', text: 'o(x^n)' },
		'.',
		'',
		'**Esempio:** Per ',
		{ name: 'MathML', text: '\\sin x' },
		', lo sviluppo è ',
		{ name: 'MathML', text: 'x - \\frac{x^3}{6} + \\dots' },
		'* La parte principale è **x** (ordine 1).',
		'* Se però cancelli la x (es. ',
		{ name: 'MathML', text: '\\sin x - x' },
		'), la nuova parte principale diventa ',
		{ name: 'MathML', text: '-\\frac{x^3}{6}' },
		' (ordine 3).',
		'',
		'Taylor serve proprio a trovare chi sopravvive dopo le cancellazioni.',

		// QUANDO USARE TAYLOR
		{ name: 'H2', text: 'Quando usare Taylor?' },
		'Non usare Taylor per tutto. Usalo solo se:',
		'1. **C\'è una sottrazione "pericolosa":** Termini che tendono a zero e si elidono (es. ',
		{ name: 'MathML', text: 'e^x - 1 - x' },
		').',
		"2. **L'Hôpital è un incubo:** Se devi derivare 3 o 4 volte una frazione complicata.",
		'3. **Il denominatore ha grado alto:** Se sotto hai ',
		{ name: 'MathML', text: 'x^3' },
		' o ',
		{ name: 'MathML', text: 'x^4' },
		', i limiti notevoli non basteranno.',

		// REGOLA STOP
		{ name: 'H2', text: "La Regola d'Oro: A che ordine mi fermo?" },
		'**La Regola del Denominatore:** Guarda il **grado del denominatore**. Quello è il tuo target.',
		'* Se sotto hai ',
		{ name: 'MathML', text: 'x^3' },
		', devi sviluppare il numeratore fino al grado 3.',
		'* Se sotto hai ',
		{ name: 'MathML', text: '\\sin^2 x' },
		' (che vale circa ',
		{ name: 'MathML', text: 'x^2' },
		'), sviluppa fino al grado 2.',
		'',
		'**La Regola della Sopravvivenza:** Sviluppa finché i termini **non si cancellano del tutto**. Devi trovare il primo termine (diverso da zero) che sopravvive.',

		// TABELLA SVILUPPI
		{ name: 'H2', text: '⚡ Sviluppi di Taylor (in x=0)' },
		'Memorizza questi (almeno fino al grado 3 o 4).',
		'',
		`| Funzione | Sviluppo di McLauren (Taylor in 0) |
| :--- | :--- |
| **$e^x$** | $1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + o(x^3)$ |
| **$\\sin x$** | $x - \\frac{x^3}{6} + \\frac{x^5}{120} + o(x^5)$ (Solo dispari!) |
| **$\\cos x$** | $1 - \\frac{x^2}{2} + \\frac{x^4}{24} + o(x^4)$ (Solo pari!) |
| **$\\ln(1+x)$** | $x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + o(x^4)$ |
| **$\\arctan x$** | $x - \\frac{x^3}{3} + \\frac{x^5}{5} + o(x^5)$ |
| **$(1+x)^\\alpha$** | $1 + \\alpha x + \\frac{\\alpha(\\alpha-1)}{2}x^2 + o(x^2)$ |`,
		'',

		// ESEMPIO SVOLTO
		{ name: 'H2', text: 'Esempio Svolto Passo-Passo' },
		'Calcoliamo:',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to 0} \\frac{\\sin x - x}{x^3}',
					},
				],
			},
		},
		'**Analisi:** Il denominatore è ',
		{ name: 'MathML', text: 'x^3' },
		'. Questo mi dice: "Sviluppa fino all\'ordine 3".',
		'',

		'**Passo 1: Scriviamo lo sviluppo**',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\sin x = x - \\frac{x^3}{6} + o(x^3)',
					},
				],
			},
		},

		'**Passo 2: Sostituiamo nel limite**',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to 0} \\frac{(x - \\frac{x^3}{6} + o(x^3)) - x}{x^3}',
					},
				],
			},
		},

		'**Passo 3: Algebra e Cancellazione**',
		'Le x si elidono (era quello il problema!). Rimane:',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to 0} \\frac{-\\frac{x^3}{6} + o(x^3)}{x^3}',
					},
				],
			},
		},

		'**Passo 4: Risultato**',
		'Dividiamo per ',
		{ name: 'MathML', text: 'x^3' },
		". L'o-piccolo diviso la potenza tende a zero.",
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to 0} \\frac{\\sin x - x}{x^3} = -\\frac{1}{6}',
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
					{ name: 'H3', text: "1. Dimenticare l'o-piccolo" },
					'Scrivere ',
					{ name: 'MathML', text: '\\sin x = x - x^3/6' },
					' è un errore concettuale grave. Devi scrivere ',
					{ name: 'MathML', text: '+ o(x^3)' },
					". Senza l'o-piccolo stai dicendo che una curva curva è uguale a un polinomio dritto (falso).",
					'',
					{ name: 'H3', text: '2. Sviluppare le funzioni composte' },
					'Se hai ',
					{ name: 'MathML', text: 'e^{x^2}' },
					', devi mettere ',
					{ name: 'MathML', text: 'x^2' },
					" al posto della t nello sviluppo base. Attenzione: l'ordine raddoppia!",
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'e^{x^2} = 1 + x^2 + \\frac{x^4}{2} + o(x^4)',
					},
					'',
					{ name: 'H3', text: '3. Mischiare gli ordini' },
					"In una somma, la precisione è dettata dall'ordine più **basso**. È inutile calcolare termini precisi di grado 4 se poi ci sommi un errore di grado 2.",
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

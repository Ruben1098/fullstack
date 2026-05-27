import parser from '@/lib/parser';

export default {
	slug: 'limiti-notevoli-tabella-formule',
	title: 'Limiti Notevoli: Tabella Completa, Formule e Esempi',
	excerpt: 'La guida definitiva ai Limiti Notevoli: tabella riassuntiva (trigonometrici, esponenziali, logaritmici), spiegazione del metodo di generalizzazione ed esercizi svolti.',
	category: 'lezioni',
	school: 'liceo',
	class: '5',
	course: 'analisi-1',
	argument: 'limiti',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
    :H1[Limiti Notevoli: Tabella Completa e Metodo di Risoluzione]
     :P[Cosa sono i Limiti Notevoli? I limiti notevoli sono limiti specifici (solitamente forme indeterminate ]:InlineMath[\\frac{0}{0}]:P[ oppure ]:InlineMath[1^\\infty]:P[) di cui già si conosce il loro risultato. Sono delle "formule già pronte" che possiamo usare come dei mattoncini: quando li riconosci in un esercizio, non devi ricalcolarli, ma puoi sostituirli direttamente con il loro valore noto.]
      `,
	content: [
		{ name: 'Shell', type: 'open' },

		{
			name: 'H2',
			text: 'Tabella dei Limiti Notevoli',
		},
		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Questa tabella riassume tutti i limiti notevoli utili per risolvere gli esercizi:',
			},
		],
		{ name: 'div', type: 'close' },

		{ name: 'Table', type: 'open' },
		[
			`
  | Funzione | Limite Notevole |
  | :--- | :--- |
  | **Seno** | :MathML[\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1]|
  | **Tangente** | :MathML[\\lim_{x \\to 0} \\frac{\\tan x}{x} = 1]|
  | **Coseno (1)** | :MathML[\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0] |
  | **Coseno (2)** | :MathML[\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}] |
  | **Nepero** | :MathML[\\lim_{x \\to \\infty} (1 + \\frac{1}{x})^x = e] |
  | **Esponenziale (base e)** | :MathML[\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1] |
  | **Esponenziale (base a)** | :MathML[\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a] |
  | **Logaritmo** | :MathML[\\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = 1] |
  | **Binomiale** | :MathML[\\lim_{x \\to 0} \\frac{(1+x)^k - 1}{x} = k] |
          `,
		],
		{ name: 'Table', type: 'close' },

		{
			name: 'H2',
			text: 'Come applicare i limiti notevoli',
		},

		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Per risolvere gli esercizi è importantissimo ricordarsi bene tutti i limiti notevoli che abbiamo visto nella tabella, ma ci sono degli altri concetti fondamentali da sapere. Infatti, la maggior parte delle volte, non si trovano limiti così semplici, ma al posto della ',
			},
			{
				name: 'InlineMath',
				text: 'x',
			},
			{
				name: 'P',
				text: 'si può trovare una qualsiasi',
			},
			{
				name: 'InlineMath',
				text: 'f(x).',
			},
			{
				name: 'P',
				text: 'Risolviamo ad esempio questo esercizio:',
			},
		],
		{ name: 'div', type: 'close' },

		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: '\\lim_{x\\to 0}\\frac{e^{x^2}-1}{\\sin x^2}',
			},
		],
		{ name: 'Box', type: 'close' },

		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Guardando questo esempio possiamo vedere che il numeratore ci suggerisce di applicare il limite notevole ',
			},
			{
				name: 'InlineMath',
				text: '\\black{\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1,}',
			},
			{
				name: 'P',
				text: 'mentre il denominatore ci suggerisce di usare',
			},
			{
				name: 'InlineMath',
				text: '\\black{\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1.}',
			},
			{
				name: 'P',
				text: 'Però, non possiamo ancora usarli, per due motivi: ',
			},
		],
		{ name: 'div', type: 'close' },
		{ name: 'UL', type: 'open' },
		[
			{
				name: 'P',
				text: 'Non abbiamo ',
			},
			{
				name: 'InlineMath',
				text: 'x',
			},
			{
				name: 'P',
				text: ', ma',
			},
			{
				name: 'InlineMath',
				text: 'x^2.',
			},
		],
		{ name: 'UL', type: 'close' },
		{ name: 'UL', type: 'open' },
		[
			{
				name: 'P',
				text: 'I limiti notevoli ancora "non esistono" nella frazione',
			},
		],
		{ name: 'UL', type: 'close' },
		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Per prima cosa, moltiplichiamo per',
			},
			{
				name: 'InlineMath',
				text: '\\frac{x^2}{x^2}',
			},
			{
				name: 'P',
				text: 'la frazione, in modo da riscriverla in modo equivalente ma in modo furbo.',
			},
		],
		{ name: 'div', type: 'close' },
		{
			name: 'Box',
			type: 'open',
			props: {
				variant: 'step',
			},
		},
		[
			{
				name: 'MathML',
				text: '\\lim_{x\\to 0}\\frac{e^{x^2}-1}{\\sin x^2}\\cdot\\frac{x^2}{x^2}=\\lim_{x\\to 0}\\frac{\\displaystyle\\frac{e^{x^2}-1}{x^2}}{\\displaystyle\\frac{\\sin x^2}{x^2}}',
			},
		],
		{ name: 'Box', type: 'close' },

		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: "Ci siamo quasi. Ricordiamoci che per far funzionare il limite notevole anche l'argomento della funzione deve tendere allo stesso valore a cui tende la ",
			},
			{
				name: 'InlineMath',
				text: 'x.',
			},
			{
				name: 'P',
				text: 'In questo caso, ',
			},
			{
				name: 'InlineMath',
				text: 'x^2\\to 0',
			},
			{
				name: 'P',
				text: 'quando ',
			},
			{
				name: 'InlineMath',
				text: 'x\\to 0',
			},
			{
				name: 'P',
				text: '? Si! e quindi si può applicare!',
			},
		],
		{ name: 'div', type: 'close' },

		{
			name: 'Box',
			type: 'open',
			props: {
				variant: 'theory',
			},
		},
		[
			{ name: 'H4', text: 'Regola fondamentale' },
			{ name: 'div', type: 'open' },
			{
				name: 'P',
				text: 'In questo stiamo applicando questa regola per entrambi i limiti notevoli:',
			},
			{ name: 'div', type: 'close' },
			{
				name: 'MathML',
				text: '\\lim_{\\red{f(x)} \\to 0} \\frac{e^{\\red{f(x)}} - 1}{\\red{f(x)}} = 1',
			},
			{ name: 'div', type: 'open' },
			{
				name: 'P',
				text: '',
			},

			{ name: 'div', type: 'close' },
			{
				name: 'MathML',
				text: '\\lim_{\\red{f(x)} \\to 0} \\frac{\\sin \\red{f(x)}}{\\red{f(x)}} = 1',
			},
			{ name: 'div', type: 'open' },
			{
				name: 'P',
				text: '**Ricordati che i "pezzi rossi" devono essere uguali per applicare il limite notevole!** Questa regola vale per qualsiasi limite notevole e per qualsiasi funzione.',
			},
			{ name: 'div', type: 'close' },
		],
		{ name: 'Box', type: 'close' },

		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Applichiamo questa regola al nostro esercizio:',
			},
		],
		{ name: 'div', type: 'close' },

		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: '\\lim_{\\red{x^2} \\to 0} \\frac{\\overbrace{\\displaystyle\\frac{e^{\\red{x^2}}-1}{\\red{x^2}}}^{\\to 1 }}{\\underbrace{\\displaystyle\\frac{\\sin(\\red{x^2})}{\\red{x^2}}}_{\\to 1 }} = \\frac{1}{1} = 1',
			},
		],
		{ name: 'Box', type: 'close' },

		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Quindi il risultato finale è:',
			},
		],
		{ name: 'div', type: 'close' },

		{
			name: 'Box',
			type: 'open',
			props: {
				variant: 'result',
			},
		},
		[
			{
				name: 'MathML',
				text: '\\lim_{x\\to 0}\\frac{e^{x^2}-1}{\\sin x^2}=1',
			},
		],
		{ name: 'Box', type: 'close' },

		{ name: 'Shell', type: 'close' },
	],
};

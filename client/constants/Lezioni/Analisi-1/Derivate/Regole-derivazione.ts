import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'regole-derivazione-prodotto-quoziente',
	title: 'Regole di Derivazione: Somma, Prodotto e Quoziente | Esempi',
	excerpt: 'Impara a calcolare le derivate con la tabella delle regole fondamentali: prodotto, quoziente, somma e costante. Spiegazioni chiare ed esempi svolti.',
	category: 'Analisi1',
	school: 'liceo',
	class: '5',
	course: 'Matematica',
	argument: 'Derivate',
	featuredImage: '/public/regole_derivazione_island1.webp',
	has_pdf_resource: true,
	heading: `
      :H1[Le Regole di Derivazione: Come Calcolare Somma, Prodotto e Quoziente (con Esempi)]
      :P[Le **Regole di Derivazione** sono un insieme di formule che possiamo usare come **scorciatoie** per calcolare la derivata di funzioni molto elaborate. Spesso le funzioni sono composte a loro volta da delle altre funzioni tenute insieme dalle **operazioni elementari**: somma, differenza, prodotto e quoziente.]
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },
		{
			name: 'H2',
			text: 'Tabella delle regole di derivazione',
		},
		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Questa tabella riassume tutte le regole principali. Consideriamo due funzioni ',
			},
			{
				name: 'InlineMath',
				text: 'f',
			},
			{
				name: 'P',
				text: ' e ',
			},
			{
				name: 'InlineMath',
				text: 'g',
			},
			{
				name: 'P',
				text: '.',
			},
		],
		{ name: 'div', type: 'close' },

		{ name: 'Table', type: 'open' },

		`
  | Operazione | Formula |
  | :--- | :--- |
  | **Somma** | :MathML[D(f + g) = f' + g'] |
  | **Prodotto** | :MathML[D(f \\cdot g) = f' \\cdot g + f \\cdot g'] |
  | **Quoziente** | :MathML[D\(\\frac{f}{g}) = \\frac{f' \\cdot g - f \\cdot g'}{g^2}] |
  | **Costante** | :MathML[D(k \\cdot f) = k \\cdot f'] |
            `,

		{ name: 'Table', type: 'close' },
		{
			name: 'H2',
			text: 'La Derivata del Prodotto',
		},

		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: '**La derivata del prodotto** è la **somma** di due blocchi: nel primo si moltiplica ',
			},
			{
				name: 'MathML',
				text: "f'",
			},
			{
				name: 'P',
				text: '(ovvero la derivata di f) per la ',
			},
			{
				name: 'MathML',
				text: 'g.',
			},
			{
				name: 'P',
				text: 'Nel secondo pezzo si fa il viceversa: si moltiplica la',
			},
			{
				name: 'MathML',
				text: 'f',
			},
			{
				name: 'P',
				text: ' per la ',
			},
			{
				name: 'MathML',
				text: "g'",
			},
			{
				name: 'P',
				text: '(ovvero la derivata di g). ',
			},
		],
		{ name: 'div', type: 'close' },

		{ name: 'Box', type: 'open', props: { variant: 'theory' } },
		[
			{
				name: 'H3',
				text: 'La derivata del prodotto',
			},
			{ name: 'div', type: 'open' },
			{ name: 'div', type: 'close' },
			{
				name: 'MathML',
				text: "D(f \\cdot g) = f' \\cdot g + f \\cdot g'",
			},
		],
		{ name: 'Box', type: 'close' },

		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Istintivamente verrebbe da fare "derivata per derivata". Quindi, occhio agli errori!',
			},
		],
		{ name: 'div', type: 'close' },

		{ name: 'Box', type: 'open', props: { variant: 'alert' } },
		{
			name: 'H3',
			text: 'Errore!',
		},
		{ name: 'div', type: 'open' },
		{ name: 'div', type: 'close' },
		{
			name: 'MathML',
			text: "D(f \\cdot g) \\neq f' \\cdot g'",
		},
		{ name: 'Box', type: 'close' },

		{
			name: 'H3',
			text: 'Esempio Svolto',
		},
		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Calcoliamo la derivata della seguente funzione  ',
			},
			{
				name: 'InlineMath',
				text: 'h(x):',
			},
		],
		{ name: 'div', type: 'close' },

		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: 'h(x) = x^2 \\cdot \\sin x',
			},
		],
		{ name: 'Box', type: 'close' },

		{
			name: 'P',
			text: 'Identifichiamo i due blocchi: ',
		},

		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: "f = x^2 \\implies f' = 2x",
			},
			{ name: 'div', type: 'open' },
			{ name: 'div', type: 'close' },

			{
				name: 'MathML',
				text: "g = \\sin x \\implies g' = \\cos x",
			},
		],
		{ name: 'Box', type: 'close' },

		{ name: 'div', type: 'open' },

		[
			{
				name: 'P',
				text: 'Applichiamo la formula della **Derivata del Prodotto**:',
			},
		],
		{ name: 'div', type: 'close' },

		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: "h'(x) = (2x) \\cdot \\sin x + (x^2) \\cdot \\cos x",
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

		{ name: 'Box', type: 'open', props: { variant: 'result' } },
		[
			{
				name: 'MathML',
				text: "h'(x) = 2x \\cdot \\sin x + x^2 \\cdot \\cos x",
			},
		],
		{ name: 'Box', type: 'close' },

		{
			name: 'H2',
			text: 'La Derivata del Quoziente',
		},
		{ name: 'div', type: 'open' },
		[
			{ name: 'div', type: 'open' },
			[
				{
					name: 'P',
					text: '**La derivata del quoziente** è la **differenza** di due blocchi: nel primo si moltiplica ',
				},
				{
					name: 'MathML',
					text: "f'",
				},
				{
					name: 'P',
					text: '(ovvero la derivata di f) per la ',
				},
				{
					name: 'MathML',
					text: 'g',
				},
				{
					name: 'P',
					text: 'nel secondo pezzo si fa il viceversa: si moltiplica la',
				},
				{
					name: 'MathML',
					text: 'f',
				},
				{
					name: 'P',
					text: ' per la ',
				},
				{
					name: 'MathML',
					text: 'g',
				},
				{
					name: 'P',
					text: '(ovvero la derivata di g). Il tutto viene diviso per',
				},
				{
					name: 'MathML',
					text: 'g^2.',
				},
			],
			{ name: 'div', type: 'close' },
		],
		{ name: 'div', type: 'close' },

		{ name: 'Box', type: 'open', props: { variant: 'theory' } },
		[
			{ name: 'H3', text: 'La Derivata del quoziente' },
			{ name: 'div', type: 'open' },

			{ name: 'div', type: 'close' },
			{
				name: 'MathML',
				text: "D(\\frac{f}{g}) = \\frac{f' \\cdot g - f \\cdot g'}{g^2}",
			},
			{ name: 'div', type: 'open' },
			[
				{
					name: 'P',
					text: "**OCCHIO!** Il numeratore sembra uguale alla regola del prodotto, ma qui c'è il **segno meno**!",
				},
			],
			{ name: 'div', type: 'close' },
		],
		{ name: 'Box', type: 'close' },

		// ESEMPIO QUOZIENTE
		{
			name: 'H3',
			text: 'Esempio Svolto',
		},
		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Calcoliamo la derivata della seguente funzione: ',
			},
		],
		{ name: 'div', type: 'close' },
		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		{
			name: 'MathML',
			text: 'h(x) = \\frac{\\ln(x)}{x}',
		},
		{ name: 'Box', type: 'close' },

		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: "f = \\ln(x) \\implies f' = \\frac{1}{x}",
			},
			{ name: 'div', type: 'open' },
			{ name: 'div', type: 'close' },
			{
				name: 'MathML',
				text: "g = x \\implies g' = 1",
			},
		],
		{ name: 'Box', type: 'close' },
		{ name: 'div', type: 'open' },

		[
			{
				name: 'P',
				text: 'Applichiamo la formula della **Derivata del Quoziente**:',
			},
		],
		{ name: 'div', type: 'close' },

		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		{
			name: 'MathML',
			text: "h'(x) = \\frac{(\\frac{1}{x}) \\cdot x - (\\ln x) \\cdot 1}{(x)^2}",
		},
		{ name: 'Box', type: 'close' },
		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Quindi il risultato finale è:',
			},
		],
		{ name: 'div', type: 'close' },
		{ name: 'Box', type: 'open', props: { variant: 'result' } },
		[
			{
				name: 'MathML',
				text: "h'(x) = \\frac{1 - \\ln(x)}{x^2}",
			},
		],
		{ name: 'Box', type: 'close' },
		{
			name: 'H3',
			text: 'Esempio: Derivata della Somma',
		},
		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Calcoliamo la derivata della seguente funzione:',
			},
		],
		{ name: 'div', type: 'close' },

		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: 'f(x) = x^3 + \\cos(x)',
			},
		],
		{ name: 'Box', type: 'close' },
		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Grazie alla linearità, deriviamo pezzo per pezzo:',
			},
		],
		{ name: 'div', type: 'close' },

		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: 'x^3 \\implies 3x^2',
			},
			{ name: 'div', type: 'open' },
			{ name: 'div', type: 'close' },
			{
				name: 'MathML',
				text: '\\cos(x) \\implies -\\sin(x)',
			},
		],
		{ name: 'Box', type: 'close' },

		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Uniamo i risultati sommando le derivate:',
			},
		],
		{ name: 'div', type: 'close' },

		{ name: 'Box', type: 'open', props: { variant: 'result' } },
		[
			{
				name: 'MathML',
				text: "f'(x) = 3x^2 - \\sin(x)",
			},
		],
		{ name: 'Box', type: 'close' },

		{
			name: 'H3',
			text: 'Esempio: Costante per Funzione',
		},
		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Calcoliamo la derivata della seguente funzione ',
			},
		],
		{ name: 'div', type: 'close' },
		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: 'g(x) = 5 \\cdot x^4',
			},
		],
		{ name: 'Box', type: 'close' },
		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Il numero 5 è una costante che moltiplica, quindi lo ricopiamo e deriviamo solo la potenza:',
			},
		],
		{ name: 'div', type: 'close' },

		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: '5 \\cdot D(x^4) = 5 \\cdot (4x^3)',
			},
		],
		{ name: 'Box', type: 'close' },
		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Svolgiamo la moltiplicazione per il risultato finale:',
			},
		],
		{ name: 'div', type: 'close' },

		{ name: 'Box', type: 'open', props: { variant: 'result' } },
		[
			{
				name: 'MathML',
				text: "g'(x) = 20x^3",
			},
		],
		{ name: 'Box', type: 'close' },

		{ name: 'Shell', type: 'close' },
	],
};

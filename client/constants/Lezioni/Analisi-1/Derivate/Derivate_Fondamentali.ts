import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'derivate-fondamentali-tabella-formule',
	title: 'Tabella Derivate Fondamentali e Casi Particolari | Analisi 1',
	excerpt: "L'elenco completo delle derivate elementari da sapere a memoria, con i trucchi per risolvere i casi più ostici e gli esercizi svolti passo dopo passo.",
	category: 'Analisi1',
	school: 'liceo',
	class: '5',
	course: 'Matematica',
	argument: 'Derivate',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
:H1[Derivate Fondamentali ed Elementari: Tabella Completa e Metodi di Risoluzione]
:P[Le **Derivate Fondamentali** sono una serie di formule molto semplici da ricordare per poter affrontare qualsiasi esercizio di calcolo sulle derivate. Non serve ricalcolare ogni volta il limite del rapporto incrementale: queste formule sono pronte all'uso ogni volta che si ripresenta una funzione di un certo tipo.]
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },
		{
			name: 'H2',
			text: 'Tabella delle Derivate Fondamentali',
		},

		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Ecco la lista completa delle derivate per le funzioni elementari.',
			},
		],
		{ name: 'div', type: 'close' },

		{ name: 'Table', type: 'open' },
		[
			`
  | Tipo | Funzione :MathML[f(x)] | Derivata :MathML[f'(x)] |
  | :--- | :--- | :--- | 
  | **Costante** | :MathML[k] | :MathML[0] | 
  | **Potenza** | :MathML[x^\\alpha] | :MathML[\\alpha \\cdot x^{\\alpha-1}] | 
  |**Reciproco**|:MathML[\\frac{1}{x}]|:MathML[-\\frac{1}{x^2}]|
  | **Radice** | :MathML[\\sqrt{x}] | :MathML[\\frac{1}{2\\sqrt{x}}] |
  | **Esponenziale** | :MathML[e^x] | :MathML[e^x] | 
  | **Esp. base a** | :MathML[a^x] | :MathML[a^x \\cdot \\ln(a)] | 
  | **Logaritmo** | :MathML[\\ln(x)] | :MathML[\\frac{1}{x}] | 
  | **Log. base a** | :MathML[\\log_a(x)] | :MathML[\\frac{1}{x \\ln(a)}] | 
  | **Seno** | :MathML[\\sin(x)] | :MathML[\\cos(x)] |
  | **Coseno** | :MathML[\\cos(x)] | :MathML[-\\sin(x)] | 
  | **Tangente** | :MathML[\\tan(x)] | :MathML[\\frac{1}{\\cos^2(x)}] | 
  | **Arcotangente** | :MathML[\\arctan(x)] | :MathML[\\frac{1}{1+x^2}] | 
  | **Arcoseno** | :MathML[\\arcsin(x)] | :MathML[\\frac{1}{\\sqrt{1-x^2}}] | 
      `,
		],
		{ name: 'Table', type: 'close' },

		{
			name: 'H2',
			text: 'Trucco: riscrivere prima di derivare',
		},
		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Alcune funzioni elementari sono "nascoste", a primo occhio sembrano non rientrare in nessuna delle derivate fondamentali, ma è sufficiente riscriverle in modo equivalente. ',
			},
		],
		{ name: 'div', type: 'close' },

		{ name: 'Box', type: 'open', props: { variant: 'theory' } },
		{
			name: 'H4',
			text: '**RICORDA:** Proprietà delle potenze',
		},
		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: "Quando abbiamo una **radice** con un qualsiasi **indice** e un qualsiasi **esponente**, è possibile riscriverla in modo equivalente: diventa una potenza che ha una frazione ad esponente. L'esponente diventa il **numeratore**, l'indice diventa il **denominatore**.",
			},
		],
		{ name: 'div', type: 'close' },
		{
			name: 'MathML',
			text: '\\root{a}{x^b} = x^{\\frac{b}{a}}',
		},
		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Quando troviamo invece la',
			},
			{
				name: 'InlineMath',
				text: 'x',
			},
			{
				name: 'P',
				text: "a denominatore con un certo esponente, possiamo portare tutto a numeratore, a patto di **cambiare segno all'esponente**.",
			},
		],
		{ name: 'div', type: 'close' },
		{
			name: 'MathML',
			text: '\\frac{1}{x^m} = x^{-m}',
		},

		{ name: 'Box', type: 'close' },

		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'H3',
				text: 'Radici',
			},
			{
				name: 'P',
				text: 'Le radici si possono sempre riscrivere in forma di potenza utilizzando le proprietà delle potenze:',
			},
			{
				name: 'InlineMath',
				text: '\\root{4}{x^3} = x^{3/4}',
			},
		],
		{ name: 'SubParagraph', type: 'close' },
		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'P',
				text: 'Quindi in questo caso ',
			},
			{
				name: 'InlineMath',
				text: '\\alpha = \\frac{3}{4}',
			},
			{
				name: 'P',
				text: 'quindi possiamo tranquillamente applicare la derivata:',
			},
			{
				name: 'InlineMath',
				text: '\\frac{d}{dx}(x^\\alpha) = \\alpha x^{\\alpha -1}.',
			},
			{ name: 'Box', type: 'open', props: { variant: 'step' } },
			[
				{
					name: 'MathML',
					text: '\\frac{d}{dx}(\\root{4}{x^3}) = \\frac{d}{dx}x^{\\frac{3}{4}} = \\frac{3}{4}x^{\\frac{3}{4} -1}',
				},
			],
			{ name: 'Box', type: 'close' },

			{ name: 'Box', type: 'open', props: { variant: 'step' } },
			[
				{
					name: 'MathML',
					text: '\\frac{3}{4}x^{\\frac{3}{4} -1} = \\frac{3}{4}x^{\\frac{3}{4} -\\frac{4}{4}} = \\frac{3}{4}x^{-\\frac{1}{4}}',
				},
			],
			{ name: 'Box', type: 'close' },
			{ name: 'Box', type: 'open', props: { variant: 'step' } },
			[
				{
					name: 'MathML',
					text: '\\frac{3}{4}x^{-\\frac{1}{4}} = \\frac{3}{4\\root{4}{x}}',
				},
			],
			{ name: 'Box', type: 'close' },
		],
		{ name: 'SubParagraph', type: 'close' },

		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'H3',
				text: 'Frazioni',
			},
			{
				name: 'P',
				text: 'Similmente alle radici, anche quando troviamo la ',
			},
			{
				name: 'InlineMath',
				text: 'x',
			},
			{
				name: 'P',
				text: 'a denominatore. Ad esempio per la funzione',
			},
			{
				name: 'InlineMath',
				text: '\\frac{1}{x^5}',
			},
			{
				name: 'P',
				text: 'possiamo ricondurci ad una forma elementare usando le proprietà: ',
			},
			{
				name: 'InlineMath',
				text: '\\frac{1}{x^5} = x^{-5}.',
			},
		],
		{ name: 'SubParagraph', type: 'close' },

		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'P',
				text: 'Essendo in questo caso ',
			},
			{
				name: 'InlineMath',
				text: '\\alpha = -5',
			},
			{
				name: 'P',
				text: 'applichiamo la stessa formula vista precedentemente',
			},
		],
		{ name: 'SubParagraph', type: 'close' },
		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: '\\frac{d}{dx}(\\frac{1}{x^5}) = \\frac{d}{dx}(x^{-5}) = -5 x^{-5-1} ',
			},
		],
		{ name: 'Box', type: 'close' },

		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: '-5 x^{-5-1} = -5 x^{-6} = -\\frac{5}{x^6}',
			},
		],
		{ name: 'Box', type: 'close' },

		{
			name: 'H2',
			text: 'Esempi svolti',
		},
		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Svolgiamo insieme un esercizio di derivate di funzioni elementari.',
			},
		],
		{ name: 'div', type: 'close' },

		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'H3',
				text: 'Esempio 1',
			},
			{
				name: 'P',
				text: 'Calcoliamo la deritava della funzione:',
			},
		],
		{ name: 'SubParagraph', type: 'close' },

		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: '\\frac{d}{dx}(\\frac{5}{3x^4})',
			},
		],
		{ name: 'Box', type: 'close' },
		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Innanzitutto, applicando le proprietà delle potenze, possiamo riscrivere la funzione in questo modo:',
			},
		],
		{ name: 'div', type: 'close' },
		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: '\\frac{5}{3x^4} = \\frac{5}{3}x^{-4}',
			},
		],
		{ name: 'Box', type: 'close' },

		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Ci accorgiamo che la nostra funzione ricade nella categoria ',
			},
			{
				name: 'InlineMath',
				text: 'x^{\\alpha}',
			},
		],
		{ name: 'div', type: 'close' },
		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'in cui',
			},
			{
				name: 'InlineMath',
				text: '\\alpha = -4 .',
			},
			{
				name: 'P',
				text: 'Applichiamo quindi la formula precedente.',
			},
		],
		{ name: 'div', type: 'close' },

		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: '\\frac{d}{dx}(\\frac{5}{3}x^{-4}) = -4\\cdot\\frac{5}{3}x^{-4-1} = -\\frac{20}{3}x^{-5}',
			},
		],
		{ name: 'Box', type: 'close' },

		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Come ultimo passaggio, possiamo riportare giù al denominatore ',
			},
			{
				name: 'InlineMath',
				text: 'x^{-5}',
			},
		],
		{ name: 'div', type: 'close' },

		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: '-\\frac{20}{3}x^{-5} = -\\frac{20}{3x^5}',
			},
		],
		{ name: 'Box', type: 'close' },
		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Il risultato finale quindi è:',
			},
		],
		{ name: 'div', type: 'close' },
		{ name: 'Box', type: 'open', props: { variant: 'result' } },
		[
			{
				name: 'MathML',
				text: '\\frac{d}{dx}(\\frac{5}{3x^4}) = -\\frac{20}{3x^5}',
			},
		],
		{ name: 'Box', type: 'close' },

		{
			name: 'H2',
			text: 'Errore comune',
		},
		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Quando ti trovi davanti ad un esercizio, leggi bene la funzione da derivare, perché molto spesso nella fretta si commettono errori per mancanza di attenzione.',
			},
		],
		{ name: 'div', type: 'close' },
		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'H3',
				text: 'TRAPPOLA: Occhio alle costanti!',
			},
			{
				name: 'P',
				text: 'Molto spesso i professori tendono delle trappole come in questi due esempi:',
			},
			{ name: 'Box', type: 'open', props: { variant: 'step' } },
			[
				{
					name: 'MathML',
					text: '\\frac{d}{dx}(\\pi^3)',
				},

				{ name: 'div', type: 'open' },
				{ name: 'div', type: 'close' },

				{
					name: 'MathML',
					text: '\\frac{d}{dx}(e^2)',
				},
			],
			{ name: 'Box', type: 'close' },
			{ name: 'div', type: 'open' },
			[
				{
					name: 'P',
					text: 'In entrambi i casi potremmo pensare che siano delle funzioni **Potenza**. Quindi potremmo essere indotti in errore e scrivere in questo modo:',
				},
			],
			{ name: 'div', type: 'close' },
			{ name: 'Box', type: 'open', props: { variant: 'alert' } },
			{
				name: 'H4',
				text: '**Sbagliato!**',
			},
			{ name: 'div', type: 'open' },
			{ name: 'Box', type: 'close' },
			[
				{
					name: 'MathML',
					text: '\\frac{d}{dx}(\\pi^3) = 3\\pi^2',
				},

				{ name: 'div', type: 'open' },
				{ name: 'div', type: 'close' },

				{
					name: 'MathML',
					text: '\\frac{d}{dx}(e^5) = 5e^4',
				},
			],
			{ name: 'Box', type: 'close' },
			{ name: 'div', type: 'open' },
			[
				{
					name: 'P',
					text: "Il motivo è molto semplice: **NON c'è la**",
				},
				{
					name: 'InlineMath',
					text: 'x!',
				},
				{
					name: 'P',
					text: "E quindi, non c'è niente da derivare! Entrambe le funzioni sono **costanti!** E la derivata di una costante è sempre **ZERO**!. Quindi il risultato corretto è:",
				},
			],
			{ name: 'div', type: 'close' },
			{ name: 'Box', type: 'open', props: { variant: 'result' } },
			[
				{
					name: 'MathML',
					text: '\\frac{d}{dx}(\\pi^3) = 0',
				},

				{ name: 'div', type: 'open' },
				{ name: 'div', type: 'close' },

				{
					name: 'MathML',
					text: '\\frac{d}{dx}(e^2) = 0',
				},
			],
			{ name: 'Box', type: 'close' },
		],

		{ name: 'SubParagraph', type: 'close' },

		{ name: 'Shell', type: 'close' },
	],
};

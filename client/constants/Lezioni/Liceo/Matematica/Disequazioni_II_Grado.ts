import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: '',
	title: '',
	excerpt: '',
	category: '',
	school: '',
	class: '',
	course: '',
	argument: '',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
:H1[Disequazioni di Secondo Grado: Guida Pratica e Tabella Completa]
:P[Le disequazioni di secondo grado sono una tipologia di disequazioni in cui il massimo grado del polinomio è 2.La forma normale della disequazione è :MathML[ax^2 + bx + c>0].]
      `,

	content: [
		{ name: 'Shell', props: { type: 'open' } },

		{
			name: 'H2',
			text: 'Tabella delle Disequazioni di Secondo Grado',
		},

		{
			name: 'P',
			text: 'Esistono tre casistiche diverse di disequazioni di secondo grado. Tutto dipende dal **segno** del discriminante',
		},
		{
			name: 'MathML',
			text: '\\Delta = b^2 -4ac',
		},
		{
			name: 'P',
			text: '. Vediamo insieme tutti i casi.',
		},

		{ name: 'Table', type: 'open' },
		`
| Segno || :MathML[\\Delta > 0] | :MathML[\\Delta = 0] | :MathML[\\Delta < 0] |
| :--- | :--- | :--- | :--- |:--- |
| :MathML[ax^2 + bx + c>0] || **Valori esterni** | :MathML[x \\neq x_1] | **Sempre** |
| :MathML[ax^2 + bx + c\\geq 0] || **Valori esterni (inclusi)** | **Sempre** | **Sempre** |
| :MathML[ax^2 + bx + c<0] || **Valori interni** | **Mai** | **Mai** |
|  :MathML[ax^2 + bx + c\\leq 0] || **Valori interni (inclusi)** | Solo :MathML[x = x_1] | **Mai** |
`,
		{ name: 'Table', type: 'close' },

		{
			name: 'H2',
			text: 'Risoluzione Disequazione: Algoritmo',
		},

		{
			name: 'P',
			text: 'Risolviamo insieme una disequazione che comprenda tutti i possibili passaggi che potrebbero capitare durante un compito in classe.',
		},

		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: '\\frac{15}{2}-3x<\\frac{x^2}{2}-2x',
			},
		],
		{ name: 'Box', type: 'close' },
		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'H3',
				text: 'Passo 1: Eliminare tutte le frazioni',
			},
			{
				name: 'P',
				text: 'Per prima cosa possiamo eliminare tutti i fastidiosi denominatori facendo il m.c.m. tra i denominatori a sinistra e a destra:',
			},
		],
		{ name: 'SubParagraph', type: 'close' },
		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: '\\frac{15 -6x}{2}<\\frac{x^2 - 4x}{2}',
			},
		],
		{ name: 'Box', type: 'close' },
		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'P',
				text: 'Prima di semplificare dobbiamo assicurarci che **IL NUMERO AL DENOMINATORE SIA POSITIVO**, perche altrimenti, dato che stiamo risolvendo una disequazione, il segno della disuguaglianza dovrebbe girarsi, e potremmo commettere errori. Per sicurezza lavoriamo soltanto con **numeri positivi**. In questo caso possiamo semplificare senza problemi.',
			},
		],
		{ name: 'SubParagraph', type: 'close' },
		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: '15-6x < x^2 - 4x',
			},
		],
		{ name: 'Box', type: 'close' },

		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'H3',
				text: 'Passo 2: Portare a sinistra tutti i termini',
			},
			{
				name: 'P',
				text: 'Per applicare la formula dobbiamo avere tutti i termini a sinistra. Invece, a destra non deve esserci nulla. Portiamo quindi',
			},
			{
				name: 'MathML',
				text: 'x^2 - 4x',
			},
			{
				name: 'P',
				text: 'a sinistra cambiando i segni:',
			},
		],
		{ name: 'SubParagraph', type: 'close' },
		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: '15-6x -x^2 + 4x < 0',
			},
		],
		{ name: 'Box', type: 'close' },
		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'H3',
				text: 'Passo 3: Unire tutti i termini simili',
			},
			{
				name: 'P',
				text: 'Come possiamo vedere',
			},
			{
				name: 'MathML',
				text: '-6x',
			},
			{
				name: 'P',
				text: 'e',
			},
			{
				name: 'MathML',
				text: '+4x',
			},
			{
				name: 'P',
				text: 'sono **simili**, perché hanno la stessa parte letterale. Quindi possiamo sommarli',
			},
		],
		{ name: 'SubParagraph', type: 'close' },
		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: '15-2x -x^2 < 0',
			},
		],
		{ name: 'Box', type: 'close' },
		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'H3',
				text: 'Passo 4: Riordinare la disequazione',
			},
			{
				name: 'P',
				text: 'Scritta in questo modo potrebbe indurci nuovamente in errore. Perciò, per nostra comodità è sempre bene scrivere i termini in questo ordine:',
			},
			{
				name: 'MathML',
				text: 'ax^2',
			},
			{
				name: 'P',
				text: ',',
			},
			{
				name: 'MathML',
				text: 'bx',
			},
			{
				name: 'P',
				text: 'e poi',
			},
			{
				name: 'MathML',
				text: 'c.',
			},
		],
		{ name: 'SubParagraph', type: 'close' },
		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: '-x^2 -2x + 15<0',
			},
		],
		{ name: 'Box', type: 'close' },
		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'H3',
				text: 'Passo 5: Rendere positivo il termine quadratico',
			},
			{
				name: 'P',
				text: 'Sicuramente la disequazione è risolvibile anche così, ma per ulteriore comodità è opportuno far si che il termine in ',
			},
			{
				name: 'MathML',
				text: 'x^2',
			},
			{
				name: 'P',
				text: 'sia positivo. Quindi cambiamo segno a tutti i termini, ma **OCCHIO!** Per poterlo fare **dobbiamo ricordarci di girare il segno di disuguaglianza**:',
			},
		],
		{ name: 'SubParagraph', type: 'close' },
		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: 'x^2 +2x - 15>0',
			},
		],
		{ name: 'Box', type: 'close' },

		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'H3',
				text: 'Passo 6: Calcolare il Delta',
			},
			{
				name: 'P',
				text: 'Finalmente siamo arrivati alla forma che ci interessa. Notiamo che',
			},
			{
				name: 'MathML',
				text: 'a=1',
			},
			{
				name: 'P',
				text: ', ',
			},
			{
				name: 'MathML',
				text: 'b=2',
			},
			{
				name: 'P',
				text: 'e',
			},
			{
				name: 'MathML',
				text: 'c=-15.',
			},
			{
				name: 'P',
				text: 'Possiamo applicare la formula del **Delta.**',
			},
		],
		{ name: 'SubParagraph', type: 'close' },

		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: '\\Delta = (2)^2-4(1)(-15) = 4+60 = 64',
			},
		],
		{ name: 'Box', type: 'close' },

		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'H3',
				text: 'Passo 7: Applicare la formula risolutiva',
			},
			{
				name: 'P',
				text: "Adesso che abbiamo trovato il Delta possiamo applicare la formula risolutiva come se fosse un'equazione normale.",
			},
		],
		{ name: 'SubParagraph', type: 'close' },
		{ name: 'Box', type: 'open', props: { variant: 'theory' } },
		{ name: 'div', type: 'open', props: { className: 'inline' } },
		{
			name: 'H4',
			text: 'Formula Risolutiva',
		},
		{
			name: 'P',
			text: "Avendo l'equazione ",
		},
		{
			name: 'MathML',
			text: 'ax^2 + bx + c = 0',
		},
		{
			name: 'P',
			text: 'si può applicare la formula:',
		},
		{ name: 'div', type: 'close' },
		{
			name: 'MathML',
			text: 'x_{1,2} = \\frac{-b\\pm\\sqrt{\\Delta}}{2a}',
		},
		{ name: 'div', type: 'open', props: { className: 'inline' } },
		{
			name: 'P',
			text: 'in cui ',
		},
		{
			name: 'MathML',
			text: '\\Delta = b^2 -4ac',
		},
		{
			name: 'P',
			text: 'si può applicare la formula:',
		},
		{ name: 'div', type: 'close' },

		{ name: 'Box', type: 'close' },
		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: 'x_{1,2} = \\frac{-2\\pm\\sqrt{64}}{2\\cdot 1} = \\frac{-2\\pm8}{2}',
			},
		],
		{ name: 'Box', type: 'close' },
		{ name: 'SubParagraph', type: 'open' },
		{
			name: 'P',
			text: 'Quindi le due soluzioni reali e distinte sono:',
		},
		{ name: 'SubParagraph', type: 'close' },

		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		{
			name: 'MathML',
			text: 'x_1=\\frac{-2+8}{2} = \\frac{6}{2} = 3',
		},
		{ name: 'box', type: 'close' },
		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		{
			name: 'MathML',
			text: 'x_2=\\frac{-2-8}{2} = \\frac{-10}{2} = -5',
		},
		{ name: 'box', type: 'close' },
		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'P',
				text: "Ora che abbiamo trovato le radici, dobbiamo determinare l'intervallo delle soluzioni. Poiché il segno della disequazione è maggiore di zero, dobbiamo prendere i valori esterni alle soluzioni trovate.",
			},
			{
				name: 'MathML',
				text: 'x < -5 \\land x > 3.',
			},
			{
				name: 'P',
				text: 'Questo significa che la disequazione è verificata per tutti i numeri più piccoli di ',
			},
			{
				name: 'MathML',
				text: '-5',
			},
			{
				name: 'P',
				text: 'e per tutti i numeri più grandi di ',
			},
			{
				name: 'MathML',
				text: '3',
			},
		],
		{ name: 'SubParagraph', type: 'close' },
		{ name: 'Box', type: 'open', props: { variant: 'result' } },
		[
			{
				name: 'MathML',
				text: 'x^2 + 2x - 15 > 0 \\implies x < -5 \\land x > 3',
			},
		],
		{ name: 'Box', type: 'close' },

		{ name: 'Shell', type: 'close' },
	],
};

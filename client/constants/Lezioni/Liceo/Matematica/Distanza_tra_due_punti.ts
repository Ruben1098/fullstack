import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: '',
	title: '',
	excerpt: '',
	category: 'Matematica',
	school: 'liceo',
	class: '3',
	course: 'geometria-analitica',
	argument: 'distanza-tra-due-punti',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
:H1[]
:P[]
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		{
			name: 'H2',
			text: 'Tabella: Formule Distanza Tra Due Punti',
		},
		{ name: 'Table', type: 'open' },
		`
| :P[Scenario] | :P[Quando si usa?] | :P[Formula] |
| :--- | :--- | :--- |
| :P[**Segmento Diagonale**] | :P[Coordinate Diverse] |:MathML[\\sqrt{(x_B - x_A)^2+(y_B - y_A)^2}]|
| :P[**Segmento Orizzontale**] | :P[Stessa ordinata] :MathML[(y_A = y_B)] |:MathML[\\lvert x_B - x_A \\rvert]|
| :P[**Segmento Verticale**] | :P[Stessa ordinata] :MathML[(x_A = x_B)] |:MathML[\\lvert y_B - y_A \\rvert]|
          `,
		{ name: 'Table', type: 'close' },

		{
			name: 'H2',
			text: 'Le Formule',
		},

		{
			name: 'P',
			text: 'Consideriamo un piano cartesiano e fissiamo due punti',
		},
		{
			name: 'MathML',
			text: 'A',
		},
		{
			name: 'P',
			text: 'e',
		},
		{
			name: 'MathML',
			text: 'B.',
		},
		{
			name: 'P',
			text: 'Immaginiamo di collegare questi due punti da un segmento. Nel caso più generale di tutti abbiamo che questo segmento è obliquo. In realtà la formula che si usa per trovare la distanza tra due punti non è altro che il conosciutissimo **Teorema di Pitagora**, ovvero ',
		},
		{
			name: 'MathML',
			text: ' c = \\sqrt{a^{2} + b^{2}}. ',
		},
		{
			name: 'P',
			text: 'I cateti sono',
		},
		{
			name: 'MathML',
			text: 'a',
		},
		{
			name: 'P',
			text: 'e',
		},
		{
			name: 'MathML',
			text: 'b',
		},
		{
			name: 'P',
			text: ', mentre',
		},
		{
			name: 'MathML',
			text: 'c',
		},
		{
			name: 'P',
			text: "è l'ipotenusa del triangolo rettangolo.",
		},

		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'H3',
				text: '**Caso 1**: Segmento Obliquo',
			},
			{
				name: 'P',
				text: 'Questo è il caso più generico di tutti, in qui entrambi i punti hanno tutte le coordinate diverse.',
			},
			{
				name: 'MathML',
				text: '',
			},

			{ name: 'Box', type: 'open', props: { variant: 'theory' } },
			{
				name: 'H4',
				text: 'Formula',
			},
			{ name: 'div', type: 'open' },
			{ name: 'div', type: 'close' },
			{
				name: 'MathML',
				text: '\\overline{AB} = \\sqrt{(x_B - x_A)^2+(y_B - y_A)^2}',
			},

			{ name: 'Box', type: 'close' },

			{ name: 'div', type: 'open' },
			[
				{
					name: 'P',
					text: '**Esempio:** Troviamo la distanza tra i punti',
				},

				{
					name: 'MathML',
					text: 'A(-2, 1)',
				},
				{
					name: 'P',
					text: 'e',
				},
				{
					name: 'MathML',
					text: 'B(1, 5).',
				},
				{
					name: 'P',
					text: 'Applichiamo subito la nostra formula, ma **occhio ai segni meno!**',
				},
			],
			{ name: 'div', type: 'close' },

			{ name: 'Box', type: 'open', props: { variant: 'step' } },
			[
				{
					name: 'MathML',
					text: '\\overline{AB} = \\sqrt{(1 - (-2))^2+(5 - 1)^2} = \\sqrt{(1 + 2)^2+(5 - 1)^2}',
				},
			],
			{ name: 'Box', type: 'close' },
			{ name: 'Box', type: 'open', props: { variant: 'step' } },
			[
				{
					name: 'MathML',
					text: '\\overline{AB} = \\sqrt{(3)^2+(4)^2} = \\sqrt{9+16}',
				},
			],
			{ name: 'Box', type: 'close' },
			{ name: 'Box', type: 'open', props: { variant: 'step' } },
			[
				{
					name: 'MathML',
					text: '\\sqrt{25}=5',
				},
			],
			{ name: 'Box', type: 'close' },
			{ name: 'div', type: 'open' },
			[
				{
					name: 'P',
					text: 'Quindi la distanza tra i due punti è:',
				},
			],
			{ name: 'div', type: 'close' },

			{ name: 'Box', type: 'open', props: { variant: 'result' } },
			[
				{
					name: 'MathML',
					text: '\\overline{AB} = 5',
				},
			],
			{ name: 'Box', type: 'close' },
		],
		{ name: 'SubParagraph', type: 'close' },

		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'H3',
				text: '**Caso 2:** Segmento Orizzontale',
			},
			{
				name: 'P',
				text: 'Quando un segmento orizzontale vuol dire entrambi i punti sono alla stessa altezza, quindi la loro',
			},
			{
				name: 'MathML',
				text: 'y',
			},
			{
				name: 'P',
				text: 'è la stessa. **OCCHIO!**: la formula sembra diversa ma in realtà **deriva sempre dalla formula principale!**',
			},
			{ name: 'Box', type: 'open', props: { variant: 'theory' } },
			{
				name: 'H4',
				text: 'Formula',
			},
			{ name: 'div', type: 'open' },
			[
				{
					name: 'P',
					text: 'Ricaviamo la formula ridotta partendo dalla principale:',
				},
			],
			{ name: 'div', type: 'close' },
			{
				name: 'MathML',
				text: '\\overline{AB} = \\sqrt{(x_B - x_A)^2+(y_B - y_A)^2}',
			},
			{ name: 'div', type: 'open' },
			[
				{
					name: 'P',
					text: 'In questo caso, ',
				},
				{
					name: 'MathML',
					text: 'y_B = y_A,',
				},
				{
					name: 'P',
					text: ' quindi ',
				},
				{
					name: 'MathML',
					text: 'y_B - y_A = 0',
				},
			],
			{ name: 'div', type: 'close' },
			{
				name: 'MathML',
				text: '\\overline{AB} = \\sqrt{(x_B - x_A)^2} = \\lvert x_B - x_A\\rvert',
			},

			{ name: 'Box', type: 'close' },
		],
		{ name: 'SubParagraph', type: 'close' },
		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'P',
				text: '**Esempio:** Troviamo la distanza tra i punti ',
			},
			{
				name: 'MathML',
				text: 'A(2,3)',
			},
			{
				name: 'P',
				text: 'e',
			},
			{
				name: 'MathML',
				text: 'B(-4,3).',
			},
			{
				name: 'P',
				text: 'Applichiamo sempre la formula principale.',
			},
		],

		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: '\\overline{AB} = \\sqrt{(-4-2)^2 + (3-3)^2}=\\sqrt{(-6)^2+0^2}',
			},
		],
		{ name: 'Box', type: 'close' },
		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: '\\sqrt{36+0} = \\sqrt{36} =6',
			},
		],
		{ name: 'Box', type: 'close' },

		{
			name: 'P',
			text: 'Applichiamo adesso la formula ridotta:',
		},

		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: '\\lvert -4 -2 \\lvert = \\lvert -6 \\lvert=6',
			},
		],
		{ name: 'Box', type: 'close' },

		{
			name: 'P',
			text: 'In ogni caso, il risultato finale è:',
		},

		{ name: 'Box', type: 'open', props: { variant: 'result' } },
		[
			{
				name: 'MathML',
				text: '\\overline{AB} = 6',
			},
		],
		{ name: 'Box', type: 'close' },
		{ name: 'SubParagraph', type: 'close' },

		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'H3',
				text: '**Caso 3:** Segmento Verticale',
			},
			{
				name: 'P',
				text: 'Quando un segmento è verticale vuol dire che entrambi i punti si trovano sulla stessa linea verticale, quindi la loro',
			},
			{
				name: 'MathML',
				text: 'x',
			},
			{
				name: 'P',
				text: 'è la stessa. **Attenzione!** la formula sembra diversa ma anche in questo caso **deriva sempre dalla formula principale!**',
			},
			{ name: 'Box', type: 'open', props: { variant: 'theory' } },
			{
				name: 'H4',
				text: 'Formula',
			},
			{ name: 'div', type: 'open' },
			[
				{
					name: 'P',
					text: 'Ricaviamo la formula ridotta partendo dalla principale:',
				},
			],
			{ name: 'div', type: 'close' },
			{
				name: 'MathML',
				text: '\\overline{AB} = \\sqrt{(x_B - x_A)^2+(y_B - y_A)^2}',
			},
			{ name: 'div', type: 'open' },
			[
				{
					name: 'P',
					text: 'In questo caso, ',
				},
				{
					name: 'MathML',
					text: 'x_B = x_A,',
				},
				{
					name: 'P',
					text: ' quindi ',
				},
				{
					name: 'MathML',
					text: 'x_B - x_A = 0',
				},
			],
			{ name: 'div', type: 'close' },
			{
				name: 'MathML',
				text: '\\overline{AB} = \\sqrt{(y_B - y_A)^2} = \\lvert y_B - y_A \\rvert',
			},

			{ name: 'Box', type: 'close' },
		],
		{ name: 'SubParagraph', type: 'close' },
		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'P',
				text: '**Esempio:** Troviamo la distanza tra i punti ',
			},
			{
				name: 'MathML',
				text: 'A(5,6)',
			},
			{
				name: 'P',
				text: ' e ',
			},
			{
				name: 'MathML',
				text: 'B(5,-8).',
			},
			{
				name: 'P',
				text: 'Applichiamo sempre la formula principale.',
			},
		],

		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: '\\overline{AB} = \\sqrt{(5-5)^2 + (-8-6)^2}=\\sqrt{0^2+(-14)^2}',
			},
		],
		{ name: 'Box', type: 'close' },
		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: '\\sqrt{0+196} = \\sqrt{196} = 14',
			},
		],
		{ name: 'Box', type: 'close' },

		{
			name: 'P',
			text: 'Applichiamo adesso la formula ridotta:',
		},

		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: '\\lvert -8 - 6 \\rvert = \\lvert -14 \\rvert = 14',
			},
		],
		{ name: 'Box', type: 'close' },

		{
			name: 'P',
			text: 'In ogni caso, il risultato finale è:',
		},

		{ name: 'Box', type: 'open', props: { variant: 'result' } },
		[
			{
				name: 'MathML',
				text: '\\overline{AB} = 14',
			},
		],
		{ name: 'Box', type: 'close' },
		{ name: 'SubParagraph', type: 'close' },

		{ name: 'Shell', type: 'close' },
	],
};

import parser from '@/lib/parser';

export default {
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
:H1[]
:P[]
      `,
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		{
			name: 'H2',
			text: 'Tabella dei valori del Calore Specifico',
		},
		{
			name: 'P',
			text: 'Vediamo in questa tabella tutti i possibili valori del calore specifico, a seconda del contesto e delle unità di misura.',
		},

		{ name: 'Table', type: 'open' },
		`
|In **Joule** (Sistema Internazionale - S.I.)|In **Calorie**|
| :--- | :--- |
|:MathML[c = 4186 \\frac{J}{kg\\cdot K}]|:MathML[c = 1 \\frac{kcal}{kg\\cdot K}]|
|:MathML[c = 4,186 \\frac{J}{g\\cdot K}]|:MathML[c = 1 \\frac{cal}{g\\cdot K}]|
    `,
		{ name: 'Table', type: 'close' },

		{
			name: 'H2',
			text: 'Significato Pratico',
		},
		{
			name: 'P',
			text: 'Il calore specifico è la quantità di calore necessaria per far aumentare la temperatura di ',
		},
		{
			name: 'MathML',
			text: '1K',
		},
		{
			name: 'P',
			text: '(o di',
		},
		{
			name: 'MathML',
			text: '1 ^\\circ C',
		},
		{
			name: 'P',
			text: ') ad  ',
		},
		{
			name: 'MathML',
			text: '1 kg',
		},
		{
			name: 'P',
			text: "d'acqua. Quindi, se abbiamo in una pentola esattamente ",
		},
		{
			name: 'MathML',
			text: '1kg',
		},
		{
			name: 'P',
			text: 'di acqua e misuriamo con un termometro che sta a ',
		},
		{
			name: 'MathML',
			text: '25 ^\\circ',
		},
		{
			name: 'P',
			text: ', se gli forniamo',
		},
		{
			name: 'MathML',
			text: '4186J',
		},
		{
			name: 'P',
			text: 'di calore, vedremo che il termometro arriverà a ',
		},
		{
			name: 'MathML',
			text: '26 ^\\circ',
		},
		{
			name: 'P',
			text: ', quindi si è innalzata la temperatura di',
		},
		{
			name: 'MathML',
			text: '1 ^\\circ.',
		},

		{
			name: 'H2',
			text: 'Legge della Calorimetria',
		},
		{
			name: 'P',
			text: 'Il calore specifico viene utilizzato nella Legge della Calorimetria. La legge risponde alla domanda: "Quanto calore',
		},
		{
			name: 'MathML',
			text: 'Q',
		},
		{
			name: 'P',
			text: 'è necessario per far compiere un salto di temperatura',
		},
		{
			name: 'MathML',
			text: '\\Delta T',
		},
		{
			name: 'P',
			text: 'ad una massa',
		},
		{
			name: 'MathML',
			text: 'm',
		},
		{
			name: 'P',
			text: 'd\'acqua?"',
		},
		{ name: 'Box', type: 'open', props: { variant: 'theory' } },
		{
			name: 'H4',
			text: 'Formula della Calorimetria',
		},
		{
			name: 'MathML',
			text: 'Q = m\\cdot c \\cdot \\Delta T',
		},
		{ name: 'Box', type: 'close' },

		{
			name: 'H2',
			text: 'Esempio di calcolo',
		},
		{
			name: 'P',
			text: 'Calcoliamo quanto calore è necessario per portare ad ebollizione ',
		},
		{
			name: 'MathML',
			text: '(100 ^\\circ C)',
		},
		{
			name: 'P',
			text: "una quantità d'acqua di",
		},
		{
			name: 'MathML',
			text: '2kg',
		},
		{
			name: 'P',
			text: 'che sta a temperatura ambiente',
		},
		{
			name: 'MathML',
			text: '(25 ^\\circ C)',
		},
		{
			name: 'P',
			text: 'In primis, calcoliamo la differenza di temperatura',
		},
		{
			name: 'MathML',
			text: '\\Delta T',
		},
		{
			name: 'P',
			text: ', la quale è definita come la differenza tra la **temperatura finale** e la **temperatura iniziale**:',
		},
		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: '\\Delta T =T_2 - T_1 =100^\\circ C - 25 ^\\circ C = 75 ^\\circ C',
			},
		],
		{ name: 'Box', type: 'close' },
		{
			name: 'P',
			text: 'Adesso, possiamo tranquillamente applicare la **Formula della Calorimetria**:',
		},
		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: 'Q = m\\cdot c\\cdot \\Delta T = 2kg\\cdot4186 \\frac{J}{kg\\cdot ^\\circ C   }\\cdot75 ^\\circ C= 627,9kJ',
			},
		],
		{ name: 'Box', type: 'close' },
		{
			name: 'P',
			text: 'Quindi, il risultato finale è:',
		},

		{ name: 'Box', type: 'open', props: { variant: 'result' } },
		[
			{
				name: 'MathML',
				text: 'Q = 627,9kJ',
			},
		],
		{ name: 'Box', type: 'close' },

		{ name: 'Shell', type: 'close' },
	],
};

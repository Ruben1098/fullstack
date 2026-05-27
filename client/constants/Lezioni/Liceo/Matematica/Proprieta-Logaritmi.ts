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
:H1[]
:P[]
      `,

	content: [
		{ name: 'Shell', props: { type: 'open' } },

		{
			name: 'H2',
			text: 'Tabella delle Proprietà dei Logaritmi',
		},
		{
			name: 'P',
			text: 'Vediamo in questa tabella tutte le proprietà di cui godono i logaritmi.',
		},

		{ name: 'Table', type: 'open' },
		`
  |Proprietà|Formula|
  | :--- |:--- |
  |Logaritmo del Prodotto|:MathML[\\log_{a}{(b\\cdot c)} = \\log_{a}{(b)} + \\log_{a}{(c)}]|
  |Logaritmo del Rapporto|:MathML[\\log_{a}{(\\frac{b}{c})} = \\log_{a}{(b)} - \\log_{a}{(c)}]|
  |Logaritmo dell'Esponenziale|:MathML[\\log_{a}{(b^c)} = c\\cdot\\log_{a}{(b)}]|
  |Logaritmo di Inversione dei Logaritmi|:MathML[\\log_{a}{(b)} = \\frac{1}{\\log_{b}{(a)}}]|
  |Formula del Cambiamento di Base|:MathML[\\log_{a}{(b)} = \\frac{\\log_{c}{(b)}}{\\log_{c}{(a)}}]|
  |Formula della radice|:MathML[\\log_{a}{(\\root{n}{b})} = (\\frac{1}{n})\\log_{a}{(b)}]|
      `,
		{ name: 'Table', type: 'close' },

		{
			name: 'H2',
			text: 'Definizione di Logaritmo',
		},
		{
			name: 'P',
			text: 'Vediamo insieme la **Definizione di Logaritmo**.',
		},
		{ name: 'Box', type: 'open', props: { variant: 'theory' } },
		{
			name: 'H4',
			text: 'Definizione',
		},
		{
			name: 'div',
			type: 'open',
			props: { className: 'inline-block relative mx-auto *:m-0!' },
		},
		{
			name: 'P',
			text: 'Il risultato del logaritmo',
		},
		{
			name: 'MathML',
			text: 'x',
		},
		{
			name: 'P',
			text: " è l'esponente che dobbiamo dare alla base",
		},
		{
			name: 'MathML',
			text: 'a',
		},
		{
			name: 'P',
			text: "per ottenere l'argomento ",
		},
		{
			name: 'MathML',
			text: 'b.',
		},
		{ name: 'div', type: 'close' },
		{
			name: 'MathML',
			text: '\\log_a(b) = x \\iff a^x = b',
		},
		{ name: 'Box', type: 'close' },
		//--------------------
		{
			name: 'H2',
			text: 'Risultati immediati',
		},
		{
			name: 'P',
			text: 'Esistono alcuni logaritmi il cui risultati è facilissimo e immediato. Questi logaritmi **sono sempre veri!**',
		},
		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'H3',
				text: 'Logaritmo di 1',
			},
			{
				name: 'P',
				text: 'Indipendentemente dalla base, il logaritmo di',
			},
			{
				name: 'MathML',
				text: '1',
			},
			{
				name: 'P',
				text: 'fa sempre',
			},
			{
				name: 'MathML',
				text: '0',
			},
		],
		{ name: 'SubParagraph', type: 'close' },
		{ name: 'Box', type: 'open', props: { variant: 'theory' } },
		{
			name: 'MathML',
			text: '\\log_{a}{(1)} = 0',
		},
		{ name: 'Box', type: 'close' },
		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'H3',
				text: 'Logaritmo con base e argomento UGUALI',
			},
			{
				name: 'P',
				text: 'Anche in questo caso, indipendentemente dalla base, se la base del logaritmo e il suo argomento sono uguali, il risultato è sempre ',
			},
			{
				name: 'MathML',
				text: '1.',
			},
		],
		{ name: 'SubParagraph', type: 'close' },
		{ name: 'Box', type: 'open', props: { variant: 'theory' } },
		{
			name: 'MathML',
			text: '\\log_{a}{(a)} = 1',
		},
		{ name: 'Box', type: 'close' },

		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'H3',
				text: 'Formula "Annulla-Tutto"',
			},
			{
				name: 'P',
				text: 'Se abbiamo un logaritmo di un numero con una certa base, se mettiamo tutto il logaritmo a esponente della stessa base, otteniamo il numero stesso. In pratica, stiamo facendo due operazioni che sono opposte nello stesso momento.',
			},
		],
		{ name: 'SubParagraph', type: 'close' },
		{ name: 'Box', type: 'open', props: { variant: 'theory' } },

		{
			name: 'MathML',
			text: 'a^{\\log_{a}{(x)}} = x',
		},
		{ name: 'Box', type: 'close' },

		{
			name: 'H2',
			text: 'Esempio Completo',
		},

		{
			name: 'P',
			text: "Risolviamo un'espressione applicando le proprietà una alla volta per smontarla in pezzi molto semplici.",
		},
		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		{
			name: 'MathML',
			text: '\\log_5 ( \\frac{125 \\cdot \\sqrt{5}}{25} )',
		},
		{ name: 'Box', type: 'close' },
		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'H3',
				text: 'Step 1: Il Quoziente.',
			},
			{
				name: 'P',
				text: 'La linea di frazione si trasforma in una sottrazione tra due logaritmi.',
			},
		],
		{ name: 'SubParagraph', type: 'close' },
		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		{
			name: 'MathML',
			text: '\\log_5 (125 \\cdot \\sqrt{5}) - \\log_5 (25)',
		},
		{ name: 'Box', type: 'close' },
		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'H3',
				text: 'Step 2: Il Prodotto',
			},
			{
				name: 'P',
				text: "Nel primo logaritmo abbiamo una moltiplicazione, che spezziamo in un'addizione.",
			},
		],
		{ name: 'SubParagraph', type: 'close' },
		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: '\\log_5 (125) + \\log_5 (\\sqrt{5}) - \\log_5 (25)',
			},
		],
		{ name: 'Box', type: 'close' },
		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'H3',
				text: 'Step 3: La Radice',
			},
			{
				name: 'P',
				text: 'Trasformiamo la radice quadrata nella sua forma esponenziale con ',
			},

			{
				name: 'MathML',
				text: '\\frac{1}{2}',
			},
			{
				name: 'P',
				text: " all'esponente. ",
			},
		],
		{ name: 'SubParagraph', type: 'close' },
		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: '\\log_5 (125) + \\log_5 (5)^{\\frac{1}{2}} - \\log_5 (25)',
			},
		],
		{ name: 'Box', type: 'close' },
		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'P',
				text: 'Quindi, lo portiamo davanti al logaritmo..',
			},
		],
		{ name: 'SubParagraph', type: 'close' },
		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: '\\log_5 (125) + \\frac{1}{2}\\log_5 (5) - \\log_5 (25)',
			},
		],
		{ name: 'Box', type: 'close' },
		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'H3',
				text: 'Step 4: Calcolo Finale',
			},
			{
				name: 'P',
				text: 'Ora i logaritmi sono elementari! Sappiamo che ',
			},
			{
				name: 'MathML',
				text: '5^3 = 125',
			},
			{
				name: 'P',
				text: ', che ',
			},
			{
				name: 'MathML',
				text: '\\log_5(5) = 1',
			},
			{
				name: 'P',
				text: ' e che ',
			},
			{
				name: 'MathML',
				text: '5^2 = 25',
			},
			{
				name: 'P',
				text: '. Sostituiamo i numeri:',
			},
		],
		{ name: 'SubParagraph', type: 'close' },
		{ name: 'Box', type: 'open', props: { variant: 'step' } },
		[
			{
				name: 'MathML',
				text: '3 + \\frac{1}{2}\\cdot 1 - 2 = 1 + \\frac{1}{2} = \\frac{3}{2}',
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
				text: '\\log_5 ( \\frac{125 \\cdot \\sqrt{5}}{25} ) = \\frac{3}{2}',
			},
		],
		{ name: 'Box', type: 'close' },

		//----------------------------

		{ name: 'Shell', type: 'close' },
	],
};

import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'concetto-limite-definizione-esempi',
	title: 'Il Concetto di Limite: Spiegazione Completa, Definizioni ed Esempi',
	excerpt: 'Guida introduttiva ai limiti in Analisi Matematica: i 4 casi di limite (finito e infinito), teoria semplice e come capire se un limite esiste o meno.',
	category: 'Analisi1',
	school: 'liceo',
	class: '5',
	course: 'Matematica',
	argument: 'Limiti',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
:H1[Introduzione ai Limiti: Cos'è un Limite, i 4 Casi Possibili e le Condizioni di Esistenza]
:P[Il limite è un'operazione che descrive il comportamento di una funzione quando la variabile ]:InlineMath[x]:P[ si avvicina a un certo valore ]:InlineMath[x_0]:P[ Calcolare un limite significa rispondere alla domanda: **"A quale valore si avvicina la y mentre la x si avvicina a un certo punto?"**]
`,
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		{
			name: 'H2',
			text: 'Tabella Completa',
		},
		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Per avere subito un quadro chiaro prima di scendere nei dettagli teorici, ecco i 4 scenari principali.',
			},
		],
		{ name: 'div', type: 'close' },

		{ name: 'Table', type: 'open' },
		`
  | Tipologia | Limite | Grafico |
  | :--- | :--- | :--- |
  | **Finito su Finito** | :MathML[\\lim_{x \\to x_0} f(x) = l] | Continuità o "buco". |
  | **Infinito su Finito** | :MathML[\\lim_{x \\to x_0} f(x) = \\infty] | Asintoto Verticale. |
  | **Finito su Infinito** | :MathML[\\lim_{x \\to \\infty} f(x) = l] | Asintoto Orizzontale. |
  | **Infinito su Infinito** | :MathML[\\lim_{x \\to \\infty} f(x) = \\infty]  | Crescita illimitata. |`,
		{ name: 'Table', type: 'close' },

		{
			name: 'H2',
			text: 'Limiti: i 4 casi',
		},

		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Analizziamo adesso nel dettaglio i 4 possibili scenari che possiamo incontrare:',
			},
		],
		{ name: 'div', type: 'close' },

		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'H3',
				text: 'Caso A: Limite Finito per x finita',
			},
			{
				name: 'P',
				text: 'Questo è il caso classico: quando la ',
			},
			{
				name: 'InlineMath',
				text: 'x',
			},
			{
				name: 'P',
				text: ' si avvicina a ',
			},
			{
				name: 'InlineMath',
				text: 'x_0',
			},
			{
				name: 'P',
				text: ', la funzione si "schiaccia" verso un valore ',
			},
			{
				name: 'InlineMath',
				text: 'l.',
			},
			{
				name: 'P',
				text: 'Quindi, dimmi quanto poco vuoi sbagliare sul risultato finale per garantirtelo.',
			},
			{
				name: 'InlineMath',
				text: '(ε)',
			},
			{
				name: 'P',
				text: ', e io ti dirò quanto devi stare vicino al punto di partenza ',
			},
			{
				name: 'InlineMath',
				text: '(δ).',
			},
		],
		{ name: 'SubParagraph', type: 'close' },

		{ name: 'Box', type: 'open', props: { variant: 'theory' } },
		[
			{ name: 'H4', text: 'Definizione' },
			{ name: 'div', type: 'open' },
			{
				name: 'P',
				text: 'Il limite finito ',
			},
			{
				name: 'InlineMath',
				text: 'l',
			},
			{
				name: 'P',
				text: 'di una funzione',
			},
			{
				name: 'InlineMath',
				text: 'f(x)',
			},
			{
				name: 'P',
				text: 'per ',
			},
			{
				name: 'InlineMath',
				text: 'x',
			},
			{
				name: 'P',
				text: 'che tende a un valore finito ',
			},
			{
				name: 'InlineMath',
				text: 'x_0',
			},
			{
				name: 'P',
				text: 'è ',
			},
			{
				name: 'InlineMath',
				text: 'l ',
			},
			{
				name: 'P',
				text: 'se, per ogni ',
			},
			{
				name: 'InlineMath',
				text: '\\epsilon > 0',
			},
			{
				name: 'P',
				text: '(arbitrariamente piccolo), esiste un numero ',
			},
			{
				name: 'InlineMath',
				text: '\\delta > 0 ',
			},
			{
				name: 'P',
				text: 'tale che, per ogni ',
			},
			{
				name: 'InlineMath',
				text: 'x ',
			},
			{
				name: 'P',
				text: 'appartenente al dominio, si ha ',
			},
			{
				name: 'InlineMath',
				text: '|f(x) - l| < \\epsilon ',
			},
			{
				name: 'P',
				text: 'ogniqualvolta ',
			},
			{
				name: 'InlineMath',
				text: '0 < |x - x_0| < \\delta.',
			},

			{ name: 'div', type: 'close' },

			{
				name: 'MathML',
				text: '\\forall \\epsilon > 0, \\exists \\delta > 0 : \\forall x \\in D \\setminus \\{x_0\\}, 0 < |x - x_0| < \\delta \\implies |f(x) - l| < \\epsilon',
			},
			{ name: 'div', type: 'close' },
			{ name: 'div', type: 'open' },
		],
		{ name: 'Box', type: 'close' },

		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'H3',
				text: 'Caso B: Limite Infinito per x finito',
			},
			{ name: 'SubParagraph', type: 'open' },
			[
				{
					name: 'P',
					text: 'In questo caso, il limite descrive il comportamento della funzione che, man mano che la ',
				},
				{
					name: 'InlineMath',
					text: 'x ',
				},
				{
					name: 'P',
					text: 'si avvicina al punto ',
				},
				{
					name: 'InlineMath',
					text: 'x_0, ',
				},
				{
					name: 'P',
					text: "la funzione va all'infinito verso l'alto o verso il basso. Quindi x_0 è un asintoto orizzontale per la funzione.",
				},
			],
			{
				name: 'SubParagraph',
				type: 'close',
			},
		],
		{ name: 'SubParagraph', type: 'close' },

		{ name: 'Box', type: 'open', props: { variant: 'theory' } },
		[
			{ name: 'H4', text: 'Definizione' },
			{ name: 'div', type: 'open' },
			{
				name: 'P',
				text: 'Il limite infinito della funzione ',
			},
			{
				name: 'InlineMath',
				text: 'f(x)',
			},
			{
				name: 'P',
				text: 'per ',
			},
			{
				name: 'InlineMath',
				text: 'x ',
			},
			{
				name: 'P',
				text: 'che tende a un valore finito ',
			},
			{
				name: 'InlineMath',
				text: 'x_0',
			},
			{
				name: 'P',
				text: 'è infinito se, per ogni',
			},
			{
				name: 'InlineMath',
				text: 'M>0',
			},
			{
				name: 'P',
				text: 'grande a piacere, esiste un numero',
			},
			{
				name: 'InlineMath',
				text: '\\delta>0',
			},
			{
				name: 'P',
				text: 'tale che, per ogni',
			},
			{
				name: 'InlineMath',
				text: 'x',
			},
			{
				name: 'P',
				text: 'appartenente al dominio si ha ',
			},
			{
				name: 'InlineMath',
				text: '|f(x)|>M',
			},
			{
				name: 'P',
				text: 'ogniqualvolta',
			},
			{
				name: 'InlineMath',
				text: '0 < |x - x_0| < \\delta.',
			},
			{ name: 'div', type: 'close' },
			{
				name: 'MathML',
				text: '\\forall M > 0, \\exists \\delta > 0 : \\forall x \\in D \\setminus \\{x_0\\}, 0 < |x - x_0| < \\delta\\implies |f(x)| > M',
			},
		],

		{ name: 'Box', type: 'close' },

		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'H3',
				text: "Caso C: Limite Finito per x che tende all'Infinito",
			},
			{
				name: 'P',
				text: 'In questo caso la ',
			},
			{
				name: 'InlineMath',
				text: 'x ',
			},
			{
				name: 'P',
				text: "tende all'infinito (verso sinistra oppure verso destra). Nel frattempo la ",
			},
			{
				name: 'InlineMath',
				text: 'y',
			},
			{
				name: 'P',
				text: 'si assesta su un valore finito',
			},
			{
				name: 'InlineMath',
				text: 'l.',
			},
			{
				name: 'P',
				text: 'Perciò la retta orizzontale',
			},
			{
				name: 'InlineMath',
				text: 'y=l',
			},
			{
				name: 'P',
				text: 'è un asintoto **orizzontale** per la funzione.',
			},
		],
		{ name: 'SubParagraph', type: 'close' },

		{ name: 'Box', type: 'open', props: { variant: 'theory' } },
		[
			{ name: 'H4', text: 'Definizione' },
			{ name: 'div', type: 'open' },
			{
				name: 'P',
				text: 'Il limite finito ',
			},
			{
				name: 'InlineMath',
				text: 'l',
			},
			{
				name: 'P',
				text: ' di una funzione',
			},
			{
				name: 'InlineMath',
				text: ' f(x)',
			},
			{
				name: 'P',
				text: 'per',
			},
			{
				name: 'InlineMath',
				text: 'x',
			},
			{
				name: 'P',
				text: "che tende all'infinito è ",
			},
			{
				name: 'InlineMath',
				text: 'l',
			},
			{
				name: 'P',
				text: 'se per ogni',
			},
			{
				name: 'InlineMath',
				text: ' \\epsilon > 0',
			},
			{
				name: 'P',
				text: 'piccolo a piacere, esiste un numero',
			},
			{
				name: 'InlineMath',
				text: 'N > 0',
			},
			{
				name: 'P',
				text: '(dipendente da \\epsilon) tale che, per ogni',
			},
			{
				name: 'InlineMath',
				text: 'x',
			},
			{
				name: 'P',
				text: 'appartenente al dominio, si ha ',
			},
			{
				name: 'InlineMath',
				text: '|f(x) - l| < \\epsilon',
			},
			{
				name: 'P',
				text: 'ogniqualvolta',
			},
			{
				name: 'InlineMath',
				text: '|x| > N.',
			},
			{
				name: 'div',
				type: 'close',
			},
			{
				name: 'MathML',
				text: '\\forall \\epsilon > 0, \\exists N > 0 : \\forall x \\in D, |x| > N \\implies |f(x) - l| < \\epsilon',
			},
		],
		{ name: 'Box', type: 'close' },

		{ name: 'SubParagraph', type: 'open' },
		[
			{
				name: 'H3',
				text: "Caso D: Limite infinito per x che tende all'infinito",
			},
			{
				name: 'P',
				text: 'In questo ultimo caso non abbiamo asintoti di nessun tipo, e nemmeno un valore finito come risultato. Semplicemente, quando la',
			},
			{
				name: 'InlineMath',
				text: 'x',
			},
			{
				name: 'P',
				text: "tende all'infinito (verso sinistra o verso destra), anche la ",
			},
			{
				name: 'InlineMath',
				text: 'y',
			},
			{
				name: 'P',
				text: "tende all'infinito (verso l'alto o verso il basso).",
			},
		],
		{ name: 'SubParagraph', type: 'close' },

		{ name: 'Box', type: 'open', props: { variant: 'theory' } },
		[
			{ name: 'H4', text: 'Definizione' },
			{ name: 'div', type: 'open' },
			[
				{
					name: 'P',
					text: 'Il limite infinito di una funzione ',
				},
				{
					name: 'InlineMath',
					text: 'f(x)',
				},
				{
					name: 'P',
					text: ' per ',
				},
				{
					name: 'InlineMath',
					text: 'x',
				},
				{
					name: 'P',
					text: " che tende all'infinito è ",
				},
				{
					name: 'InlineMath',
					text: '\\infty',
				},
				{
					name: 'P',
					text: ' se, per ogni ',
				},
				{
					name: 'InlineMath',
					text: 'M > 0',
				},
				{
					name: 'P',
					text: ' (arbitrariamente grande), esiste un numero ',
				},
				{
					name: 'InlineMath',
					text: 'N > 0',
				},
				{
					name: 'P',
					text: ' (dipendente da ',
				},
				{
					name: 'InlineMath',
					text: 'M',
				},
				{
					name: 'P',
					text: ') tale che, per ogni ',
				},
				{
					name: 'InlineMath',
					text: 'x',
				},
				{
					name: 'P',
					text: ' appartenente al dominio, si ha ',
				},
				{
					name: 'InlineMath',
					text: '|f(x)| > M',
				},
				{
					name: 'P',
					text: ' ogniqualvolta ',
				},
				{
					name: 'InlineMath',
					text: '|x| > N',
				},
				{
					name: 'P',
					text: '.',
				},
			],
			{ name: 'div', type: 'close' },
			{
				name: 'MathML',
				text: '\\lim_{x \\to \\infty} f(x) = \\infty \\iff \\forall M > 0, \\exists N > 0 : \\forall x \\in D, |x| > N \\implies |f(x)| > M',
			},
		],
		{ name: 'Box', type: 'close' },
		{
			name: 'H2',
			text: 'Teorema di esistenza del limite',
		},
		{ name: 'div', type: 'open' },
		[
			{
				name: 'P',
				text: 'Attenzione a non dare per scontato che il limite esista sempre. Nel caso di limite finito per ',
			},
			{
				name: 'InlineMath',
				text: 'x',
			},
			{
				name: 'P',
				text: 'che tende a un valore finito l (Caso A), il limite esiste **esclusivamente** se il risultato è lo stesso sia provenendo da sinistra che provenendo da destra. Altrimenti, non esiste.',
			},
		],
		{ name: 'div', type: 'close' },

		{ name: 'Box', type: 'open', props: { variant: 'theory' } },
		[
			{ name: 'H4', text: 'Teorema' },
			{ name: 'div', type: 'open' },
			{
				name: 'P',
				text: 'Il limite esiste se e solo se **il limite destro** e il **limite sinistro** coincidono:',
			},
			{ name: 'div', type: 'close' },

			{
				name: 'MathML',
				text: '\\lim_{x \\to x_0} f(x) = l \\iff \\lim_{x \\to x_0^-} f(x) = \\lim_{x \\to x_0^+} f(x) = l',
			},
			{ name: 'div', type: 'open' },
			{
				name: 'P',
				text: 'Se il limite destro e il limite sinistro sono diversi, allora il limite **non esiste**:',
			},
			{ name: 'div', type: 'close' },
			{
				name: 'MathML',
				text: ' \\lim_{x \\to x_0^-} f(x) \\neq \\lim_{x \\to x_0^+} f(x) \\implies\\nexists \\lim_{x \\to x_0} f(x) ',
			},
		],
		{ name: 'Box', type: 'close' },

		{ name: 'Shell', type: 'close' },
	],
};

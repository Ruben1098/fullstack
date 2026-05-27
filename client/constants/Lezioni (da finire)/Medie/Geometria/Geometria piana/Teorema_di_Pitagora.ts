import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'teorema-di-pitagora',
	school: 'medie',
	class: '2',
	title: 'Teorema di Pitagora: Formule, Terne ed Esercizi Svolti',
	excerpt: 'Guida completa al Teorema di Pitagora. Scopri le formule per cateti e ipotenusa, impara le terne pitagoriche e guarda gli esercizi svolti passo-passo.',
	category: 'Geometria',
	course: 'Matematica',
	argument: 'Teoremi',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Teorema di Pitagora: Formule e Spiegazione Semplice
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: "Cos'è il Teorema di Pitagora?" },
		"È una legge geometrica valida esclusivamente per i **triangoli rettangoli**. Afferma che l'area del quadrato costruito sull'ipotenusa è uguale alla somma delle aree dei quadrati costruiti sui due cateti.",
		'',
		'',
		'',
		'La formula fondamentale è:',
		{
			name: 'MathML',
			props: { className: 'text-xl mx-auto' },
			text: 'c^2 = a^2 + b^2',
		},

		// TABELLA FORMULE
		{ name: 'H2', text: 'Tabella delle Formule' },
		'Ecco gli strumenti per risolvere i problemi. Scegli la formula in base al lato che devi trovare.',
		'',
		`| Cosa cerchi? | Formula da usare | Regola mentale |
| :--- | :--- | :--- |
| **Ipotenusa ($c$)** | $c = \\sqrt{a^2 + b^2}$ | Lato lungo: **SOMMA** (+) |
| **Cateto ($a$)** | $a = \\sqrt{c^2 - b^2}$ | Lato corto: **SOTTRAI** (-) |
| **Cateto ($b$)** | $b = \\sqrt{c^2 - a^2}$ | Lato corto: **SOTTRAI** (-) |`,
		'',

		// TERMINOLOGIA
		{ name: 'H2', text: 'Capire i termini: Ipotenusa e Cateti' },
		'Prima di calcolare, devi saper riconoscere i pezzi del triangolo.',
		'',
		'',
		'',
		"* **Ipotenusa ($c$):** È sempre il lato più lungo. Si trova di fronte all'angolo retto (90°).",
		'* **Cateti ($a, b$):** Sono i due lati più corti che formano la "L" dell\'angolo retto.',

		// ERRORI COMUNI (BOX ALERT)
		{ name: 'H2', text: '⚠️ Errori Comuni' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: '1. Dimenticare la Radice Quadrata' },
					'Molti fanno ',
					{ name: 'MathML', text: '3^2 + 4^2 = 25' },
					' e scrivono "Risultato: 25".',
					"**Attenzione!** 25 è l'area del quadrato. Il lato è ",
					{ name: 'MathML', text: '\\sqrt{25} = 5' },
					'.',
					'',
					{ name: 'H3', text: '2. Sbagliare il Segno' },
					"* Cerchi l'Ipotenusa? Usa il **PIÙ**.",
					'* Cerchi un Cateto? Usa il **MENO**.',
				],
			},
		},

		// ESERCIZIO GUIDATO
		{ name: 'H2', text: "Esercizio Guidato: Calcolo dell'Ipotenusa" },
		"**Traccia:** Un triangolo rettangolo ha i cateti che misurano 6 cm e 8 cm. Calcola l'ipotenusa.",

		{ name: 'H3', text: 'Passo 1: Analisi' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: ["Conosciamo i cateti (6 e 8). Cerchiamo l'ipotenusa.", 'Dobbiamo "ingrandire", quindi useremo il segno **PIÙ**.'],
			},
		},

		{ name: 'H3', text: 'Passo 2: Calcoli' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64}',
					},
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'c = \\sqrt{100}',
					},
				],
			},
		},

		{ name: 'H3', text: 'Passo 3: Risultato' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [{ name: 'MathML', text: 'c = 10 \\text{ cm}' }],
			},
		},

		// TERNE PITAGORICHE
		{ name: 'H2', text: 'Il Trucco delle "Terne Pitagoriche"' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					'Sono gruppi di tre numeri interi che rispettano sempre il teorema. Se li riconosci, non serve calcolare!',
					'',
					'* **3, 4, 5** (e multipli: 6, 8, 10...)',
					'* **5, 12, 13**',
					'* **8, 15, 17**',
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

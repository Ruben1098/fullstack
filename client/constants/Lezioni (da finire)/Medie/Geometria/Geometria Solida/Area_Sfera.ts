import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'area-sfera-formule-calcolo',
	school: 'medie',
	class: '3',
	title: 'Area della Sfera: Formula, Calcolo e Trucchi (con Esercizi)',
	excerpt: "Come si calcola l'area della sfera? Scopri la formula S = 4πr², come ricavare il raggio dal volume e il trucco del semicerchio. Scarica il PDF con gli esercizi.",
	category: 'Geometria Solida',
	course: 'Matematica',
	argument: 'Solidi di Rotazione',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Area della Sfera: Formula e Come si Calcola
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: "Come si calcola l'area della sfera?" },
		"L'area della superficie sferica si calcola moltiplicando per **4** l'area del suo cerchio massimo.",
		'',
		'',
		'',
		'La formula fondamentale è:',
		{
			name: 'MathML',
			props: { className: 'text-xl mx-auto' },
			text: 'S = 4 \\pi r^2',
		},
		'Dove **r** è il raggio della sfera.',

		// TABELLA FORMULE
		{ name: 'H2', text: 'Tabella delle Formule' },
		'Ecco la cassetta degli attrezzi per risolvere ogni problema.',
		'',
		`| Dati che hai | Formula per il Raggio | Formula Area ($S$) |
| :--- | :--- | :--- |
| **Raggio ($r$)** | --- | $S = 4 \\pi r^2$ |
| **Diametro ($d$)** | $r = d : 2$ | $S = \\pi d^2$ |
| **Circonferenza ($C$)** | $r = \\frac{C}{2\\pi}$ | $S = \\frac{C^2}{\\pi}$ |
| **Volume ($V$)** | $r = \\sqrt[3]{\\frac{3V}{4\\pi}}$ | $S = 4 \\pi r^2$ |`,
		'',

		// ESERCIZIO 1: CALCOLO CLASSICO
		{ name: 'H2', text: 'Esercizio Svolto: Calcolo Classico' },
		"**Traccia:** Calcola l'area di una sfera con raggio di 5 cm.",
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					'Basta applicare la formula diretta:',
					{ name: 'MathML', text: 'S = 4 \\cdot \\pi \\cdot 5^2' },
					{
						name: 'MathML',
						text: 'S = 4 \\cdot \\pi \\cdot 25 = 100\\pi \\text{ cm}^2',
					},
				],
			},
		},
		'*(Consiglio: Se non richiesto, lascia il Pi Greco indicato. È più elegante!)*',

		// ESERCIZIO 2: DAL VOLUME (DIFFICILE)
		{ name: 'H2', text: "Caso Difficile: Dal Volume all'Area" },
		"**Traccia:** Volume = 904,32 m³. Trova l'area. (Pi Greco = 3,14).",

		{ name: 'H3', text: 'Passo 1: Trova il raggio (Formula Inversa)' },
		'Dobbiamo estrarre il raggio dal volume usando la radice cubica.',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'r = \\sqrt[3]{\\frac{3 \\cdot 904,32}{4 \\cdot 3,14}} = \\sqrt[3]{\\frac{2712,96}{12,56}}',
					},
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'r = \\sqrt[3]{216} = 6 \\text{ m}',
					},
				],
			},
		},

		{ name: 'H3', text: "Passo 2: Calcola l'Area" },
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [
					'Ora è facile:',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'S = 4 \\cdot 3,14 \\cdot 6^2 = 452,16 \\text{ m}^2',
					},
				],
			},
		},

		// SEMICERCHIO GENERATORE
		{ name: 'H2', text: 'Il Caso "Semicerchio Generatore" (Rotazione)' },
		'Spesso i prof dicono: *"Un semicerchio ruota attorno al proprio diametro..."*. Un semicerchio che gira su se stesso crea una sfera.',
		'',
		'',
		'',
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{ name: 'H3', text: 'Il Trucco Segreto ⚡' },
					"Se conosci l'Area del Semicerchio ($A_{sc}$), non serve calcolare il raggio!",
					"L'Area della sfera è esattamente **8 volte** l'area del semicerchio che la genera.",
					{ name: 'MathML', text: 'S = 8 \\cdot A_{sc}' },
				],
			},
		},

		// ERRORI COMUNI
		{ name: 'H2', text: '⚠️ Errori Comuni' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: '1. Confondere quadrato e cubo' },
					"L'Area è una superficie ($r^2$). Il Volume è uno spazio ($r^3$). Se scrivi $S = 4\\pi r^3$, stai sbagliando!",
					'',
					{ name: 'H3', text: '2. Scordarsi il diametro' },
					'Se il testo dice "Diametro = 10", il tuo cervello deve urlare "Raggio = 5"! Dividi sempre per due.',
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

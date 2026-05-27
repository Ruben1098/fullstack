import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'volume-sfera-formule-calcolo',
	school: 'medie',
	class: '3',
	title: 'Volume della Sfera: Formula, Calcolo e Inverse (con Esercizi)',
	excerpt: 'Come si calcola il volume della sfera? Scopri la formula V = 4/3 π r³, le formule inverse per trovare il raggio e il caso del semicerchio.',
	category: 'Geometria Solida',
	course: 'Matematica',
	argument: 'Solidi di Rotazione',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Volume della Sfera: Formula e Calcolo
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: 'Come si calcola il volume della sfera?' },
		'Il volume della sfera si calcola moltiplicando per **4/3** il prodotto tra il Pi Greco e il raggio elevato al cubo.',
		'',
		'',
		'',
		'La formula fondamentale è:',
		{
			name: 'MathML',
			props: { className: 'text-xl mx-auto' },
			text: 'V = \\frac{4}{3} \\pi r^3',
		},

		// TABELLA FORMULE
		{ name: 'H2', text: 'Tabella delle Formule' },
		'Ecco tutte le formule che ti servono, comprese quelle inverse.',
		'',
		`| Dati che hai | Formula da usare |
| :--- | :--- |
| **Raggio ($r$)** | $V = \\frac{4}{3} \\pi r^3$ |
| **Diametro ($d$)** | $V = \\frac{1}{6} \\pi d^3$ |
| **Volume ($V$)** | $r = \\sqrt[3]{\\frac{3V}{4\\pi}}$ |
| **Area ($S$)** | Trova prima $r = \\sqrt{\\frac{S}{4\\pi}}$ |`,
		'',

		// ESERCIZIO DIRETTO
		{ name: 'H2', text: 'Esercizio Svolto: Calcolo Passo-Passo' },
		'**Traccia:** Calcola il volume di una sfera con raggio 6 cm.',

		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{ name: 'H3', text: 'Passo 1: Eleva il raggio al cubo' },
					'Questa è la priorità. Non moltiplicare prima!',
					{ name: 'MathML', text: 'r^3 = 6 \\cdot 6 \\cdot 6 = 216' },
				],
			},
		},

		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{ name: 'H3', text: 'Passo 2: Moltiplica per 4/3' },
					'Moltiplico per 4 e divido per 3 (o viceversa).',
					{
						name: 'MathML',
						text: 'V = \\frac{4 \\cdot 216}{3} \\cdot \\pi = 288\\pi',
					},
				],
			},
		},

		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [
					{ name: 'H3', text: 'Risultato Finale' },
					{ name: 'MathML', text: 'V = 288\\pi \\text{ cm}^3' },
					'(Circa 904,32 cm³)',
				],
			},
		},

		// FORMULE INVERSE
		{ name: 'H2', text: 'Formule Inverse: Dal Volume al Raggio' },
		'**Traccia:** Volume = 36 pigreco. Trova il raggio.',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					'Usiamo la formula con la radice cubica:',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'r = \\sqrt[3]{\\frac{3 \\cdot 36\\pi}{4\\pi}}',
					},
					'Semplifichiamo i Pi Greco e i numeri (36 : 4 = 9):',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'r = \\sqrt[3]{3 \\cdot 9} = \\sqrt[3]{27} = 3 \\text{ cm}',
					},
				],
			},
		},

		// ROTAZIONE
		{ name: 'H2', text: 'Il Semicerchio Generatore' },
		'Spesso i problemi dicono: *"Una sfera generata dalla rotazione di un semicerchio..."*.',
		'Immagina una bandierina a forma di mezzaluna che gira velocissima: vedi una sfera.',
		'',
		'',
		'',
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{ name: 'H3', text: 'Cosa devi sapere' },
					'* Il raggio del semicerchio è il raggio della sfera.',
					"* Se hai l'Area del semicerchio, trova il raggio e poi calcola il volume.",
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
					{ name: 'H3', text: '1. Confondere Cubo e Quadrato' },
					"Nell'Area usi r². Nel Volume usi **r³**. Non sbagliare esponente!",
					'',
					{ name: 'H3', text: '2. La trappola del Diametro' },
					'Se hai il diametro, dividi subito per 2. Mai usare il diametro nella formula 4/3.',
					'',
					{ name: 'H3', text: '3. Dimenticare il 4/3' },
					'Memorizzala come una filastrocca: "Quattro terzi, pi greco, erre al cubo".',
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

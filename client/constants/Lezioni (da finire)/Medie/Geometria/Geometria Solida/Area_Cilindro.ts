import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'area-cilindro-formule-calcolo',
	school: 'medie',
	class: '3', // Geometria solida si fa in terza
	title: 'Area del Cilindro: Formule, Superficie Laterale e Totale',
	excerpt: "Guida completa all'area del cilindro. Impara le formule (laterale e totale), il caso del cilindro equilatero e scarica il formulario PDF.",
	category: 'Geometria Solida',
	course: 'Matematica',
	argument: 'Solidi di Rotazione',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Area del Cilindro: Formule e Calcolo
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: "Come si calcola l'area del cilindro?" },
		'[immagine: src/Data/Images/Geometria_piana/Cilindro.webp]',
		'',
		"L'area totale del cilindro è la somma della sua superficie laterale e delle due basi.",
		'La formula completa è:',
		{
			name: 'MathML',
			props: { className: 'text-xl mx-auto' },
			text: 'S_{tot} = 2\\pi r h + 2\\pi r^2',
		},
		"Dove **r** è il raggio di base e **h** è l'altezza.",
		'Se ti serve solo la superficie laterale (il "tubo"), la formula è:',
		{
			name: 'MathML',
			props: { className: 'text-xl mx-auto' },
			text: 'S_{lat} = 2\\pi r h',
		},

		// TABELLA FORMULE
		{ name: 'H2', text: 'Tabella delle Formule' },
		'Ecco tutte le formule che ti servono per gli esercizi:',
		'',
		`| Grandezza | Simbolo | Formula Diretta |
| :--- | :--- | :--- |
| **Area di Base** | $S_b$ | $S_b = \\pi r^2$ |
| **Area Laterale** | $S_{lat}$ | $S_{lat} = 2\\pi r h$ |
| **Area Totale** | $S_{tot}$ | $S_{tot} = S_{lat} + 2 S_b$ |
| **Volume** | $V$ | $V = \\pi r^2 h$ |`,
		'',

		// FORMULE INVERSE
		{ name: 'H2', text: 'Formule Inverse: Trovare Raggio e Altezza' },
		"Spesso il problema ti dà l'area e tu devi trovare le dimensioni. Ecco come girare le formule.",
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{ name: 'H3', text: "Se conosci l'Area Laterale" },
					"* Cerchi l'altezza? ",
					{ name: 'MathML', text: 'h = \\frac{S_{lat}}{2\\pi r}' },
					'* Cerchi il raggio? ',
					{ name: 'MathML', text: 'r = \\frac{S_{lat}}{2\\pi h}' },
					'',
					{ name: 'H3', text: "Se conosci l'Area Totale" },
					"Devi prima isolare l'Area Laterale togliendo le basi:",
					{ name: 'MathML', text: 'S_{lat} = S_{tot} - 2 S_b' },
				],
			},
		},

		// CILINDRO EQUILATERO
		{ name: 'H2', text: 'Il Caso Speciale: Cilindro Equilatero' },
		'Fai molta attenzione se nel testo leggi "Cilindro Equilatero". Significa che l\'altezza è uguale al diametro di base (h = 2r).',
		'',
		'[immagine: src/Data/Images/Geometria_piana/CilindroQuadrato.webp]',
		'',
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					'Le formule diventano semplicissime (dipendono solo dal raggio):',
					'* **Area Laterale:** ',
					{ name: 'MathML', text: 'S_{lat} = 4\\pi r^2' },
					'* **Area Totale:** ',
					{ name: 'MathML', text: 'S_{tot} = 6\\pi r^2' },
				],
			},
		},

		// ESERCIZIO SVOLTO
		{ name: 'H2', text: 'Esercizio Svolto Passo-Passo' },
		'[immagine: src/Data/Images/Geometria_piana/Cilindro.webp]',
		'',
		"**Problema:** Un cilindro ha raggio di 4 cm e altezza di 10 cm. Calcola l'Area Laterale e Totale.",

		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{ name: 'H3', text: 'Passo 1: Area di Base' },
					{
						name: 'MathML',
						text: 'S_b = \\pi \\cdot 4^2 = 16\\pi \\text{ cm}^2',
					},
				],
			},
		},

		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{ name: 'H3', text: 'Passo 2: Area Laterale' },
					{
						name: 'MathML',
						text: 'S_{lat} = 2\\pi \\cdot 4 \\cdot 10 = 80\\pi \\text{ cm}^2',
					},
				],
			},
		},

		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [
					{ name: 'H3', text: 'Passo 3: Area Totale' },
					'Ricorda di sommare DUE basi!',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'S_{tot} = 80\\pi + 2(16\\pi) = 112\\pi \\text{ cm}^2',
					},
					'(Circa 351,68 cm²).',
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
					{ name: 'H3', text: '1. Dimenticare il "2" nell\'Area Totale' },
					"L'errore classico è fare Laterale + Base. No! Il cilindro ha un coperchio E un fondo. Devi aggiungere **due** basi.",
					'',
					{ name: 'H3', text: '2. Confondere Raggio e Diametro' },
					'Tutte le formule usano il raggio. Se hai il diametro, dividilo subito per due.',
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

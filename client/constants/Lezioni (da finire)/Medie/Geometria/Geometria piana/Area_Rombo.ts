import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'area-rombo-formule-calcolo',
	school: 'medie',
	class: '2',
	title: 'Area del Rombo: Formule, Calcolo e Trucchi (con Esercizi)',
	excerpt: "Come calcolare l'Area del Rombo? Guida completa alle formule (diagonali e base per altezza), formule inverse e il legame con il Teorema di Pitagora.",
	category: 'Geometria',
	course: 'Matematica',
	argument: 'Poligoni',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Area del Rombo: Formula e Come si Calcola
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		'[immagine: src/Data/Images/Geometria_piana/Rombo]',

		'',
		{ name: 'H2', text: "Come si calcola l'area del rombo?" },
		"La formula principale per calcolare l'area del rombo è il **semiprodotto delle diagonali**. Si moltiplica la diagonale maggiore (D) per la diagonale minore (d) e si divide il risultato per due.",
		"In alternativa, poiché il rombo è un parallelogramma, puoi anche moltiplicare il lato per l'altezza.",

		// TABELLA FORMULE
		{ name: 'H2', text: 'Tabella delle Formule' },
		`| Se conosci... | Usa questa formula |
| :--- | :--- |
| **Le due Diagonali** ($D, d$) | $A = \\frac{D \\cdot d}{2}$ |
| **Lato e Altezza** ($l, h$) | $A = l \\cdot h$ |
| **Area e Diagonale Min.** ($A, d$) | $D = \\frac{2 \\cdot A}{d}$ |
| **Area e Diagonale Magg.** ($A, D$) | $d = \\frac{2 \\cdot A}{D}$ |
| **Lato** (con Pitagora) | $l = \\sqrt{(\\frac{D}{2})^2 + (\\frac{d}{2})^2}$ |`,
		'',

		// 1. IL METODO CLASSICO
		{ name: 'H2', text: '1. Il Metodo Classico (Perché diviso 2?)' },
		'La formula più famosa è ',
		{ name: 'MathML', text: 'A = \\frac{D \\cdot d}{2}' },
		'. Ma ti sei mai chiesto perché dobbiamo dividere per due?',
		"Guarda l'immagine qui sotto: immagina di disegnare un rettangolo attorno al rombo.",
		'',
		'[immagine: src/Data/Images/Geometria_piana/RomboRettangolo.webp]',
		'',
		'* La base del rettangolo è uguale alla Diagonale minore (d).',
		"* L'altezza del rettangolo è uguale alla Diagonale maggiore (D).",
		"* L'area del rettangolo sarebbe ",
		{ name: 'MathML', text: 'D \\cdot d' },
		'.',
		'',
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{ name: 'H3', text: 'Il Segreto' },
					'Il rombo occupa esattamente la **metà** dello spazio del rettangolo (i 4 triangoli esterni si "ripiegano" perfettamente all\'interno). Ecco svelato il mistero del "fratto 2".',
				],
			},
		},

		// 2. ROMBO COME PARALLELOGRAMMA
		{ name: 'H2', text: '2. Il Rombo come Parallelogramma' },
		"A volte i problemi non ti danno le diagonali, ma ti danno il lato e l'altezza. Il rombo è un parallelogramma con i lati uguali, quindi:",
		{
			name: 'MathML',
			props: { className: 'text-xl mx-auto' },
			text: 'A = l \\cdot h',
		},

		// 3. LEGAME CON PITAGORA
		{ name: 'H2', text: '3. Il legame con Pitagora (Trovare il lato)' },
		'Questa è la parte più difficile delle verifiche. Spesso hai le diagonali e devi trovare il Perimetro. Come trovi il lato?',
		'Le diagonali tagliano il rombo in **4 triangoli rettangoli identici**.',
		'',
		'[immagine: src/Data/Images/Geometria_piana/RomboPitagora.webp]',
		'',
		'Per trovare il lato (ipotenusa), devi usare **metà delle diagonali** come cateti.',
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'l = \\sqrt{\\left(\\frac{D}{2}\\right)^2 + \\left(\\frac{d}{2}\\right)^2}',
					},
				],
			},
		},

		// ESERCIZIO SVOLTO
		{ name: 'H2', text: 'Esercizio Svolto Passo-Passo' },
		"**Traccia:** Un rombo ha la diagonale maggiore di 10 cm e la diagonale minore è la metà della maggiore. Calcola l'Area.",

		{ name: 'H3', text: 'Passo 1: Trova i dati nascosti' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: ['Sappiamo che D = 10. Il testo dice che d è la metà.', { name: 'MathML', text: 'd = 10 : 2 = 5 \\text{ cm}' }],
			},
		},

		{ name: 'H3', text: 'Passo 2: Calcoli' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					'Usiamo la formula classica:',
					{
						name: 'MathML',
						text: 'A = \\frac{10 \\cdot 5}{2} = \\frac{50}{2}',
					},
				],
			},
		},
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [{ name: 'MathML', text: 'A = 25 \\text{ cm}^2' }],
			},
		},

		// ERRORI COMUNI
		{ name: 'H2', text: '⚠️ Errori Comuni' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: '1. Dimenticare la divisione' },
					'Molti studenti fanno ',
					{ name: 'MathML', text: '10 \\cdot 5 = 50' },
					' e si fermano. Sbagliato! Così calcoli il rettangolo esterno. Ricorda di dimezzare.',
					'',
					{ name: 'H3', text: '2. Mischiare Metri e Centimetri' },
					'Se D = 2 m e d = 50 cm, converti tutto prima! (200 cm e 50 cm).',
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

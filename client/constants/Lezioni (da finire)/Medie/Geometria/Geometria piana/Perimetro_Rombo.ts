import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'perimetro-rombo-formule-esercizi',
	school: 'medie',
	class: '2',
	title: 'Perimetro del Rombo: Formule, Calcolo con Pitagora ed Esercizi',
	excerpt: 'Come calcolare il perimetro del rombo in 3 modi. Scopri la formula base, come usare le diagonali con Pitagora e scarica la scheda riassuntiva.',
	category: 'Geometria',
	course: 'Matematica',
	argument: 'Poligoni',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Perimetro del Rombo: Formule e Calcolo
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		'[immagine: src/Data/Images/Geometria_piana/RomboPerimetro.webp]',
		'',
		{ name: 'H2', text: 'Come si calcola il perimetro del rombo?' },
		'Il perimetro del rombo (2p) è la misura del suo contorno. Poiché il rombo ha tutti e 4 i lati uguali (congruenti), basta moltiplicare la misura di un lato (L) per quattro.',
		'La formula fondamentale è:',
		{
			name: 'MathML',
			props: { className: 'text-xl mx-auto' },
			text: '2p = 4 \\cdot L',
		},

		// TABELLA STRATEGICA
		{ name: 'H2', text: 'Tabella: Quale formula usare?' },
		"Spesso nei problemi non hai il lato pronto all'uso. Ecco la tabella strategica:",
		'',
		`| Se hai... | Strategia | Formula |
| :--- | :--- | :--- |
| **Il Lato ($L$)** | Formula Base | $2p = 4 \\cdot L$ |
| **Le Diagonali ($D, d$)** | Usa Pitagora | $L = \\sqrt{(\\frac{D}{2})^2 + (\\frac{d}{2})^2}$ |
| **Area ($A$) e Altezza ($h$)** | Formula Inversa | $L = \\frac{A}{h}$ |`,
		'',

		// 1. CASO CLASSICO
		{ name: 'H2', text: '1. Il Caso Classico (Conosci il Lato)' },
		'Immagina il rombo come un recinto quadrato. Se un lato misura 8 cm, il perimetro sarà:',
		{ name: 'MathML', text: '2p = 8 \\cdot 4 = 32 \\text{ cm}' },

		// 2. CASO PITAGORA
		{ name: 'H2', text: '2. Il Caso "Difficile": Calcolo con le Diagonali' },
		'Se il problema ti assegna le diagonali non puoi sommarle! Devi usare il **Teorema di Pitagora**.',
		'',
		'**Perché? Visualizziamo.**',
		'Le diagonali tagliano il rombo in 4 triangoli rettangoli identici.',
		'* I **cateti** sono la metà delle diagonali.',
		"* L'**ipotenusa** è il lato del rombo.",
		'',
		'[immagine: src/Data/Images/Geometria_piana/RomboPitagora.webp]',
		'',

		{ name: 'H3', text: 'Esercizio Svolto Passo-Passo' },
		'**Traccia:** Un rombo ha le diagonali di 21 dm e 7,2 dm. Calcola il perimetro.',

		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{ name: 'H3', text: 'Passo A: Trova i cateti' },
					'Devi sempre dimezzare le diagonali prima di iniziare!',
					{ name: 'MathML', text: 'c_1 = 21 : 2 = 10,5 \\text{ dm}' },
					{ name: 'MathML', text: 'c_2 = 7,2 : 2 = 3,6 \\text{ dm}' },
				],
			},
		},

		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{ name: 'H3', text: 'Passo B: Trova il lato (Pitagora)' },
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'L = \\sqrt{(10,5)^2 + (3,6)^2}',
					},
					{
						name: 'MathML',
						text: 'L = \\sqrt{110,25 + 12,96} = \\sqrt{123,21} = 11,1 \\text{ dm}',
					},
				],
			},
		},

		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [
					{ name: 'H3', text: 'Passo C: Calcola il perimetro' },
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '2p = 11,1 \\cdot 4 = 44,4 \\text{ dm}',
					},
				],
			},
		},

		// 3. CASO PARALLELOGRAMMA
		{ name: 'H2', text: '3. Il Caso "Parallelogramma"' },
		"Se conosci l'Area totale e l'altezza, puoi trovare il lato con la formula inversa dell'area.",
		'',
		'[immagine: src/Data/Images/Geometria_piana/RomboParallelogramma.webp]',
		'',
		'**Esempio:** Area = 18 mq, Altezza = 2 m.',
		'1. Trovo il lato: ',
		{ name: 'MathML', text: 'L = 18 : 2 = 9 \\text{ m}' },
		'2. Trovo il perimetro: ',
		{ name: 'MathML', text: '2p = 9 \\cdot 4 = 36 \\text{ m}' },

		// ERRORI COMUNI
		{ name: 'H2', text: '⚠️ Errori Comuni' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: '1. Dimenticare di dividere le diagonali' },
					'Se applichi Pitagora usando le diagonali intere (21 e 7,2), troverai un lato gigantesco e sbagliato. Ricorda: Pitagora lavora sui triangolini *interni*.',
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

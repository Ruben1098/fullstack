import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'formule-inverse-medie-trucchi',
	title: 'Formule Inverse: Spiegazione Semplice e il Trucco del Triangolo',
	excerpt: 'Come ricavare le formule inverse senza impararle a memoria. Scopri la regola delle operazioni opposte, il metodo del Triangolo Magico e il trucco dei numeri per non sbagliare mai.',
	category: 'Aritmetica',
	school: 'medie',
	class: '3',
	course: 'Matematica',
	argument: 'Algebra',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Formule Inverse: Come ricavarle (Senza memoria)
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: 'Cosa sono le formule inverse?' },
		"Sono il procedimento matematico che ti permette di isolare una lettera (incognita) spostando tutto il resto dall'altra parte dell'uguale.",
		"Per farlo, devi applicare l'**operazione opposta** a quella di partenza.",
		'',

		// BOX PDF (Simulato con Box Alert/Theory)
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: '📄 Scarica la Scheda' },
					'Non ricordi mai se devi dividere o moltiplicare? Scarica la tabella stampabile da tenere nel quaderno. (Link al PDF)',
				],
			},
		},

		// TABELLA OPERAZIONI
		{ name: 'H2', text: "La Regola D'Oro: Operazioni Opposte" },
		"Ogni volta che un numero o una lettera attraversa l'uguale, cambia operazione.",
		'',
		`| Operazione diretta | Operazione inversa |
| :--- | :--- |
| **Somma ($+$)** | **Sottrazione ($-$)** |
| **Sottrazione ($-$)** | **Somma ($+$)** |
| **Moltiplicazione ($\\cdot$)** | **Divisione ($:$)** |
| **Divisione ($:$)** | **Moltiplicazione ($\\cdot$)** |
| **Potenza ($x^2$)** | **Radice ($\\sqrt{\\quad}$)** |`,
		'',

		// 1. IL TRIANGOLO
		{ name: 'H2', text: '1. Il Metodo del Triangolo (Magico)' },
		'Per le formule a *tre lettere* (come Area, Densità, Velocità), non serve fare calcoli. Usa il triangolo!',
		'',
		'Prendiamo la formula della **Densità**: ',
		{ name: 'MathML', text: 'd = \\frac{m}{V}' },
		'',
		'',
		'',
		'**Come funziona:**',
		'1. Disegna un triangolo con la lettera che sta "sopra" nella frazione (m) sulla punta.',
		'2. Metti le altre due alla base.',
		'3. **Copri con il dito** la lettera che vuoi trovare.',
		'* Copri **m**? Restano d e V vicini → Moltiplica (',
		{ name: 'MathML', text: 'd \\cdot V' },
		').',
		'* Copri **V**? Restano m sopra e d sotto → Dividi (',
		{ name: 'MathML', text: 'm : d' },
		').',

		// 2. METODO CLASSICO
		{ name: 'H2', text: '2. Il Metodo Classico (Passo dopo Passo)' },
		'Se la formula è più complessa, usa il metodo logico.',
		'',

		{ name: 'H3', text: 'Esempio A: Moltiplicazione (Area Rettangolo)' },
		'Formula: ',
		{ name: 'MathML', text: 'A = b \\cdot h' },
		'. Obiettivo: Trovare **h**.',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					"1. **Individua l'intruso:** Chi dà fastidio alla h? La **b**.",
					'2. **Che operazione fa?** Moltiplica.',
					"3. **Spostala:** Passa dall'altra parte a **dividere**.",
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'h = \\frac{A}{b}',
					},
				],
			},
		},

		{ name: 'H3', text: 'Esempio B: Somme Miste (Perimetro)' },
		'Formula: ',
		{ name: 'MathML', text: 'P = 2b + 2h' },
		'. Obiettivo: Trovare **b**.',
		'Qui devi "sbucciare" la formula come una cipolla.',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					'1. **Sposta la somma:** Il blocco +2h passa a sinistra e diventa -2h.',
					{ name: 'MathML', text: 'P - 2h = 2b' },
					'',
					'2. **Isola la lettera:** Ora il 2 moltiplica la b. Spostalo a dividere (sotto a tutto).',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'b = \\frac{P - 2h}{2}',
					},
				],
			},
		},

		// TRUCCO SALVA-VERIFICA (BOX ALERT)
		{ name: 'H2', text: 'Il Trucco "Salva-Verifica"' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: 'Usa i numeri facili' },
					'Sei nel panico e non sai se devi fare per o diviso?',
					"Sostituisci le lettere con un'operazione che conosci, tipo **10 = 5 · 2**.",
					'',
					'Se la formula è ',
					{ name: 'MathML', text: 'A = b \\cdot h' },
					':',
					'* A è 10',
					'* b è 5',
					'* h è 2',
					'',
					'Devi trovare **b** (il 5). Come ottieni 5 usando 10 e 2? Facendo **10 : 2**.',
					'Allora la formula inversa sarà: ',
					{ name: 'MathML', text: 'b = A : h' },
					'.',
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

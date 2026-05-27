import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'prodotti-notevoli-formule-schema',
	school: 'medie',
	class: '3',
	title: 'Prodotti Notevoli: Formule, Schema Completo e Trucchi',
	excerpt: 'Guida completa ai prodotti notevoli. Scarica lo schema PDF, impara a memoria le formule (quadrato, cubo, somma per differenza) ed evita gli errori più comuni.',
	category: 'Aritmetica',
	course: 'Matematica',
	argument: 'Algebra',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Prodotti Notevoli: Formule e Schema Rapido
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: 'Cosa sono i prodotti notevoli?' },
		'Sono "scorciatoie" di calcolo che permettono di sviluppare velocemente potenze di binomi senza eseguire tutti i passaggi intermedi. Sono fondamentali per la scomposizione dei polinomi.',
		'',

		// TABELLA FORMULE
		{ name: 'H2', text: 'Tabella delle Formule' },
		'Ecco lo schema da memorizzare:',
		'',
		`| Nome | Formula |
| :--- | :--- |
| **Quadrato di Binomio** | $(a+b)^2 = a^2 + 2ab + b^2$ |
| **Somma per Differenza** | $(a+b)(a-b) = a^2 - b^2$ |
| **Cubo di Binomio** | $(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$ |
| **Quadrato di Trinomio** | $(a+b+c)^2 = a^2+b^2+c^2+2ab+2ac+2bc$ |`,
		'',

		// BOX PDF (Simulato)
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: '📄 Scarica la Scheda' },
					'Non ricordi mai le formule? Scarica la tabella stampabile da tenere nel quaderno. (Link al PDF)',
				],
			},
		},

		// 1. QUADRATO DI BINOMIO
		{ name: 'H2', text: '1. Il Quadrato di Binomio' },
		'Formula: ',
		{ name: 'MathML', text: '(a+b)^2 = a^2 + 2ab + b^2' },
		'',
		"Perché si sbaglia sempre? Perché l'istinto ti dice di fare semplicemente i quadrati. **Non farlo!** Geometricamente mancano due rettangoli.",
		'',
		'',
		'',

		// BOX ALERT (ERRORE)
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: "⚠️ L'Errore Grave" },
					'Non scrivere MAI ',
					{ name: 'MathML', text: '(a+b)^2 = a^2 + b^2' },
					'.',
					"Manca il **Doppio Prodotto** (2ab). Se lo dimentichi, l'esercizio è sbagliato.",
				],
			},
		},

		{ name: 'H3', text: 'Esempio Svolto Passo-Passo' },
		'Calcoliamo ',
		{ name: 'MathML', text: '(2x - 3y)^2' },
		'.',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					'1. **Quadrato del primo:** ',
					{ name: 'MathML', text: '(2x)^2 = 4x^2' },
					,
					'2. **Doppio Prodotto:** ',
					{ name: 'MathML', text: '2 \\cdot (2x) \\cdot (-3y) = -12xy' },
					' (Occhio al segno!).',
					'3. **Quadrato del secondo:** ',
					{ name: 'MathML', text: '(-3y)^2 = +9y^2' },
					' (Sempre positivo).',
				],
			},
		},
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '4x^2 - 12xy + 9y^2',
					},
				],
			},
		},

		// 2. SOMMA PER DIFFERENZA
		{ name: 'H2', text: '2. Somma per Differenza' },
		"Questa è l'unica formula dove i termini misti spariscono.",
		{ name: 'MathML', text: '(a+b)(a-b) = a^2 - b^2' },
		'',
		'**Esempio Rapido:** Calcola ',
		{ name: 'MathML', text: '(3x + 5)(3x - 5)' },
		'.',
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '(3x)^2 - (5)^2 = 9x^2 - 25',
					},
				],
			},
		},

		// 3. CUBO DI BINOMIO
		{ name: 'H2', text: '3. Cubo di Binomio (1-3-3-1)' },
		'Per ricordarla, pensa ai coefficienti: **1, 3, 3, 1**.',
		{
			name: 'MathML',
			props: { className: 'text-xl mx-auto' },
			text: '(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3',
		},
		'',
		{ name: 'H3', text: 'Il Trucco dei Segni Alternati 💡' },
		'Se hai un meno, i segni si alternano: **Più, Meno, Più, Meno**.',
		{ name: 'MathML', text: '(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3' },

		// FAQ
		{ name: 'H2', text: 'Domande Frequenti' },
		'**Cosa faccio se mi dimentico la formula?**',
		'Non lasciare in bianco! Ricorda che ',
		{ name: 'MathML', text: '(a+b)^2' },
		' è uguale a ',
		{ name: 'MathML', text: '(a+b) \\cdot (a+b)' },
		'. Fai la moltiplicazione termine per termine.',

		{ name: 'Shell', props: { type: 'close' } },
	],
};

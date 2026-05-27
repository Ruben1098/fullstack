import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'radice-quadrata-definizione-calcolo',
	school: 'medie',
	class: '2',
	title: "Radice Quadrata: Cos'è, Calcolo con Scomposizione ed Errori Comuni",
	excerpt: 'Guida facile alla radice quadrata. Scopri il significato geometrico, impara il metodo della scomposizione in fattori e scarica gli esercizi sui quadrati perfetti.',
	category: 'Aritmetica',
	course: 'Matematica',
	argument: 'Radicali',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Radice Quadrata: Definizione e Metodo di Calcolo
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: "Che cos'è la radice quadrata?" },
		"La radice quadrata di un numero (detto *radicando*) è quel valore che, se moltiplicato per se stesso, restituisce il numero di partenza. È l'operazione inversa dell'elevamento alla seconda.",
		'',
		"In termini geometrici: se conosci l'**Area** di un quadrato, la radice quadrata ti permette di trovare la lunghezza del suo **Lato**.",
		'',
		'',
		'',

		// NOMENCLATURA
		{ name: 'H2', text: 'I Nomi della Radice' },
		"Prendiamo l'esempio: ",
		{ name: 'MathML', text: '\\sqrt{144} = 12' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					"1. **Il Simbolo ($\\sqrt{\\quad}$)**: Se non c'è numero, l'indice è 2.",
					"2. **Il Radicando ($144$)**: Il numero sotto il tetto (l'Area).",
					'3. **La Radice ($12$)**: Il risultato (il Lato).',
				],
			},
		},

		// QUADRATI PERFETTI
		{ name: 'H2', text: 'Come calcolarla: I Quadrati Perfetti' },
		'I calcoli più facili sono quelli con i numeri interi. Funziona al contrario delle potenze:',
		'* Se ',
		{ name: 'MathML', text: '5^2 = 25 \\rightarrow \\sqrt{25} = 5' },
		'* Se ',
		{ name: 'MathML', text: '9^2 = 81 \\rightarrow \\sqrt{81} = 9' },
		'* Se ',
		{ name: 'MathML', text: '11^2 = 121 \\rightarrow \\sqrt{121} = 11' },
		'',

		// METODO SCOMPOSIZIONE
		{ name: 'H2', text: 'Metodo Pratico: La Scomposizione' },
		'Cosa fai con un numero grande come **3025**? Usiamo la scomposizione in fattori primi.',
		'',
		'',
		'',

		{ name: 'H3', text: 'Passo 1: Scomponi il numero' },
		'Dividendo per i numeri primi (5, 11...), otteniamo:',
		{ name: 'MathML', text: '3025 = 5^2 \\cdot 11^2' },
		'',

		{ name: 'H3', text: 'Passo 2: La regola del "Dimezzamento"' },
		'Per portare i numeri fuori dalla radice, devi **dimezzare i loro esponenti** (dividerli per 2).',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\sqrt{3025} = \\sqrt{5^2 \\cdot 11^2}',
					},
					'Togliamo la radice e dimezziamo gli esponenti:',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '5^1 \\cdot 11^1 = 5 \\cdot 11',
					},
				],
			},
		},
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: ['Il risultato è **55**.'],
			},
		},

		// RADICI APPROSSIMATE
		{ name: 'H2', text: 'Radici Approssimate' },
		'Non tutti i numeri sono perfetti. Quanto fa ',
		{ name: 'MathML', text: '\\sqrt{27}' },
		'?',
		'* ',
		{ name: 'MathML', text: '5^2 = 25' },
		' (Troppo piccolo)',
		'* ',
		{ name: 'MathML', text: '6^2 = 36' },
		' (Troppo grande)',
		'',
		'La radice di 27 si trova **tra 5 e 6**.',
		'',
		'',
		'',

		// ERRORI COMUNI (BOX ALERT)
		{ name: 'H2', text: '⚠️ Errori Comuni' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: '1. Spezzare la somma' },
					{ name: 'MathML', text: '\\sqrt{16 + 9}' },
					' **NON** è uguale a ',
					{ name: 'MathML', text: '4 + 3' },
					'.',
					'Sbagliato: 7.',
					'Giusto: ',
					{ name: 'MathML', text: '\\sqrt{25} = 5' },
					'.',
					'La radice è un recinto: risolvi prima dentro!',
					'',
					{ name: 'H3', text: '2. Confondere radice e metà' },
					{ name: 'MathML', text: '\\sqrt{100}' },
					' fa **10**, non 50!',
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

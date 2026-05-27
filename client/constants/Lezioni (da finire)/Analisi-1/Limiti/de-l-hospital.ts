import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'teorema-de-l-hopital',
	title: "Teorema di De L'Hôpital: Come Risolvere i Limiti con le Derivate",
	excerpt: "Guida pratica al Teorema di De L'Hôpital. Come risolvere le forme indeterminate 0/0 e infinito/infinito usando le derivate. Esempi svolti e trucchi per le forme 0 per infinito.",
	category: 'Analisi1',
	school: 'liceo',
	class: '5',
	course: 'Matematica',
	argument: 'Limiti',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Teorema di De L'Hôpital: Come Risolvere i Limiti con le Derivate
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: "Cos'è il Teorema di De L'Hôpital?" },
		"Il Teorema di De L'Hôpital è una tecnica potente che permette di risolvere le forme indeterminate ",
		{ name: 'MathML', text: '0/0' },
		' e ',
		{ name: 'MathML', text: '\\infty/\\infty' },
		' usando le derivate. In pratica, se il limite del rapporto tra due funzioni è indeterminato, lo sostituisci con il limite del rapporto tra le loro derivate.',
		'',

		// BOX ALERT (ERRORE COMUNE)
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: '🛑 ATTENZIONE!' },
					"C'è un errore che gli studenti commettono spessissimo. Memorizzalo subito:",
					'',
					"Quando applichi De L'Hôpital, devi fare la derivata del numeratore e la derivata del denominatore **SEPARATAMENTE**.",
					'',
					'**NON devi applicare la regola di derivazione del quoziente** (cioè ',
					{ name: 'MathML', text: "\\frac{f'g - fg'}{g^2}" },
					').',
					'',
					'* Deriva sopra per conto suo.',
					'* Deriva sotto per conto suo.',
				],
			},
		},

		// ENUNCIATO (Box Theory)
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{ name: 'H3', text: "L'Enunciato e la Procedura" },
					'Se il limite ',
					{ name: 'MathML', text: '\\lim_{x \\to x_0} \\frac{f(x)}{g(x)}' },
					' si presenta nella forma ',
					{ name: 'MathML', text: '0/0' },
					' oppure ',
					{ name: 'MathML', text: '\\infty/\\infty' },
					', allora vale la regola:',
					'',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: "\\lim_{x \\to x_0} \\frac{f(x)}{g(x)} = \\lim_{x \\to x_0} \\frac{f'(x)}{g'(x)}",
					},
					'',
					'(A patto che il secondo limite esista).',
				],
			},
		},

		{ name: 'H3', text: 'Come si usa? (I 3 Step)' },
		"1. **Controllo iniziale:** Sostituisci la x. Sei sicuro che sia una forma indeterminata? (Se è 5/0 o 0/5, De L'Hôpital NON vale!).",
		'',
		'2. **Derivazione:** Calcola ',
		{ name: 'MathML', text: "f'(x)" },
		' e ',
		{ name: 'MathML', text: "g'(x)" },
		'.',
		'',
		'3. **Riprova:** Calcola il limite del nuovo rapporto. Se esce ancora indeterminato, puoi applicare il teorema una seconda volta.',
		'',

		// ESEMPIO SVOLTO
		{ name: 'H2', text: 'Esempio Pratico Svolto' },
		'Calcoliamo il seguente limite:',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to 0} \\frac{e^x - 1}{\\sin(2x)}',
					},
				],
			},
		},

		'**1. Sostituzione:**',
		'Numeratore: ',
		{ name: 'MathML', text: 'e^0 - 1 = 0' },
		'. Denominatore: ',
		{ name: 'MathML', text: '\\sin(0) = 0' },
		'.',
		'Siamo nel caso ',
		{ name: 'MathML', text: '0/0' },
		'. Procediamo.',
		'',

		'**2. Derivazione:**',
		'Derivata numeratore: ',
		{ name: 'MathML', text: 'e^x' },
		'.',
		'',
		'Derivata denominatore: ',
		{ name: 'MathML', text: '2\\cos(2x)' },
		'.',
		'',

		'**3. Nuovo Limite:**',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to 0} \\frac{e^x}{2\\cos(2x)}',
					},
				],
			},
		},
		'Sostituiamo 0:',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\frac{e^0}{2\\cos(0)} = \\frac{1}{2 \\cdot 1} = \\frac{1}{2}',
					},
				],
			},
		},

		// RISULTATO FINALE (Secondo tua indicazione: equazione completa)
		'**Risultato:**',
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to 0} \\frac{e^x - 1}{\\sin(2x)} = \\frac{1}{2}',
					},
				],
			},
		},

		// TRUCCHI AVANZATI
		{ name: 'H2', text: '💡 Trucchi Avanzati: Le forme "Nascoste"' },
		"De L'Hôpital funziona solo con le frazioni. Ma cosa fai se hai ",
		{ name: 'MathML', text: '0 \\cdot \\infty' },
		'?',
		'',
		'**Trucco:** Devi "forzare" la funzione a diventare una frazione portando un termine al denominatore (reciproco).',
		'',
		'Esempio: ',
		{ name: 'MathML', text: '\\lim_{x \\to 0^+} x \\cdot \\ln x' },
		'. Scrivilo così:',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'x \\cdot \\ln x = \\frac{\\ln x}{1/x}',
					},
				],
			},
		},
		'Ora è un ',
		{ name: 'MathML', text: '\\infty/\\infty' },
		' e puoi derivare!',
		'',

		// QUANDO NON USARLO (Lista come testo)
		{ name: 'H2', text: "⚠️ Quando NON usare De L'Hôpital" },
		'1. **Limiti Notevoli:** Spesso sono più veloci. Derivare seni e tangenti complesse può diventare un incubo di calcoli.',
		'',
		'2. **Il "Loop" Infinito:** Con funzioni come ',
		{ name: 'MathML', text: '\\sqrt{x^2+1}' },
		", derivare può rendere l'espressione sempre più complicata senza mai risolvere l'indeterminazione.",
		'',
		'3. **Quando il limite non esiste:** A volte il limite delle derivate non esiste (oscilla), ma il limite originale sì. In quel raro caso, devi tornare ai metodi algebrici.',

		{ name: 'Shell', props: { type: 'close' } },
	],
};

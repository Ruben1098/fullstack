import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'teorema-dei-carabinieri-confronto',
	title: 'Teorema dei Carabinieri (del Confronto): Spiegazione Facile ed Esempi',
	description:
		"Cos'è il Teorema dei Carabinieri? Guida pratica per risolvere i limiti con il teorema del confronto. Esempi svolti, spiegazione intuitiva e trucchi per l'esame.",
	category: 'Analisi1',
	school: 'liceo',
	class: '5',
	course: 'Matematica',
	argument: 'Limiti',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Teorema dei Carabinieri (o del Confronto): Spiegazione e Uso Pratico
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: "Cos'è il Teorema dei Carabinieri?" },
		'Il Teorema dei Carabinieri (formalmente *Teorema del Confronto*) è un metodo per calcolare il limite di una funzione "complicata" incastrandola tra due funzioni più semplici che tendono allo stesso valore. Se le due funzioni esterne vanno verso un certo limite ',
		{ name: 'MathML', text: 'l' },
		", quella in mezzo è obbligata a seguirle e avrà anch'essa limite ",
		{ name: 'MathML', text: 'l' },
		'.',
		'',

		// METAFORA E IMMAGINE
		{ name: 'H3', text: '👮‍♂️ Perché si chiama così? (La Metafora)' },
		'Immagina un arrestato (la tua funzione complicata ',
		{ name: 'MathML', text: 'f(x)' },
		') che cammina ammanettato tra due Carabinieri (le funzioni semplici ',
		{ name: 'MathML', text: 'g(x)' },
		' e ',
		{ name: 'MathML', text: 'h(x)' },
		').',
		'',
		'Se i due Carabinieri decidono di entrare in caserma (il limite ',
		{ name: 'MathML', text: 'l' },
		"), l'arrestato in mezzo a loro non può scappare: deve per forza entrare in caserma anche lui.",
		'',
		'',
		'',

		// ENUNCIATO FORMALE (Box Theory)
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{ name: 'H3', text: "L'Enunciato Matematico (Rigore Formale)" },
					'Siano ',
					{ name: 'MathML', text: 'g(x), f(x), h(x)' },
					' tre funzioni definite in un intorno di ',
					{ name: 'MathML', text: 'x_0' },
					'.',
					'',
					'Devono verificarsi **due condizioni fondamentali**:',
					'',
					'1. **La disuguaglianza:** La funzione è incastrata tra le altre due.',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'g(x) \\le f(x) \\le h(x)',
					},
					'',
					'2. **La Convergenza Comune:** I limiti esterni coincidono.',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to x_0} g(x) = l \\quad \\text{e} \\quad \\lim_{x \\to x_0} h(x) = l',
					},
					'',
					'**Tesi:** Allora anche la funzione centrale tende a ',
					{ name: 'MathML', text: 'l' },
					'.',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to x_0} f(x) = l',
					},
				],
			},
		},

		// ESEMPIO SVOLTO
		{ name: 'H2', text: 'Esempio Svolto: Come si usa negli esercizi?' },
		"Il Teorema dei Carabinieri è l'arma perfetta quando hai funzioni che **oscillano** (come seno e coseno) moltiplicate per qualcosa che tende a zero.",
		'',
		'**Esercizio:** Calcola il seguente limite. Se sostituisci ottieni ',
		{ name: 'MathML', text: '0 \\cdot \\sin(\\infty)' },
		', che non ha senso.',

		// Testo del problema
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to 0} x^2 \\cdot \\sin\\left(\\frac{1}{x}\\right)',
					},
				],
			},
		},

		"**Step 1: Costruisci l'incastro.** Sappiamo che il seno è sempre compreso tra -1 e 1.",
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '-1 \\le \\sin\\left(\\frac{1}{x}\\right) \\le 1',
					},
				],
			},
		},

		'**Step 2: Moltiplica tutto.** Moltiplichiamo per ',
		{ name: 'MathML', text: 'x^2' },
		' (che è positivo, quindi non cambia i versi).',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '-x^2 \\le x^2 \\cdot \\sin\\left(\\frac{1}{x}\\right) \\le x^2',
					},
				],
			},
		},

		'**Step 3: Calcola i limiti esterni.**',
		'',
		'Carabiniere sinistro: ',
		{ name: 'MathML', text: '\\lim_{x \\to 0} (-x^2) = 0' },
		'',
		'Carabiniere destro: ',
		{ name: 'MathML', text: '\\lim_{x \\to 0} (x^2) = 0' },
		'',
		"**Conclusione:** Poiché i carabinieri vanno a 0, anche l'arrestato va a 0.",

		// RISULTATO FINALE (Equazione completa)
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to 0} x^2 \\cdot \\sin\\left(\\frac{1}{x}\\right) = 0',
					},
				],
			},
		},

		// BOX ALERT (TRUCCHI)
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: '💡 Trucchi e "Campanelli d\'Allarme"' },

					"1. **Seno/Coseno all'infinito:** Sono funzioni limitate. Spesso basta dire che sono comprese tra -1 e 1.",
					'',
					"2. **Il prodotto Zero x Limitata:** Questa è una regola d'oro.",
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\text{(Tende a 0)} \\cdot \\text{(Limitata)} = 0',
					},
					'Esempio: ',
					{
						name: 'MathML',
						text: '\\lim_{x \\to +\\infty} \\frac{\\sin x}{x} = 0',
					},
					'',

					'**Errore Comune:** Non usare il teorema se i limiti dei due Carabinieri sono diversi! Se ',
					{ name: 'MathML', text: 'g(x) \\to 3' },
					' e ',
					{ name: 'MathML', text: 'h(x) \\to 5' },
					', il teorema non funziona.',
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

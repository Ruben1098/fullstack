import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'teorema-di-euclide-formule-esercizi',
	school: 'medie',
	class: '2',
	title: 'Teoremi di Euclide: Spiegazione Semplice, Formule e Proiezioni',
	excerpt: 'Guida completa al 1° e 2° Teorema di Euclide. Impara a calcolare cateti, altezza e proiezioni con le proporzioni e scarica gli esercizi svolti.',
	category: 'Geometria',
	course: 'Matematica',
	argument: 'Teoremi',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Teoremi di Euclide: Primo, Secondo e Formule
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: 'Cosa sono i Teoremi di Euclide?' },
		"Sono due relazioni fondamentali valide solo nei **triangoli rettangoli**. Servono a calcolare le misure dei lati e dell'altezza interna sfruttando le **proiezioni** dei cateti sull'ipotenusa.",
		"Mentre Pitagora usa solo i lati, Euclide entra in gioco quando devi lavorare con l'altezza relativa all'ipotenusa.",

		// TABELLA RAPIDA
		{ name: 'H2', text: 'Tabella Rapida' },
		'Scegli il teorema in base a cosa devi trovare.',
		'',
		`| Teorema | A cosa serve? | La Formula Pratica |
| :--- | :--- | :--- |
| **1° Euclide** | Lega Cateto e Ipotenusa | $c^2 = i \\cdot p$ |
| **2° Euclide** | Lega Altezza e Proiezioni | $h^2 = p_1 \\cdot p_2$ |`,
		'',

		// 1. LE PROIEZIONI
		{ name: 'H2', text: '1. Capire la "Mappa": Le Proiezioni' },
		'Prima delle formule, devi saper leggere il disegno. Immagina il triangolo appoggiato sul lato lungo (ipotenusa).',
		"* L'**Altezza (h)** cade a piombo dall'angolo retto e spacca l'ipotenusa in due pezzi.",
		'* Questi due pezzi sono le **Proiezioni (p)**.',
		'',
		'[immagine: src/Data/Images/Geometria_piana/Euclide.webp]',
		'',

		// 2. PRIMO TEOREMA
		{ name: 'H2', text: '2. Il Primo Teorema di Euclide (Focus Cateto)' },
		'Usa questo teorema quando il problema coinvolge: **Ipotenusa, Cateto e la sua Proiezione**.',
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{ name: 'H3', text: 'Enunciato e Formula' },
					"Il cateto è medio proporzionale tra l'ipotenusa e la propria proiezione.",
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'i : c = c : p \\quad \\Rightarrow \\quad c^2 = i \\cdot p',
					},
				],
			},
		},
		'[immagine: src/Data/Images/Geometria_piana/EuclideTeorema1.webp]',
		'',
		"**Come ricordarlo:** Parti dall'ipotenusa → tocca il cateto → finisci sulla proiezione vicina.",

		// 3. SECONDO TEOREMA
		{ name: 'H2', text: '3. Il Secondo Teorema di Euclide (Focus Altezza)' },
		'Usa questo teorema quando il problema coinvolge: **Altezza e le due Proiezioni**.',
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{ name: 'H3', text: 'Enunciato e Formula' },
					"L'altezza relativa all'ipotenusa è medio proporzionale tra le proiezioni dei due cateti.",
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'p_1 : h = h : p_2 \\quad \\Rightarrow \\quad h^2 = p_1 \\cdot p_2',
					},
				],
			},
		},
		'[immagine: src/Data/Images/Geometria_piana/EuclideTeorema2.webp]',
		'',
		"**Come ricordarlo:** Immagina una bilancia: l'altezza sta al centro, le due proiezioni stanno ai lati.",

		// EUCLIDE O PITAGORA?
		{ name: 'H2', text: 'Euclide o Pitagora? Il trucco per decidere 💡' },
		'* Hai **2 lati** e cerchi il **3° lato**? → Usa **Pitagora**.',
		'* Hai **ipotenusa e proiezione** e cerchi il cateto? → Usa **1° Euclide**.',
		"* Hai le **proiezioni** o cerchi l'**altezza**? → Usa **2° Euclide**.",

		// ESERCIZIO SVOLTO
		{ name: 'H2', text: 'Esercizio Svolto Passo-Passo' },
		'**Problema:** Ipotenusa = 25 cm, Proiezione del cateto minore = 9 cm. Calcola il cateto minore.',

		{ name: 'H3', text: 'Passo 1: Analisi' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: ['Abbiamo ipotenusa (i) e proiezione (p). Cerchiamo il cateto (c).', 'Serve il **1° Teorema di Euclide**.'],
			},
		},

		{ name: 'H3', text: 'Passo 2: Calcolo' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'c^2 = i \\cdot p = 25 \\cdot 9 = 225',
					},
					'Ora facciamo la radice quadrata:',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'c = \\sqrt{225} = 15 \\text{ cm}',
					},
				],
			},
		},

		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: ['Il cateto misura **15 cm**.'],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'teorema-unicita-limite',
	title: 'Teorema di Unicità del Limite: Spiegazione e Dimostrazione',
	excerpt: 'Cosa dice il Teorema di Unicità del Limite? Enunciato semplice, dimostrazione guidata passo-passo e applicazioni pratiche per gli esercizi di Analisi 1.',
	category: 'Analisi1',
	school: 'liceo',
	class: '5',
	course: 'Matematica',
	argument: 'Limiti',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Teorema di Unicità del Limite: Enunciato e Dimostrazione Semplificata
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: 'Cosa dice il Teorema di Unicità del Limite?' },
		'Il teorema afferma un principio fondamentale: se una funzione ',
		{ name: 'MathML', text: 'f(x)' },
		' ammette un limite per ',
		{ name: 'MathML', text: 'x' },
		' che tende a un valore ',
		{ name: 'MathML', text: 'x_0' },
		', allora questo limite è **unico**.',
		'',
		'In altre parole, la funzione non può tendere contemporaneamente a due valori diversi (ad esempio ',
		{ name: 'MathML', text: 'l' },
		' e ',
		{ name: 'MathML', text: 'm' },
		') nello stesso punto.',
		'',

		// ENUNCIATO FORMALE (BOX THEORY)
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{ name: 'H3', text: "L'Enunciato Formale" },
					'Sia ',
					{ name: 'MathML', text: 'f(x)' },
					' una funzione definita in un intorno di ',
					{ name: 'MathML', text: 'x_0' },
					'.',
					'',
					'**Se** esiste il limite:',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to x_0} f(x) = l',
					},
					'**Allora** ',
					{ name: 'MathML', text: 'l' },
					" è l'unico limite. Non può esistere un altro numero ",
					{ name: 'MathML', text: 'm \\neq l' },
					' tale che il limite sia ',
					{ name: 'MathML', text: 'm' },
					'.',
				],
			},
		},

		// DIMOSTRAZIONE
		{ name: 'H2', text: 'La Dimostrazione (Spiegata Facile)' },
		'La dimostrazione standard si fa **per assurdo**.',
		'',

		"**Passo 1: L'Ipotesi Assurda**",
		'Supponiamo per assurdo che il limite **non** sia unico, cioè che la funzione tenda a due numeri diversi ',
		{ name: 'MathML', text: 'l' },
		' e ',
		{ name: 'MathML', text: 'm' },
		'.',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to x_0} f(x) = l \\quad \\text{e} \\quad \\lim_{x \\to x_0} f(x) = m \\quad (l \\neq m)',
					},
				],
			},
		},

		'**Passo 2: Scegliamo gli intorni "separati"**',
		'Poiché ',
		{ name: 'MathML', text: 'l' },
		' e ',
		{ name: 'MathML', text: 'm' },
		' sono diversi, possiamo prendere due intorni piccolissimi che non si toccano mai (disgiunti). Scegliamo un raggio ',
		{ name: 'MathML', text: '\\epsilon < |l-m|/2' },
		'.',
		'',
		'',
		'',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'V_l \\cap V_m = \\emptyset',
					},
					'I due intorni non hanno punti in comune.',
				],
			},
		},

		'**Passo 3: Applichiamo la definizione**',
		'* Poiché il limite è ',
		{ name: 'MathML', text: 'l' },
		', la funzione deve finire dentro ',
		{ name: 'MathML', text: 'V_l' },
		'.',
		'* Poiché il limite è anche ',
		{ name: 'MathML', text: 'm' },
		', la funzione deve finire dentro ',
		{ name: 'MathML', text: 'V_m' },
		'.',
		'',

		'**Passo 4: La Contraddizione**',
		'Per ogni ',
		{ name: 'MathML', text: 'x' },
		" nell'intorno comune, la funzione dovrebbe trovarsi **contemporaneamente** in due luoghi separati che non si toccano. Questo è impossibile.",
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\text{Contraddizione} \\Rightarrow \\text{Il limite è unico.} \\quad \\square',
					},
				],
			},
		},

		// A COSA SERVE (BOX ALERT)
		{ name: 'H2', text: '💡 A cosa serve davvero? (Trucco per gli Esercizi)' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: 'Il limite non esiste se...' },
					'Se calcolando un limite trovi che il limite destro è diverso dal sinistro:',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to x_0^-} f(x) \\neq \\lim_{x \\to x_0^+} f(x)',
					},
					'Allora puoi affermare con certezza: **"Il limite globale NON esiste"**.',
				],
			},
		},

		{ name: 'H3', text: 'Esempio lampo' },
		'Per la funzione ',
		{ name: 'MathML', text: 'f(x) = |x|/x' },
		' in ',
		{ name: 'MathML', text: 'x=0' },
		':',
		'* A destra fa +1.',
		'* A sinistra fa -1.',
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to 0} \\frac{|x|}{x} = \\text{Non Esiste}',
					},
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

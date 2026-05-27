import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'teorema-permanenza-del-segno',
	title: 'Teorema della Permanenza del Segno: Spiegazione e Dimostrazione',
	excerpt: "Cosa dice il Teorema della Permanenza del Segno? Enunciato, dimostrazione semplice e il 'caso inverso' spiegato per evitare errori all'esame.",
	category: 'Analisi1',
	school: 'liceo',
	class: '5',
	course: 'Matematica',
	argument: 'Limiti',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Teorema della Permanenza del Segno: Spiegazione e Dimostrazione
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: 'Cosa afferma il Teorema della Permanenza del Segno?' },
		'Se una funzione tende a un limite **diverso da zero** (positivo o negativo), allora esiste tutto un intorno del punto in cui la funzione mantiene lo stesso segno del limite.',
		'',
		'In breve: se il limite è positivo, la funzione è positiva "nelle vicinanze"; se è negativo, la funzione è negativa.',
		'',

		// INTUIZIONE VISIVA
		{ name: 'H3', text: "🎨 L'intuizione Visiva" },
		'Immagina che il limite sia la "destinazione" e la funzione sia il "percorso". Se la tua destinazione è una città che si trova a 1000 metri di altezza (l > 0), è ovvio che negli ultimi chilometri prima di arrivare ti troverai sicuramente sopra il livello del mare.',
		'',
		'',
		'',
		'Non puoi teletrasportarti da sotto terra direttamente a 1000 metri senza passare per quote positive.',
		'',

		// ENUNCIATO FORMALE (BOX THEORY)
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{ name: 'H3', text: 'Enunciato Formale' },
					'Sia ',
					{ name: 'MathML', text: 'f(x)' },
					' una funzione definita in un intorno di ',
					{ name: 'MathML', text: 'x_0' },
					', e supponiamo che esista il limite:',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to x_0} f(x) = l',
					},
					'',
					'**Se** ',
					{ name: 'MathML', text: 'l \\neq 0' },
					' (il limite non è nullo),',
					'**Allora** esiste un intorno ',
					{ name: 'MathML', text: 'I' },
					' di ',
					{ name: 'MathML', text: 'x_0' },
					' in cui la funzione ha lo **stesso segno** di ',
					{ name: 'MathML', text: 'l' },
					'.',
					'',
					'* Se ',
					{ name: 'MathML', text: 'l > 0 \\Rightarrow f(x) > 0' },
					" nell'intorno.",
					'* Se ',
					{ name: 'MathML', text: 'l < 0 \\Rightarrow f(x) < 0' },
					" nell'intorno.",
				],
			},
		},

		// DIMOSTRAZIONE
		{ name: 'H2', text: 'La Dimostrazione Semplificata' },
		'Dimostriamo il caso in cui ',
		{ name: 'MathML', text: 'l > 0' },
		'.',
		'',

		'**1. Usiamo la definizione di limite**',
		'Per definizione, scelto un ',
		{ name: 'MathML', text: '\\epsilon > 0' },
		' a piacere, esiste un intorno dove:',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'l - \\epsilon < f(x) < l + \\epsilon',
					},
				],
			},
		},

		'**2. La Scelta di epsilon**',
		'Il trucco sta tutto qui: siamo noi a scegliere ',
		{ name: 'MathML', text: '\\epsilon' },
		'. Dato che ',
		{ name: 'MathML', text: 'l' },
		' è positivo, scegliamo un epsilon che sia proprio la metà di l:',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\epsilon = \\frac{l}{2}',
					},
				],
			},
		},

		'**3. Sostituiamo nella disuguaglianza**',
		'Sostituendo il nostro epsilon nella parte sinistra della disuguaglianza (',
		{ name: 'MathML', text: 'l - \\epsilon < f(x)' },
		'), otteniamo:',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'l - \\frac{l}{2} < f(x) \\Rightarrow \\frac{l}{2} < f(x)',
					},
				],
			},
		},

		'**4. Conclusione**',
		'Poiché ',
		{ name: 'MathML', text: 'l > 0' },
		', anche ',
		{ name: 'MathML', text: 'l/2' },
		' è positivo. Se la funzione è maggiore di un numero positivo, allora è positiva.',
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'f(x) > \\frac{l}{2} > 0 \\Rightarrow f(x) > 0',
					},
				],
			},
		},

		// ATTENZIONE / TEOREMA INVERSO (BOX ALERT)
		{ name: 'H2', text: '⚠️ Attenzione: Il Teorema Inverso' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: 'Il teorema vale al contrario?' },
					'Se ',
					{ name: 'MathML', text: 'f(x)' },
					' è positiva in un intorno, il limite è per forza positivo?',
					'',
					'**La risposta è: NO.** Il limite può essere positivo oppure **zero**.',
					'',
					'**Esempio Trappola:** Prendi ',
					{ name: 'MathML', text: 'f(x) = x^2' },
					'. È sempre positiva, ma il limite a 0 è **0** (che non è positivo!).',
					'',
					'Quindi la regola inversa corretta usa la disuguaglianza debole:',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'f(x) \\ge 0 \\Rightarrow \\lim_{x \\to x_0} f(x) \\ge 0',
					},
				],
			},
		},

		// UTILITA' NEGLI ESERCIZI
		{ name: 'H2', text: '💡 A cosa serve negli esercizi?' },
		'1. **Per calcolare i domini:** Se il limite è positivo (es. 5), sai che vicino a quel punto la funzione è positiva. Quindi puoi fare radici o logaritmi senza problemi.',
		'',
		'2. **Negli asintoti:** Se il limite è ',
		{ name: 'MathML', text: 'l > 0' },
		' e stai dividendo per uno zero positivo (',
		{ name: 'MathML', text: '0^+' },
		'), il segno del risultato sarà sicuramente ',
		{ name: 'MathML', text: '+\\infty' },
		'.',

		{ name: 'Shell', props: { type: 'close' } },
	],
};

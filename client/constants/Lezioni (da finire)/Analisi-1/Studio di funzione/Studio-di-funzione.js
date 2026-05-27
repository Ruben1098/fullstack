import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'studio-di-funzione-schema-completo',
	title: 'Studio di Funzione Completo: Schema, Passaggi ed Esempi',
	excerpt: 'La guida definitiva allo Studio di Funzione. I 6 passaggi fondamentali (Dominio, Limiti, Derivate) spiegati in ordine per disegnare qualsiasi grafico senza errori.',
	category: 'Analisi1',
	school: 'liceo',
	class: '5',
	course: 'Matematica',
	argument: 'StudioDiFunzione',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Studio di Funzione Completo: Schema e Passaggi
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: "Cos'è lo Studio di Funzione?" },
		'Lo studio di funzione è il processo analitico che ci permette di disegnare il grafico qualitativo di una funzione ',
		{ name: 'MathML', text: 'y=f(x)' },
		' partendo dalla sua equazione.',
		'Si tratta di raccogliere indizi per capire dove passa la curva. È come "unire i puntini", ma usando la logica matematica.',
		'',
		'',
		'',

		// CHECKLIST
		{ name: 'H3', text: '✅ La Checklist dei 6 Step' },
		'1. **Dominio:** Dove esiste?',
		'2. **Simmetrie:** Pari o dispari?',
		'3. **Segno:** Dove è positiva?',
		'4. **Limiti:** Asintoti e estremi.',
		'5. **Derivata Prima:** Crescenza e Max/Min.',
		'6. **Derivata Seconda:** Concavità e Flessi.',
		'',

		// STEP 1: DOMINIO
		{ name: 'H2', text: 'Step 1: Il Dominio (C.E.)' },
		'La prima cosa da fare è escludere i punti dove la funzione non esiste.',
		'* **Frazioni:** Denominatore ',
		{ name: 'MathML', text: '\\neq 0' },
		'.',
		'* **Radici pari:** Radicando ',
		{ name: 'MathML', text: '\\ge 0' },
		'.',
		'* **Logaritmi:** Argomento ',
		{ name: 'MathML', text: '> 0' },
		'.',
		'',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{ name: 'H3', text: 'Azione Pratica' },
					'Cancella sul grafico le zone "proibite" (fai delle righe verticali o ombreggia le parti dove la x non può stare).',
				],
			},
		},

		// STEP 2: SIMMETRIE
		{ name: 'H2', text: 'Step 2: Simmetrie' },
		'Controlla se la funzione è simmetrica. Ti dimezza il lavoro!',
		'* **Pari (**',
		{ name: 'MathML', text: 'f(-x)=f(x)' },
		"**):** Simmetrica rispetto all'asse Y (es. ",
		{ name: 'MathML', text: 'x^2, \\cos x' },
		').',
		'* **Dispari (**',
		{ name: 'MathML', text: 'f(-x)=-f(x)' },
		"**):** Simmetrica rispetto all'origine (es. ",
		{ name: 'MathML', text: 'x^3, \\sin x' },
		').',
		'',
		'',
		'',

		// STEP 3: SEGNO
		{ name: 'H2', text: 'Step 3: Segno e Intersezioni' },
		'Risolvi ',
		{ name: 'MathML', text: 'f(x) \\ge 0' },
		'. Questo ti dice dove il grafico passa "sopra" l\'asse x.',
		'',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{ name: 'H3', text: 'Azione Pratica' },
					"Cancella le regioni del piano dove la funzione NON passa. Se tra 1 e 5 la funzione è positiva, cancella la parte sotto l'asse x in quella striscia.",
				],
			},
		},
		'',
		'',

		// STEP 4: LIMITI
		{ name: 'H2', text: 'Step 4: Limiti e Asintoti' },
		'Calcola i limiti agli estremi del dominio (',
		{ name: 'MathML', text: '\\pm \\infty' },
		') e nei punti di discontinuità.',
		'* Se ',
		{ name: 'MathML', text: '\\lim_{x \\to x_0} f(x) = \\infty' },
		' → **Asintoto Verticale**.',
		'* Se ',
		{ name: 'MathML', text: '\\lim_{x \\to \\infty} f(x) = l' },
		' → **Asintoto Orizzontale**.',
		"* Se va a infinito, controlla l'**Obliquo**.",
		'',
		'',
		'',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{ name: 'H3', text: 'Azione Pratica' },
					'Disegna subito le rette tratteggiate degli asintoti sul grafico. Sono le "guide" della tua curva.',
				],
			},
		},

		// STEP 5: DERIVATA PRIMA
		{ name: 'H2', text: 'Step 5: Derivata Prima' },
		'1. Calcola ',
		{ name: 'MathML', text: "f'(x)" },
		'.',
		'2. Studia il segno ',
		{ name: 'MathML', text: "f'(x) \\ge 0" },
		'.',
		'* Dove è **+**, la funzione **sale**.',
		'* Dove è **-**, la funzione **scende**.',
		"* Dove cambia segno, c'è un **Max** o **Min**.",
		'',
		'',
		'',

		// STEP 6: DERIVATA SECONDA
		{ name: 'H2', text: 'Step 6: Derivata Seconda' },
		'Studia la "pancia" della curva.',
		'* ',
		{ name: 'MathML', text: "f''(x) > 0" },
		': sorride (convessa ∪).',
		'* ',
		{ name: 'MathML', text: "f''(x) < 0" },
		': triste (concava ∩).',
		'* Cambio segno: **Flesso**.',
		'',
		'',
		'',

		// TRUCCO COERENZA (BOX ALERT)
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: '💡 Il Trucco della "Coerenza"' },
					'Alla fine, prima di disegnare, fai il check.',
					'',
					'**Esempio di Incoerenza:** Se il limite a ',
					{ name: 'MathML', text: '+\\infty' },
					' è ',
					{ name: 'MathML', text: '-\\infty' },
					' (va giù), ma la derivata ti dice che cresce sempre... **hai sbagliato un calcolo!**',
					'',
					'Gli asintoti, il segno e la crescenza devono raccontare la stessa storia.',
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};
s;

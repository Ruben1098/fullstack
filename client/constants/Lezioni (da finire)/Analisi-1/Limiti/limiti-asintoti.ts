import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'asintoti-verticali-orizzontali-obliqui',
	title: 'Asintoti di una Funzione: Verticali, Orizzontali e Obliqui',
	excerpt: 'Guida completa agli asintoti: definizioni, tabella con formule per calcolarli, algoritmo di ricerca passo-passo e il trucco per le funzioni razionali.',
	category: 'Analisi1',
	school: 'liceo',
	class: '5',
	course: 'Matematica',
	argument: 'Studio di Funzione',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Asintoti di una Funzione: Guida Completa e Formule
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: "Che cos'è un asintoto?" },
		'Un asintoto è una retta verso la quale la funzione si avvicina sempre di più, senza mai toccarla (o toccandola solo all\'infinito), man mano che ci si allontana lungo gli assi. È come una "guida magnetica" che attira il grafico della funzione agli estremi del piano cartesiano.',
		'',
		'',
		'',

		// TABELLA FORMULE
		{ name: 'H3', text: '⚡ Tabella delle Formule' },
		"Salva questa tabella. È l'unica cosa che ti serve per risolvere gli esercizi.",
		'',
		// Nota: Ho raddoppiato le backslash (\\) per il LaTeX dentro la tabella Markdown
		`| Tipo di Asintoto | Equazione della Retta | Condizione (Il Limite da fare) | Dove cercarlo? |
| :--- | :--- | :--- | :--- |
| **Verticale** | $$ x = x_0 $$ | $$ \\lim_{x \\to x_0} f(x) = \\infty $$ | Punti esclusi dal Dominio. |
| **Orizzontale** | $$ y = l $$ | $$ \\lim_{x \\to \\infty} f(x) = l \\quad (\\text{finito}) $$ | A $+\\infty$ e $-\\infty$. |
| **Obliquo** | $$ y = mx + q $$ | Se $\\lim_{x \\to \\infty} f(x) = \\infty$, calcola $m$ e $q$. | Solo se **non** c'è l'Orizzontale. |`,
		'',

		// 1. ASINTOTI VERTICALI
		{ name: 'H2', text: '1. Asintoti Verticali' },
		'Immagina un muro invisibile verticale. La funzione, avvicinandosi a questo muro, è costretta a "impennare" verso l\'alto (',
		{ name: 'MathML', text: '+\\infty' },
		') o precipitare verso il basso (',
		{ name: 'MathML', text: '-\\infty' },
		') perché non può attraversarlo.',
		'',
		'',
		'',
		"**Dove si trovano?** Quasi sempre nei **punti esclusi dal Dominio** (es. dove si annulla il denominatore o l'argomento del logaritmo).",
		'',
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{ name: 'H3', text: 'Regola Verticale' },
					'Se il dominio esclude un punto ',
					{ name: 'MathML', text: 'x_0' },
					', calcola il limite:',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to x_0} f(x) = \\infty',
					},
					'Se il risultato è infinito, allora ',
					{ name: 'MathML', text: 'x = x_0' },
					' è asintoto verticale.',
				],
			},
		},

		// 2. ASINTOTI ORIZZONTALI
		{ name: 'H2', text: '2. Asintoti Orizzontali' },
		'Questi ci dicono come si comporta la funzione quando ',
		{ name: 'MathML', text: 'x' },
		' diventa grandissimo. La funzione si "appiattisce" su una quota costante.',
		'',
		'',
		'',
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{ name: 'H3', text: 'Regola Orizzontale' },
					"Calcola i limiti all'infinito:",
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to \\pm\\infty} f(x) = l \\quad (\\text{numero finito})',
					},
					'Allora la retta ',
					{ name: 'MathML', text: 'y = l' },
					' è asintoto orizzontale.',
				],
			},
		},

		// 3. ASINTOTI OBLIQUI
		{ name: 'H2', text: '3. Asintoti Obliqui' },
		"Se la funzione va all'infinito ma non esplode verticalmente, potrebbe salire seguendo una retta inclinata.",
		'',
		'',
		'',
		"**La Regola dell'Esclusione:** L'asintoto obliquo può esistere **SOLO SE** il limite a infinito fa ",
		{ name: 'MathML', text: '\\infty' },
		" (quindi non c'è l'orizzontale).",
		'',
		"L'asintoto è una retta ",
		{ name: 'MathML', text: 'y = mx + q' },
		'. Ecco come trovare ',
		{ name: 'MathML', text: 'm' },
		' e ',
		{ name: 'MathML', text: 'q' },
		':',

		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{ name: 'H3', text: 'Calcolo di m (Pendenza)' },
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'm = \\lim_{x \\to \\infty} \\frac{f(x)}{x}',
					},
					'Deve essere un numero finito diverso da 0.',
				],
			},
		},
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{ name: 'H3', text: 'Calcolo di q (Intercetta)' },
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'q = \\lim_{x \\to \\infty} [f(x) - m \\cdot x]',
					},
					'Deve essere un numero finito.',
				],
			},
		},

		// ALGORITMO E TRUCCHI
		{ name: 'H2', text: '💡 Metodo di ricerca (Algoritmo)' },
		'1. **Step 1: Dominio.** Cerca subito gli Asintoti Verticali nei punti esclusi.',
		'',
		'2. **Step 2: Infinito.** Calcola il limite a ',
		{ name: 'MathML', text: '\\infty' },
		'. Se esce un numero → Orizzontale (STOP). Se esce infinito → vai allo Step 3.',
		'',
		'3. **Step 3: Obliquo.** Cerca ',
		{ name: 'MathML', text: 'm' },
		' e ',
		{ name: 'MathML', text: 'q' },
		'.',
		'',

		{ name: 'H3', text: 'Il Trucco per le Funzioni Razionali Fratte' },
		'Se hai ',
		{ name: 'MathML', text: 'P(x)/Q(x)' },
		', guarda i gradi:',
		'* Grado(Num) < Grado(Den) → Orizzontale ',
		{ name: 'MathML', text: 'y=0' },
		'.',
		'* Grado(Num) = Grado(Den) → Orizzontale ',
		{ name: 'MathML', text: 'y = \\text{rapporto coeff.}' },
		'.',
		"* Grado(Num) = Grado(Den) **+ 1** → C'è sicuramente l'**Obliquo**.",
		'* Grado(Num) > Grado(Den) + 1 → Nessun asintoto.',

		// FALSI MITI (BOX ALERT)
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: '⚠️ Falsi Miti ed Errori Comuni' },

					'1. **"La funzione non può mai toccare l\'asintoto"**',
					"**Falso!** La funzione non tocca l'asintoto *verticale*, ma può attraversare l'asintoto *orizzontale o obliquo* quante volte vuole prima di stabilizzarsi all'infinito.",
					'',

					"2. **\"Se c'è l'asintoto destro, c'è anche il sinistro\"**",
					'**Falso!** Una funzione (come ',
					{ name: 'MathML', text: 'e^x' },
					') può avere comportamenti diversi a ',
					{ name: 'MathML', text: '+\\infty' },
					' e ',
					{ name: 'MathML', text: '-\\infty' },
					'. Controlla sempre entrambi i lati.',
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

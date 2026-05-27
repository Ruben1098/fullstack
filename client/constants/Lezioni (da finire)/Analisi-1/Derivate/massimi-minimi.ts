import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'massimi-minimi-fermat-derivata-seconda',
	title: 'Massimi e Minimi: Guida Completa (Fermat e Derivate)',
	excerpt: 'Come trovare massimi e minimi assoluti e relativi? Spiegazione del Teorema di Fermat, studio del segno della derivata prima e uso della derivata seconda.',
	category: 'Analisi1',
	school: 'liceo',
	class: '5',
	course: 'Matematica',
	argument: 'Studio di Funzione',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Massimi e Minimi: Guida Completa (Fermat e Test delle Derivate)
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: 'Come si trovano i massimi e minimi di una funzione?' },
		'Per trovare i punti di massimo e minimo (detti *estremi*), devi seguire tre passaggi:',
		'1. **Trova i punti stazionari:** Risolvi ',
		{ name: 'MathML', text: "f'(x) = 0" },
		'.',
		'2. **Classificali:** Capisci se sono massimi, minimi o flessi (segno derivata prima o seconda).',
		'3. **Confronta:** Calcola le altezze (y) per trovare gli assoluti.',
		'',

		// DEFINIZIONI
		{ name: 'H3', text: '⛰️ Le Definizioni' },
		'* **Massimo Relativo (Locale):** È come la cima di una collina. Il punto più alto rispetto ai vicini.',
		'* **Massimo Assoluto (Globale):** La montagna più alta di tutto il dominio.',
		'',
		'',
		'',

		// FERMAT
		{ name: 'H2', text: '1. Dove cercare? Il Teorema di Fermat' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{ name: 'H3', text: 'Enunciato' },
					'Se ',
					{ name: 'MathML', text: 'f(x)' },
					' ha un estremo relativo in ',
					{ name: 'MathML', text: 'x_0' },
					' ed è derivabile, allora:',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: "f'(x_0) = 0",
					},
				],
			},
		},

		'**Attenzione:** Il teorema **NON** vale al contrario! Se la derivata è zero, potrebbe essere un **Flesso a tangente orizzontale**.',
		'Esempio: ',
		{ name: 'MathML', text: 'y=x^3' },
		' in zero.',
		'',
		'',
		'',

		// CLASSIFICAZIONE
		{ name: 'H2', text: '2. Come distinguerli?' },
		'Una volta trovati i punti stazionari, hai due metodi per classificarli.',

		{ name: 'H3', text: 'Metodo A: Studio del Segno (Il più sicuro)' },
		'Studia ',
		{ name: 'MathML', text: "f'(x) \\ge 0" },
		' e fai il grafico delle frecce.',
		'* Da + a - ($\\nearrow \\searrow$) → **Massimo**.',
		'* Da - a + ($\\searrow \\nearrow$) → **Minimo**.',
		'* Nessun cambio → **Flesso**.',
		'',
		'',
		'',

		{ name: 'H3', text: 'Metodo B: Derivata Seconda (Il più veloce)' },
		'Sostituisci il punto ',
		{ name: 'MathML', text: 'x_0' },
		' nella derivata seconda ',
		{ name: 'MathML', text: "f''(x)" },
		':',
		'* ',
		{ name: 'MathML', text: "f''(x_0) < 0" },
		' (Triste $\\cap$) → **Massimo**.',
		'* ',
		{ name: 'MathML', text: "f''(x_0) > 0" },
		' (Felice $\\cup$) → **Minimo**.',
		'',
		'',
		'',

		// RELATIVI VS ASSOLUTI
		{ name: 'H2', text: '3. Relativi vs Assoluti' },
		'Per trovare gli Assoluti in un intervallo chiuso [a, b]:',
		'1. Prendi i punti stazionari interni.',
		"2. Prendi gli estremi dell'intervallo (a, b).",
		'3. Prendi eventuali punti di non derivabilità.',
		'4. **Calcola la y di tutti questi punti.** Il più alto vince.',

		// ESEMPIO SVOLTO
		{ name: 'H2', text: '💡 Esempio Svolto (Algoritmo Completo)' },
		'Trova gli estremi di ',
		{ name: 'MathML', text: 'f(x) = x^3 - 3x^2' },
		" nell'intervallo ",
		{ name: 'MathML', text: '[-1, 4]' },
		'.',
		'',

		'**Step 1: Derivata e Fermat**',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: "f'(x) = 3x^2 - 6x = 3x(x-2)",
					},
					'Punti candidati: x=0 e x=2.',
				],
			},
		},

		'**Step 2: Classificazione**',
		'Studiamo il segno. Prima di 0 cresce, tra 0 e 2 decresce, dopo 2 cresce.',
		'* **x=0** è Massimo Relativo.',
		'* **x=2** è Minimo Relativo.',
		'',
		']',
		'',

		'**Step 3: Calcolo delle Y (Gara finale)**',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{ name: 'MathML', text: 'f(0) = 0' },
					' (Max Relativo)',
					'',
					{ name: 'MathML', text: 'f(2) = 8-12 = -4' },
					' (Min Relativo)',
					'',
					{ name: 'MathML', text: 'f(-1) = -1-3 = -4' },
					' (Estremo sx)',
					'',
					{ name: 'MathML', text: 'f(4) = 64-48 = 16' },
					' (Estremo dx)',
				],
			},
		},

		'**Conclusione:**',
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: ['Max Assoluto: **16** (in x=4).', 'Min Assoluto: **-4** (in x=2 e x=-1).'],
			},
		},

		// TRAPPOLE (BOX ALERT)
		{ name: 'H2', text: '⚠️ Trappole ed Errori Comuni' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: '1. Scambiare x con y' },
					'Se chiedono "Quanto vale?", è la **Y**. Se chiedono "Dov\'è?", è la **X**.',
					'',
					{ name: 'H3', text: '2. Dimenticare i punti non derivabili' },
					'Una cuspide (punta) è un massimo, anche se la derivata lì non esiste! Controllali sempre.',
					'',
					{ name: 'H3', text: '3. Dimenticare gli estremi' },
					'In un intervallo limitato, spesso il vincitore assoluto è proprio sul bordo.',
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

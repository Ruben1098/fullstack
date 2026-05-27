import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'teoremi-calcolo-differenziale-rolle-lagrange',
	title: 'I Teoremi Fondamentali: Rolle, Lagrange e Cauchy (Guida Pratica)',
	excerpt: "Spiegazione chiara dei teoremi di Rolle, Lagrange (Valor Medio) e Cauchy. Tabelle riassuntive, interpretazione geometrica (l'autovelox) e guida alla verifica delle ipotesi negli esercizi.",
	category: 'Analisi1',
	school: 'liceo',
	class: '5',
	course: 'Matematica',
	argument: 'Derivate', // Aggiornato come richiesto
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # I Teoremi Fondamentali: Rolle, Lagrange e Cauchy (Guida Pratica)
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: 'A cosa servono questi teoremi?' },
		"Questi tre teoremi servono a collegare ciò che succede agli **estremi** di un intervallo con ciò che succede **dentro** l'intervallo (la derivata).",
		'',
		'In pratica, ci permettono di sapere che esiste un certo punto a pendenza zero o pendenza media senza doverlo calcolare esplicitamente.',
		'',

		// 1. TEOREMA DI ROLLE
		{ name: 'H2', text: '1. Il Teorema di Rolle' },
		'Geometricamente significa che se parti da una quota e torni alla stessa quota, in mezzo devi aver smesso di salire e iniziato a scendere (o viceversa) almeno una volta. Lì la tangente è orizzontale.',
		'',
		'',
		'',
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{ name: 'H3', text: 'Enunciato' },
					'Sia ',
					{ name: 'MathML', text: 'f(x)' },
					' una funzione:',
					'1. **Continua** in ',
					{ name: 'MathML', text: '[a, b]' },
					' (chiuso).',
					'2. **Derivabile** in ',
					{ name: 'MathML', text: '(a, b)' },
					' (aperto).',
					'3. Tale che ',
					{ name: 'MathML', text: 'f(a) = f(b)' },
					'.',
					'',
					'**Tesi:** Esiste almeno un punto ',
					{ name: 'MathML', text: 'c \\in (a, b)' },
					' tale che:',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: "f'(c) = 0",
					},
				],
			},
		},

		// 2. TEOREMA DI LAGRANGE
		{ name: 'H2', text: '2. Il Teorema di Lagrange (o del Valor Medio)' },
		'È detto "Teorema dell\'Autovelox": se la tua velocità media tra due caselli è 130 km/h, c\'è stato sicuramente un istante in cui il tachimetro segnava esattamente 130 km/h.',
		'',
		'',
		'',
		'Geometricamente: esiste un punto in cui la tangente è **parallela** alla retta che unisce gli estremi.',
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{ name: 'H3', text: 'Enunciato' },
					'Sia ',
					{ name: 'MathML', text: 'f(x)' },
					' una funzione:',
					'1. **Continua** in ',
					{ name: 'MathML', text: '[a, b]' },
					'.',
					'2. **Derivabile** in ',
					{ name: 'MathML', text: '(a, b)' },
					'.',
					'',
					'**Tesi:** Esiste almeno un punto ',
					{ name: 'MathML', text: 'c \\in (a, b)' },
					' tale che:',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: "f'(c) = \\frac{f(b) - f(a)}{b - a}",
					},
				],
			},
		},

		// 3. TEOREMA DI CAUCHY
		{ name: 'H2', text: '3. Il Teorema di Cauchy' },
		'È una generalizzazione di Lagrange applicata a due funzioni.',
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{ name: 'H3', text: 'Enunciato' },
					'Siano ',
					{ name: 'MathML', text: 'f(x), g(x)' },
					' continue in ',
					{ name: 'MathML', text: '[a, b]' },
					' e derivabili in ',
					{ name: 'MathML', text: '(a, b)' },
					', con ',
					{ name: 'MathML', text: "g'(x) \\neq 0" },
					'.',
					'',
					'**Tesi:** Esiste un punto ',
					{ name: 'MathML', text: 'c' },
					' tale che:',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: "\\frac{f'(c)}{g'(c)} = \\frac{f(b) - f(a)}{g(b) - g(a)}",
					},
				],
			},
		},

		// TRUCCHI E TRAPPOLE (BOX ALERT)
		{ name: 'H2', text: '💡 Trucchi: Verificare le Ipotesi' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: '1. Attenzione alle parentesi' },
					"La continuità serve sull'intervallo **CHIUSO** [a, b].",
					"La derivabilità basta sull'intervallo **APERTO** (a, b).",
					'Ai bordi la derivata potrebbe non esistere, ma il teorema vale lo stesso!',
					'',
					{ name: 'H3', text: '2. Il punto di non derivabilità (La Trappola)' },
					'Prendi ',
					{ name: 'MathML', text: 'f(x) = |x|' },
					' in ',
					{ name: 'MathML', text: '[-1, 1]' },
					'.',
					'* ',
					{ name: 'MathML', text: 'f(-1)=1' },
					' e ',
					{ name: 'MathML', text: 'f(1)=1' },
					' (Altezze uguali).',
					'* È continua? Sì.',
					'* Posso applicare Rolle? **NO!**',
					'',
					"Perché in mezzo c'è lo zero (punto angoloso). Rolle fallisce: non c'è tangente orizzontale.",
				],
			},
		},
		'',
		'',

		// CONSEGUENZE
		{ name: 'H2', text: 'Conseguenze Importanti' },
		'Dal teorema di Lagrange derivano due verità che diamo per scontate:',
		'1. **Criterio di Costanza:** Se ',
		{ name: 'MathML', text: "f'(x)=0" },
		' sempre, allora la funzione è **Costante**.',
		'2. **Criterio di Monotonia:** Se ',
		{ name: 'MathML', text: "f'(x)>0" },
		' sempre, allora la funzione è **Crescente**.',

		{ name: 'Shell', props: { type: 'close' } },
	],
};

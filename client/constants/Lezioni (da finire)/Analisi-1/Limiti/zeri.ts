import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'teorema-degli-zeri-bolzano',
	title: 'Teorema degli Zeri (di Bolzano): Spiegazione Semplice ed Esempi',
	excerpt: "Cos'è il Teorema degli Zeri? Enunciato, spiegazione intuitiva e come usarlo per dimostrare che un'equazione ha soluzioni. Include esempi ed errori comuni.",
	category: 'Analisi1',
	school: 'liceo',
	class: '5',
	course: 'Matematica',
	argument: 'Teoremi sulle Funzioni Continue',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Teorema degli Zeri (di Bolzano): Enunciato e Spiegazione Facile
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: 'A cosa serve il Teorema degli Zeri?' },
		'Il Teorema degli Zeri è una garanzia matematica che ci assicura l\'esistenza di una soluzione (uno "zero") per un\'equazione ',
		{ name: 'MathML', text: 'f(x)=0' },
		' in un certo intervallo, anche se non sappiamo calcolarla esattamente.',
		'',
		"In pratica: se una funzione continua passa da un valore negativo a uno positivo (o viceversa), deve per forza attraversare l'asse delle x almeno una volta.",
		'',
		'',
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
					' una funzione definita in un intervallo chiuso e limitato ',
					{ name: 'MathML', text: '[a, b]' },
					'.',
					'',
					'**Le Ipotesi:**',
					'1. **Continuità:** ',
					{ name: 'MathML', text: 'f(x)' },
					' continua in tutto ',
					{ name: 'MathML', text: '[a, b]' },
					'.',
					'2. **Cambio di Segno:** La funzione assume valori di segno opposto agli estremi.',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'f(a) \\cdot f(b) < 0',
					},
					'',
					'**La Tesi:**',
					'Allora **esiste almeno un punto** ',
					{ name: 'MathML', text: 'c' },
					" interno all'intervallo (",
					{ name: 'MathML', text: 'a < c < b' },
					') tale che:',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'f(c) = 0',
					},
				],
			},
		},

		// UNICITA' VS ESISTENZA
		{ name: 'H2', text: 'Quanti zeri ci sono? (Unicità vs Esistenza)' },
		"Il teorema ci dice che esiste *almeno* uno zero, ma potrebbero essercene anche infiniti. La funzione potrebbe andare su e giù attraverso l'asse x molte volte.",
		'',
		'',
		'',
		'**Come garantisco che lo zero sia UNICO?**',
		'Devi aggiungere la **Monotonia Strella**. Se ',
		{ name: 'MathML', text: 'f(x)' },
		" è strettamente crescente (o decrescente), attraversa l'asse una volta sola.",
		'',
		'**Schema Riassuntivo:**',
		'* Continuità + Cambio Segno \\Rightarrow **Almeno una soluzione**.',
		'* Continuità + Cambio Segno + Monotonia \\Rightarrow **Una e una sola soluzione**.',

		// ESERCIZIO TIPICO
		{ name: 'H2', text: '💡 A cosa serve nella pratica? (Esercizi Tipici)' },
		"Questo teorema è fondamentale per dimostrare l'esistenza di soluzioni per equazioni impossibili da risolvere algebricamente.",
		'',
		"**Esempio:** L'equazione ",
		{ name: 'MathML', text: 'x^3 + \\ln(x) + 2 = 0' },
		' ha soluzioni?',

		'**1. Definisci la funzione:** ',
		{ name: 'MathML', text: 'f(x) = x^3 + \\ln(x) + 2' },
		'.',
		'',
		'**2. Trova un intervallo "a occhio":** Proviamo due valori.',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'f(0.1) \\approx -0.3 \\quad (\\text{Negativo})',
					},
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'f(1) = 1 + 0 + 2 = 3 \\quad (\\text{Positivo})',
					},
				],
			},
		},

		'**3. Conclusione:**',
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [
					'Dato che cambia segno tra 0.1 e 1 ed è continua, **esiste una soluzione** in ',
					{ name: 'MathML', text: '(0.1, 1)' },
					'.',
				],
			},
		},

		// ERRORI COMUNI (BOX ALERT)
		{ name: 'H2', text: '⚠️ Errori Comuni' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: '1. Dimenticare la Continuità (Il salto)' },
					'Se la funzione non è continua, il teorema fallisce.',
					'Immagina ',
					{ name: 'MathML', text: 'f(x) = 1/x' },
					' tra -1 e 1. Passa da negativo a positivo, ma non tocca mai lo zero (ha un asintoto).',
					'',
					'',
					'',
					{ name: 'H3', text: '2. Segni Uguali' },
					'Se ',
					{ name: 'MathML', text: 'f(a) \\cdot f(b) > 0' },
					' (stesso segno), il teorema **non ti dice nulla**. Potrebbe non esserci nessuno zero, oppure potrebbero essercene due (tipo una "U" che scende e risale).',
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

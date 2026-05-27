import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'simboli-landau-o-piccolo-equivalenza',
	title: 'Simboli di Landau, o-piccolo ed Equivalenza Asintotica: Guida Pratica',
	excerpt: "Cosa significano o-piccolo, O-grande e il simbolo tilde? Guida definitiva all'uso dei simboli di Landau per risolvere i limiti, con tabella delle equivalenze e regole di calcolo.",
	category: 'Analisi1',
	school: 'liceo',
	class: '5',
	course: 'Matematica',
	argument: 'Limiti',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Simboli di Landau, O-piccolo ed Equivalenza Asintotica: Guida Definitiva
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: 'Cosa sono i Simboli di Landau?' },
		'I simboli di Landau (come ',
		{ name: 'MathML', text: 'o, O, \\sim' },
		') sono "etichette" matematiche che servono a descrivere la velocità con cui una funzione cresce o decresce rispetto a un\'altra. Sono fondamentali nel calcolo dei limiti perché ci permettono di sostituire funzioni complicate con approssimazioni più semplici.',
		'',
		'',
		'',

		// TABELLA RELAZIONI
		{ name: 'H3', text: '⚡ Le 3 Relazioni Fondamentali' },
		'Immagina di confrontare due funzioni ',
		{ name: 'MathML', text: 'f(x)' },
		' e ',
		{ name: 'MathML', text: 'g(x)' },
		'. Ecco come leggere i simboli:',
		'',
		`| Simbolo | Nome | Definizione (Limite) | Traduzione Intuitiva |
| :--- | :--- | :--- | :--- |
| **$f \\sim g$** | **Equivalenza Asintotica** | $$ \\lim \\frac{f(x)}{g(x)} = 1 $$ | Hanno la stessa velocità. |
| **$f = o(g)$** | **o-piccolo** | $$ \\lim \\frac{f(x)}{g(x)} = 0 $$ | "$f$ è trascurabile rispetto a $g$". |
| **$f = O(g)$** | **O-grande** | $$ \\left| \\frac{f(x)}{g(x)} \\right| \\le k $$ | "$f$ non supera $g$". |`,
		'',

		// 1. EQUIVALENZA ASINTOTICA
		{ name: 'H2', text: "1. L'Equivalenza Asintotica (∼)" },
		'Questa è la relazione più utile per risolvere gli esercizi. Dire che ',
		{ name: 'MathML', text: '\\sin x \\sim x' },
		' significa che, vicino allo zero, la curva del seno e la retta ',
		{ name: 'MathML', text: 'y=x' },
		' sono praticamente indistinguibili.',
		'',
		'',
		'',
		'**A cosa serve?** Nei limiti che sono prodotti o rapporti, puoi **sostituire** una funzione con la sua stima asintotica.',
		'',
		{ name: 'H3', text: 'Esempio' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to 0} \\frac{\\sin(5x)}{x}',
					},
				],
			},
		},
		'Dato che ',
		{ name: 'MathML', text: '\\sin(t) \\sim t' },
		', allora ',
		{ name: 'MathML', text: '\\sin(5x) \\sim 5x' },
		'. Sostituisco:',
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to 0} \\frac{5x}{x} = 5',
					},
				],
			},
		},

		// LISTA EQUIVALENZE (BOX THEORY)
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{ name: 'H3', text: 'Le Equivalenze da sapere a memoria (x → 0)' },
					{ name: 'MathML', text: '\\sin x \\sim x' },
					'',
					{ name: 'MathML', text: '\\tan x \\sim x' },
					'',
					{ name: 'MathML', text: 'e^x - 1 \\sim x' },
					'',
					{ name: 'MathML', text: '\\ln(1+x) \\sim x' },
					'',
					{ name: 'MathML', text: '1 - \\cos x \\sim \\frac{1}{2}x^2' },
				],
			},
		},

		// 2. O-PICCOLO
		{ name: 'H2', text: "2. L'o-piccolo (o)" },
		'Quando scriviamo ',
		{ name: 'MathML', text: 'f(x) = x + o(x)' },
		', stiamo dicendo: "La funzione vale x, più un resto che è **infinitamente più piccolo** di x".',
		'',
		"Ecco le regole algebriche (un po' strane) degli o-piccoli:",
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{ name: 'H3', text: 'Algebra degli o-piccoli' },
					'1. **Somma:** ',
					{ name: 'MathML', text: 'o(x) + o(x) = o(x)' },
					' (Non fa 2o(x)!)',
					'',
					'2. **Prodotto:** ',
					{ name: 'MathML', text: 'x^2 \\cdot o(x) = o(x^3)' },
					'',
					'3. **Potenza:** ',
					{ name: 'MathML', text: '[o(x)]^2 = o(x^2)' },
					'',
					'4. **Assorbimento:** ',
					{ name: 'MathML', text: 'x^3 + o(x^2) = o(x^2)' },
					' (Vince il termine più grosso/lento)',
				],
			},
		},

		// 3. O-GRANDE
		{ name: 'H2', text: "3. L'O-grande (O)" },
		"Mentre l'o-piccolo indica qualcosa di trascurabile, l'O-grande indica un **limite superiore**.",
		'Dire ',
		{ name: 'MathML', text: 'f(x) = O(x)' },
		' significa che ',
		{ name: 'MathML', text: 'f(x)' },
		' cresce "al massimo" come x.',
		'',

		// ALERT ERRORI COMUNI
		{ name: 'H2', text: '💡 Trucchi ed Errori Comuni' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: "L'Errore Mortale delle Somme" },
					"Mai usare l'Equivalenza Asintotica nelle **somme** o **differenze** se i termini principali si cancellano!",
					'',
					'Esempio: ',
					{ name: 'MathML', text: '\\lim \\frac{\\tan x - \\sin x}{x^3}' },
					'',
					'Se usi le equivalenze (',
					{ name: 'MathML', text: '\\tan x \\sim x, \\sin x \\sim x' },
					'), ottieni:',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\frac{x - x}{x^3} = \\frac{0}{x^3} = 0 \\quad (\\text{SBAGLIATO!})',
					},
					'',
					"**Perché?** Perché hai cancellato l'informazione principale (l'o-piccolo). In questi casi devi usare gli **Sviluppi di Taylor**.",
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

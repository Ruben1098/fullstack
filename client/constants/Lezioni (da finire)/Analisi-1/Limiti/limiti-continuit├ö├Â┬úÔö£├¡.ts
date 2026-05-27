import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'continuita-discontinuita-funzioni',
	title: 'Continuità e Discontinuità delle Funzioni: Guida Completa',
	excerpt: 'Spiegazione chiara su continuità, i 3 tipi di discontinuità (salto, seconda e terza specie) e come risolvere gli esercizi. Include tabella riassuntiva e trucchi.',
	category: 'Analisi1',
	school: 'liceo',
	class: '5',
	course: 'Matematica',
	argument: 'Funzioni e Limiti',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Continuità e Discontinuità delle Funzioni: Guida Completa e Schema Pratico
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: "Che cos'è una funzione continua?" },
		'In termini semplici, una funzione è continua in un punto ',
		{ name: 'MathML', text: 'x_0' },
		' se il suo grafico può essere disegnato senza mai staccare la penna dal foglio in quel punto.',
		'',
		'',
		'',

		// DEFINIZIONE FORMALE (BOX THEORY)
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{ name: 'H3', text: 'Definizione Matematica' },
					'Una funzione ',
					{ name: 'MathML', text: 'f(x)' },
					' è continua in ',
					{ name: 'MathML', text: 'x_0' },
					' se il limite destro e il limite sinistro coincidono col valore della funzione:',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to x_0} f(x) = f(x_0)',
					},
				],
			},
		},

		// TABELLA RIASSUNTIVA
		{ name: 'H3', text: '⚡ Schema Rapido: I 3 Tipi di Discontinuità' },
		'Ecco la tabella riassuntiva per classificare i punti "problematici".',
		'',
		// Nota: Ho raddoppiato le backslash (\\) per il LaTeX dentro la tabella
		`| Tipo di Discontinuità | Condizione Matematica | Esempio Tipico |
| :--- | :--- | :--- | :--- |
| **Prima Specie** (Salto) | Limiti dx e sx finiti ma **diversi** ($l_1 \\neq l_2$). | Funzione Segno |
| **Seconda Specie** (Essenziale) | Almeno uno dei limiti è **infinito** ($\\infty$) o **non esiste**. | Asintoto ($1/x$) |
| **Terza Specie** (Eliminabile)| Il limite esiste finito ($l$), ma diverso da $f(x_0)$. | Buco nel grafico |`,
		'',

		// REGOLA DEI 3 STEP
		{
			name: 'H2',
			text: 'Come capire se una funzione è continua (La Regola dei 3 Step)',
		},
		'Per verificare la continuità in ',
		{ name: 'MathML', text: 'x_0' },
		', devono essere vere **tutte** queste condizioni:',
		'',
		'1. **La funzione esiste:** ',
		{ name: 'MathML', text: 'f(x_0)' },
		' è definito?',
		'2. **Il limite esiste:** ',
		{ name: 'MathML', text: '\\lim_{x \\to x_0} f(x)' },
		' è un numero finito?',
		'3. **Coincidenza:** Il limite è uguale a ',
		{ name: 'MathML', text: 'f(x_0)' },
		'?',
		'',
		'Se anche una sola risposta è "NO", la funzione è discontinua.',

		// ANALISI APPROFONDITA - I 3 TIPI
		{ name: 'H2', text: 'Analisi Approfondita: I 3 Tipi di Discontinuità' },

		// TIPO 1: SALTO
		{ name: 'H3', text: '1. Discontinuità di Prima Specie (Il Salto)' },
		'Immagina di trovarti davanti a un gradino alto. Non puoi proseguire fluidamente, devi saltare. Matematicamente, i limiti destro e sinistro sono entrambi numeri finiti, ma **diversi**.',
		'',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to x_0^-} f(x) = l_1 \\neq \\lim_{x \\to x_0^+} f(x) = l_2',
					},
					'La differenza ',
					{ name: 'MathML', text: '|l_1 - l_2|' },
					' si chiama **salto**.',
				],
			},
		},

		// TIPO 2: INFINITO
		{ name: 'H3', text: "2. Discontinuità di Seconda Specie (L'Infinito)" },
		'Questa è la più "grave". Basta che **uno solo** dei due limiti sia infinito (',
		{ name: 'MathML', text: '\\infty' },
		') oppure non esista.',
		'',
		'',
		'',
		'**Esempio classico:** ',
		{ name: 'MathML', text: 'f(x) = 1/x' },
		' in ',
		{ name: 'MathML', text: 'x=0' },
		'.',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to 0^+} \\frac{1}{x} = +\\infty',
					},
				],
			},
		},
		'Poiché il limite è infinito, è una Seconda Specie (Asintoto Verticale).',

		// TIPO 3: ELIMINABILE
		{ name: 'H3', text: '3. Discontinuità di Terza Specie (Eliminabile)' },
		"È come se ci fosse un **buco** nel sentiero. Il limite esiste ed è finito, ma nel punto esatto la funzione non c'è (o è spostata).",
		'',
		'',
		'',
		'Si chiama **Eliminabile** perché potremmo "tappare il buco" ridefinendo la funzione solo in quel punto.',

		// TRUCCHI ED ERRORI (BOX ALERT)
		{ name: 'H2', text: '💡 Trucchi ed Errori Comuni' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: "L'errore del Dominio" },
					'Molti cercano discontinuità ovunque. Ricorda: ha senso classificare le discontinuità principalmente nei **punti esclusi dal dominio** (punti di accumulazione) o nei punti di raccordo delle funzioni a tratti.',
				],
			},
		},

		{ name: 'H3', text: 'Il trucco della Funzione a Tratti' },
		"Esempio tipico d'esame. Data la funzione:",
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'f(x) = \\begin{cases} 2x+1 & x \\le 1 \\\\ x^2+k & x > 1 \\end{cases}',
					},
				],
			},
		},
		'Per trovare k affinché sia continua, imponi che il limite sinistro sia uguale al destro:',
		'',
		'* Limite sinistro (x → 1⁻): ',
		{ name: 'MathML', text: '2(1)+1 = 3' },
		'* Limite destro (x → 1⁺): ',
		{ name: 'MathML', text: '1^2+k = 1+k' },
		'',
		'Uguagliando i risultati:',
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '3 = 1+k \\Rightarrow k = 2',
					},
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

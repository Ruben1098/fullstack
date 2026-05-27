import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'derivate-successive-seconda-n-esima',
	title: 'Derivate Successive: Cosa sono, Calcolo e Significato Fisico',
	excerpt: 'Cosa sono la derivata seconda, terza e n-esima? Spiegazione chiara della notazione, del significato fisico (accelerazione) e geometrico (concavità), con esempi svolti.',
	category: 'Analisi1',
	school: 'liceo',
	class: '5',
	course: 'Matematica',
	argument: 'Derivate',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Derivate Successive: Calcolo, Notazione e Significato Fisico
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: 'Cosa sono le Derivate Successive?' },
		'Le derivate successive non sono altro che il risultato di derivare una funzione più volte di seguito. È un processo "a cascata": il risultato di un passaggio diventa il punto di partenza di quello successivo.',
		'',
		'1. Derivi ',
		{ name: 'MathML', text: 'f(x)' },
		' → ottieni ',
		{ name: 'MathML', text: "f'(x)" },
		' (Derivata Prima).',
		'2. Derivi ',
		{ name: 'MathML', text: "f'(x)" },
		' → ottieni ',
		{ name: 'MathML', text: "f''(x)" },
		' (Derivata Seconda).',
		'',

		// TABELLA NOTAZIONE
		{ name: 'H3', text: '📝 Come si scrivono?' },
		'Attenzione perché dopo la terza derivata, i simboli cambiano per non riempire il foglio di virgolette.',
		'',
		// Escaped LaTeX per la tabella Markdown
		`| Ordine | Notazione comune | Notazione fisica | Significato |
| :--- | :--- | :--- | :--- |
| **Prima** | $f'(x)$ | $\\frac{dy}{dx}$ | Velocità / Pendenza |
| **Seconda** | $f''(x)$ | $\\frac{d^2y}{dx^2}$ | Accelerazione / Concavità |
| **Terza** | $f'''(x)$ | $\\frac{d^3y}{dx^3}$ | Strappo (Jerk) |
| **Quarta** | $f^{(4)}(x)$| $\\frac{d^4 y}{dx^4}$ | Variazione ord. 4 |
| **n-esima** | $y^{(n)}$ | $\\frac{d^ny}{dx^n}$ | Variazione ord. n |`,
		'',

		// TRAPPOLA NOTAZIONE (BOX ALERT)
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: '⚠️ Trappola della Notazione' },
					"Quando vedi un numero tra parentesi tonde all'apice, significa **Derivata**.",
					'Quando vedi un numero senza parentesi, significa **Potenza**.',
					'',
					'* ',
					{ name: 'MathML', text: 'f^{(4)}(x)' },
					' = Derivo 4 volte.',
					'* ',
					{ name: 'MathML', text: 'f^4(x)' },
					' = Elevo alla quarta.',
				],
			},
		},

		// A COSA SERVONO
		{ name: 'H2', text: 'A cosa servono? (Fisica e Geometria)' },

		{ name: 'H3', text: '1. In Fisica (Il Movimento)' },
		'Se ',
		{ name: 'MathML', text: 'f(t)' },
		" è la posizione dell'auto:",
		'* ',
		{ name: 'MathML', text: "f'(t)" },
		' = **Velocità** (quanto vai veloce).',
		'* ',
		{ name: 'MathML', text: "f''(t)" },
		' = **Accelerazione** (quanto stai premendo il gas).',
		'* ',
		{ name: 'MathML', text: "f'''(t)" },
		' = **Strappo** (il colpo che senti se freni di botto).',
		'',
		'',
		'',

		{ name: 'H3', text: '2. In Geometria (Il Grafico)' },
		'* ',
		{ name: 'MathML', text: "f'(x)" },
		' ti dice se la funzione sale o scende (crescenza).',
		'* ',
		{ name: 'MathML', text: "f''(x)" },
		' ti dice se la funzione "sorride" (concava verso l\'alto ∪) o è "triste" (concava verso il basso ∩).',
		'',
		'',
		'',

		// COMPORTAMENTI PARTICOLARI
		{ name: 'H2', text: 'Comportamenti Particolari' },
		'Quando derivi ripetutamente, le funzioni seguono pattern precisi:',
		'',
		'**1. Polinomi:** Perdono un grado a ogni passaggio fino a morire a zero.',
		{ name: 'MathML', text: 'x^3 \\to 3x^2 \\to 6x \\to 6 \\to 0' },
		'',
		'**2. Esponenziali:** Si autorigenerano.',
		{ name: 'MathML', text: 'e^{kx} \\to k e^{kx} \\to k^2 e^{kx} \\dots' },
		'',
		'**3. Seno e Coseno:** Loop infinito di 4 passi.',
		{
			name: 'MathML',
			text: '\\sin \\to \\cos \\to -\\sin \\to -\\cos \\to \\sin',
		},
		'',

		// ESEMPIO SVOLTO
		{ name: 'H2', text: 'Esempio Svolto' },
		'Calcoliamo la derivata seconda di: ',
		{ name: 'MathML', text: 'f(x) = x \\cdot \\ln(x)' },
		'.',
		'',

		'**Passo 1: Derivata Prima (Regola del Prodotto)**',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: "f'(x) = 1 \\cdot \\ln(x) + x \\cdot \\frac{1}{x} = \\ln(x) + 1",
					},
				],
			},
		},

		'**Passo 2: Derivata Seconda**',
		'Ora deriviamo il risultato ',
		{ name: 'MathML', text: '\\ln(x) + 1' },
		'.',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: "f''(x) = D[\\ln(x)] + D[1] = \\frac{1}{x} + 0",
					},
				],
			},
		},

		'**Risultato:**',
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: "f''(x) = \\frac{1}{x}",
					},
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

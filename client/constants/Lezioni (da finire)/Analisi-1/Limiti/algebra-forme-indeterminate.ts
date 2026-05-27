import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'calcolo-limiti-algebra-forme-indeterminate',
	title: 'Calcolo dei Limiti: Algebra, Sostituzione e Forme Indeterminate',
	description:
		'Guida definitiva al calcolo dei limiti: algebra di base, limiti destro/sinistro, elenco delle 7 forme indeterminate e strategie pratiche per risolverle.',
	category: 'Analisi1',
	school: 'liceo',
	class: '5',
	course: 'Matematica',
	argument: 'Limiti',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Calcolo dei Limiti: Algebra, Sostituzione e Forme Indeterminate
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: 'Come si calcola un limite?' },
		'Nel 90% dei casi, calcolare ',
		{ name: 'MathML', text: '\\lim_{x \\to x_0} f(x)' },
		' significa semplicemente **sostituire** ',
		{ name: 'MathML', text: 'x_0' },
		' al posto della ',
		{ name: 'MathML', text: 'x' },
		' nella funzione e vedere cosa succede. Se ottieni un numero finito, hai finito. Se ottieni valori come ',
		{ name: 'MathML', text: '0/0' },
		' o ',
		{ name: 'MathML', text: '\\infty/\\infty' },
		', sei di fronte a una **Forma Indeterminata** e devi usare tecniche algebriche per "sbloccare" il risultato.',
		'',

		// SEZIONE 1: SOSTITUZIONE
		{ name: 'H2', text: '1. Il Primo Tentativo: La Sostituzione Diretta' },
		"La regola d'oro è: **Prova sempre prima a sostituire.** Non complicarti la vita con teoremi strani se non servono.",

		{ name: 'H3', text: 'Esempio' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to 2} (x^2 + 3x - 1) = 2^2 + 3(2) - 1 = 9',
					},
				],
			},
		},
		'Il limite è 9. Fine.',
		'',

		{ name: 'H3', text: "🧮 L'Algebra dei Limiti" },
		'Se non ci sono problemi strani, i limiti si comportano come numeri normali. Ecco cosa puoi fare tranquillamente:',
		'',
		// TABELLA (Markdown con LaTeX escaped)
		`| Operazione | Regola Intuitiva | Esempio |
| :--- | :--- | :--- |
| **Somma** | Il limite della somma è la somma dei limiti. | $\\lim (x + x^2) \\to 2+4 = 6$ |
| **Prodotto** | Il limite del prodotto è il prodotto dei limiti. | $\\lim (x \\cdot e^x) \\to 2 \\cdot e^2$ |
| **Quoziente** | Il limite del rapporto è il rapporto dei limiti (se il denom. $\\neq 0$). | $\\lim \\frac{x+1}{x} \\to \\frac{3}{2}$ |
| **Potenza** | Il limite passa "dentro" la base e l'esponente. | $\\lim (x)^x \\to 2^2 = 4$ |`,
		'',

		// SEZIONE 2: DX e SX
		{ name: 'H2', text: '2. Destra e Sinistra: (x → x₀)' },
		'A volte sostituire non basta, perché la funzione si comporta diversamente se arrivi da destra (valori leggermente più grandi) o da sinistra (valori leggermente più piccoli). Questo succede spesso con i **reciproci** (1/x) o le funzioni definite a tratti.',
		'',
		'',
		'',
		{ name: 'H3', text: 'La regola del 0⁺ e 0⁻' },
		'Quando al denominatore ottieni uno Zero, devi capire "che tipo" di zero è.',
		'',
		'* ',
		{ name: 'MathML', text: '0^+' },
		' indica un numero piccolissimo ma **positivo** (es: 0,00001).',
		'',
		'* ',
		{ name: 'MathML', text: '0^-' },
		' indica un numero piccolissimo ma **negativo** (es: -0,00001).',
		'',

		{ name: 'H3', text: 'Esempio Classico (1/x)' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to 0^+} \\frac{1}{x} = +\\infty \\; (\\text{Positivo / Positivo})',
					},
					'',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to 0^-} \\frac{1}{x} = -\\infty \\; (\\text{Positivo / Negativo})',
					},
				],
			},
		},
		'Se i limiti destro e sinistro sono diversi, allora il **limite globale non esiste**.',

		// SEZIONE 3: FORME INDETERMINATE
		{ name: 'H2', text: '3. Le 7 Forme Indeterminate' },
		'A volte, sostituendo, ottieni espressioni che non hanno senso immediato. Si chiamano **Forme Indeterminate**.',
		'',
		'⚠️ **Attenzione:** "Indeterminato" NON vuol dire "Impossibile". Vuol dire solo "Non lo so ancora, devo indagare meglio".',
		'',
		'Ecco le 7 Forme Indeterminate ufficiali:',

		{ name: 'H3', text: 'Le Classiche' },
		{ name: 'MathML', text: '+\\infty - \\infty' },
		' (Chi è più grande?)',
		'',
		{ name: 'MathML', text: '0 \\cdot \\infty' },
		" (Vince lo zero o l'infinito?)",
		'',
		{ name: 'MathML', text: '\\frac{0}{0}' },
		' (Forma più comune)',
		'',
		{ name: 'MathML', text: '\\frac{\\infty}{\\infty}' },
		" (Gara di velocità all'infinito)",
		'',

		{ name: 'H3', text: 'Le Esponenziali' },
		{ name: 'MathML', text: '1^\\infty, \\quad 0^0, \\quad \\infty^0' },
		'',

		// BOX ALERT: ERRORE COMUNE
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: '🚫 Errore Gravissimo da Evitare' },
					'**Non confondere "Numero diviso Zero" con "Zero diviso Zero"!**',
					'',
					{ name: 'MathML', text: '\\frac{5}{0} = \\infty' },
					' (Questo **NON** è indeterminato! È infinito).',
					'',
					{ name: 'MathML', text: '\\frac{0}{5} = 0' },
					' (Questo è zero).',
					'',
					{ name: 'MathML', text: '\\frac{0}{0} = ?' },
					' (Solo questa è una forma indeterminata).',
				],
			},
		},

		// SEZIONE 4: STRATEGIE
		{ name: 'H2', text: '4. Strategie di Risoluzione' },

		{ name: 'H3', text: 'A. Forma ∞/∞ (Polinomi)' },
		'**Trucco:** Guarda solo i gradi massimi. Vince sempre la potenza più alta.',
		'',
		'* Grado Num > Grado Den → ',
		{ name: 'MathML', text: '\\infty' },
		'',
		'* Grado Num < Grado Den → ',
		{ name: 'MathML', text: '0' },
		'',
		'* Grado Num = Grado Den → Rapporto dei coefficienti.',
		'',

		{ name: 'H3', text: 'B. Forma 0/0 (Polinomi)' },
		'**Tecnica:** Se un polinomio si annulla in ',
		{ name: 'MathML', text: 'x_0' },
		', significa che è divisibile per ',
		{ name: 'MathML', text: '(x - x_0)' },
		'. Scomponi e semplifica.',
		'',

		// ESEMPIO SVOLTO 0/0
		'**Esempio:**',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1} = \\frac{0}{0}',
					},
				],
			},
		},
		'Scomponi il numeratore (differenza di quadrati) e semplifica:',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to 1} \\frac{(x-1)(x+1)}{x-1} = \\lim_{x \\to 1} (x+1)',
					},
				],
			},
		},
		'Ora sostituisci:',
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\lim_{x \\to 1} (x+1) = 2',
					},
				],
			},
		},

		{ name: 'H3', text: 'C. Forma +∞ - ∞ (Con radici)' },
		'**Tecnica:** Razionalizzazione. Moltiplica e dividi per la somma dei termini per eliminare la radice.',
		'',

		// CONCLUSIONE - BOX TRUCCO
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border', // Uso Alert per farlo risaltare come "Tip"
				children: [
					{ name: 'H3', text: "💡 Il Segreto dell'Algebra dei Limiti" },
					'Risolvere un limite è come fare una **gara a chi è più forte**.',
					'',
					'In ',
					{ name: 'MathML', text: 'x^3 + x' },
					', comanda ',
					{ name: 'MathML', text: 'x^3' },
					'. In ',
					{ name: 'MathML', text: 'e^x - x^{1000}' },
					', comanda ',
					{ name: 'MathML', text: 'e^x' },
					'.',
					'',
					'Quando sei incerto, chiediti sempre: "Chi sta crescendo più velocemente?"',
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

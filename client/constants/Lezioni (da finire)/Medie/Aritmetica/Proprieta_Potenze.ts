import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'proprieta-potenze-regole-esercizi',
	title: 'Proprietà delle Potenze: Tabella, Regole ed Esercizi Svolti',
	excerpt: 'Le 5 proprietà delle potenze spiegate facili. Scarica la tabella PDF, scopri i trucchi per non sbagliare gli esponenti e segui gli esercizi passo-passo.',
	category: 'Aritmetica',
	school: 'medie',
	class: '1',
	course: 'Matematica',
	argument: 'Potenze',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Proprietà delle potenze: Le 5 Regole Fondamentali
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: 'Cosa sono le proprietà delle potenze?' },
		'Sono 5 regole matematiche che ti permettono di semplificare i calcoli trasformando operazioni difficili in semplici somme o sottrazioni degli esponenti.',
		"Si applicano solo quando hai la **stessa base** o lo **stesso esponente**. Se non c'è nessuna di queste condizioni, le proprietà non si usano!",
		'',
		'',
		'',

		// TABELLA REGOLE
		{ name: 'H2', text: 'Tabella Completa delle Regole' },
		'Memorizza questo schema. Chiediti sempre: "Hanno la base uguale o l\'esponente uguale?".',
		'',
		`| Caso A: Stessa Base | Regola | Esempio |
| :--- | :--- | :--- |
| **1. Moltiplicazione** | Somma gli esponenti | $a^x \\cdot a^y = a^{x+y}$ |
| **2. Divisione** | Sottrai gli esponenti | $a^x : a^y = a^{x-y}$ |
| **3. Potenza di Potenza** | Moltiplica gli esponenti | $\\left(a^x\\right)^y = a^{x \\cdot y}$ |

| Caso B: Stesso Esponente | Regola | Esempio |
| :--- | :--- | :--- |
| **4. Moltiplicazione** | Moltiplica le basi | $a^x \\cdot b^x = \\left(a \\cdot b\\right)^x$ |
| **5. Divisione** | Dividi le basi | $a^x : b^x = \\left(a : b\\right)^x$ |`,
		'',

		// CASI PARTICOLARI
		{ name: 'H2', text: 'Casi particolari (0 e 1)' },
		'1. **Esponente Zero:** Qualsiasi numero (tranne lo 0) elevato alla 0 fa **1**.',
		{ name: 'MathML', text: '158^0 = 1' },
		'',
		'2. **Esponente Uno:** L\'esponente 1 è "invisibile".',
		{ name: 'MathML', text: '5 = 5^1' },

		// ERRORE COMUNE (BOX ALERT)
		{ name: 'H2', text: "⚠️ L'Errore che fanno tutti" },
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: 'Attenzione alla trappola!' },
					'Non confondere il **prodotto** con la **potenza di potenza**.',
					'',
					'* Se vedi il **PER** (·): Devi **SOMMARE**.',
					{ name: 'MathML', text: '2^3 \\cdot 2^2 = 2^{3+2} = 2^5' },
					'',
					'* Se vedi la **PARENTESI**: Devi **MOLTIPLICARE**.',
					{
						name: 'MathML',
						text: '\\left(2^3\\right)^2 = 2^{3 \\cdot 2} = 2^6',
					},
				],
			},
		},
		'',
		'',

		// ESERCIZIO GUIDATO
		{ name: 'H2', text: "Esercizio Guidato: Risolviamo un'espressione" },
		"Proviamo a semplificare questa espressione insieme. Regola d'oro: non calcolare i numeri grandi finché non sei alla fine.",

		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border', // BoxIntro simulato con style simile
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\left\\{\\left[\\left(2^3 \\cdot 2^4\\right)^2\\right] : 2^{10}\\right\\} \\cdot 2',
					},
				],
			},
		},

		{ name: 'H3', text: 'Passo 1: Dentro la tonda (Stessa Base)' },
		'Abbiamo una moltiplicazione tra basi uguali. Somma gli esponenti (3+4).',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\left\\{\\left[2^7\\right]^2 : 2^{10}\\right\\} \\cdot 2',
					},
				],
			},
		},

		{ name: 'H3', text: 'Passo 2: La Potenza di Potenza' },
		"C'è una parentesi quadra con un esponente fuori. Moltiplica gli esponenti (7 per 2).",
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '\\left\\{2^{14} : 2^{10}\\right\\} \\cdot 2',
					},
				],
			},
		},

		{ name: 'H3', text: 'Passo 3: La Divisione' },
		"Dentro la graffa c'è una divisione. Sottrai gli esponenti (14 - 10).",
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '2^4 \\cdot 2',
					},
				],
			},
		},

		{ name: 'H3', text: "Passo 4: Il trucco dell'1 invisibile" },
		'Il 2 finale non ha esponente: metti subito un 1. Ora somma (4+1).',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '2^4 \\cdot 2^1 = 2^5',
					},
				],
			},
		},

		{ name: 'H3', text: 'Risultato Finale' },
		'Solo ora calcoliamo il numero: 2 per 5 volte.',
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: '32',
					},
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

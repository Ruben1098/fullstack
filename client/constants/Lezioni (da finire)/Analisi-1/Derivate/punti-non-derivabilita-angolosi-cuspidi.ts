import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'punti-non-derivabilita-classificazione',
	title: 'Punti di Non Derivabilità: Angolosi, Cuspidi e Flessi a Tangente Verticale',
	excerpt: 'Guida completa alla classificazione dei punti di non derivabilità. Tabella riassuntiva per distinguere punti angolosi, cuspidi e flessi verticali tramite i limiti della derivata.',
	category: 'Analisi1',
	school: 'liceo',
	class: '5',
	course: 'Matematica',
	argument: 'Derivate',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Punti di Non Derivabilità: Classificazione (Angolosi, Cuspidi, Flessi)
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: 'Cosa sono i punti di non derivabilità?' },
		'Un punto di non derivabilità è un punto del grafico in cui la funzione è **continua** (non ci sono buchi), ma la linea non è "liscia". In quel punto non esiste una tangente unica definita, oppure la tangente diventa verticale.',
		'',
		'',
		'',

		// TABELLA RIASSUNTIVA (Con Box Theory per evidenziarla)
		{
			name: 'Box',
			props: {
				className: 'bg-boxtheory border-boxtheory-border',
				children: [
					{ name: 'H3', text: '⚡ Punti di non derivabilità: 3 casi' },
					'Ecco come chiamare il punto in base ai limiti destro (l+) e sinistro (l-) della derivata:',
					'',
					`| Tipo di Punto | Limite Sinistro ($l_-$) | Limite Destro ($l_+$) | Segno |
| :--- | :--- | :--- | :--- |
| **Punto Angoloso** | Finito | Finito (diverso) | $l_- \\neq l_+$ |
| **Cuspide** | Infinito | Infinito | Segni **Opposti** |
| **Flesso Verticale** | Infinito | Infinito | Segni **Uguali** |`,
				],
			},
		},

		// PREREQUISITO
		{ name: 'H2', text: 'Prerequisito Fondamentale: La Continuità' },
		'Prima di classificare la non derivabilità, devi verificare una cosa: **La funzione è continua in quel punto?**',
		"Se la funzione è discontinua (c'è un salto o un buco), non ha senso parlare di cuspidi. È semplicemente discontinua.",

		// 1. PUNTO ANGOLOSO
		{ name: 'H2', text: '1. Il Punto Angoloso (Lo "Spigolo")' },
		"Matematicamente, arrivi nel punto con una certa pendenza da sinistra e riparti con una pendenza diversa a destra. C'è un cambio di direzione improvviso.",
		'',
		'',
		'',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{ name: 'H3', text: 'Definizione' },
					'Esistono entrambi i limiti della derivata e sono **finiti**, ma **diversi**:',
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: "f'_-(x_0) \\neq f'_+(x_0)",
					},
					'',
					'**Esempio:** ',
					{ name: 'MathML', text: 'f(x) = |x|' },
					' in ',
					{ name: 'MathML', text: 'x=0' },
					'.',
					'Derivata sx: -1. Derivata dx: +1.',
				],
			},
		},

		// 2. CUSPIDE
		{ name: 'H2', text: '2. La Cuspide (La "Punta")' },
		'Questo è il caso più estremo. La funzione si impenna verticalmente da entrambi i lati, formando una punta.',
		'',
		'',
		'',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{ name: 'H3', text: 'Definizione' },
					'I limiti della derivata sono entrambi **infiniti**, ma di **segno opposto**.',
					'* Uno va a ',
					{ name: 'MathML', text: '+\\infty' },
					" e l'altro a ",
					{ name: 'MathML', text: '-\\infty' },
					'.',
					'',
					'**Esempio:** ',
					{ name: 'MathML', text: 'f(x) = \\sqrt{|x|}' },
					' in ',
					{ name: 'MathML', text: 'x=0' },
					'.',
				],
			},
		},

		// 3. FLESSO VERTICALE
		{ name: 'H2', text: '3. Flesso a Tangente Verticale' },
		'Qui la funzione non crea punte o spigoli, è "liscia", ma per un istante diventa perfettamente verticale.',
		'',
		'',
		'',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{ name: 'H3', text: 'Definizione' },
					'I limiti della derivata sono entrambi **infiniti** e hanno lo **stesso segno**.',
					'* Entrambi ',
					{ name: 'MathML', text: '+\\infty' },
					' (Ascendente).',
					'* Oppure entrambi ',
					{ name: 'MathML', text: '-\\infty' },
					' (Discendente).',
					'',
					'**Esempio:** ',
					{ name: 'MathML', text: 'f(x) = \\sqrt[3]{x}' },
					' in ',
					{ name: 'MathML', text: 'x=0' },
					'.',
				],
			},
		},

		// ALGORITMO
		{ name: 'H2', text: '💡 Algoritmo per gli Esercizi' },
		'1. **Trova i punti sospetti:** (es. dove si annulla un valore assoluto o una radice).',
		'2. **Verifica la continuità:** Se non è continua → STOP.',
		'3. **Calcola la Derivata Generica** per ',
		{ name: 'MathML', text: 'x \\neq x_0' },
		'.',
		'4. **Fai i Limiti della Derivata** (destro e sinistro).',
		'5. **Confronta con la Tabella** per dare il nome.',

		// ERRORE SEMINULLO (BOX ALERT)
		{
			name: 'Box',
			props: {
				className: 'bg-boxalert border-boxalert-border',
				children: [
					{ name: 'H3', text: '⚠️ Attenzione al caso Misto' },
					"Se un limite è finito (es. 3) e l'altro è infinito (∞), come si chiama?",
					'',
					'Rientra genericamente nella categoria dei **Punti Angolosi** (perché le tangenti destra e sinistra formano comunque un angolo, anche se una è verticale).',
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

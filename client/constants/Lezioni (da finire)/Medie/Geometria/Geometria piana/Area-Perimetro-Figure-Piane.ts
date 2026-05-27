import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: 'formule-aree-perimetri-geometria',
	school: 'medie',
	class: '2', // Si copre in 1ª e 2ª, ma il riepilogo è tipico di 2ª
	title: 'Aree e Perimetri: Formulario Completo e Trucchi per Ricordarli',
	excerpt: "Tutte le formule di geometria piana in un'unica tabella. Impara a calcolare area e perimetro di Quadrato, Rettangolo, Triangolo, Cerchio e Trapezi senza errori.",
	category: 'Geometria',
	course: 'Matematica',
	argument: 'Poligoni',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
      # Formule di Geometria Piana: Aree e Perimetri
      `,

	// --- CONTENUTO ---
	content: [
		{ name: 'Shell', props: { type: 'open' } },

		// INTRODUZIONE
		{ name: 'H2', text: 'Qual è la differenza tra Area e Perimetro?' },
		'* **Perimetro (2p):** Misura la lunghezza del **contorno** (il recinto).',
		'* **Area (A):** Misura la grandezza della **superficie interna** (il pavimento).',
		'',
		'',
		'',

		// TABELLA UNIVERSALE
		{ name: 'H2', text: 'Tabella Universale delle Formule' },
		'Legenda: b=base, h=altezza, l=lato, r=raggio.',
		'',
		`| Figura | Area (Interno) | Perimetro (Contorno) |
| :--- | :--- | :--- |
| **Quadrato** | $A = l^2$ | $2p = 4 \\cdot l$ |
| **Rettangolo** | $A = b \\cdot h$ | $2p = 2 \\cdot (b + h)$ |
| **Triangolo** | $A = \\frac{b \\cdot h}{2}$ | Somma dei 3 lati |
| **Trapezio** | $A = \\frac{(B + b) \\cdot h}{2}$ | Somma dei 4 lati |
| **Rombo** | $A = \\frac{D \\cdot d}{2}$ | $2p = 4 \\cdot l$ |
| **Cerchio** | $A = \\pi \\cdot r^2$ | $C = 2 \\cdot \\pi \\cdot r$ |`,
		'',

		// TRUCCHI VISIVI
		{ name: 'H2', text: 'Capire le Formule: I Trucchi Visivi' },

		{ name: 'H3', text: 'Perché il Triangolo è "diviso 2"?' },
		'Molti studenti dimenticano il fratto 2. Ricorda: ogni triangolo è esattamente la metà di un rettangolo con la stessa base e altezza.',
		"Se non dividi, stai calcolando l'area del rettangolo!",
		'',
		'',
		'',

		{ name: 'H3', text: 'Il Cerchio e il Pi Greco' },
		'Il cerchio usa la costante magica Pi Greco (circa 3,14).',
		'* Cerchi la lunghezza (Circonferenza)? La formula è lineare ($r$).',
		"* Cerchi l'area (Superficie)? La formula è quadrata ($r^2$).",

		// ESERCIZIO GUIDATO
		{ name: 'H2', text: 'Esercizio Guidato: Area del Trapezio' },
		"**Traccia:** Calcola l'area di un trapezio con Base maggiore = 10 cm, base minore = 6 cm, Altezza = 4 cm.",
		'',
		'',
		'',

		{ name: 'H3', text: 'Passo 1: Scrivi la formula' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'A = \\frac{\\left(B + b\\right) \\cdot h}{2}',
					},
				],
			},
		},

		{ name: 'H3', text: 'Passo 2: Sostituisci i numeri' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'A = \\frac{\\left(10 + 6\\right) \\cdot 4}{2}',
					},
				],
			},
		},

		{ name: 'H3', text: 'Passo 3: Risolvi con ordine' },
		'Prima la somma nelle parentesi (10+6 = 16).',
		{
			name: 'Box',
			props: {
				className: 'bg-boxstep border-boxstep-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'A = \\frac{16 \\cdot 4}{2} = \\frac{64}{2}',
					},
				],
			},
		},

		{ name: 'H3', text: 'Risultato' },
		{
			name: 'Box',
			props: {
				className: 'bg-boxresult border-boxresult-border',
				children: [
					{
						name: 'MathML',
						props: { className: 'text-xl mx-auto' },
						text: 'Area = 32 \\text{ cm}^2',
					},
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
					{ name: 'H3', text: '1. Unità di misura' },
					"L'Area si misura SEMPRE in **cm²** o **m²**. Se scrivi solo cm, è sbagliato.",
					'',
					{ name: 'H3', text: '2. Le parentesi nel trapezio' },
					'Devi fare prima la somma delle basi! Se scrivi 10 + 6 · 4 sulla calcolatrice senza parentesi, il risultato sarà sbagliato.',
				],
			},
		},

		{ name: 'Shell', props: { type: 'close' } },
	],
};

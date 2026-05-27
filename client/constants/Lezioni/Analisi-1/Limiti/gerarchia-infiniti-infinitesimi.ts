import parser from "@/lib/parser";

export default {
  // --- METADATI ---
  slug: "gerarchia-infiniti-infinitesimi",
  title: "Gerarchia degli Infiniti: Tabella e Confronto tra Funzioni",
  excerpt:
    "Scopri l'ordine in cui prevalgono le funzioni nei limiti. Tabella della gerarchia degli infiniti e metodi per confrontare funzioni della stessa classe.",
  category: "Analisi1",
  school: "liceo",
  class: "5",
  course: "Matematica",
  argument: "Limiti",
  featuredImage: "/image.webp",
  has_pdf_resource: true,
  heading: `
:H1[La Gerarchia degli Infiniti: Come Capire Quale Funzione Prevale nei Limiti]
:P[Il confronto tra infiniti è una tecnica rapida per risolvere le forme indeterminate ] :InlineMath[\\frac{\\infty}{\\infty}] :P[ oppure ] :InlineMath[\\frac{0}{0}] :P[. Esistono alcune funzioni vanno verso l'infinito molto più velocemente di altre, quando] :InlineMath[x\\to\\infty.] :P[Per capire quali funzioni prevalgono sulle altre si utilizza la **Gerarchia degli infiniti**.]
`,

  // --- CONTENUTO ---
  content: [
    { name: "Shell", props: { type: "open" } },
    {
      name: "H2",
      text: "La Gerarchia degli Infiniti",
    },

    { name: "div", type: "open" },
    [
      {
        name: "P",
        text: "In questa tabella ordiniamo dall'alto verso il basso qual è la gerarchia delle funzioni:",
      },
    ],
    { name: "div", type: "close" },

    { name: "Table", type: "open" },
    [
      { name: "Row", type: "open" },
      "Famiglia|Funzione|Esempi",
      { name: "Row", type: "close" },

      { name: "Row", type: "open" },
      "**1-Exp/Potenza**|:MathML[f(x)^{g(x)}]|:MathML[x^x]",
      { name: "Row", type: "close" },

      { name: "Row", type: "open" },
      "**2-Fattoriale**|:MathML[f(x)!]|:MathML[x!]",
      { name: "Row", type: "close" },

      { name: "Row", type: "open" },
      "**3-Esponenziale**|:MathML[a^{f(x)} ]|:MathML[2^x], :MathML[e^x], :MathML[10^x]",
      { name: "Row", type: "close" },

      { name: "Row", type: "open" },
      "**4-Potenza**|:MathML[f(x)^b ]|:MathML[x^2], :MathML[x^3], :MathML[\sqrt{x}]",
      { name: "Row", type: "close" },

      { name: "Row", type: "open" },
      "**5-Logaritmo**|:MathML[ \log_c{f(x)} ]|:MathML[\ln x], :MathML[\log_5{x}], :MathML[\log{x}]",
      { name: "Row", type: "close" },

      { name: "Row", type: "open" },
      "|:MathML[a>0, b>0, c>0 \land c\neq 1 ]|",
      { name: "Row", type: "close" },
    ],
    { name: "Table", type: "close" },

    {
      name: "H2",
      text: "Confronto tra le classi",
    },
    { name: "div", type: "open" },
    [
      {
        name: "P",
        text: "Anche all'interno di una stessa classe di funzioni è possibile individuare delle funzioni che vanno all'infinito più velocemente di altre quando",
      },
      {
        name: "InlineMath",
        text: "\\black{x\\to\\infty}.",
      },
    ],
    { name: "div", type: "close" },

    { name: "SubParagraph", type: "open" },
    [
      {
        name: "H3",
        text: "Esponenziale-Potenza",
      },
      {
        name: "P",
        text: "Nel caso dell'Esponenziale-Potenza si hanno due criteri. A parità di esponente vince chi ha la base più grande. Similmente, a parità di base vince chi ha l'esponente più grande.",
      },
    ],

    { name: "UL", type: "open" },
    [
      {
        name: "P",
        text: "Esempio (Stessa base)",
      },
      {
        name: "InlineMath",
        text: "\\black{\\implies x^{7x}\\gg x^{2x}}",
      },
    ],
    { name: "UL", type: "close" },
    { name: "UL", type: "open" },
    [
      {
        name: "P",
        text: "Esempio (Stesso esponente)",
      },
      {
        name: "InlineMath",
        text: "\\black{\\implies (5x)^{x}\\gg (3x)^{x}}",
      },
    ],
    { name: "UL", type: "close" },
    { name: "SubParagraph", type: "close" },

    { name: "SubParagraph", type: "open" },
    [
      {
        name: "H3",
        text: "Fattoriale",
      },
      {
        name: "P",
        text: "Per il fattoriale, molto semplicemente, più è grande il suo argomento e più cresce velocemente.",
      },
      { name: "UL", type: "open" },
      [
        {
          name: "P",
          text: "Esempio",
        },
        {
          name: "InlineMath",
          text: "\\black{\\implies (6x)!\\gg (4x)!}",
        },
      ],
      { name: "UL", type: "close" },
    ],
    { name: "SubParagraph", type: "close" },

    { name: "SubParagraph", type: "open" },
    [
      {
        name: "H3",
        text: "Esponenziale",
      },
      {
        name: "P",
        text: "Se la base della funzione esponenziale è un numero maggiore di ",
      },
      {
        name: "InlineMath",
        text: "1,",
      },
      {
        name: "P",
        text: " allora cresce più velocemente la funzione con la base che ha il numero più grande.",
      },
      { name: "UL", type: "open" },
      [
        {
          name: "P",
          text: "Esempio",
        },
        {
          name: "InlineMath",
          text: "\\black{\\implies 7^x \\gg 4^x}",
        },
      ],
      { name: "UL", type: "close" },
    ],
    { name: "SubParagraph", type: "close" },

    { name: "SubParagraph", type: "open" },
    [
      {
        name: "H3",
        text: "Potenza",
      },
      {
        name: "P",
        text: "Per quanto riguarda la potenza, anche qui è molto semplice: a parità di base, prevale la funzione con l'esponente più grande.",
      },
      { name: "UL", type: "open" },
      [
        {
          name: "P",
          text: "Esempio",
        },
        {
          name: "InlineMath",
          text: "\\black{\\implies x^5\\gg x^2}",
        },
      ],
      { name: "UL", type: "close" },
    ],
    { name: "SubParagraph", type: "close" },
    { name: "SubParagraph", type: "open" },
    [
      {
        name: "H3",
        text: "Logaritmo",
      },
      {
        name: "P",
        text: "Il caso del logaritmo fa eccezione rispetto a tutti gli altri: tutti i logaritmi hanno lo stesso ordine di infinito, nessuno cresce piu rapidamente. Il motivo risiede nel fatto che, utilizzando le proprietà dei logaritmi, è sempre possibile ricondursi allo stesso logaritmo. ",
      },
      { name: "UL", type: "open" },
      [
        {
          name: "P",
          text: "Esempio (cambio di base)",
        },
        {
          name: "InlineMath",
          text: "\\black{\\implies \\log_2(x) = \\frac{\\ln(x)}{\\ln(2)}}",
        },
      ],
      { name: "UL", type: "close" },

      { name: "UL", type: "open" },
      [
        {
          name: "P",
          text: "Esempio (argomento con esponente)",
        },
        {
          name: "InlineMath",
          text: "\\black{\\implies \\ln(x^3) = 3\\ln(x)}",
        },
      ],
      { name: "UL", type: "close" },
      { name: "UL", type: "open" },
      [
        {
          name: "P",
          text: "Esempio (costante moltiplicativa)",
        },
        {
          name: "InlineMath",
          text: "\\black{\\implies \\ln(5x) = \\ln(5) + \\ln(x)}",
        },
      ],
      { name: "UL", type: "close" },
    ],
    { name: "SubParagraph", type: "close" },

    {
      name: "H2",
      text: "Come applicare la gerarchia degli infiniti",
    },
    { name: "div", type: "open" },
    [
      {
        name: "P",
        text: "Vediamo un esempio di funzione che apparentemente sembra impossibile, ma che invece si risolve in modo semplicissimo con la gerarchia degli infiniti.",
      },
    ],
    { name: "div", type: "close" },

    { name: "Box", type: "open", props: { variant: "step" } },

    [
      {
        name: "MathML",
        text: "\\lim_{x\\to + \\infty}\\frac{x^4+\\ln x+3^x}{x^6+4^x}",
      },
    ],
    { name: "Box", type: "close" },

    { name: "div", type: "open" },
    [
      {
        name: "P",
        text: "Sia a numeratore che a denominatore troviamo una somma di termini, ognuno dei quali appartiene ad una classe diversa di funzioni. A numeratore abbiamo",
      },
      {
        name: "InlineMath",
        text: "\\black{x^4}",
      },
      {
        name: "P",
        text: "è una potenza, ",
      },
      {
        name: "InlineMath",
        text: "\\black{\\ln x}",
      },
      {
        name: "P",
        text: "è una funzione logaritmica e ",
      },
      {
        name: "InlineMath",
        text: "\\black{3^x}",
      },
      {
        name: "P",
        text: "è una funzione esponenziale. A denominatore invece abbiamo ",
      },
      {
        name: "InlineMath",
        text: "\\black{x^6} ",
      },
      {
        name: "P",
        text: ", un'altra potenza e ",
      },
      {
        name: "InlineMath",
        text: "\\black{4^x}",
      },
      {
        name: "P",
        text: ", un'altra funzione esponenziale. Sia a numeratore che a denominatore prevalgono entrambe le funzioni esponenziali, perciò possiamo riscrivere il limite in questo modo:",
      },
    ],
    { name: "div", type: "close" },

    { name: "Box", type: "open", props: { variant: "step" } },

    [
      {
        name: "MathML",
        text: "\\lim_{x\\to + \\infty}\\frac{x^4+\\ln x+3^x}{x^6+4^x} = \\lim_{x\\to + \\infty}\\frac{3^x}{4^x}",
      },
    ],
    { name: "Box", type: "close" },

    { name: "div", type: "open" },
    [
      {
        name: "P",
        text: "A questo punto, possiamo ripetere il confronto anche tra numeratore e denominatore. Nonostante entrambe le funzioni siano esponenziali, l'esponenziale a denominatore va all'infinito più velocemente, perché la base è maggiore. Quindi possiamo trattare l'esponenziale a numeratore come se fosse una costante. Applicando il limite di una costante fratto una funzione che va all'infinito il risultato è",
      },
      {
        name: "InlineMath",
        text: "\\black{0}.",
      },
    ],
    { name: "div", type: "close" },

    { name: "Box", type: "open", props: { variant: "step" } },
    [
      {
        name: "MathML",
        text: "\\lim_{x\\to + \\infty}\\frac{3^x}{4^x} = \\frac{cost}{\\infty} = 0",
      },
    ],
    { name: "Box", type: "close" },

    { name: "div", type: "open" },
    [
      {
        name: "P",
        text: "Quindi, il risultato finale del limite è:",
      },
    ],
    { name: "div", type: "close" },
    { name: "Box", type: "open", props: { variant: "result" } },
    [
      {
        name: "MathML",
        text: "\\lim_{x\\to + \\infty}\\frac{x^4+\\ln x+3^x}{x^6+4^x} = 0",
      },
    ],
    { name: "Box", type: "close" },

    { name: "Shell", type: "close" },
  ],
};

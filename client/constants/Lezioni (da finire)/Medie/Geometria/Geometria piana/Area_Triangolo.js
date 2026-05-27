export const lezione = {
  meta: {
    slug: "area-triangolo-formule-calcolo",
    title: "Area del Triangolo: Formule, Erone ed Esercizi Svolti",
    description:
      "Come si calcola l'area del triangolo? Guida completa: formula base, formula di Erone (senza altezza) e casi particolari. Include esercizi svolti e trucchi per l'esame.",
    category: "Geometria Piana",
    has_pdf_resource: true,
  },
  content: `

# Area del Triangolo: Formule e Calcolo

**Come si calcola l'area del triangolo?**
La formula generale per calcolare l'area di un qualsiasi triangolo è il **semiprodotto tra base e altezza**. Si moltiplica la misura della base ($b$) per quella dell'altezza ($h$) e si divide il risultato per due.
$$A = \frac{b \cdot h}{2}$$

[immagine: src/Data/Images/Geometria_piana/Triangolo_scaleno.jpg]


## Tabella: Quale formula usare?
Non esiste solo un modo. Scegli la formula giusta in base ai dati che ti dà il problema.

| Dati disponibili | Formula da usare |
| :--- | :--- |
| **Base e Altezza** | $$A = \frac{b \cdot h}{2}$$ |
| **Triangolo Rettangolo** (i due cateti) | $$A = \frac{c_1 \cdot c_2}{2}$$ |
| **I tre lati** (Formula di Erone) | $$A = \sqrt{p(p-a)(p-b)(p-c)}$$ |
| **Triangolo Equilatero** (solo il lato) | $$A = \frac{\sqrt{3}}{4} l^2$$ |

---

## 1. La Formula Classica (Perché diviso 2?)
La formula più famosa è $A = \frac{b \cdot h}{2}$. Ma perché bisogna dividere per due?

[Image of triangle half rectangle]

Guarda l'immagine qui sopra: ogni triangolo è esattamente la **metà di un parallelogramma** (o di un rettangolo) che ha la stessa base e la stessa altezza. Dato che l'area del rettangolo è $b \cdot h$, quella del triangolo deve essere per forza la metà.

---

## 2. Casi Particolari: Rettangolo ed Equilatero

### Triangolo Rettangolo
Non devi cercare l'altezza: i due lati perpendicolari (i **cateti**) sono già base e altezza l'uno dell'altro.
$$A = \frac{\text{cateto}_1 \cdot \text{cateto}_2}{2}$$

[immagine: src/Data/Images/Geometria_piana/Triangolo_rettangolo.jpg]



### Triangolo Equilatero
Se hai un triangolo con tutti i lati uguali, puoi trovare l'area conoscendo solo il lato ($l$), senza dover calcolare l'altezza con Pitagora.
$$A = \frac{\sqrt{3}}{4} \cdot l^2 \approx 0,433 \cdot l^2$$

---

## 3. Formula di Erone (Senza Altezza)
Mettiamo che il problema ti dia i tre lati ($a, b, c$) ma **nessuna altezza**. Come si fa?
Usi la formula di Erone.

**Passo A:** Calcola il Semiperimetro ($p$).
$$p = \frac{a + b + c}{2}$$

**Passo B:** Applica la formula.
$$A = \sqrt{p \cdot (p-a) \cdot (p-b) \cdot (p-c)}$$

---

## Esercizi Svolti Passo-Passo

### Esercizio 1: Base e Altezza
**Testo:** La base di un triangolo misura $12 \text{ cm}$. L'altezza è la metà della base aumentata di $3 \text{ cm}$. Calcola l'area.

**Svolgimento:**
1.  **Traduciamo i dati:**
    $b = 12$
    $h = (12 : 2) + 3 = 6 + 3 = 9 \text{ cm}$
2.  **Applichiamo la formula:**
    $$A = \frac{12 \cdot 9}{2} = \frac{108}{2} = 54 \text{ cm}^2$$

### Esercizio 2: Formula di Erone
**Testo:** Calcola l'area di un triangolo con lati di $20 \text{ cm}$, $25 \text{ cm}$ e $15 \text{ cm}$.

**Svolgimento:**
1.  **Calcoliamo il semiperimetro ($p$):**
    $$p = \frac{20 + 25 + 15}{2} = \frac{60}{2} = 30$$
2.  **Sostituiamo nella radice:**
    $$A = \sqrt{30 \cdot (30-20) \cdot (30-25) \cdot (30-15)}$$
    $$A = \sqrt{30 \cdot 10 \cdot 5 \cdot 15}$$
    $$A = \sqrt{22.500} = 150 \text{ cm}^2$$

---

## Errori comuni

1.  **Dimenticare il "fratto 2":**
    Se calcoli solo $b \cdot h$, stai trovando l'area di un rettangolo doppio rispetto al tuo triangolo. Dividi sempre alla fine!
2.  **L'altezza sbagliata:**
    L'altezza deve sempre cadere perpendicolarmente sulla base che hai scelto. Non puoi moltiplicare la base $AC$ per l'altezza che cade su $BC$. È come misurare l'altezza di una persona facendola sdraiare. L'altezza corretta in questo caso è quella che cade su se stessa (su AC).

[immagine: src/Data/Images/Geometria_piana/Triangolo_errore.jpg]

3.  **Unità di misura diverse:**
    Base in metri e altezza in centimetri? **Alt!** Converti tutto nella stessa unità prima di moltiplicare, o il risultato sarà completamente sballato.

`,
};

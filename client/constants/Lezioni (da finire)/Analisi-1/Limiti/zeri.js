export const lezione = {
  meta: {
    slug: "teorema-degli-zeri-bolzano",
    title: "Teorema degli Zeri (di Bolzano): Spiegazione Semplice ed Esempi",
    description:
      "Cos'è il Teorema degli Zeri? Enunciato, spiegazione intuitiva e come usarlo per dimostrare che un'equazione ha soluzioni. Include esempi ed errori comuni.",
    category: "Analisi Matematica 1",
    has_pdf_resource: true,
  },
  content: `
# Teorema degli Zeri (di Bolzano): Enunciato e Spiegazione Facile

**A cosa serve il Teorema degli Zeri?**
Il Teorema degli Zeri è una garanzia matematica che ci assicura l'esistenza di una soluzione (uno "zero") per un'equazione $f(x)=0$ in un certo intervallo, anche se non sappiamo calcolarla esattamente. In pratica: se una funzione continua passa da un valore negativo a uno positivo (o viceversa), deve per forza attraversare l'asse delle x almeno una volta.

---

## L'Enunciato Formale

Per applicare questo teorema all'esame, devi verificare rigorosamente due condizioni (le ipotesi). Se ne manca anche solo una, il teorema non vale.

Sia $f(x)$ una funzione definita in un intervallo chiuso e limitato $[a, b]$.
**Le Ipotesi:**
1.  **Continuità:** $f(x)$ deve essere continua in tutto l'intervallo $[a, b]$.
2.  **Cambio di Segno:** La funzione deve assumere valori di segno opposto agli estremi. Matematicamente si scrive:
    $$ f(a) \\cdot f(b) < 0 $$

**La Tesi:**
Se le ipotesi sono vere, allora **esiste almeno un punto** $c$ interno all'intervallo ($a < c < b$) tale che:
$$ f(c) = 0 $$

---

## Quanti zeri ci sono? (Unicità vs Esistenza)

Il teorema ci dice che esiste *almeno* uno zero, ma potrebbero essercene anche 10, 100 o infiniti. La funzione potrebbe andare su e giù attraverso l'asse x molte volte.

**Come garantisco che lo zero sia UNICO?**
Per essere sicuro che la soluzione sia una sola, devi aggiungere una terza condizione: la **Monotonia**.
* Se $f(x)$ è **strettamente crescente** (o strettamente decrescente) in quell'intervallo, allora attraversa l'asse una volta sola.

**Schema Riassuntivo:**
* Continuità + Cambio Segno $\\Rightarrow$ **Almeno una soluzione**.
* Continuità + Cambio Segno + Monotonia Stretta $\\Rightarrow$ **Una e una sola soluzione**.

---

## 💡 A cosa serve nella pratica? (Esercizi Tipici)

Questo teorema è fondamentale quando hai equazioni "miste" impossibili da risolvere con l'algebra classica, tipo:
$$ x^3 + \\ln(x) + 2 = 0 $$
Non puoi isolare la $x$ qui. Come fai a sapere se ha soluzioni?

**Metodo Risolutivo:**
1.  Definisci la funzione $f(x) = x^3 + \\ln(x) + 2$.
2.  Trova un intervallo "a occhio".
    * Proviamo $x=0.1$: $f(0.1) \\approx -0.3$ (Negativo)
    * Proviamo $x=1$: $f(1) = 1 + 0 + 2 = 3$ (Positivo)
3.  **Conclusione:** Dato che la funzione è continua (somma di continue) e cambia segno tra 0.1 e 1, per il Teorema degli Zeri **esiste sicuramente una soluzione** compresa tra 0.1 e 1.

---

## ⚠️ Errori Comuni

**1. Dimenticare la Continuità (Il salto)**
Se la funzione non è continua, il teorema fallisce.
Immagina la funzione $f(x) = \\frac{1}{x}$.
* $f(-1) = -1$ (Negativo)
* $f(1) = 1$ (Positivo)
C'è uno zero tra -1 e 1? **NO!** La funzione non tocca mai l'asse x. Perché? Perché in $x=0$ c'è una discontinuità (un asintoto verticale). Abbiamo "saltato" il fiume invece di attraversarlo.

**2. $f(a) \\cdot f(b) > 0$ non significa "Nessuna soluzione"**
Se agli estremi la funzione ha lo stesso segno (es. entrambi positivi), il teorema **non ti dice nulla**.
Potrebbe non esserci nessuno zero (la funzione sta sempre sopra), oppure potrebbero esserci due zeri (la funzione scende sotto e risale, tipo una "U"). Semplicemente, il teorema non si applica.
`,
};

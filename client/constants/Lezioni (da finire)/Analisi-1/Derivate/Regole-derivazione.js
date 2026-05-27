export const lezione = {
  meta: {
    slug: "regole-derivazione-prodotto-quoziente",
    title:
      "Regole di Derivazione: Prodotto, Quoziente e Somma (Algebra delle Derivate)",
    description:
      "Come calcolare le derivate di prodotti e frazioni? Guida pratica con formule ed esempi per la Derivata del Prodotto e la Derivata del Quoziente.",
    category: "Analisi Matematica 1",
    has_pdf_resource: true,
  },
  content: `
# Regole di Derivazione (Algebra delle Derivate): Prodotto e Quoziente

**Come si calcolano le derivate senza usare il limite?**
L'Algebra delle Derivate è l'insieme delle regole che ci permettono di calcolare la derivata di funzioni complesse combinando le derivate delle funzioni elementari. Invece di usare la lunga definizione (il limite del rapporto incrementale), usiamo formule "scorciatoia" per somma, prodotto e quoziente. Le più importanti da memorizzare sono la **Regola del Prodotto** e la **Regola del Quoziente**.

---

### ⚡ Tutte le Regole
Salva questa tabella. È la tua "mappa" per risolvere qualsiasi derivata composta.

| Operazione | Formula |
| :--- | :--- | :--- |
| **Somma** | $D(f + g) = f' + g'$ |
| **Prodotto** ($f \\cdot g$) | $D(f \\cdot g) = f' \\cdot g + f \\cdot g'$ |
| **Quoziente** ($f / g$) | $D\\left(\\frac{f}{g}\\right) = \\frac{f' \\cdot g - f \\cdot g'}{g^2}$ |
| **Costante per Funzione** | $D(k \\cdot f) = k \\cdot f'$ |



---

## 1. La Derivata del Prodotto

Istintivamente sembrerebbe giusto fare "derivata per derivata", ma **è sbagliato!**
$$ D(f(x) \\cdot g(x)) \\neq f'(x) \\cdot g'(x) \\quad \\text{(ERRORE GRAVE!)} $$

**La Regola Corretta:**
La derivata di un prodotto è la somma di due "blocchi":
1.  Deriva la prima funzione e lascia la seconda invariata.
2.  Lascia la prima invariata e deriva la seconda.

$$ D(f \\cdot g) = f' \\cdot g + f \\cdot g' $$

**Esempio Svolto:**
Calcoliamo la derivata di $h(x) = x^2 \\cdot \\sin(x)$.
* $f = x^2 \\to f' = 2x$
* $g = \\sin(x) \\to g' = \\cos(x)$

Applichiamo la formula:
$$ h'(x) = (2x) \\cdot \\sin(x) + (x^2) \\cdot \\cos(x) $$
$$ = 2x\\sin(x) + x^2\\cos(x) $$

---

## 2. La Derivata del Quoziente

Questa è la regola più lunga e dove si commettono più errori di segno.
La struttura è una frazione. A numeratore abbiamo la differenza di due pezzi, a denominatore abbiamo la funzione di sotto che viene elevata al quadrato.

$$ D\\left(\\frac{f}{g}\\right) = \\frac{f' \\cdot g - f \\cdot g'}{g^2} $$
OCCHIO! Il numeratore sembra uguale alla regola della derivazione del prodotto. Ma attenzione perche in quel caso ci sta il segno $+$, mentre in questo caso il segno $-$.

**Esempio Svolto:**
Calcoliamo la derivata di $h(x) = \\frac{\\ln(x)}{x}$.
* $f = \\ln(x) \\to f' = 1/x$
* $g = x \\to g' = 1$

Applichiamo la formula:
$$ h'(x) = \\frac{(\\frac{1}{x}) \\cdot x - (\\ln x) \\cdot 1}{(x)^2} $$
Semplifichiamo il numeratore ($1/x \\cdot x = 1$):
$$ h'(x) = \\frac{1 - \\ln(x)}{x^2} $$



---

## 3. Somma e Costanti

**Linearità (Somma e Sottrazione):**
La derivata di una somma è la somma delle derivate.
$$ D(x^3 + \\cos x) = 3x^2 - \\sin x $$

**Prodotto per una Costante:**
I numeri fissi (che moltiplicano) non si derivano, si ricopiano.
$$ D(5 \\cdot x^4) = 5 \\cdot D(x^4) = 5 \\cdot 4x^3 = 20x^3 $$
*Attenzione:* Se la costante è da sola (es. $D(x^2 + 5)$), la sua derivata è **0**. Se moltiplica, resta lì.

---

## ⚠️ Trappole ed Errori Comuni

**1. L'errore del segno nel Quoziente**
Nella formula del quoziente c'è un **MENO** al numeratore.
Poiché la sottrazione non è commutativa, l'ordine conta! Devi derivare **prima** il numeratore ($f'$). Se scambi l'ordine ($fg' - f'g$), il risultato sarà sbagliato (segno opposto).

**2. Dimenticare il quadrato sotto**
Spesso ci si dimentica di scrivere $/ g^2$. Non dimenticarlo! Inoltre, **conviene non svolgere il quadrato al denominatore** (es. $(x^2+1)^2$): lascialo indicato, è più comodo per studiare il segno dopo.

**3. Prodotto vs Costante**
$x \\cdot e^x$ si deriva con la regola del Prodotto ($1\\cdot e^x + x \\cdot e^x$).
$2 \\cdot e^x$ si deriva con la regola della Costante ($2 \\cdot e^x$).
Non usare la regola del prodotto se uno dei due fattori è solo un numero (funziona lo stesso, ma perdi tempo perché la derivata del numero è 0).
`,
};

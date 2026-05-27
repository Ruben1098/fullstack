export const lezione = {
  meta: {
    slug: "sviluppi-taylor-calcolo-pratico",
    title: "Sviluppi di Taylor e McLaurin: Come Calcolarli Facilmente",
    description:
      "Guida pratica agli Sviluppi di Taylor. Formula generale, tabella degli sviluppi notevoli (McLaurin) e trucchi per calcolarli velocemente tramite sostituzione senza usare le derivate.",
    category: "Analisi Matematica 1",
    has_pdf_resource: true,
  },
  content: `
# Sviluppi di Taylor e McLaurin: Come Calcolarli Facilmente

**A cosa servono gli Sviluppi di Taylor?**
Gli sviluppi di Taylor servono a trasformare funzioni complicate (come $e^x, \\sin x, \\ln x$) in semplici **polinomi**. L'idea è approssimare una curva complessa, vicino a un punto $x_0$, con una somma di potenze $(x-x_0)^n$. Più termini (o "gradi") aggiungi, più l'approssimazione diventa precisa, fino a coincidere con la funzione originale.

---

## 1. La Formula Generale

Se vuoi costruire il polinomio di Taylor centrato in un punto $x_0$ (solitamente $x_0=0$, in tal caso si chiama **McLaurin**), la formula da applicare è:

$$ T_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(x_0)}{k!} (x-x_0)^k + o((x-x_0)^n) $$

**Traduzione pratica:**
$$ f(x) \\approx f(x_0) + f'(x_0)(x-x_0) + \\frac{f''(x_0)}{2}(x-x_0)^2 + \\frac{f'''(x_0)}{6}(x-x_0)^3 + \\dots $$

---

## 2. Sviluppi Notevoli e Sostituzione

### ⚡Gli Sviluppi Fondamentali (Centrati in $0$)
Memorizza questi 5 e risolverai il 90% degli esercizi.

| Funzione | Sviluppo (McLaurin) |
| :--- | :--- |
| **$e^x$** | $1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots + o(x^n)$ |
| **$\\sin x$** | $x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots + o(x^{2n+1})$ (Solo dispari!) |
| **$\\cos x$** | $1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\dots + o(x^{2n})$ (Solo pari!) |
| **$\\ln(1+x)$** | $x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + \\dots + o(x^n)$ |
| **$(1+x)^\\alpha$** | $1 + \\alpha x + \\frac{\\alpha(\\alpha-1)}{2}x^2 + \\dots + o(x^n)$ |

---

## 3. Come fare gli esercizi (Strategie di Calcolo)

Ecco le tre tecniche per non dover calcolare le derivate a mano.

### A. Sostituzione
Se devi sviluppare $f(x) = e^{2x}$ o $\\sin(x^2)$, non derivare!
Prendi lo sviluppo noto e sostituisci la $x$ con il tuo "blocco".

**Esempio:** Sviluppa $f(x) = \\sin(2x)$ fino al grado 3.
1.  So che $\\sin(t) = t - \\frac{t^3}{6} + o(t^3)$.
2.  Pongo $t = 2x$.
3.  Sostituisco: $(2x) - \\frac{(2x)^3}{6} = 2x - \\frac{8x^3}{6} = 2x - \\frac{4}{3}x^3 + o(x^3)$.

### B. Moltiplicazione e Somma
Se hai $f(x) = x \\cdot e^x$, moltiplica semplicemente il polinomio di $e^x$ per $x$.
$$ x \\cdot (1 + x + \\frac{x^2}{2}) = x + x^2 + \\frac{x^3}{2} + o(x^3) $$

### C. Integrazione/Derivazione delle Serie
Se conosci lo sviluppo di una funzione, conosci anche quello della sua derivata o integrale.
*Esempio:* Non ricordi lo sviluppo di $\\cos x$?
Deriva quello del $\\sin x$:
$$ D[x - \\frac{x^3}{6} + \\frac{x^5}{120}] = 1 - \\frac{3x^2}{6} + \\frac{5x^4}{120} = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} $$
Ed ecco apparire lo sviluppo del coseno!

---

## ⚠️ L'Errore del "Troncamento" (A che grado mi fermo?)

Questa è la trappola numero uno.
Se ti chiedono lo sviluppo all'ordine $n=3$, e tu fai una sostituzione che alza il grado, devi **buttare via** tutto ciò che supera il grado 3.

**Esempio Trappola:** Sviluppa $e^{x^2}$ all'ordine 3.
$$ e^t = 1 + t + \\frac{t^2}{2} + o(t^2) $$
Sostituisco $t=x^2$:
$$ 1 + (x^2) + \\frac{(x^2)^2}{2} = 1 + x^2 + \\frac{x^4}{2} $$
Il termine $x^4$ supera l'ordine 3 richiesto. Va inglobato nell'$o(x^3)$.
Risultato corretto: $1 + x^2 + o(x^3)$.
`,
};

export const lezione = {
  meta: {
    slug: "limiti-notevoli-tabella-esercizi",
    title: "Limiti Notevoli: Tabella Completa, Formule e Trucchi",
    excerpt: "",
    category: "Analisi 1",
    class: "",
    course: "",
    argument: "",
    featuredImage: "/image.webp",
    has_pdf_resource: true,
  },
  content: `
# Limiti Notevoli: Tabella Completa e Guida all'Uso

**Cosa sono i Limiti Notevoli?**
I Limiti Notevoli sono limiti specifici (solitamente forme indeterminate $0/0$ o $1^\\infty$) di cui i matematici hanno già dimostrato il risultato. Servono come "formule pronte" o mattoncini: quando li riconosci in un esercizio, non devi ricalcolarli, ma puoi sostituirli direttamente con il loro valore noto per sbloccare il calcolo.

---

### 📑 La Tabella dei Limiti Notevoli
È tutto ciò che ti serve per risolvere la maggior parte degli esercizi.

#### 1. Limiti Notevoli Trigonometrici (per $x \\to 0$)
Questi risolvono la forma indeterminata $0/0$.

| Funzione | Limite Notevole | Note |
| :--- | :--- | :--- |
| **Seno** | $$ \\lim_{x \\to 0} \\frac{\\sin x}{x} = 1 $$ | Vale anche per $\\arcsin x$. |
| **Tangente** | $$ \\lim_{x \\to 0} \\frac{\\tan x}{x} = 1 $$ | Vale anche per $\\arctan x$. |
| **Coseno (1)** | $$ \\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0 $$ | Attenzione: il limite è zero! |
| **Coseno (2)** | $$ \\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2} $$ | Fondamentale quando c'è $x^2$ sotto. |

#### 2. Limiti Esponenziali e Logaritmici
Questi derivano dal numero di Nepero $e$.

| Nome | Limite Notevole | Dove tende la x? |
| :--- | :--- | :--- |
| **Numero di Nepero** | $$ \\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e $$ | $x \\to \\pm \\infty$ (Forma $1^\\infty$) |
| **Logaritmo** | $$ \\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = 1 $$ | Forma $0/0$ |
| **Esponenziale** | $$ \\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1 $$ | Forma $0/0$ |
| **Potenza (Binomiale)**| $$ \\lim_{x \\to 0} \\frac{(1+x)^k - 1}{x} = k $$ | $k$ è un numero reale qualsiasi |



---

## Il Segreto per Usarli: La "Generalizzazione"
Molti studenti si bloccano perché cercano esattamente la $x$. Ma i limiti notevoli valgono per **qualsiasi funzione** $f(x)$, purché tale funzione tenda a $0$.

**La Regola d'Oro:**
Se hai $\\lim_{x \\to x_0} \\frac{\\sin(\\text{pacchetto})}{\\text{pacchetto}}$ e il "pacchetto" tende a 0, il risultato è 1.

**Esempio Pratico:**
$$ \\lim_{x \\to 0} \\frac{\\sin(5x)}{x} $$
Qui hai $5x$ dentro il seno, ma solo $x$ sotto. Non sono uguali!
**Il Trucco:** Moltiplica e dividi per 5 per "creare" il limite notevole.
$$ \\lim_{x \\to 0} \\frac{\\sin(5x)}{x} \\cdot \\frac{5}{5} \\Rightarrow \\lim_{x \\to 0} 5 \\cdot \\left( \\frac{\\sin(5x)}{5x} \\right) $$
Ora il blocco tra parentesi è un limite notevole perfetto (tende a 1).
Risultato: $5 \\cdot 1 = 5$.

---

## Analisi dei Gruppi Principali

### A. $\\frac{\\sin x}{x}$
Geometricamente significa che, quando l'angolo è piccolissimo, la lunghezza dell'arco di circonferenza e la sua corda (o il seno) sono quasi indistinguibili. Sono "asintotici".
**Attenzione:** Se $x \\to \\infty$, questo limite fa **0**, non 1! (Perché $\\frac{\\text{numero limitato}}{\\text{infinito}} = 0$). Il limite notevole vale *solo* se l'argomento va a 0.

### B. I Limiti di Nepero ($e$)
Il limite $\\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = 1$ ci dice che, vicino a zero, il grafico di $\\ln(1+x)$ è praticamente identico alla retta $y=x$ (bisettrice).
Questo è utilissimo in fisica e ingegneria per le "approssimazioni lineari".

---

## 💡 Trucchi per l'Esame

1.  **Non confondere i Coseni:**
    * Se sotto c'è $x$, fa $0$.
    * Se sotto c'è $x^2$, fa $1/2$.
    Memorizzalo così: "Se il denominatore è più potente ($x^2$), il risultato sopravvive ($1/2$). Se è debole ($x$), il limite muore a $0$".

2.  **Base diversa da $e$:**
    Se hai $a^x$ invece di $e^x$, spunta fuori un logaritmo naturale.
    $$ \\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a $$
    (Esempio: con $2^x$ il risultato è $\\ln 2$).

3.  **L'uso improprio:**
    Non usare i limiti notevoli se non c'è una forma indeterminata!
    $\\lim_{x \\to 0} \\frac{\\cos x}{x} = \\frac{1}{0} = \\infty$. Non cercare limiti notevoli qui, basta sostituire.
`,
};

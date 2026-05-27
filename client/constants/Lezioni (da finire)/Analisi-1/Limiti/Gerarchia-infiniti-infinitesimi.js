export const lezione = {
  meta: {
    slug: "gerarchia-infiniti-infinitesimi",
    title: "Gerarchia degli Infiniti e Infinitesimi: Chi vince la gara?",
    description:
      "Guida al confronto tra infiniti e infinitesimi. Scopri la 'scala di velocità' delle funzioni (logaritmi, potenze, esponenziali) per risolvere i limiti a occhio.",
    category: "Analisi Matematica 1",
    has_pdf_resource: true,
  },
  content: `
# Gerarchia degli Infiniti e Infinitesimi: Chi vince la gara?

**A cosa serve il confronto tra infiniti?**
Il confronto tra infiniti (e infinitesimi) è una tecnica rapida per risolvere i limiti nelle forme indeterminate $\\infty/\\infty$ o $0/0$. Il principio base è che non tutti gli infiniti sono uguali: alcune funzioni corrono verso l'infinito molto più velocemente di altre. Nel calcolo del limite, **vince sempre la funzione più veloce**; quella lenta è trascurabile.

---

### 🏎️ Gerarchia degli infiniti
Quando $x \\to +\\infty$, chi arriva prima? Questa classifica è fondamentale.
Dal più lento al più veloce:

1.  **Logaritmi** ($\\ln x$, $\\log_{10} x$) 
2.  **Potenze** ($x$, $x^2$, $x^{100}$, $\\sqrt{x}$) 
3.  **Esponenziali** ($2^x$, $e^x$, $10^x$) 
4.  **Fattoriale e Potenza-Potenza** ($x!$, $x^x$) 

**La Regola Pratica:**
In una somma o differenza all'infinito, **conta solo il termine più veloce**. Gli altri valgono zero in confronto.

---

## 1. Algebra degli Infiniti: Le Regole Base
Prima di confrontarli, ricordiamo come si comportano l'infinito ($\\infty$) e lo zero ($0$) nelle operazioni base.

| Operazione | Risultato |
| :--- | :--- | :--- |
| $\\infty + \\infty$ | $+\\infty$ |
| $\\infty \\cdot \\infty$ | $\\infty$ |
| $k / \\infty$ | $0$ |
| $k / 0$ | $\\infty$ |
| $\\infty / k$ | $\\infty$ |

⚠️ **Attenzione alle forme indeterminate:**
$\\infty - \\infty$ e $\\frac{\\infty}{\\infty}$ non si possono calcolare con l'algebra semplice. Qui entra in gioco la Gerarchia (vedi sotto).

---

## 2. Il Principio di Sostituzione (Il Metodo "Butta via il lento")

Questo è il trucco più potente dell'Analisi 1.
Quando hai un limite per $x \\to +\\infty$ con una frazione, puoi **cancellare** i termini di ordine inferiore (più lenti) sia al numeratore che al denominatore.

**Esempio:**
$$ \\lim_{x \\to +\\infty} \\frac{e^x + x^5 - \\ln x}{2^x + x^{10}} $$

Analisi":
* **Sopra:** Abbiamo un esponenziale ($e^x$), una potenza ($x^5$) e un logaritmo. Chi vince? L'esponenziale $e^x$. Gli altri trascurabili.
* **Sotto:** Abbiamo un esponenziale ($2^x$) e una potenza ($x^{10}$). Vince l'esponenziale $2^x$.

Il limite diventa semplicissimo:
$$ \\approx \\lim_{x \\to +\\infty} \\frac{e^x}{2^x} = \\lim_{x \\to +\\infty} \\left(\\frac{e}{2}\\right)^x $$
Poiché la base $e/2 \\approx 1.35$ è maggiore di 1, il risultato è $+\\infty$.

---

## 3. Gli Infinitesimi ($x \\to 0$)

Il concetto vale anche al contrario, quando le funzioni tendono a $0$.
Un infinitesimo di "ordine superiore" è una funzione che va a zero **più velocemente** di un'altra.

Immagina $x$ e $x^2$ quando $x = 0.001$:
* $x = 0.001$
* $x^2 = 0.000001$ (Molto più piccolo!)

**Gerarchia degli Infinitesimi (per $x \\to 0$):**
Qui le potenze più alte "vincono" nel senso che diventano zero più in fretta e quindi sono trascurabili rispetto alle potenze basse.
* $x^2$ è trascurabile rispetto a $x$.
* $x^5$ è trascurabile rispetto a $x^2$.

**Regola:** In una somma di infinitesimi ($x \\to 0$), **sopravvive solo quello di grado PIÙ BASSO** (il più lento a morire).

**Esempio:**
$$ \\lim_{x \\to 0} \\frac{x + x^3}{x^2 + 4x} $$
* Sopra: tra $x$ e $x^3$, vince $x$ (è più "grande" vicino a zero).
* Sotto: tra $x^2$ e $4x$, vince $4x$.
* Risultato: $\\lim \\frac{x}{4x} = \\frac{1}{4}$.

---

## 💡 Trucchi ed Errori Comuni

**1. Non confondere $x \\to \\infty$ con $x \\to 0$!**
* A infinito ($\\infty$): Vince la potenza più ALTA. (Il più forte).
* A zero ($0$): Vince la potenza più BASSA. (Il più resistente).

**2. La Trappola dei Logaritmi**
Il logaritmo è lentissimo.
$$ \\lim_{x \\to +\\infty} \\frac{\\ln x}{x} = 0 $$
Perché $x$ (potenza) schiaccia il logaritmo.
Non importa se hai $\\ln(x^{1000})$, la potenza $x$ vincerà sempre contro qualsiasi logaritmo.

**3. "o piccolo" (Little-o notation)**
All'università vedrai scritto $f(x) = x + o(x)$.
Significa semplicemente: "$f(x)$ è uguale a $x$ più *qualcosa che vale molto meno di x*".
L'$o(x)$ è la parte trascurabile che abbiamo imparato a buttare via.
`,
};

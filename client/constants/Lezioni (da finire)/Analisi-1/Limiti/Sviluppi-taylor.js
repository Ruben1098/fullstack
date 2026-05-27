export const lezione = {
  meta: {
    slug: "limiti-con-taylor-parte-principale",
    title: "Calcolo dei Limiti con Taylor e Parte Principale: Guida Pratica",
    description:
      "Come usare gli sviluppi di Taylor per risolvere limiti impossibili. Spiegazione della Parte Principale, regola per capire a che ordine fermarsi e tabella degli sviluppi fondamentali.",
    category: "Analisi Matematica 1",
    has_pdf_resource: true,
  },
  content: `
# Calcolo dei Limiti con Taylor e Parte Principale: L'Arma Finale

**A cosa servono gli sviluppi di Taylor nei limiti?**
Gli sviluppi di Taylor sono lo strumento più potente per risolvere i limiti. Si usano quando i Limiti Notevoli e De L'Hôpital falliscono o diventano troppo complicati, tipicamente nelle forme $0/0$ dove avvengono **cancellazioni** (es. $\\tan x - \\sin x$). Il metodo consiste nel sostituire le funzioni complesse con Polinomi + un errore trascurabile ($o$-piccolo), trasformando il limite in una semplice divisione tra polinomi.

---

### 🎯 Il Concetto Chiave: La Parte Principale
Ogni funzione infinitesima (che tende a 0) può essere approssimata da un monomio del tipo $k \\cdot x^n$.
Questo monomio si chiama **Parte Principale**.
* Il numero $n$ è l'**ordine di infinitesimo**.
* Tutto il resto della funzione è "spazzatura" che finisce nell'$o(x^n)$.

**Esempio:** Per $\\sin x$, lo sviluppo è $x - \\frac{x^3}{6} + \\dots$
* La parte principale è **$x$** (ordine 1).
* Se però cancelli la $x$ (es. $\\sin x - x$), la nuova parte principale diventa **$-\\frac{x^3}{6}$** (ordine 3).
Taylor serve proprio a trovare chi sopravvive dopo le cancellazioni.



---

## Quando usare Taylor?

Non usare Taylor per tutto.
Usalo solo se:
1.  **C'è una sottrazione "pericolosa":** Vedi termini che tendono a zero e si sottraggono tra loro (es. $\\sin x - x$, oppure $e^x - 1 - x$).
2.  **L'Hôpital è un incubo:** Se devi derivare 3 o 4 volte una frazione complicata, fermati. Taylor lo risolve in una riga.
3.  **Il denominatore ha grado alto:** Se sotto hai $x^3$ o $x^4$, i limiti notevoli (che arrivano al grado 1 o 2) non basteranno.

---

## La Regola d'Oro: A che ordine mi fermo?

Se ti fermi troppo presto, ottieni 0 (informazione persa). Se vai troppo avanti, perdi tempo.

**La Regola del Denominatore:**
Guarda il **grado del denominatore**. Quello è il tuo target.
* Se sotto hai $x^3$, devi sviluppare il numeratore fino al grado 3 (inclusi gli $o(x^3)$).
* Se sotto hai $\\sin^2 x$ (che vale circa $x^2$), sviluppa fino al grado 2.

**La Regola della Sopravvivenza (per somme/differenze):**
Sviluppa finché i termini **non si cancellano del tutto**. Devi trovare il primo termine (diverso da zero) che sopravvive alla sottrazione.
*Esempio:* $\\tan x - \\sin x$.
* Ordine 1: $x - x = 0$ (Troppo presto! Ho perso tutto).
* Ordine 3: $(x + x^3/3) - (x - x^3/6) = \\frac{1}{2}x^3$ (Perfetto! Ho trovato la parte principale).

---

## ⚡ Sviluppi di Taylor (in $x=0$)
Memorizza questi (almeno fino al grado 3 o 4).

| Funzione | Sviluppo di McLauren (Taylor in 0) |
| :--- | :--- |
| **$e^x$** | $1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + o(x^3)$ |
| **$\\sin x$** | $x - \\frac{x^3}{6} + \\frac{x^5}{120} + o(x^5)$ (Solo dispari!) |
| **$\\cos x$** | $1 - \\frac{x^2}{2} + \\frac{x^4}{24} + o(x^4)$ (Solo pari!) |
| **$\\ln(1+x)$** | $x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + o(x^4)$ |
| **$\\arctan x$** | $x - \\frac{x^3}{3} + \\frac{x^5}{5} + o(x^5)$ |
| **$(1+x)^\\alpha$** | $1 + \\alpha x + \\frac{\\alpha(\\alpha-1)}{2}x^2 + o(x^2)$ |

---

## Esempio Svolto Passo-Passo

Calcoliamo:
$$ \\lim_{x \\to 0} \\frac{\\sin x - x}{x^3} $$

**Analisi:**
* Se uso i Limiti Notevoli ($\\sin x \\sim x$), ottengo $\\frac{x-x}{x^3} = \\frac{0}{0}$. Fallimento.
* Il denominatore è **$x^3$**. Questo mi dice: "Sviluppa fino all'ordine 3".

**Passo 1: Scriviamo lo sviluppo**
$$ \\sin x = x - \\frac{x^3}{6} + o(x^3) $$

**Passo 2: Sostituiamo nel limite**
$$ \\lim_{x \\to 0} \\frac{(x - \\frac{x^3}{6} + o(x^3)) - x}{x^3} $$

**Passo 3: Algebra e Cancellazione**
Le $x$ si elidono (era quello il problema!). Rimane:
$$ \\lim_{x \\to 0} \\frac{-\\frac{x^3}{6} + o(x^3)}{x^3} $$

**Passo 4: Risultato**
Dividiamo per $x^3$:
$$ -\\frac{1}{6} + \\frac{o(x^3)}{x^3} \\to -\\frac{1}{6} + 0 = -\\frac{1}{6} $$

Il limite è **$-1/6$**.

---

## ⚠️ Errori Comuni 

**1. Dimenticare l'o-piccolo**
Scrivere $\\sin x = x - x^3/6$ è un errore concettuale grave. Devi scrivere $+ o(x^3)$. Senza l'o-piccolo, stai dicendo che una curva è uguale a un polinomio (falso). Con l'o-piccolo, stai dicendo che sono uguali "al limite".

**2. Sviluppare le funzioni composte**
Se hai $e^{x^2}$, devi prendere lo sviluppo di $e^t$ e mettere $x^2$ al posto di $t$.
* $e^t = 1 + t + t^2/2 + \\dots$
* $e^{x^2} = 1 + (x^2) + (x^2)^2/2 = 1 + x^2 + x^4/2 + o(x^4)$
Attenzione: l'ordine raddoppia!

**3. Mischiare gli ordini**
In una somma, la precisione è dettata dall'ordine più **basso**.
Se hai $(x^2 + o(x^2)) + (x^4 + o(x^4))$, il risultato è $x^2 + o(x^2)$. Il termine $x^4$ viene mangiato dall'errore $o(x^2)$. È inutile calcolare termini precisi se poi ci sommi un errore più grosso.
`,
};

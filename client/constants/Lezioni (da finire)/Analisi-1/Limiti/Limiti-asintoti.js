export const lezione = {
  meta: {
    slug: "asintoti-verticali-orizzontali-obliqui",
    title: "Asintoti di una Funzione: Verticali, Orizzontali e Obliqui",
    description:
      "Guida completa agli asintoti: definizioni, tabella con formule per calcolarli, algoritmo di ricerca passo-passo e il trucco per le funzioni razionali.",
    category: "Analisi Matematica 1",
    has_pdf_resource: true,
  },
  content: `
# Asintoti di una Funzione: Guida Completa e Formule

**Che cos'è un asintoto?**
Un asintoto è una retta verso la quale la funzione si avvicina sempre di più, senza mai toccarla (o toccandola solo all'infinito), man mano che ci si allontana lungo gli assi. È come una "guida magnetica" che attira il grafico della funzione agli estremi del piano cartesiano.

---

### ⚡ Tabella delle Formule
Salva questa tabella. È l'unica cosa che ti serve per risolvere gli esercizi.

| Tipo di Asintoto | Equazione della Retta | Condizione (Il Limite da fare) | Dove cercarlo? |
| :--- | :--- | :--- | :--- |
| **Verticale** | $$ x = x_0 $$ | $$ \\lim_{x \\to x_0} f(x) = \\infty $$ | Punti esclusi dal Dominio. |
| **Orizzontale** | $$ y = l $$ | $$ \\lim_{x \\to \\infty} f(x) = l \\quad (\\text{finito}) $$ | A $+\\infty$ e $-\\infty$. |
| **Obliquo** | $$ y = mx + q $$ | Se $\\lim_{x \\to \\infty} f(x) = \\infty$, calcola $m$ e $q$ (vedi sotto). | Solo se **non** c'è l'Orizzontale. |



---

## 1. Asintoti Verticali

Immagina un muro invisibile verticale. La funzione, avvicinandosi a questo muro, è costretta a "impennare" verso l'alto ($+\\infty$) o precipitare verso il basso ($-\\infty$) perché non può attraversarlo.

**Dove si trovano?**
Non cercarli a caso! Si trovano quasi sempre nei **punti esclusi dal Dominio**.
* Se hai una frazione, guarda dove si annulla il denominatore.
* Se hai un logaritmo, guarda dove l'argomento va a 0.

**Verifica:**
Se il dominio esclude un punto $x_0$, calcola il limite:
$$ \\lim_{x \\to x_0} f(x) $$
Se il risultato è $\\infty$ (positivo o negativo), allora **$x = x_0$ è un asintoto verticale**.

---

## 2. Asintoti Orizzontali

Questi ci dicono come si comporta la funzione quando $x$ diventa grandissimo (o piccolissimo). La funzione si "appiattisce" su una quota costante.

**Come si trovano?**
Calcola i limiti all'infinito:
$$ \\lim_{x \\to +\\infty} f(x) \\quad \\text{e} \\quad \\lim_{x \\to -\\infty} f(x) $$
Se il risultato è un **numero finito** $l$ (es. 5, 0, -2), allora la retta **$y = l$** è asintoto orizzontale.
*Nota:* Se il risultato è $\\infty$, la funzione non si appiattisce. Potrebbe esserci un asintoto obliquo.

---

## 3. Asintoti Obliqui

Se la funzione va all'infinito ma non esplode verticalmente, potrebbe salire (o scendere) seguendo una retta inclinata.

**La Regola dell'Esclusione:**
L'asintoto obliquo può esistere **SOLO SE** il limite a infinito fa $\\infty$ (quindi non c'è l'orizzontale).
*Se c'è l'asintoto orizzontale (destro), non può esserci l'obliquo (destro).*

**Calcolo di m e q:**
L'asintoto è una retta $y = mx + q$. Dobbiamo trovare la pendenza ($m$) e l'intercetta ($q$).

1.  **Trova $m$ (Pendenza):**
    $$ m = \\lim_{x \\to \\infty} \\frac{f(x)}{x} $$
    Se questo limite esiste ed è un numero finito diverso da 0, procedi.

2.  **Trova $q$ (Intercetta):**
    $$ q = \\lim_{x \\to \\infty} [f(x) - m \\cdot x] $$
    Se anche questo è finito, hai il tuo asintoto: $y = mx + q$.

---

## 💡 Metodo di ricerca  degli asintoti

Quando studi una funzione completa, segui questo ordine logico per non sbagliare mai:

1.  **Step 1: Dominio.** Trova i punti problematici e controlla subito se sono **Asintoti Verticali**.
2.  **Step 2: Infinito.** Calcola $\\lim_{x \\to \\infty} f(x)$.
    * Se esce un numero $\\to$ C'è l'**Asintoto Orizzontale**. (Stop, non cercare l'obliquo).
    * Se esce $\\infty$ $\\to$ Potrebbe esserci l'**Obliquo**. Vai allo Step 3.
3.  **Step 3: Obliquo.** Calcola $m = \\lim \\frac{f(x)}{x}$.
    * Se esce un numero $\\neq 0$, calcola $q$.
    * Se esce $0$ o $\\infty$, non c'è nemmeno l'obliquo (la funzione è super-veloce o super-lenta, tipo una parabola o un logaritmo).

### Il Trucco per le Funzioni Razionali Fratte
Se hai una funzione del tipo $f(x) = \\frac{P(x)}{Q(x)}$ (polinomio fratto polinomio), puoi prevedere il futuro:
* Se Grado(Num) < Grado(Den) $\\to$ Orizzontale $y=0$.
* Se Grado(Num) = Grado(Den) $\\to$ Orizzontale $y = \\frac{\\text{coeff. max}}{\\text{coeff. max}}$.
* Se Grado(Num) = Grado(Den) **+ 1** $\\to$ C'è sicuramente l'**Asintoto Obliquo**.
* Se Grado(Num) > Grado(Den) + 1 $\\to$ Niente asintoti (né orizzontali né obliqui).

---

## ⚠️ Falsi Miti ed Errori Comuni

**"La funzione non può mai toccare l'asintoto"**
**Falso!** La funzione non tocca l'asintoto verticale, ma può attraversare l'asintoto orizzontale o obliquo quante volte vuole *prima* di stabilizzarsi all'infinito. L'asintoto descrive il comportamento *alla fine*, non nel mezzo.

**"Se c'è l'asintoto destro, c'è anche il sinistro"**
**Falso!** Una funzione (come $e^x$ o $\\arctan x$) può avere un asintoto orizzontale a destra e uno diverso (o nessuno) a sinistra. Controlla sempre entrambi i lati ($+\\infty$ e $-\\infty$).
`,
};

export const lezione = {
  meta: {
    slug: "massimi-minimi-fermat-derivata-seconda",
    title: "Massimi e Minimi: Guida Completa (Fermat e Derivate)",
    description:
      "Come trovare massimi e minimi assoluti e relativi? Spiegazione del Teorema di Fermat, studio del segno della derivata prima e uso della derivata seconda.",
    category: "Analisi Matematica 1",
    has_pdf_resource: true,
  },
  content: `
# Massimi e Minimi: Guida Completa (Fermat e Test delle Derivate)

**Come si trovano i massimi e minimi di una funzione?**
Per trovare i punti di massimo e minimo (detti *estremi*), devi seguire tre passaggi:
1.  **Trova i punti stazionari:** Risolvi $f'(x) = 0$.
2.  **Classificali:** Studia il segno della derivata prima (crescenza/decrescenza) oppure usa il segno della derivata seconda (concavità verso l'alto o verso il basso) per capire se sono massimi, minimi o flessi.
3.  **Confronta:** Calcola l'altezza ($y$) di tutti i punti e degli estremi dell'intervallo. Il più alto è il *Massimo Assoluto*, il più basso è il *Minimo Assoluto*.

---

### ⛰️ Le Definizioni 
* **Massimo Relativo (Locale):** È come la cima di una collina. È il punto più alto *rispetto ai suoi vicini*, ma potrebbe esserci una montagna più alta altrove.
* **Massimo Assoluto (Globale):** È il punto più alto di *tutto* il dominio della funzione, la montagna più alta di tutte.
*Stesso discorso vale per i minimi, che sono le "valli".*



---

## 1. Dove cercare? Il Teorema di Fermat

**Enunciato:**
Se una funzione $f(x)$ ha un massimo o un minimo relativo in un punto $x_0$ ed è **derivabile** in quel punto, allora la derivata si annulla:
$$ f'(x_0) = 0 $$

**Attenzione:**
Il teorema **NON** vale al contrario!
Se $f'(x) = 0$, non è detto che sia un massimo o un minimo. Potrebbe essere un **Flesso a tangente orizzontale** (come $x^3$ in 0: si appiattisce ma poi continua a salire).
Quindi: $f'(x)=0$ è condizione *necessaria* ma non *sufficiente*.

---

## 2. Come distinguerli?

Una volta trovati i punti con derivata zero (punti stazionari), dobbiamo capire cosa sono. Hai due strade.

### Metodo A: Studio del Segno della Derivata Prima (Il più sicuro)
Studia la disequazione $f'(x) \\ge 0$.
Costruisci il grafico dei segni:
* Se la derivata passa da **+ a -** ($\\nearrow \\searrow$) $\\to$ **Massimo**.
* Se la derivata passa da **- a +** ($\\searrow \\nearrow$) $\\to$ **Minimo**.
* Se il segno non cambia (+ e + oppure - e -) $\\to$ **Flesso**.

### Metodo B: Test della Derivata Seconda (Il più veloce)
Se non hai voglia di fare il grafico dei segni, puoi interrogare la derivata seconda $f''(x)$ sostituendo il punto $x_0$ che hai trovato.
* Se $f''(x_0) < 0$ (Triste $\\cap$) $\\to$ **Massimo**.
* Se $f''(x_0) > 0$ (Felice $\\cup$) $\\to$ **Minimo**.
* Se $f''(x_0) = 0$ $\\to$ Il test fallisce (devi tornare al Metodo A).

---

## 3. Relativi vs Assoluti:

Per trovare Massimi e Minimi **Assoluti** in un intervallo chiuso $[a, b]$:

1.  Prendi tutti i punti stazionari interni ($x$ dove $f'=0$).
2.  Prendi gli estremi dell'intervallo ($a$ e $b$).
3.  Prendi eventuali punti di non derivabilità (cuspidi).
4.  **Calcola la $y$ di tutti questi punti.**

* Il valore $y$ più grande è il Massimo Assoluto.
* Il valore $y$ più piccolo è il Minimo Assoluto.

---

## 💡 Esempio Svolto (Algoritmo Completo)

Trova gli estremi di $f(x) = x^3 - 3x^2$ nell'intervallo $[-1, 4]$.

**Step 1: Derivata e Fermat**
$f'(x) = 3x^2 - 6x$.
Poniamo a zero: $3x(x - 2) = 0$.
Punti candidati: $x=0$ e $x=2$.

**Step 2: Classificazione (Derivata Prima)**
$3x(x-2) > 0 \\Rightarrow x < 0 \\cup x > 2$.
* Prima di 0 sale, dopo scende $\\to$ **$x=0$ è Massimo Relativo**.
* Prima di 2 scende, dopo sale $\\to$ **$x=2$ è Minimo Relativo**.

**Step 3: Calcolo per gli Assoluti (Calcolo le y)**
Valutiamo la funzione nei candidati ($0, 2$) e agli estremi ($-1, 4$).
* $f(0) = 0$ (Max Relativo)
* $f(2) = 8 - 12 = -4$ (Min Relativo)
* $f(-1) = -1 - 3 = -4$ (Estremo sinistro)
* $f(4) = 64 - 48 = 16$ (Estremo destro)

**Conclusione:**
* **Max Assoluto:** $y=16$ (in $x=4$).
* **Min Assoluto:** $y=-4$ (raggiunto sia in $x=2$ che in $x=-1$).

---

## ⚠️ Trappole ed Errori Comuni

**1. Scambiare x con y**
Quando ti chiedono "Quanto vale il massimo?", devi dare la coordinata **Y**.
Quando ti chiedono "Dove si trova?", devi dare la coordinata **X**.

**2. Dimenticare i punti di non derivabilità**
Una cuspide (punta verso l'alto come in $y = -|x|$) è un massimo! Ma lì la derivata non è zero (non esiste proprio). Fermat vale solo dove la derivata esiste. Quindi controlla sempre anche i punti "spigolosi".

**3. Dimenticare gli estremi dell'intervallo**
In un intervallo limitato, spesso il massimo o il minimo assoluto si trova proprio sul bordo, dove la derivata NON è zero. Non dimenticare di calcolare $f(a)$ e $f(b)$!
`,
};

export const lezione = {
  meta: {
    slug: "derivate-definizione-significato-geometrico",
    title: "Derivate: Definizione, Significato Geometrico e Calcolo Tangente",
    description:
      "Cosa sono le derivate? Spiegazione semplice dal rapporto incrementale al significato geometrico. Come calcolare la retta tangente e la differenza tra continuità e derivabilità.",
    category: "Analisi Matematica 1",
    has_pdf_resource: true,
  },
  content: `
# Derivate: Definizione, Significato Geometrico e Retta Tangente

**Cos'è la derivata di una funzione?**
La derivata di una funzione $f(x)$ in un punto $x_0$ è un numero che misura **quanto velocemente sta cambiando la funzione** in quel punto. Geometricamente, questo numero corrisponde esattamente al coefficiente angolare ($m$) della retta tangente al grafico nel punto $x_0$. In breve: la derivata è la "pendenza" della curva in un punto specifico.

---

### 🏎️ L'Intuizione: Dalla velocità media a quella istantanea
Immagina di guidare un'auto.
* **Rapporto Incrementale:** È la tua **velocità media** in un intervallo di tempo. Hai fatto 100 km in 2 ore? Media: 50 km/h.
* **Derivata:** È la tua **velocità istantanea**, quella che leggi sul tachimetro in un preciso istante.
---

## 1. Il Rapporto Incrementale

Per misurare la pendenza tra due punti $A$ e $B$ sul grafico, usiamo il Rapporto Incrementale.
Prendiamo due punti: $x_0$ è il primo, mentre il secondo è spostato di una certa quantità $h$.
I due punti sono:
* $A = (x_0, f(x_0))$
* $B = (x_0+h, f(x_0+h))$

Il rapporto incrementale è il coefficiente angolare della retta che passa per A e B (retta secante):
$$ R_{inc} = \\frac{\\Delta y}{\\Delta x} = \\frac{f(x_0+h) - f(x_0)}{h} $$

---

## 2. Definizione di Derivata

Immagina di ridurre $h$ fino a farla diventare quasi nulla ($h \\to 0$).
Il punto $B$ scivola lungo la curva e si sovrappone ad $A$. La retta secante diventa **Tangente**.

La derivata $f'(x_0)$ è il limite del rapporto incrementale:
$$ f'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0+h) - f(x_0)}{h} $$

**Condizione di Esistenza:**
Una funzione è derivabile in $x_0$ se e solo se questo limite **esiste ed è finito**.
Inoltre, il limite destro ($h \\to 0^+$) e il limite sinistro ($h \\to 0^-$) devono essere identici. Se sono diversi, hai un **Punto di Non Derivabilità** (come una cuspide o un punto angoloso).



---

## 3. Significato Geometrico e Retta Tangente

**La derivata è il coefficiente angolare della retta tangente.**
$$ m_{\\text{tangente}} = f'(x_0) $$

Se $f'(x_0) > 0$, la funzione sta crescendo (la tangente sale).
Se $f'(x_0) < 0$, la funzione sta decrescendo (la tangente scende).
Se $f'(x_0) = 0$, la tangente è orizzontale (possibile massimo o minimo).

### 📐 Come trovare l'equazione della Retta Tangente
Spesso l'esercizio ti chiede: *"Trova la retta tangente a $f(x)$ nel punto $x_0$".*
Seguiamo questi 3 step:

1.  **Trova la coordinata Y:** Calcola $y_0 = f(x_0)$.
2.  **Trova la pendenza m:** Calcola la derivata $f'(x)$ e sostituisci $x_0$ per ottenere il numero $m = f'(x_0)$.
3.  **Applica la formula:** Usa la formula della retta passante per un punto:
    $$ y - f(x_0) = f'(x_0) \\cdot (x - x_0) $$

**Esempio:**
$f(x) = x^2$ nel punto $x_0 = 1$.
1.  $y_0 = 1^2 = 1$.
2.  $f'(x) = 2x \\to f'(1) = 2$. Quindi $m=2$.
3.  Retta: $y - 1 = 2(x - 1) \\Rightarrow y = 2x - 1$.

---

## 4. Continuità e Derivabilità

Che relazione c'è tra una funzione continua e una derivabile?

| Relazione | Vero o Falso?  |
| :--- | :--- | :--- |
| **Se è Derivabile $\\Rightarrow$ È Continua** | **VERO** |
| **Se è Continua $\\Rightarrow$ È Derivabile** | **FALSO** |

**L'Esempio Classico:**
La funzione Valore Assoluto $f(x) = |x|$.
* È **continua** in 0.
* **NON è derivabile** in 0 perché ha un punto angoloso. La tangente sinistra scende ($m=-1$) e quella destra sale ($m=1$), quindi la derivata non esiste.

---

## 💡 Trucchi ed Errori Comuni

**1. Confondere $f(x_0)$ con $f'(x_0)$**
* $f(x_0)$ è l'**altezza** della funzione (dove si trova il punto).
* $f'(x_0)$ è la **pendenza** della funzione (come ci si muove dal punto).

**2. La Derivata è una Funzione**
Quando calcoli $f'(x)$ ottieni una nuova funzione che ti dice la pendenza in *qualsiasi* punto. Quando sostituisci un numero nella derivata (es. $f'(3)$) ottieni la pendenza della retta passante in quel punto specifico.

**3. "Derivabile" vuol dire "Non verticale"**
Ricorda che la retta tangente non può essere verticale. Se la tangente è verticale (pendenza infinita), la derivata in quel punto vale $\\infty$, quindi la funzione **non** è derivabile (si chiama flesso a tangente verticale o cuspide).
`,
};

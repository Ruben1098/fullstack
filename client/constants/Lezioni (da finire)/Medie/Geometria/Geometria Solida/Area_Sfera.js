export const lezione = {
  meta: {
    slug: "area-sfera-formule-calcolo",
    title: "Area della Sfera: Formula, Calcolo e Trucchi (con Esercizi)",
    description:
      "Come si calcola l'area della sfera? Scopri la formula S = 4πr², come ricavare il raggio dal volume e il trucco del semicerchio. Scarica il PDF con gli esercizi.",
    category: "Geometria Solida",
    has_pdf_resource: true,
  },
  content: `

# Area della Sfera: Formula e Come si Calcola

**Come si calcola l'area della sfera?**
L'area della superficie sferica si calcola moltiplicando per **4** l'area del suo cerchio massimo ($\pi r^2$).
La formula fondamentale è $$S = 4 \pi r^2$$, dove $r$ è il raggio della sfera.



## Tabella delle Formule
Ecco la cassetta degli attrezzi per risolvere ogni problema. Cerca nella colonna sinistra il dato che il problema ti fornisce.

| Dati che hai | Formula per il Raggio | Formula Area ($S$) |
| :--- | :--- | :--- |
| **Raggio ($r$)** | --- | $$S = 4 \pi r^2$$ |
| **Diametro ($d$)** | $$r = d : 2$$ | $$S = \pi d^2$$ |
| **Circonferenza ($C$)** | $$r = \frac{C}{2\pi}$$ | $$S = \frac{C^2}{\pi}$$ |
| **Volume ($V$)** | $$r = \sqrt[3]{\frac{3V}{4\pi}}$$ | $$S = 4 \pi r^2$$ |

---

---

## Esercizio Svolto: Calcolo Classico
**Traccia:** Calcola l'area di una sfera sapendo che il suo raggio misura $5 \text{ cm}$.

**Svolgimento:**
Basta applicare la formula diretta.
$$S = 4 \cdot \pi \cdot r^2$$
$$S = 4 \cdot \pi \cdot (5)^2$$
$$S = 4 \cdot \pi \cdot 25$$
$$S = 100 \pi \text{ cm}^2$$

*(Consiglio: Se non richiesto esplicitamente, lascia il $\pi$ indicato. È più elegante e non devi fare calcoli con la virgola!)*

---

## Caso Difficile: Dal Volume all'Area
**Traccia:** Una sfera ha un volume di $904,32 \text{ m}^3$. Trova l'area. ($\pi = 3,14$)

**Passo 1: Trova il raggio (Formula Inversa)**
Dobbiamo estrarre il raggio dal volume.
$$r = \sqrt[3]{\frac{3 \cdot V}{4 \cdot \pi}}$$
$$r = \sqrt[3]{\frac{3 \cdot 904,32}{12,56}} = \sqrt[3]{\frac{2712,96}{12,56}}$$
$$r = \sqrt[3]{216} = 6 \text{ m}$$

**Passo 2: Calcola l'Area**
Ora è facile:
$$S = 4 \cdot 3,14 \cdot (6)^2 = 452,16 \text{ m}^2$$

---

## Il Caso "Semicerchio Generatore" (Rotazione)
Spesso i prof dicono: *"Un semicerchio ruota attorno al proprio diametro..."*.
Un semicerchio che gira su se stesso crea una sfera.



**Il Trucco Segreto ⚡**
Se conosci l'Area del Semicerchio ($A_{sc}$), non serve calcolare il raggio!
L'Area della sfera è esattamente **8 volte** l'area del semicerchio che la genera.
$$S = 8 \cdot A_{sc}$$

---

## Errori Comuni

1.  **Confondere quadrato e cubo:**
    L'Area è una superficie $\rightarrow$ $r^2$.
    Il Volume è uno spazio $\rightarrow$ $r^3$.
    Se scrivi $S = 4\pi r^3$, stai calcolando una cosa che non esiste!
2.  **Scordarsi il diametro:**
    Se il testo dice "Diametro = 10", il tuo cervello deve urlare "Raggio = 5"! Dividi sempre per due prima di iniziare.
3.  **L'unità di misura:**
    L'area si misura in $cm^2$ o $m^2$. Se scrivi $cm$ o $m^3$ accanto al risultato, il numero è giusto ma la risposta è sbagliata.

`,
};

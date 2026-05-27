export const lezione = {
  meta: {
    slug: "volume-cilindro-formule-calcolo",
    title: "Volume del Cilindro: Formula, Calcolo e Trucchi (con Esercizi)",
    description:
      "Come si calcola il volume del cilindro? Scopri la formula V = πr²h, le formule inverse per altezza e raggio, e il caso del cilindro equilatero.",
    category: "Geometria Solida",
    has_pdf_resource: true,
  },
  content: `

# Volume del Cilindro: Formule e Calcolo

**Come si calcola il volume del cilindro?**
Il volume del cilindro si calcola moltiplicando l'area del cerchio di base ($\pi r^2$) per la misura dell'altezza ($h$).
La formula fondamentale è $$V = \pi r^2 \cdot h$$.


## Tabella delle Formule
Ecco tutte le formule necessarie per risolvere i problemi, incluse quelle per trovare raggio e altezza partendo dal volume.

| Cosa cerchi? | Formula | Note |
| :--- | :--- | :--- |
| **Volume (Generale)** | $$V = \pi r^2 h$$ | Area base $\times$ altezza |
| **Altezza ($h$)** | $$h = \frac{V}{\pi r^2}$$ | Formula inversa |
| **Raggio ($r$)** | $$r = \sqrt{\frac{V}{\pi h}}$$ | C'è la radice quadrata! |
| **Cilindro Equilatero** | $$V = 2\pi r^3$$ | Caso speciale ($h=2r$) |

---

## Formule Inverse:
Il professore ti darà quasi sempre il Volume e ti chiederà di trovare il raggio o l'altezza.

**Per trovare l'Altezza:**
Immagina di "spalmare" il volume sulla base. Dividi il volume per l'area del cerchio.
$$h = \frac{V}{\text{Area Base}} = \frac{V}{\pi r^2}$$

**Per trovare il Raggio (Attenzione!):**
Qui molti sbagliano. Poiché nella formula originale il raggio è al quadrato ($r^2$), alla fine devi ricordarti di fare la **Radice Quadrata**.
$$r = \sqrt{\frac{V}{\pi h}}$$

---

## Il Caso Speciale: Cilindro Equilatero
Se il testo del problema dice "Cilindro Equilatero", significa che il cilindro ha l'altezza uguale al diametro ($h = 2r$).



In questo caso la formula diventa velocissima:
$$V = 2 \pi r^3$$
*(Il raggio è elevato al cubo perché è un volume, e il 2 viene dal diametro).*

---

## Esercizi Svolti Passo-Passo

### Esercizio 1: Calcolo Diretto
**Traccia:** Un cilindro ha raggio di base $2 \text{ cm}$ e altezza $13 \text{ cm}$. Calcola il volume.

**Svolgimento:**
1.  Scriviamo la formula: $V = \pi r^2 \cdot h$
2.  Sostituiamo i numeri:
    $$V = \pi \cdot (2)^2 \cdot 13$$
    $$V = \pi \cdot 4 \cdot 13$$
3.  Risultato:
    $$V = 52\pi \text{ cm}^3$$
    *(Se moltiplichi per 3,14 ottieni circa $163,28 \text{ cm}^3$)*

### Esercizio 2: Inverso (Trovare il Raggio)
**Traccia:** Un cilindro ha Volume di $1570 \text{ cm}^3$ e altezza di $50 \text{ cm}$. Trova il raggio. (Usa $\pi = 3,14$).

**Svolgimento:**
Usiamo la formula inversa con la radice.
$$r = \sqrt{\frac{V}{\pi \cdot h}}$$
$$r = \sqrt{\frac{1570}{3,14 \cdot 50}} = \sqrt{\frac{1570}{157}}$$
$$r = \sqrt{10} \approx 3,16 \text{ cm}$$

---

## Errori Comuni

1.  **Dimenticare il quadrato:**
    La formula è $\pi r^2 h$, non $\pi r h$. Stai partendo da un'area (cm²), non da una linea!
2.  **Mischiare le unità:**
    Se $r = 2 \text{ cm}$ e $h = 1 \text{ m}$, **ALT!** Converti subito l'altezza in $100 \text{ cm}$. Mai moltiplicare centimetri con metri.
3.  **Il dilemma del Pi Greco:**
    Molti chiedono: "Devo scrivere 3,14 o lasciare $\pi$?".
    Consiglio: Se non specificato, lascia il simbolo $\pi$ (es. $100\pi$). È più preciso, più elegante e fai meno calcoli!

`,
};

export const lezione = {
  meta: {
    slug: "volume-sfera-formule-calcolo",
    title: "Volume della Sfera: Formula, Calcolo e Inverse (con Esercizi)",
    description:
      "Come si calcola il volume della sfera? Scopri la formula V = 4/3 π r³, le formule inverse per trovare il raggio e il caso del semicerchio.",
    category: "Geometria Solida",
    has_pdf_resource: true,
  },
  content: `

# Volume della Sfera: Formula e Calcolo

**Come si calcola il volume della sfera?**
Il volume della sfera si calcola moltiplicando per $\frac{4}{3}$ il prodotto tra il Pi Greco ($\pi$) e il raggio elevato al cubo.
La formula fondamentale è:
$$V = \frac{4}{3} \pi r^3$$


## Tabella delle Formule
Ecco tutte le formule che ti servono, comprese quelle inverse per quando il problema ti dà il volume o l'area e devi tornare indietro.

| Dati che hai | Formula da usare |
| :--- | :--- | :--- |
| **Raggio ($r$)** | $$V = \frac{4}{3} \pi r^3$$ |
| **Diametro ($d$)** | $$V = \frac{1}{6} \pi d^3$$ |
| **Volume ($V$)** | $$r = \sqrt[3]{\frac{3V}{4\pi}}$$ |
| **Area ($S$)** | Prima trovi $r = \sqrt{\frac{S}{4\pi}}$ |

---

## Esercizio Svolto: Calcolo Passo-Passo
**Traccia:** Calcola il volume di una sfera con raggio $r = 6 \text{ cm}$.

**Passo 1: Eleva il raggio al cubo**
Questa è la priorità. Non moltiplicare prima!
$$r^3 = 6 \cdot 6 \cdot 6 = 216$$

**Passo 2: Moltiplica per la frazione 4/3**
$$V = \frac{4}{3} \cdot \pi \cdot 216$$
Puoi fare $(4 \cdot 216) : 3 = 864 : 3 = 288$.

**Passo 3: Risultato Finale**
$$V = 288 \pi \text{ cm}^3$$
*(Se devi esplicitare il $\pi$: $288 \cdot 3,14 \approx 904,32 \text{ cm}^3$)*

---

## Formule Inverse: Dal Volume al Raggio
**Traccia:** Una sfera ha un volume di $36\pi \text{ cm}^3$. Quanto misura il raggio?

Usiamo la formula inversa:
$$r = \sqrt[3]{\frac{3 \cdot V}{4 \cdot \pi}}$$

Sostituiamo il volume ($36\pi$):
$$r = \sqrt[3]{\frac{3 \cdot 36\pi}{4\pi}}$$
I $\pi$ si semplificano (via!). Il 36 e il 4 si semplificano (rimane 9 sopra).
$$r = \sqrt[3]{3 \cdot 9} = \sqrt[3]{27}$$
$$r = 3 \text{ cm}$$

---

## Il Semicerchio Generatore (Solidi di Rotazione)
Spesso i problemi dicono: *"Una sfera generata dalla rotazione di un semicerchio..."*.
Non farti spaventare. Immagina una bandierina a forma di mezzaluna che gira velocissima sull'asta: l'immagine che vedi è una sfera.



* Il raggio del semicerchio è il raggio della sfera.
* Se hai l'**Area del semicerchio**, trovi il raggio con $r = \sqrt{\frac{2A}{\pi}}$ e poi calcoli il volume.

---

## Errori Comuni

1.  **Confondere Cubo e Quadrato:**
    Nell'Area usi $r^2$. Nel Volume usi **$r^3$**.
    Se scrivi $\frac{4}{3}\pi r^2$, stai sbagliando dimensione!
2.  **La trappola del Diametro:**
    Se il testo dice "Diametro = 10", non mettere 10 nella formula! Dividi subito per 2. Raggio = 5.
3.  **Dimenticare il 4/3:**
    Molti studenti scrivono $V = 4\pi r^3$ (dimenticando di dividere per 3) oppure $V = \frac{3}{4}...$ (invertendo la frazione). Memorizzala così: "Quattro terzi".

`,
};

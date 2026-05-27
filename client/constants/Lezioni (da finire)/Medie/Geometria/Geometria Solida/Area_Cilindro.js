export const lezione = {
  meta: {
    slug: "area-cilindro-formule-calcolo",
    title: "Area del Cilindro: Formule, Superficie Laterale e Totale",
    description:
      "Guida completa all'area del cilindro. Impara le formule (laterale e totale), il caso del cilindro equilatero e scarica il formulario PDF.",
    category: "Geometria Solida",
    has_pdf_resource: true,
  },
  content: `

# Area del Cilindro: Formule e Calcolo

**Come si calcola l'area del cilindro?**

[immagine: src/Data/Images/Geometria_piana/cilindro.jpg]

L'area totale del cilindro è la somma della sua superficie laterale e delle due basi.
La formula completa è $$S_{tot} = 2\pi r h + 2\pi r^2$$, dove $r$ è il raggio di base e $h$ è l'altezza.
Se ti serve solo la superficie laterale (il "tubo"), la formula è $$S_{lat} = 2\pi r h$$.


## Tabella delle Formule
Ecco tutte le formule che ti servono per gli esercizi, incluse quelle inverse.

| Grandezza | Simbolo | Formula Diretta |
| :--- | :--- | :--- |
| **Area di Base** | $S_b$ | $$S_b = \pi r^2$$ |
| **Area Laterale** | $S_{lat}$ | $$S_{lat} = 2\pi r h$$ |
| **Area Totale** | $S_{tot}$ | $$S_{tot} = S_{lat} + 2 S_b$$ |
| **Volume** | $V$ | $$V = \pi r^2 h$$ |

---


## Formule Inverse: Trovare Raggio e Altezza
Spesso il problema ti dà l'area e tu devi trovare le dimensioni. Ecco come girare le formule:

**Se conosci l'Area Laterale ($S_{lat}$):**
* Cerchi l'altezza? $$h = \frac{S_{lat}}{2\pi r}$$
* Cerchi il raggio? $$r = \frac{S_{lat}}{2\pi h}$$

**Se conosci l'Area Totale:**
Qui è più difficile perché c'è una somma. Solitamente devi sottrarre le basi per ottenere prima l'Area Laterale, e poi usare le formule qui sopra.
$$S_{lat} = S_{tot} - 2 S_b$$

---

## Il Caso Speciale: Cilindro Equilatero
Fai molta attenzione se nel testo leggi "Cilindro Equilatero".
Significa che il cilindro ha l'altezza è uguale al diametro di base ($h = 2r$).

[immagine: src/Data/Images/Geometria_piana/cilindroQuadrato.jpg]



Le formule diventano semplicissime (tutto dipende solo dal raggio):
* **Area Laterale:** $S_{lat} = 4\pi r^2$
* **Area Totale:** $S_{tot} = 6\pi r^2$

---

## Esercizio Svolto Passo-Passo

[immagine: src/Data/Images/Geometria_piana/cilindro.jpg]

**Problema:** Un cilindro ha il raggio di base di $4 \text{ cm}$ e l'altezza di $10 \text{ cm}$. Calcola l'Area Laterale e Totale.

**Passo 1: Dati**
$r = 4 \text{ cm}$
$h = 10 \text{ cm}$

**Passo 2: Calcolo Area di Base**
$$S_b = \pi \cdot r^2 = \pi \cdot 4^2 = 16\pi \text{ cm}^2$$

**Passo 3: Calcolo Area Laterale**
$$S_{lat} = 2\pi r \cdot h = 2\pi \cdot 4 \cdot 10 = 80\pi \text{ cm}^2$$

**Passo 4: Calcolo Area Totale**
Ricorda di sommare DUE basi!
$$S_{tot} = S_{lat} + 2 \cdot S_b$$
$$S_{tot} = 80\pi + 2 \cdot (16\pi)$$
$$S_{tot} = 80\pi + 32\pi = 112\pi \text{ cm}^2$$
*(Se il prof vuole il numero decimale, sostituisci $\pi$ con 3,14: $112 \cdot 3,14 \approx 351,68$)*

---

## Errori Comuni

1.  **Dimenticare il "2" nell'Area Totale:**
    L'errore classico è fare $S_{lat} + S_b$. No! Il cilindro ha un coperchio E un fondo. Devi aggiungere **due** basi.
2.  **Confondere Raggio e Diametro:**
    Se il testo dice "Diametro = 10", il tuo primo pensiero deve essere "Raggio = 5". Tutte le formule usano il raggio.
3.  **L'altezza del Cilindro vs Altezza del cerchio:**
    Non esiste l'altezza del cerchio (è il diametro). $h$ è sempre la distanza verticale tra le due basi.

`,
};

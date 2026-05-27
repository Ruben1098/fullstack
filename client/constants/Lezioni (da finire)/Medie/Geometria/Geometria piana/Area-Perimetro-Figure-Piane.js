export const lezione = {
  meta: {
    slug: "formule-aree-perimetri-geometria",
    title: "Aree e Perimetri: Formulario Completo e Trucchi per Ricordarli",
    description:
      "Tutte le formule di geometria piana in un'unica tabella. Impara a calcolare area e perimetro di Quadrato, Rettangolo, Triangolo, Cerchio e Trapezi senza errori.",
    category: "Geometria",
    has_pdf_resource: true,
  },
  content: `

# Formule di Geometria Piana: Aree e Perimetri

**Qual è la differenza tra Area e Perimetro?**
Il **Perimetro ($2p$)** misura la lunghezza del **contorno** della figura (immagina di doverla recintare con un filo). L'**Area ($A$)** misura la grandezza della **superficie interna** (immagina di doverla colorare o piastrellare).




## Tabella Universale delle Formule
Ecco lo schema completo. Legenda: $b$=base, $h$=altezza, $l$=lato.

:::Grid{data='{"cols": 2}'}

:::TableTitle{data='{"title": "I Quadrilateri Base"}'}
:::

:::TableCard{data='{"title": "Quadrato"}'}
**Area:** $$ A = l^2 $$
**Perimetro:** $$ 2p = 4 \cdot l $$
:::

:::TableCard{data='{"title": "Rettangolo"}'}
**Area:** $$ A = b \cdot h $$
**Perimetro:** $$ 2p = 2 \cdot (b + h) $$
:::

:::TableTitle{data='{"title": "Triangoli e Trapezi"}'}
:::

:::TableCard{data='{"title": "Triangolo (Qualsiasi)"}'}
**Area:** $$ A = \frac{b \cdot h}{2} $$
**Perimetro:** Somma dei tre lati
:::

:::TableCard{data='{"title": "Trapezio"}'}
**Area:** $$ A = \frac{(B + b) \cdot h}{2} $$
**Perimetro:** Somma dei quattro lati
:::

:::TableTitle{data='{"title": "Rombo e Cerchio"}'}
:::

:::TableCard{data='{"title": "Rombo"}'}
**Area:** $$ A = \frac{D \cdot d}{2} $$
**Perimetro:** $$ 2p = 4 \cdot l $$
:::

:::TableCard{data='{"title": "Cerchio ($r$ = raggio)"}'}
**Area:** $$ A = \pi \cdot r^2 $$
**Circonferenza:** $$ C = 2 \cdot \pi \cdot r $$
:::

:::

---

## Capire le Formule: I Trucchi Visivi

### Perché il Triangolo è "diviso 2"?
Molti studenti dimenticano il $\frac{...}{2}$ nella formula del triangolo ($A = \frac{b \cdot h}{2}$).
Ricorda questo: ogni triangolo è esattamente la metà di un rettangolo con la stessa base e altezza. Se non dividi per 2, stai calcolando l'area del rettangolo, non del triangolo!



### Il Cerchio e il Pi Greco ($\pi$)
Il cerchio è l'unica figura "tonda", quindi le sue formule dipendono dal raggio ($r$) e dalla costante magica $\pi$ (Pi Greco), che vale circa **3,14**.
* Se cerchi la lunghezza (Circonferenza), la formula è "lineare": $r$ è alla prima potenza.
* Se cerchi l'area (Superficie), la formula è "quadrata": $r$ è alla seconda potenza ($r^2$).

---

## Esercizio Guidato: Area del Trapezio
Mettiamo in pratica la teoria. Questo è l'esercizio classico dove si sbagliano i calcoli.

**Traccia:** Calcola l'area di un trapezio sapendo che:
* Base maggiore ($B$) = 10 cm
* Base minore ($b$) = 6 cm
* Altezza ($h$) = 4 cm



### Passo 1: Scrivi la formula
Per prima cosa, scriviamo la formula sul foglio.
:::BoxStep{data='{}'}
$$ A = \frac{(B + b) \cdot h}{2} $$
:::

### Passo 2: Sostituisci i numeri
Mettiamo i dati al posto delle lettere.
:::BoxStep{data='{}'}
$$ A = \frac{(10 + 6) \cdot 4}{2} $$
:::

### Passo 3: Risolvi con ordine
La regola dice: prima la somma nelle parentesi.
$$ 10 + 6 = 16 $$
Quindi diventa:
:::BoxStep{data='{}'}
$$ A = \frac{16 \cdot 4}{2} $$
:::

### Passo 4: Calcolo finale
Possiamo fare $16 \cdot 4 = 64$ e poi dividere per due.
:::BoxStep{data='{}'}
$$ A = \frac{64}{2} = 32 $$
:::

:::BoxResult{data='{}'}
$$ \text{Area} = 32 \text{ cm}^2 $$
:::

---

## Errori Comuni
Ecco dove perde punti la maggior parte degli studenti:

1.  **Dimenticare l'unità di misura quadrata:**
    Il perimetro si misura in $cm$ o $m$. L'Area si misura SEMPRE in $cm^2$ o $m^2$. Se scrivi $A = 32 cm$, è un errore grave!
2.  **Dimenticare le parentesi nel trapezio:**
    Se scrivi sulla calcolatrice $10 + 6 \cdot 4$, lei farà prima la moltiplicazione ($6 \cdot 4 = 24$) e poi aggiungerà 10. Risultato sbagliato (34). Devi fare prima $(10+6)$.
3.  **Confondere Raggio e Diametro:**
    Se il testo ti dà il diametro, devi prima dividerlo a metà per trovare il raggio. Le formule usano quasi tutte il raggio!

`,
};

export const lezione = {
  meta: {
    slug: "teorema-di-euclide-formule-esercizi",
    title: "Teoremi di Euclide: Spiegazione Semplice, Formule e Proiezioni",
    description:
      "Guida completa al 1° e 2° Teorema di Euclide. Impara a calcolare cateti, altezza e proiezioni con le proporzioni e scarica gli esercizi svolti.",
    category: "Geometria Piana",
    has_pdf_resource: true,
  },
  content: `

# Teoremi di Euclide: Primo, Secondo e Formule

**Cosa sono i Teoremi di Euclide?**
Sono due relazioni fondamentali valide solo nei **triangoli rettangoli**. Servono a calcolare le misure dei lati e dell'altezza interna sfruttando le **proiezioni** dei cateti sull'ipotenusa.
Mentre Pitagora usa solo i lati, Euclide entra in gioco quando devi lavorare con l'altezza relativa all'ipotenusa e i segmenti che essa crea.


## Tabella Rapida
Scegli il teorema in base a cosa devi trovare.

| Teorema | A cosa serve? | La Proporzione | La Formula Pratica |
| :--- | :--- | :--- | :--- |
| **1° Euclide** | Lega **Cateto** e Ipotenusa | $$i : c = c : p$$ | $$c^2 = i \cdot p$$ |
| **2° Euclide** | Lega **Altezza** e Proiezioni | $$p_1 : h = h : p_2$$ | $$h^2 = p_1 \cdot p_2$$ |

---

## 1. Capire la "Mappa": Le Proiezioni
Prima delle formule, devi saper leggere il disegno. L'errore numero uno è sbagliare proiezione.
Immagina il triangolo appoggiato sul lato lungo (ipotenusa).
* L'**Altezza ($h$)** cade a piombo dall'angolo retto e spacca l'ipotenusa in due pezzi.
* Questi due pezzi sono le **Proiezioni ($p$)**.
    * La proiezione $p_1$ è l'ombra del cateto $c_1$.
    * La proiezione $p_2$ è l'ombra del cateto $c_2$.
    * 
    * [immagine: src/Data/Images/Geometria_piana/euclide.jpg]


---

## 2. Il Primo Teorema di Euclide (Focus Cateto)
Usa questo teorema quando il problema coinvolge: **Ipotenusa, Cateto e la sua Proiezione.**

**Enunciato:**
In un triangolo rettangolo, il cateto è *medio proporzionale* tra l'ipotenusa e la propria proiezione su di essa.

**Formula:**
$$c^2 = i \cdot p$$
*(Il quadrato costruito sul cateto è equivalente al rettangolo fatto da ipotenusa e proiezione)*

[immagine: src/Data/Images/Geometria_piana/euclide_teorema1.jpg]



**Come ricordarlo:**
Parti dall'ipotenusa $\rightarrow$ tocca il cateto $\rightarrow$ finisci sulla proiezione vicina.

---

## 3. Il Secondo Teorema di Euclide (Focus Altezza)
Usa questo teorema quando il problema coinvolge: **Altezza e le due Proiezioni.**

**Enunciato:**
In un triangolo rettangolo, l'altezza relativa all'ipotenusa è *medio proporzionale* tra le proiezioni dei due cateti.

**Formula:**
$$h^2 = p_1 \cdot p_2$$
*(Il quadrato costruito sull'altezza è equivalente al rettangolo fatto dalle due proiezioni)*

[immagine: src/Data/Images/Geometria_piana/euclide_teorema2.jpg]



**Come ricordarlo:**
Immagina una bilancia: l'altezza sta al centro, le due proiezioni stanno ai lati.

---

## Euclide o Pitagora? Il trucco per decidere 💡
Molti studenti vanno in crisi: "Quale uso?". Ecco la regola d'oro:

* Hai **2 lati** e cerchi il **3° lato**? $\rightarrow$ Usa **Pitagora**.
* Hai ipotenusa e proiezione e cerchi il cateto? $\rightarrow$ Usa **1° Teorema di Euclide**.
* Hai le **proiezioni** o cerchi l'**altezza** interna? $\rightarrow$ Usa **2° Teorema di Euclide**.


---

## Esercizio Svolto Passo-Passo
**Problema:** In un triangolo rettangolo l'ipotenusa misura $25 \text{ cm}$ e la proiezione del cateto minore misura $9 \text{ cm}$. Calcola quanto è lungo il cateto minore.

### Passo 1: Analisi dei Dati
* Ipotenusa ($i$) = $25 \text{ cm}$
* Proiezione ($p$) = $9 \text{ cm}$
* Domanda: Cateto ($c$) = ?

### Passo 2: Scelta dell'arma
Abbiamo $i$, $p$ e cerchiamo $c$.
Guardiamo la tabella: serve il **1° Teorema di Euclide**.

### Passo 3: Calcolo
Scriviamo la formula:
$$c^2 = i \cdot p$$

Sostituiamo i numeri:
$$c^2 = 25 \cdot 9$$
$$c^2 = 225$$

Attenzione! Questo è il cateto al quadrato. Facciamo la radice:
$$c = \sqrt{225} = 15 \text{ cm}$$

**Risposta:** Il cateto misura 15 cm.

`,
};

export const lezione = {
  meta: {
    slug: "perimetro-rombo-formule-esercizi",
    title: "Perimetro del Rombo: Formule, Calcolo con Pitagora ed Esercizi",
    description:
      "Come calcolare il perimetro del rombo in 3 modi. Scopri la formula base, come usare le diagonali con Pitagora e scarica la scheda riassuntiva.",
    category: "Geometria Piana",
    has_pdf_resource: true,
  },
  content: `

# Perimetro del Rombo: Formule e Calcolo

[immagine: src/Data/Images/Geometria_piana/Rombo_perimetro.jpg]

**Come si calcola il perimetro del rombo?**
Il perimetro del rombo ($2p$) è la misura del suo contorno. Poiché il rombo ha tutti e 4 i lati uguali (congruenti), basta moltiplicare la misura di un lato ($L$) per quattro.
La formula fondamentale è:
$$2p = 4 \cdot L$$



## Tabella: Quale formula usare?
Spesso nei problemi non hai il lato pronto all'uso. Ecco la tabella strategica: cerca i dati che *hai* nella prima colonna e usa la formula corrispondente.

:::Grid{data='{"cols": 3}'}

:::TableCard{data='{"title": "Hai il LATO ($L$)"}'}
**Formula Base**
$$ 2p = 4 \cdot L $$
:::

:::TableCard{data='{"title": "Hai le DIAGONALI ($D, d$)"}'}
**Usa Pitagora**
Trova prima il lato:
$$ L = \sqrt{(\frac{D}{2})^2 + (\frac{d}{2})^2} $$
Poi moltiplica per 4.
:::

:::TableCard{data='{"title": "Hai AREA ($A$) e ALTEZZA ($h$)"}'}
**Formula Inversa**
Trova prima il lato:
$$ L = \frac{A}{h} $$
Poi moltiplica per 4.
:::

:::

---

## 1. Il Caso Classico (Conosci il Lato)
Immagina il rombo come un recinto quadrato che è stato un po' "schiacciato". I lati sono rimasti lunghi uguali.
Se un lato misura 8 cm, il perimetro sarà semplicemente:
$$2p = 8 \cdot 4 = 32 \text{ cm}$$

---

## 2. Il Caso "Difficile": Calcolo con le Diagonali
Se il problema ti assegna le diagonali non puoi sommarle! Devi usare il **Teorema di Pitagora**.

**Perché? Visualizziamo.**
Le diagonali tagliano il rombo in 4 triangoli rettangoli identici.
Guardane uno:
* I **cateti** sono la metà delle diagonali ($\frac{D}{2}$ e $\frac{d}{2}$).
* L'**ipotenusa** è il lato del rombo ($L$).

[immagine: src/Data/Images/Geometria_piana/Rombo_pitagora.jpg]



### Esercizio Svolto Passo-Passo
**Traccia:** Un rombo ha le diagonali di $21 \text{ dm}$ e $7,2 \text{ dm}$. Calcola il perimetro.

**Passo A: Trova i cateti (Semi-diagonali)**
Devi sempre dimezzare le diagonali prima di iniziare!
$$c_1 = \frac{21}{2} = 10,5 \text{ dm}$$
$$c_2 = \frac{7,2}{2} = 3,6 \text{ dm}$$

**Passo B: Trova il lato (Pitagora)**
$$L = \sqrt{(10,5)^2 + (3,6)^2}$$
$$L = \sqrt{110,25 + 12,96} = \sqrt{123,21} = 11,1 \text{ dm}$$

**Passo C: Calcola il perimetro**
$$2p = 11,1 \cdot 4 = 44,4 \text{ dm}$$

---

## 3. Il Caso "Parallelogramma"
Se conosci l'Area totale e l'altezza (la distanza tra due lati opposti), puoi trovare il lato con la formula inversa dell'area.

[immagine: src/Data/Images/Geometria_piana/Rombo_parallelogramma.jpg]


**Esempio:** Area = $18 \text{ m}^2$, Altezza = $2 \text{ m}$.
1.  Trovo il lato: $$L = \frac{Area}{altezza} = \frac{18}{2} = 9 \text{ m}$$
2.  Trovo il perimetro: $$2p = 9 \cdot 4 = 36 \text{ m}$$

---

## Errori Comuni

1.  **Dimenticare di dividere le diagonali:**
    Se applichi Pitagora usando le diagonali intere ($21$ e $7,2$ invece della loro metà), troverai un lato gigantesco e sbagliato. Ricorda: Pitagora lavora sui triangolini *interni*.
2.  **Confondere $m$ e $m^2$:**
    Il perimetro è una linea, si misura in metri (o cm). L'area è una superficie, si misura in metri quadrati. Non scrivere $2p = 36 m^2$!
3.  **Mischiare le unità:**
    Se $D = 1 \text{ m}$ e $d = 40 \text{ cm}$, converti subito! ($100 \text{ cm}$ e $40 \text{ cm}$). Solo dopo inizia i calcoli.

`,
};

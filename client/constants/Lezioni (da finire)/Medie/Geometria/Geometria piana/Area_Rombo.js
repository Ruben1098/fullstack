export const lezione = {
  meta: {
    slug: "area-rombo-formule-calcolo",
    title: "Area del Rombo: Formule, Calcolo e Trucchi (con Esercizi)",
    description:
      "Come calcolare l'Area del Rombo? Guida completa alle formule (diagonali e base per altezza), formule inverse e il legame con il Teorema di Pitagora.",
    category: "Geometria Piana",
    has_pdf_resource: true,
  },
  content: `

# Area del Rombo: Formula e Come si Calcola

[immagine: src/Data/Images/Geometria_piana/Rombo.webp]


**Come si calcola l'area del rombo?**
La formula principale per calcolare l'area del rombo è il **semiprodotto delle diagonali**. Si moltiplica la diagonale maggiore ($D$) per la diagonale minore ($d$) e si divide il risultato per due.
In alternativa, poiché il rombo è un parallelogramma, puoi anche moltiplicare il lato per l'altezza.


## Tabella delle Formule

| Se conosci... | Usa questa formula |
| :--- | :--- |
| **Le due Diagonali** ($D, d$) | $$A = \frac{D \cdot d}{2}$$ |
| **Lato e Altezza** ($l, h$) | $$A = l \cdot h$$ |
| **Area e Diagonale Min.** ($A, d$) | $$D = \frac{2 \cdot A}{d}$$ |
| **Area e Diagonale Magg.** ($A, D$) | $$d = \frac{2 \cdot A}{D}$$ |
| **Lato** (con Pitagora) | $$l = \sqrt{(\frac{D}{2})^2 + (\frac{d}{2})^2}$$ |

---

## 1. Il Metodo Classico (Perché diviso 2?)
La formula più famosa è $A = \frac{D \cdot d}{2}$. Ma ti sei mai chiesto perché dobbiamo dividere per due?



Guarda l'immagine sopra: immagina di disegnare un rettangolo attorno al rombo.

[immagine: src/Data/Images/Geometria_piana/RomboRettangolo.webp]

* La base del rettangolo è uguale alla Diagonale minore ($d$).
* L'altezza del rettangolo è uguale alla Diagonale maggiore ($D$).
* L'area del rettangolo sarebbe $D \cdot d$.

Noterai che **il rombo occupa esattamente la metà** dello spazio del rettangolo (i 4 triangoli esterni si "ripiegano" perfettamente all'interno). Ecco svelato il mistero del "fratto 2".

---

## 2. Il Rombo come Parallelogramma
A volte i problemi non ti danno le diagonali, ma ti danno il lato e l'altezza.
Il rombo è un **parallelogramma con i lati uguali**.
Quindi vale la regola universale:
$$Area = \text{Base} \cdot \text{Altezza} \Rightarrow A = l \cdot h$$

---

## 3. Il legame con Pitagora (Trovare il lato)
Questa è la parte più difficile delle verifiche. Spesso hai le diagonali e devi trovare il Perimetro. Come trovi il lato?
Le diagonali tagliano il rombo in **4 triangoli rettangoli identici**.

[immagine: src/Data/Images/Geometria_piana/RomboPitagora.webp]


Per trovare il lato (che è l'ipotenusa del triangolo colorato), devi usare **metà delle diagonali** come cateti.
$$l = \sqrt{\left(\frac{D}{2}\right)^2 + \left(\frac{d}{2}\right)^2}$$

---

## Esercizio Svolto Passo-Passo
**Traccia:** Un rombo ha la diagonale maggiore di $10 \text{ cm}$ e la diagonale minore è la metà della maggiore. Calcola l'Area.

### Passo 1: Trova i dati nascosti
Sappiamo che $D = 10$.
Il testo dice che $d$ è la metà di $D$.
$$d = 10 : 2 = 5 \text{ cm}$$

### Passo 2: Scegli la formula
Abbiamo le due diagonali, quindi usiamo la formula classica.
$$A = \frac{D \cdot d}{2}$$

### Passo 3: Svolgi i calcoli
$$A = \frac{10 \cdot 5}{2} = \frac{50}{2} = 25 \text{ cm}^2$$

---

## Errori Comuni 

1.  **Dimenticare la divisione:**
    Molti studenti fanno $10 \cdot 5 = 50$ e si fermano. Sbagliato! Stai calcolando l'area del rettangolo esterno, non del rombo. Ricorda sempre di dimezzare.

2.  **Confondere $l$ con $D$:**
    Il lato e la diagonale sono cose diverse. Il lato è il contorno, la diagonale attraversa la figura internamente.

3.  **Mischiare Metri e Centimetri:**
    Se $D = 2 \text{ m}$ e $d = 50 \text{ cm}$, non fare $2 \cdot 50$!
    Converti tutto prima: $2 \text{ m} = 200 \text{ cm}$.
    Poi calcola: $(200 \cdot 50) / 2$.

`,
};

export const lezione = {
  meta: {
    slug: "prodotti-notevoli-formule-schema",
    title:
      "Prodotti Notevoli: Formule, Schema Completo e Trucchi per non Sbagliare",
    description:
      "Guida completa ai prodotti notevoli. Scarica lo schema PDF, impara a memoria le formule (quadrato, cubo, somma per differenza) ed evita gli errori più comuni.",
    category: "Algebra",
    has_pdf_resource: true,
  },
  content: `

# Prodotti Notevoli: Formule e Schema Rapido

**Cosa sono i prodotti notevoli?**
Sono "scorciatoie" di calcolo algebrico che permettono di sviluppare velocemente potenze di binomi o moltiplicazioni particolari senza eseguire tutti i passaggi intermedi. Sono fondamentali non solo per il calcolo, ma soprattutto per la scomposizione dei polinomi in fattori.


## Tabella delle Formule
Ecco lo schema dei prodotti notevoli più comuni:

| Nome | Formula (Da memorizzare) |
| :--- | :--- |
| **Quadrato di Binomio** | $$(a+b)^2 = a^2 + 2ab + b^2$$ |
| **Differenza di Quadrati** | $$(a+b)(a-b) = a^2 - b^2$$ |
| **Cubo di Binomio** | $$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$ |
| **Quadrato di Trinomio** | $$(a+b+c)^2 = a^2+b^2+c^2+2ab+2ac+2bc$$ |
| **Somma di Cubi** | $$a^3+b^3 = (a+b)(a^2-ab+b^2)$$ |

---

## 1. Il Quadrato di Binomio
La formula è: $(a+b)^2 = a^2 + 2ab + b^2$.

Perché si sbaglia sempre? Perché l'istinto ti dice di fare semplicemente $a^2 + b^2$. **Non farlo!**
In geometria, se costruisci un quadrato di lato $(a+b)$, vedrai che mancano due rettangoli se dimentichi il termine centrale.



:::BoxAlert{data='{}'}
⚠️ **L'Errore grave**
Non scrivere MAI $(a+b)^2 = a^2 + b^2$.
Manca il **Doppio Prodotto** ($2ab$). Se lo dimentichi, l'intero esercizio  è considerato sbagliato.
:::

### Esempio Svolto Passo-Passo
Calcoliamo $(2x - 3y)^2$.

1.  **Quadrato del primo:** $(2x)^2 = 4x^2$
2.  **Doppio Prodotto:** $2 \cdot (2x) \cdot (-3y)$. Occhio al segno! Più per meno fa meno. Risultato: $-12xy$.
3.  **Quadrato del secondo:** $(-3y)^2 = +9y^2$ (Ricorda: il quadrato è sempre positivo).

**Risultato:** $$4x^2 - 12xy + 9y^2$$

---

## 2. Somma per Differenza
Questa è l'unica formula dove i termini misti spariscono.

Formula: $$(a+b)(a-b) = a^2 - b^2$$

**Come funziona:**
Prendi il primo termine e fanne il quadrato. Prendi il secondo e fanne il quadrato. Metti un **meno** in mezzo.

### Esempio Rapido
Calcola $(3x + 5)(3x - 5)$.
$$ (3x)^2 - (5)^2 = 9x^2 - 25 $$

---

## 3. Cubo di Binomio (La regola dell'1-3-3-1)
Qui la formula si allunga: $(a+b)^3$.
Per ricordarla, pensa ai coefficienti: **1, 3, 3, 1**.

1.  Cubo del primo ($1 \cdot a^3$)
2.  Triplo prodotto del primo al quadrato per il secondo ($3a^2b$)
3.  Triplo prodotto del primo per il secondo al quadrato ($3ab^2$)
4.  Cubo del secondo ($1 \cdot b^3$)



### Il Trucco dei Segni Alternati 💡
Se hai un meno, come in $(a-b)^3$, i segni si alternano semplicemente:
**Più, Meno, Più, Meno.**

Formula: $$a^3 - 3a^2b + 3ab^2 - b^3$$

---

## Domande Frequenti (FAQ)

**Cosa faccio se mi dimentico la formula durante la verifica?**
Non lasciare il foglio in bianco! Ricorda la definizione di potenza:
$(a+b)^2$ non è altro che $(a+b) \cdot (a+b)$.
Fai la moltiplicazione classica termine per termine.

**Come faccio con le frazioni?**
La regola è la stessa. Se devi fare il doppio prodotto di $2 \cdot \frac{1}{2}x \cdot y$, ricorda che il $2$ e l'$\frac{1}{2}$ si semplificano. 

`,
};

export const lezione = {
  meta: {
    slug: "formule-inverse-medie-trucchi",
    title: "Formule Inverse: Spiegazione Semplice e il Trucco del Triangolo",
    description:
      "Come ricavare le formule inverse senza impararle a memoria. Scopri la regola delle operazioni opposte, il metodo del Triangolo Magico e il trucco dei numeri per non sbagliare mai.",
    category: "Aritmetica",
    has_pdf_resource: true,
  },
  content: `

# Formule Inverse: Come ricavarle (Senza memoria)

**Cosa sono le formule inverse?**
Sono il procedimento matematico che ti permette di isolare una lettera (incognita) spostando tutto il resto dall'altra parte dell'uguale. Per farlo, devi applicare l'**operazione opposta** a quella di partenza (es. se moltiplica, divide; se somma, sottrae).



:::BoxPDF{data='{"link": "/matematica/scheda_formule_inverse.pdf", "title": "Scarica la Scheda Riassuntiva"}'}
Non ricordi mai se devi dividere o moltiplicare? Scarica la tabella stampabile da tenere nel quaderno.
:::

## La Regola D'Oro: Operazioni Opposte
Ogni volta che un numero o una lettera attraversa l'uguale, si deve utilizzare la sua operazione inversa.

| Operazione diretta | Operazione inversa |
| :--- | :--- |
| **Somma ($+$)** | **Sottrazione ($-$)** |
| **Sottrazione ($-$)** | **Somma ($+$)** |
| **Moltiplicazione ($\cdot$)** | **Divisione ($:$)** |
| **Divisione ($:$)** | **Moltiplicazione ($\cdot$)** |
| **Potenza ($x^2$)** | **Radice ($\sqrt{\quad}$) e viceversa** |

---

## 1. Il Metodo del Triangolo
Per le formule a *tre lettere* (come Area, Densità, Velocità, Legge di Ohm), non serve fare calcoli. Usa il triangolo!

Prendiamo la formula della **Densità**: $$d = \frac{m}{V}$$



**Come funziona:**
1.  Disegna un triangolo diviso in tre parti (una in alto, due in basso).
2.  Metti la lettera che sta "sopra" nella frazione (la $m$) sulla punta del triangolo.
3.  Metti le altre due ($d$ e $V$) alla base.
4.  **Copri con il dito** la lettera che vuoi trovare:
    * Copri $m$? Restano $d$ e $V$ vicini $\rightarrow$ Moltiplica ($d \cdot V$).
    * Copri $V$? Restano $m$ sopra e $d$ sotto $\rightarrow$ Dividi ($m : d$).

---

## 2. Il Metodo Classico (Passo dopo Passo)
Se la formula è più complessa (come il Perimetro), usa il metodo logico.

### Esempio A: Moltiplicazione (Area Rettangolo)
Formula: $$A = b \cdot h$$
Obiettivo: Trovare l'altezza ($h$).

1.  **Individua l'intruso:** Chi dà fastidio alla $h$? È la $b$.
2.  **Che operazione fa?** La $b$ sta moltiplicando.
3.  **Operazione inversa:** Spostala dall'altra parte a **dividere**.

$$h = \frac{A}{b}$$



### Esempio B: Somme Miste (Perimetro Rettangolo)
Formula: $$P = 2b + 2h$$
Obiettivo: Trovare la base ($b$).

Qui devi "sbucciare" la formula come una cipolla, togliendo gli strati esterni.

1.  **Sposta le somme:** Il blocco $+2h$ passa a sinistra e diventa $-2h$.
    $$P - 2h = 2b$$
2.  **Isola la lettera:** Ora il $2$ moltiplica la $b$. Spostalo a dividere (sotto a tutto).
    $$b = \frac{P - 2h}{2}$$

---

## Il Trucco "Salva-Verifica"
Sei nel panico e non sai se devi fare $A \cdot b$ o $A : b$?
Sostituisci le lettere con un'operazione elementare che conosci, tipo $10 = 5 \cdot 2$.

Mettiamo che la formula sia $A = b \cdot h$.
Immagina:
* $A$ è 10
* $b$ è 5
* $h$ è 2

Devi trovare $b$ (che è il 5). Come ottieni 5 usando 10 e 2?
Facendo $10 : 2$.

Allora la formula inversa sarà uguale:
$$b = A : h$$


`,
};

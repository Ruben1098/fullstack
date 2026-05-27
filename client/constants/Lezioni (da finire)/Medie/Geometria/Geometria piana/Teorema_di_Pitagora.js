export const lezione = {
  meta: {
    slug: "teorema-di-pitagora",
    title: "Teorema di Pitagora: Formule, Terne ed Esercizi Svolti",
    description:
      "Guida completa al Teorema di Pitagora. Scopri le formule per cateti e ipotenusa, impara le terne pitagoriche e guarda gli esercizi svolti passo-passo.",
    category: "Geometria Piana",
    has_pdf_resource: true,
  },
  content: `

# Teorema di Pitagora: Formule e Spiegazione Semplice

**Cos'è il Teorema di Pitagora?**
È una legge geometrica valida esclusivamente per i **triangoli rettangoli**. Afferma che l'area del quadrato costruito sull'ipotenusa è uguale alla somma delle aree dei quadrati costruiti sui due cateti.
La formula fondamentale è: $$c^2 = a^2 + b^2$$



## Tabella delle Formule
Ecco gli strumenti matematici che ti servono per risolvere i problemi. Scegli la formula in base al lato che devi trovare.

| Cosa cerchi? | Formula da usare | Regola mentale |
| :--- | :--- | :--- |
| **Ipotenusa ($c$)** | $$c = \sqrt{a^2 + b^2}$$ | Devi ottenere il lato lungo: **SOMMA** ($+$) |
| **Cateto ($a$)** | $$a = \sqrt{c^2 - b^2}$$ | Devi ottenere un lato corto: **SOTTRAI** ($-$) |
| **Cateto ($b$)** | $$b = \sqrt{c^2 - a^2}$$ | Devi ottenere un lato corto: **SOTTRAI** ($-$) |

---

## Capire i termini: Ipotenusa e Cateti
Prima di calcolare, devi saper riconoscere i "pezzi" del triangolo.



* **Ipotenusa ($c$):** È sempre il lato più lungo. Si trova proprio di fronte all'angolo retto (90°).
* **Cateti ($a, b$):** Sono i due lati più corti che formano la "L" dell'angolo retto.

---

## Errori Comuni

1.  **Dimenticare la Radice Quadrata ($\sqrt{\quad}$):**
    Molti studenti fanno $3^2 + 4^2 = 25$ e scrivono "Risultato: 25 cm".
    **Attenzione!** 25 è l'area del quadrato. Il lato è $\sqrt{25} = 5$. Non dimenticare l'ultimo passaggio!
2.  **Sbagliare il Segno:**
    Ricorda la regola d'oro:
    * Cerchi il lato grande (Ipotenusa)? Usa il **PIÙ**.
    * Cerchi un lato piccolo (Cateto)? Usa il **MENO**.
3.  **Applicarlo al triangolo sbagliato:**
    Pitagora funziona **SOLO** se c'è un angolo di 90°. Se il triangolo è equilatero o isoscele generico, non puoi usarlo direttamente (a meno che non tracci l'altezza).

---

## Esercizio Guidato: Calcolo dell'Ipotenusa
**Traccia:** Un triangolo rettangolo ha i cateti che misurano $6 \text{ cm}$ e $8 \text{ cm}$. Calcola l'ipotenusa.

### Passo 1: Analisi
Conosciamo i due cateti ($a=6, b=8$). Cerchiamo l'ipotenusa ($c$).
Dobbiamo "ingrandire", quindi useremo il segno **PIÙ**.

### Passo 2: Formula e Calcoli
$$c = \sqrt{6^2 + 8^2}$$
$$c = \sqrt{36 + 64}$$
$$c = \sqrt{100}$$

### Passo 3: Risultato
$$c = 10 \text{ cm}$$

---

## Il Trucco delle "Terne Pitagoriche"
Sono gruppi di tre numeri interi che rispettano sempre il teorema.
Se riconosci i primi due, sai già il terzo senza fare calcoli!

* **3, 4, 5** (e i loro multipli: 6, 8, 10 oppure 30, 40, 50...)
* **5, 12, 13**
* **8, 15, 17**
e cosi via... sono tantissime!

`,
};

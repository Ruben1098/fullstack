export const lezione = {
  meta: {
    slug: "teorema-dei-carabinieri-confronto",
    title:
      "Teorema dei Carabinieri (del Confronto): Spiegazione Facile ed Esempi",
    description:
      "Cos'è il Teorema dei Carabinieri? Guida pratica per risolvere i limiti con il teorema del confronto. Esempi svolti, spiegazione intuitiva e trucchi per l'esame.",
    category: "Analisi Matematica 1",
    has_pdf_resource: true,
  },
  content: `
# Teorema dei Carabinieri (o del Confronto): Spiegazione e Uso Pratico

**Cos'è il Teorema dei Carabinieri?**
Il Teorema dei Carabinieri (formalmente *Teorema del Confronto*) è un metodo per calcolare il limite di una funzione "complicata" incastrandola tra due funzioni più semplici che tendono allo stesso valore. Se le due funzioni esterne vanno verso un certo limite $l$, quella in mezzo è obbligata a seguirle e avrà anch'essa limite $l$.

### 👮‍♂️ Perché si chiama così? (La Metafora)
Immagina un arrestato (la tua funzione complicata $f(x)$) che cammina ammanettato tra due Carabinieri (le funzioni semplici $g(x)$ e $h(x)$).
* Se i due Carabinieri decidono di entrare in caserma (il limite $l$), l'arrestato in mezzo a loro non può scappare: deve per forza entrare in caserma anche lui.



---

## L'Enunciato Matematico (Rigore Formale)

Passiamo dal linguaggio intuitivo.

Siano $g(x)$, $f(x)$ e $h(x)$ tre funzioni definite in uno stesso intorno di $x_0$ (tranne al più in $x_0$).
Devono verificarsi **due condizioni fondamentali**:

1.  **La disuguaglianza:**
    La funzione $f(x)$ è sempre compresa tra le altre due:
    $$ g(x) \\le f(x) \\le h(x) $$

2.  **La Convergenza Comune:**
    I limiti delle due funzioni "esterne" coincidono:
    $$ \\lim_{x \\to x_0} g(x) = l \\quad \\text{e} \\quad \\lim_{x \\to x_0} h(x) = l $$

**Tesi:**
Allora anche la funzione centrale è obbligata a tendere allo stesso limite:
$$ \\lim_{x \\to x_0} f(x) = l $$

---

## Esempio Svolto: Come si usa negli esercizi?

Il Teorema dei Carabinieri è l'arma perfetta quando hai funzioni che **oscillano** (come seno e coseno) moltiplicate per qualcosa che tende a zero.

**Esercizio:** Calcola $\\lim_{x \\to 0} x^2 \\cdot \\sin\\left(\\frac{1}{x}\\right)$

Se provi a sostituire, ottieni $0 \\cdot \\sin(\\infty)$, che non ha senso immediato perché il seno continua a oscillare tra -1 e 1 senza mai fermarsi. Qui entra in gioco il teorema.

**Step 1: Costruisci l'incastro**
Sappiamo che il seno, qualunque sia il suo argomento, è sempre compreso tra -1 e 1:
$$ -1 \\le \\sin\\left(\\frac{1}{x}\\right) \\le 1 $$

**Step 2: Moltiplica tutto**
Moltiplichiamo tutti i membri della disuguaglianza per $x^2$ (che è positivo, quindi non cambia i versi):
$$ -x^2 \\le x^2 \\cdot \\sin\\left(\\frac{1}{x}\\right) \\le x^2 $$

Ora abbiamo i nostri attori:
* Carabiniere sinistro ($g$): $-x^2$
* Arrestato ($f$): $x^2 \\sin(1/x)$
* Carabiniere destro ($h$): $x^2$

**Step 3: Calcola i limiti esterni**
Facciamo tendere $x \\to 0$ per i due carabinieri:
* $\\lim_{x \\to 0} (-x^2) = 0$
* $\\lim_{x \\to 0} (x^2) = 0$

**Conclusione:**
Poiché i due carabinieri vanno a $0$, anche l'arrestato è costretto ad andare a $0$.
$$ \\lim_{x \\to 0} x^2 \\cdot \\sin\\left(\\frac{1}{x}\\right) = 0 $$

---

## 💡 Trucchi e "Campanelli d'Allarme"

Quando devi pensare a questo teorema? Ecco gli indizi per riconoscerlo subito:

1.  **Vedi Seno o Coseno all'infinito:** Se hai limiti con $\\sin(x)$ o $\\cos(x)$ per $x \\to \\infty$, ricorda che sono funzioni **limitate** (bounded). Spesso basta dire che sono comprese tra -1 e 1.
2.  **Il prodotto "Zero x Limitata":** Questa è una regola d'oro derivata dai Carabinieri.
    Se hai:
    $$ \\text{(Qualcosa che tende a } 0) \\times \\text{(Qualcosa di limitato)} $$
    Il risultato è sempre **ZERO**.
    * *Esempio:* $\\lim_{x \\to +\\infty} \\frac{\\sin x}{x} = 0$ perché è come dire $0 \\cdot [-1, 1]$.

**Errore Comune da evitare:**
Non usare il teorema se i limiti dei due "Carabinieri" sono diversi!
Se $g(x) \\to 3$ e $h(x) \\to 5$, il teorema non ti dice nulla. La funzione in mezzo potrebbe fare quello che vuole tra 3 e 5 (o anche non avere limite).
`,
};

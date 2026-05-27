export const lezione = {
  meta: {
    slug: "differenziale-funzione-differenziabile",
    title: "Differenziale e Funzione Differenziabile: Significato e Calcolo",
    description:
      "Cosa sono il differenziale e la differenziabilità? Spiegazione chiara della differenza tra dy e delta y, formula del differenziale e come usarlo per i calcoli approssimati.",
    category: "Analisi Matematica 1",
    has_pdf_resource: true,
  },
  content: `
# Differenziale e Funzione Differenziabile: Significato e Formule

**Che cos'è il Differenziale?**
Il differenziale (indicato con $dy$ o $df$) è un modo per calcolare la variazione approssimata di una funzione muovendosi lungo la sua **retta tangente** anziché lungo la curva reale. In termini pratici, è il prodotto tra la derivata della funzione e l'incremento della variabile indipendente:
$$ dy = f'(x) \\cdot dx $$

---

### 🔍 Differenza Chiave: Derivata vs Differenziale
* **La Derivata ($f'$):** È un **numero** (o una funzione) che indica la *velocità di variazione*.
* **Il Differenziale ($dy$):** È una **quantità** (uno spostamento verticale) che indica di quanto saliresti o scenderesti se seguissi la tangente.

---

## 1. Significato Geometrico

Immagina di guardare il grafico di una funzione curva al microscopio. Se immagini di fare uno zoom su un punto, la curva sembrerà una linea retta. Quella linea è la retta tangente.

Quando ti sposti di un passo orizzontale $dx$ (o $\\Delta x$):
1.  **Variazione Reale ($\\Delta y$):** È quanto cambia davvero la funzione sulla curva. Spesso è difficile da calcolare.
2.  **Differenziale ($dy$):** È quanto cambia la retta tangente, e si calcola molto facilmente così: $m \\cdot dx$.

**Il concetto fondamentale:**
Per spostamenti piccolissimi ($dx \\to 0$), l'errore tra i due è trascurabile. Quindi usiamo il differenziale per approssimare la variazione reale:
$$ \\Delta y \\approx dy $$



---

## 2. Quando una funzione è Differenziabile?

Nelle funzioni di una variabile, c'è una notizia fantastica che semplifica la vita:
**Differenziabile = Derivabile.**

Se una funzione $f(x)$ ammette derivata finita in un punto $x_0$, allora è automaticamente differenziabile in quel punto.
Quindi, per sapere se puoi calcolare il differenziale, ti basta verificare se puoi fare la derivata.

*(Questo non è vero per funzioni con più variabili)

---

## 3. Come si calcola il Differenziale? (Esempi)

La formula è sempre la stessa:
$$ dy = (\\text{Derivata}) \\cdot dx $$

**Esempio 1:**
Calcola il differenziale di $f(x) = x^3$ nel punto generico.
1.  Fai la derivata: $f'(x) = 3x^2$.
2.  Aggiungi $dx$.
   **Risultato:** $dy = 3x^2 \\, dx$.

**Esempio 2:**
Calcola il differenziale di $f(x) = \\sin(x)$ nel punto $x = \\pi$.
1.  Fai la derivata: $f'(x) = \\cos(x)$.
2.  Valutala in $\\pi$: $\\cos(\\pi) = -1$.
   **Risultato:** $dy = -1 \\cdot dx = -dx$.

---

## 4. A cosa serve? (Il calcolo approssimato)

**Formula dell'Approssimazione Lineare:**
$$ f(x_0 + \\Delta x) \\approx f(x_0) + f'(x_0) \\cdot \\Delta x $$

**Esercizio Classico: Calcola $\\sqrt{4.01}$ senza calcolatrice.**
1.  Scegli una funzione e un punto "facile" vicino a quello richiesto.
    * Funzione: $f(x) = \\sqrt{x}$.
    * Punto facile: $x_0 = 4$ (perché so che $\\sqrt{4}=2$).
    * Incremento: $\\Delta x = 0.01$.
2.  Calcola la derivata in $x_0$:
    * $f'(x) = \\frac{1}{2\\sqrt{x}} \\Rightarrow f'(4) = \\frac{1}{4} = 0.25$.
3.  Applica la formula:
    $$ \\sqrt{4.01} \\approx \\sqrt{4} + (0.25) \\cdot 0.01 $$
    $$ \\approx 2 + 0.0025 = 2.0025 $$

Il valore reale è $2.002498...$ L'errore è minuscolo.

---

## ⚠️ Errori Comuni da Evitare

**1. Dimenticare il $dx$**
Scrivere $dy = 2x$ è un errore dimensionale grave. Devi sempre scrivere $dy = 2x \\, dx$. Il differenziale deve avere le stesse unità di misura della $y$.

**2. Confondere $\\Delta x$ e $x$**
Nella formula dell'approssimazione, $\\Delta x$ è lo spostamento *piccolo* ($4.01 - 4 = 0.01$), non il punto di partenza ($4$).

**3. Usarlo per grandi spostamenti**
L'approssimazione $dy \\approx \\Delta y$ funziona bene solo se ci si sposta di poco. Se provi a calcolare $\\sqrt{100}$ partendo da $\\sqrt{4}$ usando il differenziale, otterrai un risultato completamente sbagliato, perché la retta tangente si allontana troppo dalla curva.
`,
};

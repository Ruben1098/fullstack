export const lezione = {
  meta: {
    slug: "derivata-funzione-composta-chain-rule",
    title:
      "Derivata della Funzione Composta (Regola della Catena): Spiegazione Facile",
    description:
      "Come funziona la derivata di una funzione composta? Impara la 'Chain Rule' con la metafora della Matrioska. Esempi svolti e guida agli errori comuni.",
    category: "Analisi Matematica 1",
    has_pdf_resource: true,
  },
  content: `
# Derivata della Funzione Composta (Regola della Catena): Guida Semplice

**Come si deriva una funzione composta?**
La regola per derivare una funzione composta $h(x) = f(g(x))$ (cioè una funzione "annidata" dentro un'altra) è semplice: devi fare la derivata della funzione più esterna (lasciando invariato il suo contenuto) e **moltiplicarla** per la derivata della funzione interna. In formula:
$$ h'(x) = f'(g(x)) \\cdot g'(x) $$

---

### 🪆 L'Intuizione: gli strati
Immagina la funzione composta come una serie di strati.
Per arrivare al centro, devi togliere uno strato alla volta, dall'esterno verso l'interno.
1.  Derivi il guscio esterno ($f$) $\\to$ *Mantieni chiusa lo strato dentro ($g$).*
2.  **MOLTIPLICHI** ($\\cdot$).
3.  Derivi successivamente lo strato interno ($g$).


---

## 1. La Formula

Se abbiamo $y = f(g(x))$:
* **Funzione Esterna ($f$):** Il contenitore (es. $\\sin(\\dots)$, $\\ln(\\dots)$, $(\\dots)^2$).
* **Funzione Interna ($g$):** Il contenuto (es. $x^2$, $3x+1$).
* **Argomento:** Quello che sta dentro la parentesi.

**La Regola:**
$$ D[\\text{Esterna}(\\text{Interna})] = \\text{Esterna}'(\\text{Interna}) \\cdot \\text{Interna}' $$

---

## 2. Esempi Passo-Passo

Vediamo due esempi classici dove spesso si sbaglia.

### Esempio Base: Il Seno al Quadrato
$$ h(x) = \\sin(x^2) $$

1.  **Analisi:**
    * Esterna ($f$): $\\sin(\\dots)$. La sua derivata è $\\cos(\\dots)$.
    * Interna ($g$): $x^2$. La sua derivata è $2x$.

2.  **Applicazione:**
    Derivo l'esterna (copiando l'interna così com'è): $\\cos(x^2)$.
    Moltiplico per la derivata interna: $\\cdot (2x)$.

3.  **Risultato:**
    $$ h'(x) = \\cos(x^2) \\cdot 2x = 2x\\cos(x^2) $$

---

### Esempio Avanzato: La Potenza di una Funzione
$$ h(x) = (3x^2 + 1)^5 $$

Qui l'esterna è la potenza $(\\dots)^5$.
1.  **Derivo l'esterna:** Il 5 scende e l'esponente diventa 4. **NON toccare la parentesi!**
    $$ 5(3x^2 + 1)^4 $$
2.  **Moltiplico per la derivata interna:** Derivo $(3x^2 + 1) \\to 6x$.
    $$ \\cdot (6x) $$
3.  **Unisco tutto:**
    $$ h'(x) = 5(3x^2+1)^4 \\cdot 6x = 30x(3x^2+1)^4 $$

---

## 3. Tre o più funzioni 
$$ h(x) = \\ln(\\sin(2x)) $$
La regola è identica: derivi a cascata e moltiplichi tutto:

1.  Derivata di $\\ln(\\dots) \\to \\frac{1}{\\dots}$
    $$ \\frac{1}{\\sin(2x)} $$
2.  Per la derivata di $\\sin(\\dots) \\to \\cos(\\dots)$
    $$ \\cdot \\cos(2x) $$
3.  Per la derivata di $2x \\to 2$
    $$ \\cdot 2 $$

**Risultato:**
$$ h'(x) = \\frac{1}{\\sin(2x)} \\cdot \\cos(2x) \\cdot 2 = 2\\cot(2x) $$

---

## ⚠️ Errori Comuni

**1. Derivare tutto insieme**
Se devi derivare $\\sin(x^2)$, **NON** scrivere $\\cos(2x)$.
Hai derivato il seno ($\\cos$) e hai derivato la $x^2$ ($2x$) **dentro l'argomento**. L'argomento della prima derivata deve restare "congelato" ($x^2$).

**2. Dimenticare la moltiplicazione**
Molti studenti scrivono $f'(g(x))$ e si fermano, dimenticando il $\\cdot g'(x)$ finale.

**3. Confondere $\\sin^2(x)$ con $\\sin(x^2)$**
* $\\sin(x^2)$: Esterna = Seno, Interna = $x^2$.
* $\\sin^2(x) = (\\sin x)^2$: Esterna = Potenza $()^2$, Interna = Seno.
Le derivate sono completamente diverse!
`,
};

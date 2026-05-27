export const lezione = {
  meta: {
    slug: "teorema-de-l-hopital",
    title: "Teorema di De L'Hôpital: Come Risolvere i Limiti con le Derivate",
    description:
      "Guida pratica al Teorema di De L'Hôpital. Come risolvere le forme indeterminate 0/0 e infinito/infinito usando le derivate. Esempi svolti e trucchi per le forme 0 per infinito.",
    category: "Analisi Matematica 1",
    has_pdf_resource: true,
  },
  content: `
# Teorema di De L'Hôpital: Come Risolvere i Limiti con le Derivate

**Cos'è il Teorema di De L'Hôpital?**
Il Teorema di De L'Hôpital è una tecnica potente che permette di risolvere le forme indeterminate **$\\frac{0}{0}$** e **$\\frac{\\infty}{\\infty}$** usando le derivate. In pratica, se il limite del rapporto tra due funzioni è indeterminato, lo sostituisci con il limite del rapporto tra le loro derivate. Spesso questo semplifica drasticamente il calcolo.

---

### 🛑 ATTENZIONE!
C'è un errore che gli studenti commettono spessissimo. Memorizzalo subito:
Quando applichi De L'Hôpital, devi fare la derivata del numeratore e la derivata del denominatore **SEPARATAMENTE**.
**NON devi applicare la regola di derivazione del quoziente** (ovvero $\frac{d}{dx}(f(x)\cdot g(x)) = \frac{f'g - fg'}{g^2}$).
* Deriva sopra per conto suo.
* Deriva sotto per conto suo.



---

## L'Enunciato e la Procedura

Siano $f(x)$ e $g(x)$ due funzioni derivabili.
Se il limite $\\lim_{x \\to x_0} \\frac{f(x)}{g(x)}$ si presenta nella forma $\\frac{0}{0}$ oppure $\\frac{\\infty}{\\infty}$, allora vale la regola:

$$ \\lim_{x \\to x_0} \\frac{f(x)}{g(x)} = \\lim_{x \\to x_0} \\frac{f'(x)}{g'(x)} $$

(A patto che il secondo limite esista).

### Come si usa? (I 3 Step)

1.  **Controllo iniziale:** Sostituisci la $x$. Sei sicuro che sia $0/0$ o $\\infty/\\infty$? (Se è $5/0$ o $0/5$, De L'Hôpital NON vale!).
2.  **Derivazione:** Calcola $f'(x)$ e $g'(x)$.
3.  **Riprova:** Calcola il limite del nuovo rapporto.
    * Esce un numero? Hai finito.
    * Esce ancora $0/0$ o $\\infty/\\infty$? **Puoi applicare De L'Hôpital una seconda volta** (sulle derivate seconde).

---

## Esempio Pratico Svolto

Calcoliamo:
$$ \\lim_{x \\to 0} \\frac{e^x - 1}{\\sin(2x)} $$

1.  **Sostituzione:**
    $e^0 - 1 = 0$
    $\\sin(0) = 0$
    Siamo nel caso **$\\frac{0}{0}$**. Possiamo usare il teorema.

2.  **Derivazione:**
    * Derivata di $e^x - 1 \\rightarrow e^x$
    * Derivata di $\\sin(2x) \\rightarrow 2\\cos(2x)$

3.  **Nuovo Limite:**
    $$ \\lim_{x \\to 0} \\frac{e^x}{2\\cos(2x)} $$
    Sostituiamo $0$:
    Numeratore: $e^0 = 1$
    Denominatore: $2\\cos(0) = 2 \\cdot 1 = 2$

**Risultato:** Il limite è $\\frac{1}{2}$.

---

## 💡 Trucchi Avanzati: Le forme "Nascoste"

De L'Hôpital funziona solo con le frazioni. Ma cosa fai se hai una forma indeterminata diversa, tipo $0 \\cdot \\infty$?
**Trucco:** Devi "forzare" la funzione a diventare una frazione.

**Caso $0 \\cdot \\infty$**
Se hai $\\lim f(x) \\cdot g(x)$ dove $f \\to 0$ e $g \\to \\infty$:
Porta uno dei due termini al denominatore elevandolo alla $-1$ (cioè facendone il reciproco).
$$ f(x) \\cdot g(x) = \\frac{f(x)}{1/g(x)} $$
Ora è diventato un $\\frac{0}{0}$ e puoi usare De L'Hôpital!

**Esempio:** $\\lim_{x \\to 0^+} x \\cdot \\ln x$ ($0 \\cdot -\\infty$).
Scrivilo come:
$$ \\frac{\\ln x}{1/x} $$
Ora è un $\\frac{\\infty}{\\infty}$. Deriva sopra ($1/x$) e sotto ($-1/x^2$) e risolvi.

---

## ⚠️ Quando NON usare De L'Hôpital

Il teorema è potente, ma non è sempre la strada migliore.

1.  **Limiti Notevoli:**
    Spesso i limiti notevoli sono più veloci. Derivare $\\frac{\\sin x}{x}$ è facile, ma derivare $\\frac{\\tan^3(x)}{\\sin^2(5x)}$ con De L'Hôpital è un incubo di calcoli. Se vedi seni e tangenti semplici, usa i Limiti Notevoli.
2.  **Il "Loop" Infinito:**
    Con funzioni come $\\sqrt{x^2+1}$, derivare può rendere l'espressione sempre più complicata senza mai risolvere l'indeterminazione. In quel caso, meglio usare la **Gerarchia degli Infiniti**.
3.  **Quando il limite non esiste:**
    A volte il limite delle derivate non esiste (oscilla), ma il limite originale sì. In quel raro caso, De L'Hôpital fallisce e devi tornare ai metodi algebrici.
`,
};

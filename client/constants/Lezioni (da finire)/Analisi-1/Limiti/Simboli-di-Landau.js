export const lezione = {
  meta: {
    slug: "simboli-landau-o-piccolo-equivalenza",
    title:
      "Simboli di Landau, o-piccolo ed Equivalenza Asintotica: Guida Pratica",
    description:
      "Cosa significano o-piccolo, O-grande e il simbolo tilde? Guida definitiva all'uso dei simboli di Landau per risolvere i limiti, con tabella delle equivalenze e regole di calcolo.",
    category: "Analisi Matematica 1",
    has_pdf_resource: true,
  },
  content: `
# Simboli di Landau, O-piccolo ed Equivalenza Asintotica: Guida Definitiva

**Cosa sono i Simboli di Landau?**
I simboli di Landau (come $o$, $O$, $\\sim$) sono "etichette" matematiche che servono a descrivere la velocità con cui una funzione cresce o decresce rispetto a un'altra. Sono fondamentali nel calcolo dei limiti perché ci permettono di sostituire funzioni complicate con approssimazioni più semplici (polinomi), ignorando i dettagli trascurabili.

---

### ⚡ Le 3 Relazioni Fondamentali
Immagina di confrontare due funzioni $f(x)$ e $g(x)$ in un punto $x_0$ (spesso $0$ o $\\infty$). Ecco come leggere i simboli:

| Simbolo | Nome | Definizione (Limite) | Traduzione Intuitiva |
| :--- | :--- | :--- | :--- |
| **$f \\sim g$** | **Equivalenza Asintotica** | $$ \\lim \\frac{f(x)}{g(x)} = 1 $$ | Hanno la stessa velocità e lo stesso valore nel limite. |
| **$f = o(g)$** | **o-piccolo** | $$ \\lim \\frac{f(x)}{g(x)} = 0 $$ | "$f$ è trascurabile rispetto a $g$", sparisce molto più in fretta. |
| **$f = O(g)$** | **O-grande** | $$ \\left| \\frac{f(x)}{g(x)} \\right| \\le k $$ | "$f$ non supera $g$". Sono della stessa categoria di peso (o $f$ è più piccola). |



---

## 1. L'Equivalenza Asintotica ($\\sim$)
Questa è la relazione più utile per risolvere gli esercizi.
Dire che $\\sin x \\sim x$ per $x \\to 0$ significa che, molto vicino allo zero, la curva del seno e la retta $y=x$ sono praticamente indistinguibili.

**A cosa serve?**
Nei limiti che sono prodotti o rapporti, puoi **sostituire** una funzione con la sua stima asintotica.
*Esempio:*
$$ \\lim_{x \\to 0} \\frac{\\sin(5x)}{x} $$
Dato che $\\sin(t) \\sim t$, allora $\\sin(5x) \\sim 5x$.
Sostituisco: $\\lim \\frac{5x}{x} = 5$.

**Le Equivalenze da sapere a memoria ($x \\to 0$):**
* $\\sin x \\sim x$
* $\\tan x \\sim x$
* $e^x - 1 \\sim x$
* $\\ln(1+x) \\sim x$
* $1 - \\cos x \\sim \\frac{1}{2}x^2$

---

## 2. L'o-piccolo ($o$)
Quando scriviamo $f(x) = x + o(x)$, stiamo dicendo: "La funzione vale $x$, più un resto che è **infinitamente più piccolo** di $x$".
L'$o(g)$ è un contenitore per tutti i termini "inutili" o di ordine superiore.

**Proprietà**
Trattare gli o-piccoli è strano, perché non sono numeri ma *insiemi* di funzioni. Ecco le regole controintuitive:

1.  **Somma:** $o(x) + o(x) = o(x)$
2.  **Prodotto:** $x^2 \\cdot o(x) = o(x^3)$
3.  **Potenza:** $[o(x)]^2 = o(x^2)$
4.  **Assorbimento:** $x^3 + o(x^2) = o(x^2)$

---

## 3. L'O-grande ($O$)
Mentre l'$o$ piccolo indica qualcosa di trascurabile, l'$O$ grande indica un **limite superiore**.
Dire $f(x) = O(x)$ significa che $f(x)$ cresce "al massimo" come $x$. Potrebbe crescere come $x$, come $\\frac{1}{2}x$, o anche non crescere affatto, ma sicuramente non cresce come $x^2$.

---

## 💡 Trucchi ed Errori Comuni

**L'Errore Mortale delle Somme**
Mai usare l'Equivalenza Asintotica nelle **somme** o **differenze** se i termini principali si cancellano!
*Esempio:*
$$ \\lim_{x \\to 0} \\frac{\\tan x - \\sin x}{x^3} $$
Se usi le equivalenze ($\\tan x \\sim x$, $\\sin x \\sim x$), ottieni:
$$ \\frac{x - x}{x^3} = \\frac{0}{x^3} = 0 \\quad (\\text{SBAGLIATO!}) $$
Perché? Perché hai cancellato l'informazione principale. L'errore che hai commesso sostituendo $\\tan x$ con $x$ era un $o(x)$, che è "grande" rispetto a $x^3$.
**Soluzione:** Quando c'è una sottrazione pericolosa, devi usare gli **Sviluppi di Taylor** con gli o-piccoli completi.

**La Gerarchia corretta:**
1.  **Limiti Notevoli / Asintotico:** Usali per prodotti e rapporti veloci.
2.  **Taylor con o-piccolo:** Usalo per somme/differenze dove i termini si annullano.
`,
};

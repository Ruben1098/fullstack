export const lezione = {
  meta: {
    slug: "calcolo-limiti-algebra-forme-indeterminate",
    title: "Calcolo dei Limiti: Algebra, Sostituzione e Forme Indeterminate",
    description:
      "Guida definitiva al calcolo dei limiti: algebra di base, limiti destro/sinistro, elenco delle 7 forme indeterminate e strategie pratiche per risolverle (scomposizione, razionalizzazione).",
    category: "Analisi Matematica 1",
    has_pdf_resource: true,
  },
  content: `
# Calcolo dei Limiti: Algebra, Sostituzione e Forme Indeterminate

**Come si calcola un limite?**
Nel 90% dei casi, calcolare $\\lim_{x \\to x_0} f(x)$ significa semplicemente **sostituire** $x_0$ al posto della $x$ nella funzione e vedere cosa succede. Se ottieni un numero finito, hai finito. Se ottieni valori come $0/0$ o $\\infty/\\infty$, sei di fronte a una **Forma Indeterminata** e devi usare tecniche algebriche (scomposizione, razionalizzazione) per "sbloccare" il risultato.

---

## 1. Il Primo Tentativo: La Sostituzione Diretta

La regola d'oro è: **Prova sempre prima a sostituire.**
Non complicarti la vita con teoremi strani se non servono.

**Esempio:**
$$ \\lim_{x \\to 2} (x^2 + 3x - 1) $$
Sostituisci $2$ alla $x$:
$$ 2^2 + 3(2) - 1 = 4 + 6 - 1 = 9 $$
Il limite è 9. Fine.

### 🧮 L'Algebra dei Limiti
Se non ci sono problemi strani, i limiti si comportano come numeri normali. Ecco cosa puoi fare tranquillamente:

| Operazione | Regola Intuitiva | Esempio |
| :--- | :--- | :--- |
| **Somma** | Il limite della somma è la somma dei limiti. | $\\lim (x + x^2) \\to 2+4 = 6$ |
| **Prodotto** | Il limite del prodotto è il prodotto dei limiti. | $\\lim (x \\cdot e^x) \\to 2 \\cdot e^2$ |
| **Quoziente** | Il limite del rapporto è il rapporto dei limiti (se il denom. $\\neq 0$). | $\\lim \\frac{x+1}{x} \\to \\frac{3}{2}$ |
| **Potenza** | Il limite passa "dentro" la base e l'esponente. | $\\lim (x)^x \\to 2^2 = 4$ |

---

## 2. Destra e Sinistra: ($x \\to x_0^{\\pm}$)

A volte sostituire non basta, perché la funzione si comporta diversamente se arrivi da destra (valori leggermente più grandi) o da sinistra (valori leggermente più piccoli).
Questo succede spesso con i **reciproci** ($1/x$) o le funzioni definite a tratti.



**La regola del $0^+$ e $0^-$**
Quando al denominatore ottieni uno Zero, devi capire "che tipo" di zero è.
* $0^+$ indica un numero piccolissimo ma **positivo** (ad esempio $0,00001$).
* $0^-$ indica un numero piccolissimo ma **negativo** (ad esempio $-0,00001$).

**Esempio Classico ($1/x$):**
$$ \\lim_{x \\to 0^+} \\frac{1}{x} = \\frac{1}{0^+} = +\\infty \\quad (\\text{Positivo diviso Positivo}) $$
$$ \\lim_{x \\to 0^-} \\frac{1}{x} = \\frac{1}{0^-} = -\\infty \\quad (\\text{Positivo diviso Negativo}) $$
Se i limiti destro e sinistro sono diversi ($+\\infty$ e $-\\infty$), allora il **limite globale non esiste**.

---

## 3. Le 7 Forme Indeterminate

A volte, sostituendo, ottieni espressioni che non hanno senso immediato. Si chiamano **Forme Indeterminate**.
⚠️ **Attenzione:** "Indeterminato" NON vuol dire "Impossibile". Vuol dire solo "Non lo so ancora, devo indagare meglio".

Ecco le 7 Forme Indeterminate ufficiali:

1.  **Le "Classiche":**
    $$ +\\infty - \\infty \\quad \\text{(Chi è più grande?)} $$
    $$ 0 \\cdot \\infty \\quad \\text{(Vince lo zero o l'infinito?)} $$
    $$ \\frac{0}{0} \\quad \\text{(Forma più comune)} $$
    $$ \\frac{\\infty}{\\infty} \\quad \\text{(Gara di velocità all'infinito)} $$

2.  **Le Esponenziali:**
    $$ 1^\\infty \\quad 0^0 \\quad \\infty^0 $$

### 🚫 Errore Gravissimo da Evitare
**Non confondere "Numero diviso Zero" con "Zero diviso Zero"!**
* $\\frac{5}{0} = \\infty$ (Questo **NON** è indeterminato! È infinito).
* $\\frac{0}{5} = 0$ (Questo è zero).
* $\\frac{0}{0} = ?$ (Solo questa è una forma indeterminata).

---

## 4. Strategie di Risoluzione
Come si eliminano le forme indeterminate?

### A. Forma $\\frac{\\infty}{\\infty}$ (Polinomi)
**Tecnica:** Gerarchia degli infiniti o Raccoglimento.
Vince sempre la potenza più alta ($x^2$ batte $x$, $x^3$ batte $x^2$).
**Trucco:** Guarda solo i gradi massimi di numeratore e denominatore.
* Grado Num > Grado Den $\\to \\infty$
* Grado Num < Grado Den $\\to 0$
* Grado Num = Grado Den $\\to$ Rapporto dei coefficienti.

### B. Forma $\\frac{0}{0}$ (Polinomi)
**Tecnica:** Scomposizione e Semplificazione.
Se un polinomio si annulla in $x_0$, significa che è divisibile per $(x - x_0)$.
1.  Scomponi (Ruffini, Trinomio notevole, Differenza di quadrati).
2.  Semplifica il termine "colpevole" che rendeva tutto zero.
3.  Ricalcola il limite.

**Esempio:**
$$ \\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1} = \\frac{0}{0} \\quad \\text{(Indeterminato)} $$
Scomponi il numeratore: $(x-1)(x+1)$.
Semplifica $(x-1)$.
Resta $\\lim_{x \\to 1} (x+1) = 2$.

### C. Forma $+\\infty - \\infty$ (Con radici)
**Tecnica:** Razionalizzazione.
Se vedi radici quadrate, moltiplica e dividi per la somma dei termini (prodotto notevole $(A-B)(A+B) = A^2 - B^2$). Questo farà sparire la radice e trasformerà il limite in una forma $\\infty/\\infty$ gestibile.

---

## 💡 Il Segreto dell'Algebra dei Limiti
Ricorda: risolvere un limite è come fare una **gara a chi è più forte**.
* In $x^3 + x$, è predominante $x^3$.
* In $e^x - x^{1000}$, è predominante $e^x$.
Quando sei incerto, chiediti sempre: "Chi sta crescendo più velocemente?".
`,
};

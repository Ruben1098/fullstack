export const lezione = {
  meta: {
    slug: "teorema-permanenza-del-segno",
    title: "Teorema della Permanenza del Segno: Spiegazione e Dimostrazione",
    description:
      "Cosa dice il Teorema della Permanenza del Segno? Enunciato, dimostrazione semplice e il 'caso inverso' spiegato per evitare errori all'esame.",
    category: "Analisi Matematica 1",
    has_pdf_resource: true,
  },
  content: `
# Teorema della Permanenza del Segno: Spiegazione e Dimostrazione

**Cosa afferma il Teorema della Permanenza del Segno?**
Se una funzione tende a un limite **diverso da zero** (positivo o negativo), allora esiste tutto un intorno del punto in cui la funzione mantiene lo stesso segno del limite. Se il limite è positivo, la funzione è positiva "nelle vicinanze"; se è negativo, la funzione è negativa.

---

### 🎨 L'intuizione Visiva
Immagina che il limite sia la "destinazione" e la funzione sia il "percorso".
Se la tua destinazione è una città che si trova a 1000 metri di altezza ($l > 0$), è ovvio che negli ultimi chilometri prima di arrivare ti troverai sicuramente sopra il livello del mare ($f(x) > 0$). Non puoi teletrasportarti da sotto terra direttamente a 1000 metri senza passare per quote positive.



---

## Enunciato Formale

Sia $f(x)$ una funzione definita in un intorno di $x_0$, e supponiamo che esista il limite:
$$ \\lim_{x \\to x_0} f(x) = l $$

**Se** $l \\neq 0$ (il limite non è nullo),
**Allora** esiste un intorno $I$ di $x_0$ in cui la funzione $f(x)$ ha lo **stesso segno** di $l$ (per ogni $x \\in I, x \\neq x_0$).

In formule:
* Se $l > 0 \\Rightarrow f(x) > 0$ nell'intorno.
* Se $l < 0 \\Rightarrow f(x) < 0$ nell'intorno.

---

## La Dimostrazione Semplificata

Dimostriamo il caso in cui $l > 0$.

**1. Usiamo la definizione di limite**
Per definizione, scelto un $\\epsilon > 0$ a piacere, esiste un intorno dove:
$$ l - \\epsilon < f(x) < l + \\epsilon $$

**2. La Scelta di $\\epsilon$**
Il trucco sta tutto qui: siamo noi a scegliere $\\epsilon$.
Dato che $l$ è positivo, scegliamo un $\\epsilon$ che sia proprio la metà di $l$ (o comunque più piccolo di $l$):
$$ \\epsilon = \\frac{l}{2} $$

**3. Sostituiamo nella disuguaglianza**
Sostituendo il nostro $\\epsilon$ nella parte sinistra della disuguaglianza ($l - \\epsilon < f(x)$), otteniamo:
$$ l - \\frac{l}{2} < f(x) $$
$$ \\frac{l}{2} < f(x) $$

**4. Conclusione**
Poiché abbiamo ipotizzato all'inizio che $l > 0$, allora anche $\\frac{l}{2}$ è un numero positivo.
Se $f(x)$ è maggiore di un numero positivo ($\\frac{l}{2}$), allora **$f(x)$ è sicuramente positiva**. $\\square$

---

## ⚠️ Attenzione: Il Teorema Inverso

Il teorema vale al contrario?
*Se $f(x)$ è positiva in un intorno di $x_0$, il limite è per forza positivo?*

**La risposta è: NO, o meglio, NON STRETTAMENTE.**
Se $f(x) > 0$, il limite può essere positivo oppure **zero**.

**Esempio Trappola:**
Prendi $f(x) = x^2$.
La funzione è sempre positiva ($>0$) ovunque (tranne in 0).
Ma il limite per $x \\to 0$ è **0**, che non è positivo!

Quindi la regola inversa corretta è:
Se $f(x) \\ge 0$ in un intorno $\\Rightarrow \\lim_{x \\to x_0} f(x) \\ge 0$.
(Il segno $>$ stretto diventa $\\ge$ debole nel passaggio al limite).

---

## 💡 A cosa serve negli esercizi?

1.  **Per calcolare i domini:** Quando calcoli un limite e ottieni un numero positivo (es. 5), sai che "vicino" a quel punto la funzione è positiva. Questo ti permette di dire che operazioni come $\\sqrt{f(x)}$ o $\\ln(f(x))$ sono ben definite in quell'intorno senza dover risolvere l'intera disequazione.
2.  **Negli asintoti:** Se il limite è $l > 0$ e stai dividendo per uno zero positivo ($0^+$), il segno del risultato sarà sicuramente $+\\infty$ grazie alla permanenza del segno del numeratore.
`,
};

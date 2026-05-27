export const lezione = {
  meta: {
    slug: "teorema-unicita-limite",
    title: "Teorema di Unicità del Limite: Spiegazione e Dimostrazione",
    description:
      "Cosa dice il Teorema di Unicità del Limite? Enunciato semplice, dimostrazione guidata passo-passo e applicazioni pratiche per gli esercizi di Analisi 1.",
    category: "Analisi Matematica 1",
    has_pdf_resource: true,
  },
  content: `
# Teorema di Unicità del Limite: Enunciato e Dimostrazione Semplificata

**Cosa dice il Teorema di Unicità del Limite?**
Il teorema afferma un principio fondamentale: se una funzione $f(x)$ ammette un limite per $x$ che tende a un valore $x_0$, allora questo limite è **unico**. In altre parole, la funzione non può tendere contemporaneamente a due valori diversi (ad esempio $l$ e $m$) nello stesso punto. Se il limite esiste, è uno solo.

---

### 🏛️ L'Enunciato Formale
Prima di vedere la dimostrazione, scriviamo le cose con rigore matematico.

Sia $f(x)$ una funzione definita in un intorno di $x_0$ (eccetto al più $x_0$ stesso).
**Se** esiste il limite:
$$ \\lim_{x \\to x_0} f(x) = l $$
**Allora** $l$ è l'unico limite. Non può esistere un altro numero $m$ (con $m \\neq l$) tale che $\\lim_{x \\to x_0} f(x) = m$.

---

## La Dimostrazione (Spiegata Facile)

La dimostrazione standard si fa **per assurdo**.

**Passo 1: L'Ipotesi Assurda**
Supponiamo per assurdo che il limite **non** sia unico.
Immaginiamo che la funzione tenda contemporaneamente a due numeri diversi, $l$ e $m$, con $l \\neq m$.
$$ \\lim_{x \\to x_0} f(x) = l \\quad \\text{e} \\quad \\lim_{x \\to x_0} f(x) = m $$

**Passo 2: Scegliamo gli intorni "separati"**
Poiché $l$ e $m$ sono numeri diversi, possiamo prendere due intorni piccolissimi attorno a loro che non si toccano mai (non si sovrappongono).
Scegliamo un raggio $\\epsilon$ abbastanza piccolo (per la precisione $\\epsilon < \\frac{|l-m|}{2}$).
* Chiamiamo $V_l$ l'intorno di $l$.
* Chiamiamo $V_m$ l'intorno di $m$.
**Risultato:** $V_l \\cap V_m = \\emptyset$ (i due insiemi sono disgiunti).

**Passo 3: Applichiamo la definizione di limite**
* Poiché il limite è $l$, per definizione esiste un intorno $I_1$ di $x_0$ in cui tutti i valori di $f(x)$ cadono dentro $V_l$.
* Poiché il limite è (per assurdo) anche $m$, esiste un intorno $I_2$ di $x_0$ in cui tutti i valori di $f(x)$ cadono dentro $V_m$.

**Passo 4: La Contraddizione**
Ora prendiamo un intorno $I$ che è l'intersezione (la parte comune) tra $I_1$ e $I_2$.
Per ogni $x$ dentro questo intorno comune (con $x \\neq x_0$), la funzione $f(x)$ dovrebbe trovarsi:
1.  Dentro $V_l$ (per la prima definizione).
2.  **E contemporaneamente** dentro $V_m$ (per la seconda definizione).

Ma al Passo 2 abbiamo detto che $V_l$ e $V_m$ **non si toccano**! È impossibile essere in due luoghi separati nello stesso istante.
**Conclusione:** L'ipotesi iniziale è falsa. Il limite non può essere doppio. Il limite è unico. $\\square$

---

## 💡 A cosa serve davvero? (Trucco per gli Esercizi)

Se calcolando un limite trovi che:
$$ \\lim_{x \\to x_0^-} f(x) = l_1 \\quad \\text{e} \\quad \\lim_{x \\to x_0^+} f(x) = l_2 $$
e vedi che $l_1 \\neq l_2$, allora puoi affermare con certezza: **"Il limite per $x \\to x_0$ NON esiste"**.

Perché? Proprio per il Teorema di Unicità! Se esistesse, dovrebbe essere unico. Visto che ne hai trovati due diversi (destro e sinistro), il "limite globale" non può esistere.

**Esempio lampo:**
Per la funzione $f(x) = \\frac{|x|}{x}$ in $x=0$:
* A destra ($0^+$) fa $+1$.
* A sinistra ($0^-$) fa $-1$.
* Conclusione: Il limite a $0$ non esiste.
`,
};

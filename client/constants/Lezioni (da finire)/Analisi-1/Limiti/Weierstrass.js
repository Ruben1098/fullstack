export const lezione = {
  meta: {
    slug: "teorema-di-weierstrass",
    title: "Teorema di Weierstrass: Enunciato, Spiegazione e Controesempi",
    description:
      "Cosa dice il Teorema di Weierstrass? Spiegazione chiara su massimi e minimi assoluti, importanza delle ipotesi (intervallo chiuso e limitato) e guida pratica per gli esercizi.",
    category: "Analisi Matematica 1",
    has_pdf_resource: true,
  },
  content: `
# Teorema di Weierstrass: Enunciato, Spiegazione e Ipotesi Fondamentali

**Cosa dice il Teorema di Weierstrass?**
Il Teorema di Weierstrass garantisce l'esistenza degli estremi assoluti. In parole povere: se prendi una funzione continua e la "ingabbi" in un intervallo chiuso e limitato (compresi gli estremi), essa avrà sicuramente un punto in cui raggiunge il valore più alto (Massimo Assoluto) e un punto in cui tocca il valore più basso (Minimo Assoluto).

---

## Enunciato Formale

Sia $f(x)$ una funzione definita in un intervallo $[a, b]$.
Le ipotesi necessarie sono due:
1.  **Continuità:** $f(x)$ deve essere continua in tutto l'intervallo $[a, b]$.
2.  **Intervallo Chiuso e Limitato:** L'intervallo deve comprendere gli estremi $a$ e $b$ (parentesi quadre) e non deve andare all'infinito.

**Tesi:**
Allora esistono in $[a, b]$ almeno due punti, $x_m$ (punto di minimo) e $x_M$ (punto di massimo), tali che per ogni altra $x$ dell'intervallo vale:
$$ f(x_m) \\le f(x) \\le f(x_M) $$

In breve: **$f(x)$ ammette Massimo ($M$) e Minimo ($m$) assoluti.**

---

## ⚠️ Perché le ipotesi sono cruciali?

Per capire davvero Weierstrass, devi vedere cosa succede quando **non** funziona. Se cade anche solo una delle ipotesi, il teorema non garantisce più nulla.

Ecco i 3 casi di fallimento tipici:

**1. Intervallo NON Chiuso (Aperto)**
Prendiamo la funzione $f(x) = x$ nell'intervallo aperto $(0, 1)$.
La funzione si avvicina a 0 e a 1, ma non li tocca mai (perché 0 e 1 sono esclusi).
* C'è un minimo? No (puoi fare 0.0001, 0.00001... ma mai 0).
* C'è un massimo? No (0.9, 0.99... ma mai 1).
* **Risultato:** Niente max né min assoluti.

**2. Intervallo NON Limitato (Infinito)**
Prendiamo $f(x) = e^x$ nell'intervallo $[0, +\\infty)$.
* Minimo: Sì, in $x=0$ vale $1$.
* Massimo: No! La funzione cresce all'infinito.
* **Risultato:** Weierstrass fallisce perché l'intervallo non è limitato.

**3. Funzione NON Continua**
Immagina una funzione che sale fino a un punto, ma in quel punto c'è un "buco" e il valore è definito più in basso. Il punto che "dovrebbe" essere il massimo è vuoto.
* **Risultato:** Il massimo non viene mai raggiunto.

---

## 💡 Strategia Pratica: Come trovare Max e Min?

Weierstrass ti dice che *esistono*, ma non ti dice *dove sono*. Per trovarli negli esercizi, usa questo algoritmo:

Se la funzione è continua su $[a, b]$, i candidati a essere Max e Min assoluti si trovano solo in tre luoghi:
1.  **Agli estremi dell'intervallo:** Calcola sempre $f(a)$ e $f(b)$.
2.  **Nei punti stazionari:** Dove la derivata si annulla ($f'(x) = 0$).
3.  **Nei punti di non derivabilità:** Punti angolosi o cuspidi interni all'intervallo.

**Il Trucco:**
Raccogli tutti questi valori, confrontali tra loro.
* Il più grande è il Massimo Assoluto.
* Il più piccolo è il Minimo Assoluto.

Non serve fare lo studio del segno della derivata seconda! Basta confrontare le "altezze" ($y$).
`,
};

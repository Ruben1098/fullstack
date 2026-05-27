export const lezione = {
  meta: {
    slug: "teorema-valori-intermedi",
    title: "Teorema dei Valori Intermedi: Spiegazione Facile e Conseguenze",
    description:
      "Cosa dice il Teorema dei Valori Intermedi? Spiegazione intuitiva, legame con Weierstrass e Bolzano, ed esempi pratici su come trovare le soluzioni di un'equazione.",
    category: "Analisi Matematica 1",
    has_pdf_resource: true,
  },
  content: `
# Teorema dei Valori Intermedi: Spiegazione Facile e Conseguenze

**Cosa dice il Teorema dei Valori Intermedi?**
Il Teorema dei Valori Intermedi afferma che una funzione continua in un intervallo non può "saltare" i valori. Se la funzione passa da un valore minimo $m$ a un valore massimo $M$, allora deve assumere **tutti** i valori compresi tra $m$ e $M$ almeno una volta. Non esistono "buchi" verticali nel grafico.

---

### 🌡️ L'Intuizione (La Metafora della Temperatura)
Pensa alla temperatura di una stanza.
Se alle 8:00 ci sono 15°C e alle 9:00 ce ne sono 20°C, è certo che in un momento intermedio la temperatura è stata esattamente di 17.5°C, di 19°C e persino di 16.333...°C.
La temperatura sale con continuità: non può passare da 15 a 20 saltando il 18.
Questo teorema è la garanzia matematica che la funzione non si "teletrasporta".



---

## Prerequisito: Il Teorema di Weierstrass
Per capire appieno i Valori Intermedi, dobbiamo ricordare brevemente Weierstrass.
Se $f(x)$ è continua in un intervallo chiuso e limitato $[a, b]$, allora ammette sicuramente un **massimo assoluto** ($M$) e un **minimo assoluto** ($m$).

## L'Enunciato Formale
Sia $f(x)$ una funzione definita e continua nell'intervallo chiuso e limitato $[a, b]$.
Siano $m$ e $M$ rispettivamente il minimo e il massimo assoluto della funzione in tale intervallo.

**Tesi:**
La funzione assume **tutti** i valori compresi tra $m$ e $M$.
In termini matematici: per ogni valore $y_0$ tale che $m < y_0 < M$, esiste almeno un punto $x_0 \\in [a, b]$ tale che:
$$ f(x_0) = y_0 $$

**In sintesi estrema:**
L'immagine della funzione è l'intervallo chiuso $[m, M]$.

---

## Il legame con il Teorema degli Zeri
Il **Teorema degli Zeri** è in realtà solo un "caso particolare" di questo teorema.
* **Valori Intermedi:** Dice che la funzione assume *tutti* i valori tra $A$ e $B$.
* **Teorema degli Zeri:** Dice che se $A$ è negativo e $B$ è positivo, la funzione deve assumere il valore *zero* (che sta in mezzo).

---

## 💡 A cosa serve negli Esercizi?

Questo teorema serve principalmente per due scopi pratici all'esame:

1.  **Risolvere equazioni $f(x) = k$:**
    Se ti chiedono: *"L'equazione $e^x + x = 5$ ha soluzioni nell'intervallo $[0, 2]$?"*
    * Calcoli $f(0) = 1$ (Minimo locale)
    * Calcoli $f(2) = e^2 + 2 \\approx 9.38$ (Massimo locale)
    * Dato che 5 è compreso tra 1 e 9.38, la risposta è **SÌ**, esiste un punto in cui la funzione vale 5.

2.  **Determinare l'Immagine di una funzione:**
    Se sai che una funzione è continua su un intervallo, per trovare il suo Codominio (o Immagine) ti basta trovare il minimo e il massimo. Tutto quello che sta in mezzo fa parte dell'immagine.

---

## ⚠️ Errori comuni

**1. La Discontinuità rompe tutto**
Se la funzione ha un "buco" o un salto, il teorema non vale più.
Immagina un interruttore della luce: passa da OFF (0) a ON (1) istantaneamente. Non assume mai il valore 0.5. Questo perché la funzione "interruttore" non è continua.

**2. L'intervallo illimitato**
Se l'intervallo non è chiuso e limitato (ad esempio lavoriamo su tutto $\\mathbb{R}$), il teorema vale ancora nel senso che la funzione assume tutti i valori tra l'estremo inferiore e superiore, ma questi estremi potrebbero essere infiniti.
Esempio: $f(x) = x^3$ su $\\mathbb{R}$. Va da $-\\infty$ a $+\\infty$, quindi assume *qualsiasi* valore reale.
`,
};

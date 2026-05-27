export const lezione = {
  meta: {
    slug: "teoremi-calcolo-differenziale-rolle-lagrange",
    title: "I Teoremi Fondamentali: Rolle, Lagrange e Cauchy (Guida Pratica)",
    description:
      "Spiegazione chiara dei teoremi di Rolle, Lagrange (Valor Medio) e Cauchy. Tabelle riassuntive, interpretazione geometrica (l'autovelox) e guida alla verifica delle ipotesi negli esercizi.",
    category: "Analisi Matematica 1",
    has_pdf_resource: true,
  },
  content: `
# I Teoremi Fondamentali: Rolle, Lagrange e Cauchy (Guida Pratica)

**A cosa servono questi teoremi?**
Questi tre teoremi (Rolle, Lagrange, Cauchy) servono a collegare ciò che succede agli **estremi** di un intervallo (valori della funzione) con ciò che succede **dentro** l'intervallo (la derivata). In pratica, ci permettono di sapere che esiste un certo punto a pendenza zero o pendenza media senza doverlo calcolare esplicitamente.

---

## 1. Il Teorema di Rolle

**Enunciato:**
Sia $f(x)$ una funzione:
1.  **Continua** nell'intervallo chiuso $[a, b]$.
2.  **Derivabile** nell'intervallo aperto $(a, b)$.
3.  Tale che agli estremi vale la stessa cosa: **$f(a) = f(b)$**.

**Tesi:**
Esiste almeno un punto $c \\in (a, b)$ tale che:
$$ f'(c) = 0 $$
(Geometricamente: esiste una tangente orizzontale).



---

## 2. Il Teorema di Lagrange (Il Teorema dell'Autovelox)

**Enunciato:**
Sia $f(x)$ una funzione:
1.  **Continua** in $[a, b]$.
2.  **Derivabile** in $(a, b)$.

**Tesi:**
Esiste almeno un punto $c \\in (a, b)$ tale che:
$$ f'(c) = \\frac{f(b) - f(a)}{b - a} $$

Geometricamente: esiste un punto in cui la tangente è **parallela** alla retta che congiunge gli estremi A e B (la secante).



---

## 3. Il Teorema di Cauchy

**Enunciato:**
Siano $f(x)$ e $g(x)$ due funzioni continue in $[a, b]$ e derivabili in $(a, b)$, con $g'(x) \\neq 0$.
**Tesi:**
Esiste un punto $c$ tale che il rapporto tra le derivate è uguale al rapporto tra gli incrementi:
$$ \\frac{f'(c)}{g'(c)} = \\frac{f(b) - f(a)}{g(b) - g(a)} $$

---

## 💡 Trucchi: Verificare le Ipotesi

Negli esercizi ti chiedono: *"Verifica se si può applicare il Teorema di Rolle alla funzione..."*.
Ecco dove cadono tutti:

1.  **Attenzione alle parentesi:**
    La continuità serve sull'intervallo CHIUSO $[a, b]$ (compresi i bordi).
    La derivabilità basta sull'intervallo APERTO $(a, b)$ (esclusi i bordi).
    *Perché?* Perché ai bordi la derivata (che è un limite bilaterale) potrebbe non essere definita, ma il teorema vale lo stesso!

2.  **Il punto di non derivabilità (La Trappola):**
    Prendi $f(x) = |x|$ in $[-1, 1]$.
    * $f(-1) = 1$ e $f(1) = 1$. (Altezze uguali).
    * È continua? Sì.
    * Posso applicare Rolle? **NO!**
    Perché in mezzo c'è lo zero, che è un punto angoloso (non derivabile). Rolle fallisce: non c'è nessun punto con tangente orizzontale (la pendenza passa da -1 a 1 bruscamente).
    **Morale:** Controlla sempre che non ci siano cuspidi o punti angolosi *dentro* l'intervallo.

---

## Conseguenze Importanti
Dal teorema di Lagrange derivano due verità che diamo per scontate:
1.  **Criterio di Costanza:** Se una funzione ha derivata sempre nulla ($f'(x)=0$) in un intervallo, allora la funzione è **Costante** ($f(x)=k$).
2.  **Criterio di Monotonia:** Se la derivata è sempre positiva ($f'(x)>0$), allora la funzione è **Crescente**.
`,
};

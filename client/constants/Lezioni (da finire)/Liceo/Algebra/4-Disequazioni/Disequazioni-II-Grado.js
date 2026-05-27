export const lezione = {
  meta: {
    slug: "disequazioni-secondo-grado-metodo-parabola",
    title:
      "Disequazioni di Secondo Grado: Tabella, Metodo della Parabola ed Esercizi",
    description:
      "Impara a risolvere le disequazioni di secondo grado in 3 passi. Scopri il metodo 'DICE' (Discordi Interni Concordi Esterni) e scarica lo schema completo.",
    category: "Algebra",
    has_pdf_resource: true,
  },
  content: `

# Disequazioni di secondo grado: Metodo veloce e Grafico

**Cos'è una disequazione di secondo grado?**
È una disuguaglianza del tipo $ax^2 + bx + c > 0$ (oppure $<, \leq, \geq$). Risolverla non significa trovare un numero singolo, ma un **intervallo di valori**. Per trovare la soluzione si studiano le intersezioni della **parabola** associata con l'asse delle x.



:::BoxPDF{data='{"link": "/algebra/disequazioni-2grado.pdf", "title": "Scarica la Tabella dei Segni PDF"}'}
Il comportamento della parabola cambia se il Delta è positivo, nullo o negativo. Scarica la tabella completa con tutti i 6 casi grafici.
:::

## Il Metodo della Parabola

Il metodo migliore è **visualizzare il grafico**.
Ogni polinomio di secondo grado ($ax^2+bx+c$) corrisponde a una parabola.

Se ci assicuriamo che **$a > 0$**, la parabola "sorride" (ha la concavità verso l'alto).


[Image of sign of quadratic function parabola graph]


Immagina la parabola che taglia l'asse delle x nei due punti $x_1$ e $x_2$ (le soluzioni):
* I **Rami** vanno verso l'alto: qui il polinomio è **Positivo**.
* La **Pancia** scende verso il basso: qui il polinomio è **Negativo**.

:::Grid{data='{"cols": 2}'}

:::TableCard{data='{"title": "Richiesta > 0 (Sopra l asse)", "color": "green"}'}
**Dove la parabola sale sopra l'asse x?**
Guarda i due rami laterali che vanno verso l'infinito. Stanno all'esterno dei punti.
**Soluzione: Valori Esterni**
$$ x < x_1 \quad \lor \quad x > x_2 $$
:::

:::TableCard{data='{"title": "Richiesta < 0 (Sotto l asse)", "color": "orange"}'}
**Dove la parabola scende sotto l'asse x?**
Guarda la "pancia" della parabola. Sta in mezzo ai due punti.
**Soluzione: Valori Interni**
$$ x_1 < x < x_2 $$
:::

:::

---

## Esercizio Svolto Passo-Passo
Risolviamo questa disequazione classica usando il metodo logico.

:::BoxIntro{data='{}'}
$$ x^2 - 3x - 10 > 0 $$
:::

### Passo 1: Trova i punti di intersezione
Per prima cosa dobbiamo capire dove la nostra parabola taglia l'asse delle x. Scriviamo l'equazione associata e risolviamola.

:::BoxStep{data='{}'}
$$ x^2 - 3x - 10 = 0 $$
:::

Identifichiamo i coefficienti: $a=1, \quad b=-3, \quad c=-10$.
Calcoliamo il Delta:
$$ \Delta = (-3)^2 - 4(1)(-10) = 9 + 40 = 49 $$

Poiché $\Delta > 0$, troviamo due intersezioni distinte:
$$ x_{1,2} = \frac{3 \pm \sqrt{49}}{2} = \frac{3 \pm 7}{2} $$

$$ x_1 = -2 \quad \text{e} \quad x_2 = 5 $$

### Passo 2: Il disegno della parabola
Facciamo un rapido disegno del grafico per visualizzare la situazione.

1.  Poiché **$a = 1$ (positivo)**, la parabola "sorride" (concavità verso l'alto).
2.  Disegna la parabola che taglia l'asse orizzontale nei punti $-2$ e $5$.
3.  La disequazione originale chiedeva **Maggiore di zero ($>0$)**.



Guarda il disegno: **Dove sta la linea della parabola SOPRA l'asse delle x?**
Vedrai che la curva sale sopra l'asse nelle due "code" laterali (a sinistra di -2 e a destra di 5). La "pancia" invece sta sotto, quindi non ci interessa.

### Passo 3: Scrivi la soluzione
Leggendo il grafico, prendiamo gli intervalli corrispondenti ai rami che stanno in alto (i valori esterni).

:::BoxResult{data='{}'}
$$ x < -2 \quad \lor \quad x > 5 $$
:::

*(Si legge: x minore di -2 OPPURE x maggiore di 5)*

---

## Errori comuni

1.  **Ignorare il segno di $a$:**
    Se hai $-x^2 + 4 > 0$, **non iniziare mai così!** Cambia subito tutto in $x^2 - 4 < 0$ (ricorda di girare il verso della disuguaglianza). Solo con la $x^2$ positiva il metodo funziona sempre.

2.  **Scrivere male l'intervallo interno:**
    Se la soluzione è interna, si scrive $x_1 < x < x_2$.
    Mai scrivere $x > x_1 \land x < x_2$ (è brutto!) e soprattutto MAI scrivere cose impossibili come $5 < x < -2$ (un numero non può essere maggiore di 5 e minore di -2 contemporaneamente).

3.  **Dimenticare l'uguale:**
    Se il testo originale aveva $\geq$ (maggiore o uguale), ricordati di metterlo anche nel risultato: $x \leq -2 \lor x \geq 5$.

`,
};

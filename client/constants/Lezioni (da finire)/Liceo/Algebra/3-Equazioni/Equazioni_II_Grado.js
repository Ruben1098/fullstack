export const lezione = {
  meta: {
    slug: "equazioni-secondo-grado-formula-delta",
    title:
      "Equazioni di Secondo Grado: Formula, Delta e Trucchi per Risolverle",
    description:
      "Guida definitiva alle equazioni di secondo grado. Impara la definizione GEO, scarica il formulario PDF e scopri come evitare gli errori di calcolo più comuni col Delta.",
    category: "Algebra",
    has_pdf_resource: true,
  },
  content: `

# Equazioni di secondo grado: Formula completa, Delta e Soluzioni

**Cos'è un'equazione di secondo grado?**
È un'uguaglianza polinomiale nella forma normale $ax^2+bx+c=0$ (con $a \\neq 0$). Per risolverla si calcola prima il **discriminante ($\Delta$)** e poi si applica la formula risolutiva per trovare le incognite $x$.

:::BoxPDF{data='{"link": "/downloads/formulario_equazioni_II_grado.pdf", "title": "Scarica il Formulario PDF"}'}
Non rischiare di dimenticare le formule durante la verifica. Scarica il **Formulario Tascabile di Algebra** stampabile.
:::

## Tabella Riassuntiva
La prima cosa da calcolare è sempre il Delta ($\Delta = b^2 - 4ac$). Faspettarti.

:::Grid{data='{"cols": 3}'}

:::TableCard{data='{"title": "🟢 2 Soluzioni Reali", "color": "green"}'}
**$\Delta > 0$**
L'equazione ha due risultati distinti ($x_1 \neq x_2$).
:::

:::TableCard{data='{"title": "🟡 1 Soluzione Reale", "color": "orange"}'}
**$\Delta = 0$**
L'equazione ha due soluzioni coincidenti (una sola soluzione).
:::

:::TableCard{data='{"title": "🔴 Nessuna Soluzione", "color": "red"}'}
**$\Delta < 0$**
Nessuna soluzione reale. L'equazione non è risolvibile (ci sarebbe bisogno di usare i numeri complessi).
:::

:::

---

## La Formula Risolutiva

Una volta che hai messo l'equazione in "ordine" (tutto a sinistra dell'uguale, zero a destra), questa è l'unica formula che ti serve:

:::BoxTheory{data='{"title": "Formula per le equazioni di II grado"}'}
$$x_{1,2}=\frac{-b \pm \sqrt{\Delta}}{2a}$$

Dove il discriminante (il pezzo sotto radice) è:
$$\Delta = b^2 - 4ac$$
:::

### 💡 Un consiglio importante 
> Molti studenti sbagliano proprio all'inizio. Ricorda: $a$ è il numero davanti a $x^2$, $b$ è quello davanti alla $x$, e $c$ è il numero "solo" (senza $x$). Se la $x^2$ non ha numeri davanti, **$a$ vale 1, non 0!**

---

## Esercizio Guidato: Risolviamo un caso con $\Delta > 0$
Proviamo insieme a risolvere questa equazione. Non guardare solo il risultato, segui la logica per non sbagliare i segni (che è l'errore classico).

:::BoxIntro{data='{}'}
$$x^2 - 3x - 10 = 0$$
:::

### Passo 1: Identificazione dei coefficienti
Scriviamo tutti i coefficienti che appaiono nell'equazione.

:::BoxStep{data='{}'}
$$a = 1$$ (perché davanti a $x^2$ c'è un 1 invisibile)
$$b = -3$$ (prendi sempre anche il segno!)
$$c = -10$$
:::

### Passo 2: Calcolo del Delta (Attenzione ai segni!)
Calcoliamo $\Delta = b^2 - 4ac$.

:::BoxStep{data='{}'}
$$\Delta = (-3)^2 - 4 \cdot (1) \cdot (-10)$$
:::

:::BoxAlert{data='{}'}  
🛑 **Attenzione!**
Quando fai $-4 \cdot (-10)$, meno per meno fa **più**. Molti scrivono $-40$ e sbagliano tutto l'esercizio.
:::

Procediamo correttamente:
$$\Delta = 9 + 40 = 49$$

Poiché **$49 > 0$**, avremo due soluzioni distinte.

### Passo 3: La formula risolutiva
Applichiamo la formula $x_{1,2} = \frac{-b \pm \sqrt{\Delta}}{2a}$.
Nota bene: la formula chiede $-b$, cioè il valore di $b$ **cambiato di segno**. Dato che $b$ era $-3$, nella formula scriveremo $+3$.

:::BoxStep{data='{}'}
$$x_{1,2} = \frac{-(-3) \pm \sqrt{49}}{2 \cdot 1}$$
$$x_{1,2} = \frac{3 \pm 7}{2}$$
:::

### Passo 4: Sdoppiamo le strade
Adesso dividiamo il calcolo in due: una volta col **meno**, una volta col **più**.

:::BoxStep{data='{}'}
**Strada 1 ($x_1$):**
$$x_1 = \frac{3 - 7}{2} = \frac{-4}{2} = -2$$

**Strada 2 ($x_2$):**
$$x_2 = \frac{3 + 7}{2} = \frac{10}{2} = 5$$
:::

### Risultato Finale
:::BoxResult{data='{}'}
Le soluzioni dell'equazione sono:
$$x_1 = -2 \quad \text{e} \quad x_2 = 5$$
:::

---

## 3 Errori comuni da evitare
Dalla mia esperienza, ecco dove si perde la maggior parte dei punti:

1.  **Dimenticare il denominatore:** Spesso si scrive tutto bene sopra, ma ci si dimentica di dividere tutto per $2a$.
2.  **Il segno del termine $b$:** Nella formula c'è $-b$. Se $b$ è negativo, diventa positivo. Se $b$ è positivo, diventa negativo.
3.  **Il quadrato negativo:** Ricorda che $b^2$ è **sempre positivo**. Anche se $b = -3$, $(-3)^2$ fa $+9$, mai $-9$.

`,
};

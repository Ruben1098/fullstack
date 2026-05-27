export const lezione = {
  meta: {
    slug: "radice-quadrata-definizione-calcolo",
    title: "Radice Quadrata: Cos'è, Calcolo con Scomposizione ed Errori Comuni",
    description:
      "Guida facile alla radice quadrata. Scopri il significato geometrico, impara il metodo della scomposizione in fattori e scarica gli esercizi sui quadrati perfetti.",
    school: "",
    class: "",

    category: "Aritmetica",
    has_pdf_resource: true,
  },
  content: `

# Radice Quadrata: Definizione e Metodo di Calcolo

**Che cos'è la radice quadrata?**
La radice quadrata di un numero (detto *radicando*) è quel valore che, se moltiplicato per se stesso, restituisce il numero di partenza. È l'operazione inversa dell'elevamento alla seconda.
In termini geometrici: se conosci l'Area di un quadrato, la radice quadrata ti permette di trovare la lunghezza del suo **Lato**.


## I Nomi della Radice
Prima di calcolare, devi sapere come chiamare i "pezzi" dell'operazione.
Prendiamo l'esempio: $\sqrt{144} = 12$

:::Grid{data='{"cols": 3}'}

:::TableCard{data='{"title": "1. Il Simbolo"}'}
**$\sqrt{\quad}$**
Si chiama segno di radice. Se non c'è nessun numerino in alto a sinistra (indice), è sottinteso che sia **2**.
:::

:::TableCard{data='{"title": "2. Il Radicando"}'}
**$144$**
È il numero "sotto il tetto". Corrisponde all'area del quadrato.
:::

:::TableCard{data='{"title": "3. La Radice"}'}
**$12$**
È il risultato. Corrisponde al lato del quadrato ($12 \times 12 = 144$).
:::

:::

---

## Come calcolarla: Il Metodo dei Quadrati Perfetti
I calcoli più facili sono quelli con i "quadrati perfetti", cioè quei numeri che hanno come radice un numero intero (senza virgola).
Funziona tutto al contrario delle potenze:

* Se $5^2 = 25$ $\rightarrow$ allora $\sqrt{25} = 5$
* Se $9^2 = 81$ $\rightarrow$ allora $\sqrt{81} = 9$
* Se $11^2 = 121$ $\rightarrow$ allora $\sqrt{121} = 11$

---

## Metodo Pratico: Calcolo con la Scomposizione
Cosa fai se ti trovi davanti a un numero gigante come **3025**? Non puoi andare a tentativi.
Devi usare la **scomposizione in fattori primi**. È un metodo infallibile.



### Procedimento Passo-Passo
Risolviamo insieme $\sqrt{3025}$.

**Passo 1: Scomponi il numero**
Dividi il numero per i numeri primi ($2, 3, 5, 7, 11...$) finché non arrivi a 1.
$$\begin{array}{r|l}
3025 & 5 \\
605 & 5 \\
121 & 11 \\
11 & 11 \\
1 &
\end{array}$$

Scriviamo il risultato sotto forma di potenza:
$$3025 = 5^2 \cdot 11^2$$

**Passo 2: La regola del "Dimezzamento"**
Per portare i numeri fuori dalla radice, devi **dimezzare i loro esponenti** (dividerli per 2).
La radice "mangia" metà della potenza.

:::BoxStep{data='{}'}
$$\sqrt{3025} = \sqrt{5^2 \cdot 11^2}$$
Togliamo la radice e dimezziamo gli esponenti ($2 : 2 = 1$):
$$= 5^1 \cdot 11^1$$
$$= 5 \cdot 11 = 55$$
:::

Il risultato è **55**. Infatti, se provi a fare $55 \times 55$, otterrai proprio 3025.

---

## Radici Approssimate
Non tutti i numeri sono perfetti. Ad esempio, quanto fa $\sqrt{27}$?
Non esiste un intero che moltiplicato per se stesso dia 27.
Però sappiamo che:
* $5^2 = 25$ (Troppo piccolo)
* $6^2 = 36$ (Troppo grande)

Quindi la radice di 27 si trova **in mezzo tra 5 e 6** (circa $5,19...$).
In questo caso si dice che 5 è la radice approssimata per *difetto* e 6 quella per *eccesso*.

---

## Errori Comuni

1.  **Spezzare la somma (ERRORE GRAVE ❌)**
    $\sqrt{16 + 9}$ NON è uguale a $4 + 3$.
    * Sbagliato: $\sqrt{16} + \sqrt{9} = 7$
    * Giusto: Fai prima la somma dentro! $\sqrt{25} = 5$.
    Vedi? 5 è diverso da 7. **La radice è un "recinto": prima risolvi quello che c'è dentro.**

2.  **Confondere radice e metà**
    $\sqrt{100}$ fa **10**, non 50!
    Stai cercando il lato del quadrato, non stai dividendo per due.

3.  **La radice negativa**
    $\sqrt{-16}$ è impossibile (per ora). Nessun numero reale, moltiplicato per se stesso, può dare un risultato negativo (perché meno per meno fa più!).

`,
};

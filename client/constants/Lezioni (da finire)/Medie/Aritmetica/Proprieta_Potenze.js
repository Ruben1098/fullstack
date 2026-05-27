export const lezione = {
  meta: {
    slug: "proprieta-potenze-regole-esercizi",
    title: "Proprietà delle Potenze: Tabella, Regole ed Esercizi Svolti",
    description:
      "Le 5 proprietà delle potenze spiegate facili. Scarica la tabella PDF, scopri i trucchi per non sbagliare gli esponenti e segui gli esercizi passo-passo.",
    category: "Algebra",
    has_pdf_resource: true,
  },
  content: `

# Proprietà delle potenze: Le 5 Regole Fondamentali

**Cosa sono le proprietà delle potenze?**
Sono 5 regole matematiche che ti permettono di semplificare i calcoli trasformando operazioni difficili in semplici somme o sottrazioni degli esponenti. Si applicano solo quando hai la **stessa base** o lo **stesso esponente**. Se non c'è nessuna di queste condizioni, le proprietà non si usano!


## Tabella Completa delle Regole
Memorizza questo schema diviso in due casi. Prima di agire, chiediti sempre: "Hanno la base uguale o l'esponente uguale?".

:::Grid{data='{"cols": 2}'}

:::TableTitle{data='{"title": "CASO A: Stessa Base (Lavora sugli esponenti)"}'}
:::

:::TableCard{data='{"title": "1. Moltiplicazione"}'}
Base resta uguale, **SOMMA** gli esponenti.
$$ a^x \cdot a^y = a^{x+y} $$
:::

:::TableCard{data='{"title": "2. Divisione"}'}
Base resta uguale, **SOTTRAI** gli esponenti.
$$ a^x : a^y = a^{x-y} $$
:::

:::TableCard{data='{"title": "3. Potenza di Potenza"}'}
Base resta uguale, **MOLTIPLICA** gli esponenti.
$$ (a^x)^y = a^{x \cdot y} $$
:::

:::TableTitle{data='{"title": "CASO B: Stesso Esponente (Lavora sulle basi)"}'}
:::

:::TableCard{data='{"title": "4. Moltiplicazione"}'}
**MOLTIPLICA** le basi, esponente resta uguale.
$$ a^x \cdot b^x = (a \cdot b)^x $$
:::

:::TableCard{data='{"title": "5. Divisione"}'}
**DIVIDI** le basi, esponente resta uguale.
$$ a^x : b^x = (a : b)^x $$
:::

:::

---

## Casi particolari (0 e 1)
Questi non sono calcoli, sono definizioni.

1.  **Esponente Zero:** Qualsiasi numero (tranne lo 0) elevato alla 0 fa **1**. Sempre.
    $$ 158^0 = 1 \quad ; \quad (-5)^0 = 1 $$
2.  **Esponente Uno:** L'esponente 1 è "invisibile". Se un numero non ha esponente, è come se avesse un 1.
    $$ 5 = 5^1 $$

---

## ⚠️ L'Errore che fanno tutti (Attenzione!)
C'è una trappola classica dove cade il 50% degli studenti: confondere il **prodotto** con la **potenza di potenza**.



* Se vedi il **PER** ($\cdot$): Devi **SOMMARE** ($2^3 \cdot 2^2 = 2^{3+2} = 2^5$)
* Se vedi la **PARENTESI** e un altro esponente fuori: Devi **MOLTIPLICARE** ($(2^3)^2 = 2^{3 \cdot 2} = 2^6$)

Non mischiarli! Una parentesi cambia tutto il risultato.

---

## Esercizio Guidato: Risolviamo un'espressione
Proviamo a semplificare questa espressione insieme.
*Regola d'oro:* Non calcolare mai i numeroni (tipo $2^{10} = 1024$) finché non sei arrivato in fondo.

:::BoxIntro{data='{}'}
$$ \{[(2^3 \cdot 2^4)^2] : 2^{10}\} \cdot 2 $$
:::

### Passo 1: Dentro la tonda (Stessa Base)
Abbiamo una moltiplicazione tra basi uguali ($2$). La regola dice: somma gli esponenti ($3+4$).

:::BoxStep{data='{}'}
$$ \{[2^7]^2 : 2^{10}\} \cdot 2 $$
:::

### Passo 2: La Potenza di Potenza
Ora c'è una parentesi quadra con un esponente fuori. È il caso "moltiplicazione": $7 \cdot 2 = 14$.

:::BoxStep{data='{}'}
$$ \{2^{14} : 2^{10}\} \cdot 2 $$
:::

### Passo 3: La Divisione
Dentro la graffa abbiamo una divisione. La regola dice: sottrai gli esponenti ($14 - 10$).

:::BoxStep{data='{}'}
$$ 2^4 \cdot 2 $$
:::

### Passo 4: Il trucco dell'1 invisibile
Qui molti si bloccano. C'è un $2$ da solo. Ricorda il caso particolare: metti subito un $1$ come esponente per non sbagliare ($2^1$).
Ora hai un prodotto: somma $4 + 1$.

:::BoxStep{data='{}'}
$$ 2^5 $$
:::

### Risultato Finale
Solo ora, se l'esercizio lo richiede, calcoliamo il numero. $2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 = 32$.

:::BoxResult{data='{}'}
$$ 32 $$
:::

`,
};

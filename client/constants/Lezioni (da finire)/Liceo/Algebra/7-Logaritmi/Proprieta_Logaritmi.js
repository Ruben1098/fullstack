export const lezione = {
  meta: {
    slug: "proprieta-logaritmi-formule-esercizi",
    title: "Proprietà dei Logaritmi: Tabella Completa, Formule e Trucchi",
    description:
      "Guida definitiva alle proprietà dei logaritmi. Impara le 3 regole fondamentali, scarica il PDF con gli esercizi svolti ed evita gli errori comuni nelle verifiche.",
    category: "Algebra",
    has_pdf_resource: true,
  },
  content: `

# Proprietà dei Logaritmi: Tabella Completa, Formule e Trucchi

Le **proprietà dei logaritmi** sono regole algebriche fondamentali che permettono di semplificare i calcoli trasformando **prodotti in somme**, **divisioni in differenze** e **potenze in moltiplicazioni**. Sono strumenti indispensabili per risolvere equazioni logaritmiche, esponenziali e per manipolare funzioni complesse senza l'uso della calcolatrice.


### 📌 La Tabella delle 3 Proprietà Fondamentali
Memorizzalo bene: queste uguaglianze funzionano in **entrambi i sensi**. Puoi usarle per "spezzare" un logaritmo complesso o per "compattare" tanti logaritmi in uno solo.

:::Grid{data='{"cols": 3}'}

:::TableTitle{data='{"title": "Le Regole d'Oro"}'}
:::

:::TableCard{data='{"title": "1. Prodotto → Somma"}'}
$$ \\log_a(x \\cdot y) = \\log_a(x) + \\log_a(y) $$
*Il logaritmo di un prodotto è la somma dei logaritmi.*
:::

:::TableCard{data='{"title": "2. Quoziente → Differenza"}'}
$$ \\log_a\\left(\\frac{x}{y}\\right) = \\log_a(x) - \\log_a(y) $$
*Il logaritmo di una divisione è la differenza dei logaritmi.*
:::

:::TableCard{data='{"title": "3. Potenza (L'Ascensore)"}'}
$$ \\log_a(x^k) = k \\cdot \\log_a(x) $$
*L'esponente dell'argomento "scende" davanti al logaritmo.*
:::

:::



### Che cos'è un Logaritmo? 
Prima di applicare le regole, assicurati di avere chiara la definizione. Il logaritmo risponde alla domanda: *"A quale esponente devo elevare la base $a$ per ottenere $b$?"*.

:::BoxTheory{data='{"title": "Definizione ed Esistenza"}'}
$$ x = \\log_a(b) \\iff a^x = b $$
**Condizioni di esistenza:**
Perché il logaritmo esista, devono sempre valere queste regole:
1. Argomento $> 0$ ($b > 0$)
2. Base $> 0$ e diversa da 1 ($a > 0, a \\neq 1$)
:::

---

### 🧠 Esercizio Svolto: Come ragionare
Vediamo come usare le proprietà per risolvere un calcolo che sembra impossibile a mente.

**Traccia:** Calcola senza calcolatrice:
:::BoxIntro{data='{}'}
$$ \\log_3(54) - \\log_3(2) $$
:::

**Analisi del problema:**
Se provi a calcolare $\\log_3(54)$, ti blocchi: $3$ elevato a quale numero fa $54$? Non è un numero intero immediato. Lo stesso vale per $\\log_3(2)$.
Tuttavia, notiamo due indizi fondamentali:
1. Le basi sono **identiche** (base 3).
2. C'è un segno **meno** tra i due logaritmi.

**Soluzione Passo-Passo:**
Usiamo la **Proprietà del Quoziente** (la numero 2 della tabella) al contrario, per "compattare" l'espressione.

:::BoxStep{data='{}'}
$$ \\log_3(54) - \\log_3(2) = \\log_3\\left(\\frac{54}{2}\\right) $$
:::

Svolgiamo la divisione dentro la parentesi. Guarda come si semplifica tutto:

:::BoxStep{data='{}'}
$$ \\log_3(27) $$
:::

Ora il calcolo è elementare. Chiediti: *"Qual è l'esponente da dare a 3 per ottenere 27?"*
Poiché $3 \\cdot 3 \\cdot 3 = 27$ (ovvero $3^3$), la risposta è 3.

:::BoxResult{data='{}'}
$$ 3 $$
:::

---

### ⚠️ Errori Comuni
L'esperienza insegna che il 90% degli errori nelle verifiche nasce qui. Fai attenzione a queste trappole.

#### 1. La "Finta" Proprietà
$$ \\frac{\\log(x)}{\\log(y)} \\neq \\log(x - y) $$
Non confondere il **rapporto tra logaritmi** (che si risolve col cambio base) con il **logaritmo di un rapporto**!
* $\\log(\\frac{x}{y}) = \\log x - \\log y$ ✅ (GIUSTO)
* $\\frac{\\log x}{\\log y} =$ ...rimane così (o usi il cambio base) ❌ (NON SI TOCCA)

#### 2. Il Cambio di Base
A volte hai logaritmi con basi diverse (es. $\\log_2$ e $\\log_4$). Per applicare le proprietà devi portarli alla stessa base usando questa formula:
$$ \\log_a(x) = \\frac{\\log_{nuova}(x)}{\\log_{nuova}(vecchia)} $$

:::BoxPDF{data='{"link": "/algebra/esercizi-logaritmi.pdf", "title": "Esercizi Extra"}'}
Vuoi padroneggiare anche il cambio base e le equazioni difficili? Scarica la raccolta di **Esercizi Svolti Avanzati**.
:::

`,
};

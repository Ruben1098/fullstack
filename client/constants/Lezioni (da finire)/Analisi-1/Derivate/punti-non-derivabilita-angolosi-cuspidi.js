export const lezione = {
  meta: {
    slug: "punti-non-derivabilita-classificazione",
    title:
      "Punti di Non Derivabilità: Angolosi, Cuspidi e Flessi a Tangente Verticale",
    description:
      "Guida completa alla classificazione dei punti di non derivabilità. Tabella riassuntiva per distinguere punti angolosi, cuspidi e flessi verticali tramite i limiti della derivata.",
    category: "Analisi Matematica 1",
    has_pdf_resource: true,
  },
  content: `
# Punti di Non Derivabilità: Classificazione (Angolosi, Cuspidi, Flessi)

**Cosa sono i punti di non derivabilità?**
Un punto di non derivabilità è un punto del grafico in cui la funzione è **continua** (non ci sono buchi), ma la linea non è "liscia". In quel punto non esiste una tangente unica definita, oppure la tangente diventa verticale. Matematicamente, succede quando il limite del rapporto incrementale (la derivata) destro e sinistro sono diversi o infiniti.

---

### ⚡ Punti di non derivabilità: 3 casi
Hai calcolato i limiti della derivata $f'(x)$ a destra ($l_+$) e a sinistra ($l_-$) del punto $x_0$. Ecco come chiamare il punto in base al risultato:

| Tipo di Punto | Limite Sinistro ($l_-$) | Limite Destro ($l_+$) | Segno |
| :--- | :--- | :--- | :--- | :--- |
| **Punto Angoloso** | Finito | Finito (diverso) | $l_- \\neq l_+$ |
| **Cuspide** | Infinito | Infinito | Segni **Opposti** ($\\pm \\infty$ e $\\mp \\infty$) |
| **Flesso Verticale** | Infinito | Infinito | Segni **Uguali** ($+\\infty$ e $+\\infty$) | 



---

## Prerequisito Fondamentale: La Continuità
Prima di classificare la non derivabilità, devi verificare una cosa: **La funzione è continua in quel punto?**
* Se la funzione è discontinua (c'è un salto o un buco), non ha senso parlare di cuspidi o punti angolosi. È semplicemente discontinua.
* Parliamo di punti di non derivabilità solo se il grafico è unito.

---

## 1. Il Punto Angoloso (Lo "Spigolo")

Matematicamente, arrivi nel punto $x_0$ con una certa pendenza da sinistra e riparti con una pendenza diversa a destra. Non c'è una curva dolce, c'è un cambio di direzione improvviso.

**Definizione:**
Esistono entrambi i limiti della derivata (destro e sinistro) e sono **finiti**, ma **diversi tra loro**.
$$ f'_-(x_0) \\neq f'_+(x_0) $$

*Esempio Classico:* $f(x) = |x|$ in $x=0$.
* Derivata sinistra: $-1$.
* Derivata destra: $+1$.
* È un punto angoloso.

---

## 2. La Cuspide (La "Punta")

Questo è il caso più estremo. La funzione si impenna verticalmente da entrambi i lati, formando una punta rivolta verso l'alto o verso il basso. La tangente nel punto è verticale ($x=x_0$).

**Definizione:**
I limiti della derivata sono entrambi **infiniti**, ma di **segno opposto**.
* Uno va a $+\\infty$ e l'altro a $-\\infty$.

*Esempio Classico:* $f(x) = \\sqrt{|x|}$ in $x=0$.

---

## 3. Flesso a Tangente Verticale

Qui la funzione non crea punte o spigoli, è "liscia", ma per un istante diventa perfettamente verticale.

**Definizione:**
I limiti della derivata sono entrambi **infiniti** e hanno lo **stesso segno**.
* Entrambi $+\\infty$ (Flesso ascendente).
* Oppure entrambi $-\\infty$ (Flesso discendente).

*Esempio Classico:* $f(x) = \\sqrt[3]{x}$ in $x=0$.

---

## 💡 Algoritmo per gli Esercizi (Cosa fare al compito)

Data una funzione $f(x)$ ti chiedono di classificare i punti di non derivabilità. Segui questi step:

1.  **Trova i potenziali punti di non derivabilità:**
    Di solito sono i punti che annullano un valore assoluto, o che annullano una radice, o i punti di raccordo nelle funzioni a tratti.
2.  **Verifica la continuità:**
    Controlla che in quel punto $x_0$ la funzione esista e sia continua. (Se non lo è $\\to$ Stop).
3.  **Calcola la Derivata Generica:**
    Fai la derivata $f'(x)$ per $x \\neq x_0$.
4.  **Fai i Limiti della Derivata:**
    Calcola $\\lim_{x \\to x_0^-} f'(x)$ e $\\lim_{x \\to x_0^+} f'(x)$.
5.  **Confronta con la Tabella:**
    Guarda i risultati (finiti diversi? infiniti opposti? infiniti uguali?) e assegna il nome.

---

## ⚠️ Attenzione all'Errore "Seminullo"

A volte capita che uno dei due limiti sia finito (es. 3) e l'altro sia infinito ($\\infty$).
Come si chiama?
Rientra genericamente nella categoria dei **Punti Angolosi** (perché le tangenti destra e sinistra formano un angolo, anche se una delle due è verticale).
`,
};

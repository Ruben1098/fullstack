export const lezione = {
  meta: {
    slug: "continuita-discontinuita-funzioni",
    title: "Continuità e Discontinuità delle Funzioni: Guida Completa",
    description:
      "Spiegazione chiara su continuità, i 3 tipi di discontinuità (salto, seconda e terza specie) e come risolvere gli esercizi. Include tabella riassuntiva e trucchi per l'esame.",
    category: "Analisi Matematica 1",
    has_pdf_resource: true,
  },
  content: `
# Continuità e Discontinuità delle Funzioni: Guida Completa e Schema Pratico

**Che cos'è una funzione continua?**
In termini semplici, una funzione è continua in un punto $x_0$ se il suo grafico può essere disegnato senza mai staccare la penna dal foglio in quel punto. In linguaggio matematico rigoroso, una funzione $f(x)$ è continua in $x_0$ se il limite destro e il limite sinistro coincidono col valore della funzione nel punto:
$$ \\lim_{x \\to x_0} f(x) = f(x_0) $$

### ⚡ Schema Rapido: I 3 Tipi di Discontinuità
Ecco subito la tabella riassuntiva che ti serve per classificare i punti "problematici".

| Tipo di Discontinuità | Condizione Matematica | Esempio Tipico |
| :--- | :--- | :--- | :--- |
| **Prima Specie** (Salto) | Limiti destro e sinistro esistono e sono finiti ($l_1, l_2$), ma **diversi tra loro** ($l_1 \\neq l_2$). | Funzione Segno ($sgn(x)$) |
| **Seconda Specie** (Essenziale) | Almeno uno dei due limiti è **infinito** ($\\infty$) oppure **non esiste**. | Asintoto verticale ($1/x$) |
| **Terza Specie** (Eliminabile)| Il limite esiste finito ($l$), ma è **diverso** da $f(x_0)$ (o $f(x_0)$ non esiste). | $\\frac{\\sin(x)}{x}$ in $0$ |

---

## Come capire se una funzione è continua (La Regola dei 3 Step)

Per verificare la continuità in un punto $x_0$, devono essere soddisfatte **tutte e tre** queste condizioni:

1.  **La funzione esiste:** Il punto $x_0$ fa parte del dominio? Esiste $f(x_0)$?
2.  **Il limite esiste:** Calcolando il limite per $x \\to x_0$, ottieni un numero finito? (Ovvero: limite destro e sinistro sono uguali?)
3.  **Coincidenza:** Il risultato del limite è identico al valore della funzione $f(x_0)$?

Se anche una sola di queste risposte è "NO", la funzione è **discontinua** in quel punto.

### Le Funzioni Elementari: I tuoi "amici fidati"

Una buona notizia: la maggior parte delle funzioni che incontri negli esercizi base sono **continue in tutto il loro dominio naturale**.
Non devi verificare la continuità punto per punto per:
* Polinomi (es. $x^2 + 3x$)
* Funzioni goniometriche ($\\sin x, \\cos x$)
* Esponenziali e Logaritmi ($e^x, \\ln x$)
* Radici ($\\sqrt{x}$)

**Esempio pratico:**
Se hai $f(x) = \\sin(x) + x^2$, sai già che è continua ovunque perché somma di funzioni continue. I problemi sorgono solo dove il dominio si "spezza" (es. denominatori che si annullano, argomenti di logaritmi negativi o funzioni definite a tratti).

---

## Analisi Approfondita: I 3 Tipi di Discontinuità

Vediamoli nel dettaglio con un approccio pratico i tre tipi di discontinuità:

### 1. Discontinuità di Prima Specie (Il Salto)
Immagina di camminare su un sentiero e trovarti improvvisamente davanti a un gradino alto. Non puoi proseguire fluidamente, devi saltare.
Matematicamente accade quando il limite destro e il limite sinistro sono entrambi numeri finiti, ma **diversi**.

$$ \\lim_{x \\to x_0^-} f(x) = l_1 \\quad \\text{e} \\quad \\lim_{x \\to x_0^+} f(x) = l_2 \\quad \\text{con } l_1 \\neq l_2 $$

La differenza $|l_1 - l_2|$ si chiama **salto**.

### 2. Discontinuità di Seconda Specie (L'Infinito)
Questa è la discontinuità più "grave". Si verifica quando la funzione va fuori controllo. Basta che **uno solo** dei due limiti (destro o sinistro) sia infinito ($\\infty$) oppure non esista affatto.

**Esempio classico:**
La funzione $f(x) = \\frac{1}{x}$ nel punto $x=0$.
$$ \\lim_{x \\to 0^+} \\frac{1}{x} = +\\infty $$
Dato che il limite è infinito, abbiamo una discontinuità di seconda specie (corrisponde visivamente a un Asintoto Verticale).

### 3. Discontinuità di Terza Specie (Eliminabile)
Come se fosse sentiero che arriva allo stesso punto da destra e sinistra, ma c'è un buco aperto o il punto è stato spostato altrove.

Succede quando:
1.  Esiste il limite finito $\\lim_{x \\to x_0} f(x) = l$.
2.  Ma $f(x_0)$ non esiste (buco) oppure $f(x_0) \\neq l$ (punto spostato).

**Perché si chiama "Eliminabile"?**
Perché potremmo "tappare il buco" ridefinendo la funzione solo in quel punto, rendendola continua.

---

## 💡 Trucchi ed Errori Comuni all'Esame

**L'errore del Dominio**
Molti studenti cercano discontinuità ovunque. Ricorda: ha senso parlare di classificazione dei punti di discontinuità principalmente per i **punti di accumulazione** del dominio che non appartengono al dominio stesso, o per i punti di raccordo nelle funzioni a tratti.

**Il trucco della Funzione a Tratti**
Se hai un esercizio con una funzione definita a tratti, tipo:
$$ f(x) = \\begin{cases} 2x+1 & \\text{se } x \\le 1 \\\\ x^2+k & \\text{se } x > 1 \\end{cases} $$
Il punto critico è $x=1$.
Per studiare la continuità, calcola i limiti:
* Limite sinistro ($x \\to 1^-$): usa $2x+1 \\rightarrow 3$
* Limite destro ($x \\to 1^+$): usa $x^2+k \\rightarrow 1+k$
Per essere continua, imponi $3 = 1+k \\Rightarrow k=2$. Se $k \\neq 2$, avrai un **salto** (Prima Specie).
`,
};

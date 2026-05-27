export const lezione = {
  meta: {
    slug: "limite-funzioni-monotone",
    title: "Limite di Funzioni Monotone: Teorema e Spiegazione Semplice",
    description:
      "Le funzioni monotone hanno sempre un limite? Sì! Scopri cosa dice il teorema, la differenza tra caso limitato e illimitato e perché è fondamentale per l'analisi.",
    category: "Analisi Matematica 1",
    has_pdf_resource: true,
  },
  content: `
# Limite di Funzioni Monotone: Teorema e Spiegazione Semplice

**Cosa dice il teorema sul limite delle funzioni monotone?**
Il teorema afferma una verità molto potente: se una funzione è **monotona** (cioè cresce sempre o decresce sempre) in un intervallo, allora **ammette sempre un limite** agli estremi di quell'intervallo.
In pratica: una funzione monotona è "regolare", non può oscillare impazzita (come fa il seno o il coseno). O si stabilizza su un valore (asintoto) o va all'infinito. Il limite *non esiste* è un'opzione che qui non contempliamo.

---

### 🚀 Schema Rapido: Cosa succede al limite?
Ecco una tabella riassuntiva per capire subito il risultato.
Supponiamo che la funzione sia **Crescente**:

| Comportamento della Funzione | Risultato del Limite | Esempio Visivo |
| :--- | :--- | :--- |
| **È limitata superiormente** (Ha un "tetto") | Il limite è un **numero finito** $l$. (Coincide con l'estremo superiore). |
| **È illimitata superiormente** (Nessun tetto) | Il limite è **$+\\infty$**. |

*(Per le funzioni decrescenti vale il contrario: se limitata inferiormente il limite è finito, altrimenti $-\\infty$).*

---

## Enunciato Formale 

Sia $f(x)$ una funzione definita in un intervallo $(a, b)$ e sia **monotona crescente**.

1.  **Caso Limitato:**
    Se $f(x)$ è limitata superiormente, allora il limite per $x \\to b^-$ esiste ed è finito, e coincide con l'estremo superiore ($\\sup$) della funzione:
    $$ \\lim_{x \\to b^-} f(x) = \\sup \\{f(x) : x \\in (a, b)\\} $$

2.  **Caso Illimitato:**
    Se $f(x)$ non è limitata superiormente, allora il limite è infinito:
    $$ \\lim_{x \\to b^-} f(x) = +\\infty $$

*Nota:* Teoremi analoghi valgono per il limite sinistro ($x \\to a^+$) che coinciderà con l'estremo inferiore ($\\inf$), e per le funzioni decrescenti (con i segni invertiti).

---

## ⚠️ Trappole ed Errori Comuni

**1. Confondere Monotonia con Continuità**
Attenzione: il teorema dice che il limite *esiste*, non che la funzione è *continua* in tutto l'intervallo.
Una funzione monotona può avere dei "salti" (discontinuità di prima specie), ma non può avere asintoti verticali nel mezzo o oscillazioni.
I limiti destro e sinistro esisteranno sempre finiti, ma potrebbero essere diversi tra loro (il salto).

**2. "Limitata" non vuol dire che il limite è il massimo**
Se la funzione è crescente e limitata superiormente da 10, non è detto che il limite sia 10. Potrebbe essere 5, o 8.
Il teorema dice che il limite è il **Supremo** (il "tetto" più basso possibile che schiaccia la funzione).
*Esempio:* $f(x) = - \\frac{1}{x}$ (per $x>0$) è limitata da 100, ma il suo limite (supremo) è 0.
`,
};

export const lezione = {
  meta: {
    slug: "derivate-successive-seconda-n-esima",
    title: "Derivate Successive: Cosa sono, Calcolo e Significato Fisico",
    description:
      "Cosa sono la derivata seconda, terza e n-esima? Spiegazione chiara della notazione, del significato fisico (accelerazione) e geometrico (concavità), con esempi svolti.",
    category: "Analisi Matematica 1",
    has_pdf_resource: true,
  },
  content: `
# Derivate Successive: Calcolo, Notazione e Significato Fisico

**Cosa sono le Derivate Successive?**
Le derivate successive non sono altro che il risultato di derivare una funzione più volte di seguito.
Se derivi $f(x)$, ottieni la **derivata prima** $f'(x)$.
Se derivi il risultato ottenuto, ottieni la **derivata seconda** $f''(x)$, e così via.
È un processo "a cascata": il risultato di un passaggio diventa il punto di partenza di quello successivo.

---

### 📝 Come si scrivono? 
Attenzione perché dopo la terza derivata, i simboli cambiano per non riempire il foglio di virgolette.

| Ordine | Notazione comune | Notazione fisica | Significato |
| :--- | :--- | :--- | :--- |
| **Prima** | $f'(x)$ o $y'$ | $\\frac{dy}{dx}$ | Velocità / Pendenza |
| **Seconda** | $f''(x)$ o $y''$ | $\\frac{d^2y}{dx^2}$ | Accelerazione / Concavità |
| **Terza** | $f'''(x)$ o $y'''$ | $\\frac{d^3y}{dx^3}$ | "Strappo" (Jerk) |
| **Quarta** | $f^{(4)}(x)$| $\\frac{d^4 y}{dx^4}$ | Variazione di quarto ordine |
| **n-esima** | $y^{(n)}$ | $\\frac{d^ny}{dx^n}$ | Variazione di ordine n |

⚠️ **Trappola della Notazione:**
Quando vedi un numero tra parentesi tonde all'apice, es. $f^{(4)}(x)$, significa **Derivata Quarta**.
Se vedi il numero senza parentesi, es. $f^4(x)$ o $[f(x)]^4$, significa **Potenza Quarta** (la funzione elevata alla 4). Non confonderli!



---

## A cosa servono? (Fisica e Geometria)

Perché dovremmo voler derivare due o tre volte?

1.  **In Fisica (Il Movimento):**
    * $f(t)$ = Posizione dell'auto (dove sei).
    * $f'(t)$ = **Velocità** (quanto vai veloce).
    * $f''(t)$ = **Accelerazione** (quanto stai premendo il gas).
    * $f'''(t)$ = **Strappo** (il colpo che senti se freni di botto).

2.  **In Geometria (Il Grafico):**
    * $f'(x)$ ti dice se la funzione sale o scende (crescenza).
    * $f''(x)$ ti dice se la funzione "sorride" (concava verso l'alto $\\cup$) o è "triste" (concava verso il basso $\\cap$).

---

## comportamenti particolari

Quando inizi a derivare ripetutamente, le funzioni si comportano in 3 modi diversi. Saperlo ti aiuta a prevedere il risultato.

### 1. Polinomi
I polinomi perdono un grado a ogni derivata. Alla fine, si azzerano.
Esempio: $f(x) = x^3$
* $f'(x) = 3x^2$
* $f''(x) = 6x$
* $f'''(x) = 6$ (Costante)
* $f^{(4)}(x) = 0$ 
* $f^{(5)}(x) = 0$ 

2. Esponenziali
La funzione si "autorigenera" a ogni derivata, cambiando solo per una costante moltiplicativa.
Se $f(x) = e^{kx}$:$f'(x) = k \cdot e^{kx}$$f''(x) = k^2 \cdot e^{kx}$
In sintesi (formula generale):$$f^{(n)}(x) = k^n \cdot f(x)$$

### 3. Seno e Coseno
Si ripetono in un loop infinito ogni 4 passaggi.
Esempio: $f(x) = \\sin x$
1.  $f' = \\cos x$
2.  $f'' = -\\sin x$
3.  $f''' = -\\cos x$
4.  $f^{(4)} = \\sin x$ (Tornati all'inizio)

---

## Esempio Svolto

Calcoliamo la derivata seconda di:
$$ f(x) = x \\cdot \\ln(x) $$

**Passo 1: Derivata Prima ($f'$ con regola del prodotto)**
$$ f'(x) = 1 \\cdot \\ln(x) + x \\cdot \\frac{1}{x} $$
$$ f'(x) = \\ln(x) + 1 $$

**Passo 2: Derivata Seconda ($f''$)**
Ora prendiamo il risultato $\\ln(x) + 1$ e deriviamo lui.
$$ f''(x) = D[\\ln(x)] + D[1] $$
$$ f''(x) = \\frac{1}{x} + 0 = \\frac{1}{x} $$

Finito. La derivata seconda è $1/x$.
`,
};

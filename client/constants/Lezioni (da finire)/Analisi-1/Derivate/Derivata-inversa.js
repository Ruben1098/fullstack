export const lezione = {
  meta: {
    slug: "teorema-derivata-funzione-inversa",
    title: "Derivata della Funzione Inversa: Teorema e Esercizi Svolti",
    description:
      "Come calcolare la derivata della funzione inversa senza invertire la funzione? Spiegazione del teorema, formula del reciproco e metodo passo-passo per gli esercizi.",
    category: "Analisi Matematica 1",
    has_pdf_resource: true,
  },
  content: `
# Derivata della Funzione Inversa: Teorema e Metodo Pratico

**Come si calcola la derivata della funzione inversa?**
Il Teorema della Funzione Inversa afferma che la derivata dell'inversa è il **reciproco** della derivata della funzione originale.
Se la funzione originale $f(x)$ ha una pendenza $m$, la sua funzione inversa $f^{-1}(y)$ avrà pendenza $\\frac{1}{m}$ nel punto corrispondente.
Questo ti permette di calcolare la derivata dell'inversa **senza dover trovare la formula dell'inversa**!

---

### 🔄 L'Intuizione Geometrica
Le funzioni inverse sono simmetriche rispetto alla bisettrice $y=x$.
Se la funzione originale è molto ripida (esempio 10), la sua immagine riflessa sarà molto piatta (quindi $1/10$).
* $f'(x)$ è la pendenza della tangente alla curva originale.
* $(f^{-1})'(y)$ è la pendenza della tangente alla curva riflessa.



---

## La Formula Fondamentale

Sia $y = f(x)$ una funzione invertibile e derivabile, con $f'(x) \\neq 0$.
La derivata della funzione inversa (che chiamiamo $f^{-1}$) nel punto $y_0$ è:

$$ (f^{-1})'(y_0) = \\frac{1}{f'(x_0)} $$

**Attenzione ai ruoli:**
* $y_0$ è il punto dove vuoi calcolare la derivata dell'inversa.
* $x_0$ è il punto di partenza tale che $f(x_0) = y_0$.

---

## 🛠️ Algoritmo per gli Esercizi

Il problema tipico dell'esame è: *"Data $f(x)$, calcola la derivata della sua inversa nel punto $y=k$, senza trovare l'inversa."*
Molti studenti sbagliano perché inseriscono la $k$ nella formula sbagliata. Segui questo schema per non sbagliare mai.

**Esercizio Esempio:**
Data $f(x) = x^3 + x + 2$, calcolare $(f^{-1})'(4)$.
*(Nota: Invertire $x^3+x+2=y$ è difficilissimo, quindi il teorema è obbligatorio).*

**Step 1: Trova la "x" originale (Il Detective)**
Sappiamo che $y_0 = 4$. Dobbiamo trovare la $x_0$ che ha generato quel 4.
Risolvi (spesso a occhio): $x^3 + x + 2 = 4$.
Si vede subito che $x_0 = 1$ (infatti $1+1+2=4$).

**Step 2: Calcola la derivata originale**
Fai la derivata semplice di $f(x)$.
$$ f'(x) = 3x^2 + 1 $$
Valutala nel punto $x_0$ (cioè 1):
$$ f'(1) = 3(1)^2 + 1 = 4 $$

**Step 3: Fai il Reciproco**
Applica la formula:
$$ (f^{-1})'(4) = \\frac{1}{f'(1)} = \\frac{1}{4} $$

**Risultato:** La derivata dell'inversa in 4 vale $0.25$.

---

## Ipotesi e Condizioni (Per l'Orale)
Affinché il teorema valga, devono essere rispettate queste condizioni:
1.  **Continuità e Invertibilità:** La funzione $f(x)$ deve essere continua e strettamente monotona (sempre crescente o sempre decrescente) in un intervallo.
2.  **Derivabilità:** $f(x)$ deve essere derivabile.
3.  **Non Stazionarietà:** La derivata non deve mai annullarsi ($f'(x) \\neq 0$).
    * *Perché?* Perché se $f'(x)=0$ (tangente orizzontale), l'inversa avrebbe una tangente verticale, e la sua derivata sarebbe $1/0 = \\infty$ (non derivabile).

---

## ⚠️ L'Errore Numero 1: La Confusione $x \\leftrightarrow y$

Ti chiedono la derivata dell'inversa in $y=4$.
L'errore comune è calcolare $1/f'(4)$. **NO!**
Non devi mettere 4 nella derivata. Devi mettere la $x$ che corrisponde al 4 (nell'esempio sopra, era 1).

**Ricorda:**
* La funzione originale si prende $x$ e restituisce $y$.
* La funzione inversa si prende $y$ e restituisce $x$.
* Nella formula $\\frac{1}{f'(x)}$, al denominatore devi mettere la **x**.
`,
};

export const lezione = {
  meta: {
    slug: "derivate-fondamentali-tabella-formule",
    title: "Derivate Fondamentali: Tabella Completa, Formule e PDF",
    description:
      "Cerchi le derivate fondamentali? Ecco la tabella definitiva delle funzioni elementari, regole di calcolo ed esempi spiegati in modo semplice. Scarica il PDF.",
    category: "Analisi Matematica 1",
    has_pdf_resource: true,
  },
  content: `
# Derivate delle Funzioni Elementari

Le **derivate fondamentali** sono le formule base che devi conoscere a memoria per poter affrontare qualsiasi esercizio di calcolo differenziale.
Non serve ricalcolare ogni volta il limite del rapporto incrementale ogni volta: queste sono le formule sono pronte all'uso da imparare.

---

## ⚡ Tabella delle Derivate Fondamentali

Ecco la lista completa delle derivate per le funzioni elementari.

| Tipo di Funzione | Funzione $f(x)$ | Derivata $f'(x)$ | Note |
| :--- | :--- | :--- | :--- |
| **Costante** | $k$ | $0$ | La pendenza di una retta orizzontale è nulla. |
| **Potenza** | $x^\alpha$ | $\alpha \cdot x^{\alpha-1}$ | Vale per qualsiasi $\alpha \in \mathbb{R}$ ($\alpha \neq 0$). |
| **Radice** | $\sqrt{x}$ | $\frac{1}{2\sqrt{x}}$ | Caso particolare di potenza ($x^{1/2}$). |
| **Esponenziale** | $e^x$ | $e^x$ | L'unica funzione che non cambia derivando. |
| **Esponenziale (base $a$)** | $a^x$ | $a^x \cdot \ln(a)$ | Ricorda di moltiplicare per $\ln(a)$. |
| **Logaritmo Naturale** | $\ln(x)$ | $\frac{1}{x}$ | Fondamentale negli integrali. |
| **Logaritmo (base $a$)** | $\log_a(x)$ | $\frac{1}{x \cdot \ln(a)}$ | Appare il fattore di conversione $\ln(a)$ al denominatore. |
| **Seno** | $\sin(x)$ | $\cos(x)$ | Il segno è positivo. |
| **Coseno** | $\cos(x)$ | $-\sin(x)$ | **Attenzione al segno meno!** |
| **Tangente** | $\tan(x)$ | $\frac{1}{\cos^2(x)}$ | Oppure $1 + \tan^2(x)$. |
| **Cotangente** | $\cot(x)$ | $-\frac{1}{\sin^2(x)}$ | Anche qui c'è il segno meno. |
| **Arcotangente** | $\arctan(x)$ | $\frac{1}{1+x^2}$ | Molto frequente negli esercizi. |
| **Arcoseno** | $\arcsin(x)$ | $\frac{1}{\sqrt{1-x^2}}$ | Definita per $(-1 < x < 1)$. |
| **Arcocoseno** | $\arccos(x)$ | $-\frac{1}{\sqrt{1-x^2}}$ | Identica all'arcoseno, ma col meno. |

---

## 🧠 Trucchi per Memorizzare

Per non sbagliare, non basta leggere la tabella, bisogna capire le logiche ricorrenti.

### 1. La Regola della Potenza (La più usata)
La formula $D(x^\alpha) = \alpha x^{\alpha-1}$ risolve il 90% dei casi.
* **Esempio:** $f(x) = x^5 \implies f'(x) = 5x^4$
* **Il trucco per le radici:** Se non ricordi la formula della radice, trasformala in potenza:
    $$ \sqrt[3]{x} = x^{1/3} \implies D(x^{1/3}) = \frac{1}{3}x^{-2/3} = \frac{1}{3\sqrt[3]{x^2}} $$

### 2. Goniometria: Il "Trucco della C"
Molti studenti sbagliano i segni nelle derivate di funzioni trigonometriche. Usa questa regola:
> Se la funzione inizia per **C** (Coseno, Cotangente), la sua derivata ha il segno **MENO**.

* $\cos(x) \to -\sin(x)$
* $\cot(x) \to -1/\sin^2(x)$

### 3. Esponenziali vs Potenze
Fai molta attenzione a distinguere dove sta la $x$:
* **Variabile alla base ($x^n$):** Si usa la regola delle potenze, quindi l'esponente scende.
* **Variabile all'esponente ($a^x$):** Si usa la regola dell'esponenziale, quindi la funzione resta uguale e si moltiplica per il logaritmo.

---

## 🛑 Errori Comuni da Evitare

### La derivata delle costanti
Esistono alcune costanti che assomigliano tantissimo a delle funzioni, fare molta attenzione!
Qual è la derivata di $f(x) = e^2$?
Molti rispondono $2e$ o $e^2$. **Sbagliato!**
$e^2$ è un numero (circa 7.38), non contiene la $x$. È una costante.
$$ D(e^2) = 0 $$


---

  `,
};

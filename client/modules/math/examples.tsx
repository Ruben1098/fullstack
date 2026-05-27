/**
 * Example usage of MathLive React Library
 * Zero dependencies - pure TypeScript implementation
 */

import React, { useState } from 'react';
import { MathBlock } from './lib/math-react'; // Assicurati che il path sia corretto

// ==========================================
// DATASET ALMANACCO (Medie e Liceo)
// ==========================================

const ARITMETICA_ALGEBRA = [
  { cmd: '\\frac{a}{b} \\pm \\frac{c}{d} = \\frac{ad \\pm bc}{bd}', desc: 'Somma/Sottrazione di frazioni' },
  { cmd: 'a^m \\cdot a^n = a^{m+n}', desc: 'Prodotto di potenze (stessa base)' },
  { cmd: '\\frac{a^m}{a^n} = a^{m-n}', desc: 'Quoziente di potenze' },
  { cmd: '(a^m)^n = a^{m \\cdot n}', desc: 'Potenza di potenza' },
  { cmd: 'a^{-n} = \\frac{1}{a^n}', desc: 'Esponente negativo' },
  { cmd: '(a \\pm b)^2 = a^2 \\pm 2ab + b^2', desc: 'Quadrato di binomio' },
  { cmd: '(a+b)(a-b) = a^2 - b^2', desc: 'Somma per differenza' },
  { cmd: '(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3', desc: 'Cubo di binomio' },
  { cmd: '\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}', desc: 'Prodotto di radici' },
  { cmd: '\\log_a(b \\cdot c) = \\log_a(b) + \\log_a(c)', desc: 'Logaritmo di un prodotto' },
  { cmd: '\\log_a(b^c) = c \\cdot \\log_a(b)', desc: 'Logaritmo di una potenza' },
  { cmd: '\\log_a(b) = \\frac{\\log_c(b)}{\\log_c(a)}', desc: 'Cambiamento di base' },
];

const EQUAZIONI_DISEQUAZIONI = [
  { cmd: 'ax^2 + bx + c = 0', desc: 'Equazione di 2° grado (forma normale)' },
  { cmd: '\\Delta = b^2 - 4ac', desc: 'Discriminante (Delta)' },
  { cmd: 'x_{1,2} = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}', desc: 'Formula risolutiva 2° grado' },
  { cmd: 'x_{1,2} = \\frac{-\\frac{b}{2} \\pm \\sqrt{(\\frac{b}{2})^2 - ac}}{a}', desc: 'Formula ridotta' },
  { cmd: 'x_1 + x_2 = -\\frac{b}{a}', desc: 'Somma delle radici' },
  { cmd: 'x_1 \\cdot x_2 = \\frac{c}{a}', desc: 'Prodotto delle radici' },
  { cmd: '|x| < a \\implies -a < x < a', desc: 'Disequazione con valore assoluto' },
];

const GEOMETRIA_EUCLIDEA = [
  { cmd: 'i^2 = c_1^2 + c_2^2', desc: 'Teorema di Pitagora' },
  { cmd: 'c_1^2 = p_1 \\cdot i', desc: 'Primo Teorema di Euclide' },
  { cmd: 'h^2 = p_1 \\cdot p_2', desc: 'Secondo Teorema di Euclide' },
  { cmd: 'A = \\pi r^2', desc: 'Area del cerchio' },
  { cmd: 'C = 2\\pi r', desc: 'Circonferenza' },
  { cmd: 'V = \\frac{4}{3}\\pi r^3', desc: 'Volume della sfera' },
  { cmd: '\\overline{AB} \\perp \\overline{CD}', desc: 'Segmenti perpendicolari' },
  { cmd: 'r \\parallel s', desc: 'Rette parallele' },
  { cmd: '\\triangle ABC \\cong \\triangle A\'B\'C\'', desc: 'Triangoli congruenti' },
  { cmd: '\\triangle ABC \\sim \\triangle A\'B\'C\'', desc: 'Triangoli simili' },
];

const GEOMETRIA_ANALITICA = [
  { cmd: 'd = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}', desc: 'Distanza tra due punti' },
  { cmd: 'M_x = \\frac{x_1 + x_2}{2}, M_y = \\frac{y_1 + y_2}{2}', desc: 'Punto medio di un segmento' },
  { cmd: 'y = mx + q', desc: 'Equazione della retta (esplicita)' },
  { cmd: 'ax + by + c = 0', desc: 'Equazione della retta (implicita)' },
  { cmd: 'y - y_0 = m(x - x_0)', desc: 'Fascio di rette proprio' },
  { cmd: 'm = \\frac{y_2 - y_1}{x_2 - x_1}', desc: 'Coefficiente angolare tra due punti' },
  { cmd: 'm_1 = m_2', desc: 'Condizione di parallelismo' },
  { cmd: 'm_1 \\cdot m_2 = -1', desc: 'Condizione di perpendicolarità' },
  { cmd: 'd = \\frac{|ax_0 + by_0 + c|}{\\sqrt{a^2 + b^2}}', desc: 'Distanza punto-retta' },
  { cmd: '(x - x_c)^2 + (y - y_c)^2 = r^2', desc: 'Circonferenza (centro e raggio)' },
  { cmd: 'y = ax^2 + bx + c', desc: 'Parabola con asse verticale' },
  { cmd: 'x_v = -\\frac{b}{2a}, y_v = -\\frac{\\Delta}{4a}', desc: 'Vertice della parabola' },
  { cmd: '\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1', desc: 'Equazione dell\'ellisse canonica' },
];

const TRIGONOMETRIA = [
  { cmd: '\\sin^2 \\alpha + \\cos^2 \\alpha = 1', desc: 'Prima relazione fondamentale' },
  { cmd: '\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}', desc: 'Seconda relazione fondamentale' },
  { cmd: '\\sin(\\alpha \\pm \\beta) = \\sin \\alpha \\cos \\beta \\pm \\cos \\alpha \\sin \\beta', desc: 'Formule di addizione/sottrazione (seno)' },
  { cmd: '\\cos(\\alpha \\pm \\beta) = \\cos \\alpha \\cos \\beta \\mp \\sin \\alpha \\sin \\beta', desc: 'Formule di addizione/sottrazione (coseno)' },
  { cmd: '\\sin(2\\alpha) = 2 \\sin \\alpha \\cos \\alpha', desc: 'Formula di duplicazione (seno)' },
  { cmd: '\\cos(2\\alpha) = \\cos^2 \\alpha - \\sin^2 \\alpha', desc: 'Formula di duplicazione (coseno)' },
  { cmd: 'a^2 = b^2 + c^2 - 2bc \\cos \\alpha', desc: 'Teorema del Coseno (Carnot)' },
  { cmd: '\\frac{a}{\\sin \\alpha} = \\frac{b}{\\sin \\beta} = \\frac{c}{\\sin \\gamma}', desc: 'Teorema dei Seni' },
];

const LIMITI = [
  { cmd: '\\lim_{x \\to x_0} f(x) = L', desc: 'Definizione base di limite' },
  { cmd: '\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1', desc: 'Limite notevole del seno' },
  { cmd: '\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}', desc: 'Limite notevole del coseno' },
  { cmd: '\\lim_{x \\to \\infty} (1 + \\frac{1}{x})^x = e', desc: 'Definizione del numero di Nepero' },
  { cmd: '\\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = 1', desc: 'Limite notevole del logaritmo' },
  { cmd: '\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1', desc: 'Limite notevole dell\'esponenziale' },
];

const DERIVATE = [
  { cmd: 'f\'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}', desc: 'Definizione di derivata (Rapporto incrementale)' },
  { cmd: 'D[c] = 0', desc: 'Derivata di una costante' },
  { cmd: 'D[x^n] = n \\cdot x^{n-1}', desc: 'Derivata di una potenza' },
  { cmd: 'D[\\sin x] = \\cos x', desc: 'Derivata del seno' },
  { cmd: 'D[\\cos x] = -\\sin x', desc: 'Derivata del coseno' },
  { cmd: 'D[e^x] = e^x', desc: 'Derivata dell\'esponenziale' },
  { cmd: 'D[\\ln x] = \\frac{1}{x}', desc: 'Derivata del logaritmo naturale' },
  { cmd: 'D[f(x) \\cdot g(x)] = f\'(x)g(x) + f(x)g\'(x)', desc: 'Regola del prodotto (Leibniz)' },
  { cmd: 'D[\\frac{f(x)}{g(x)}] = \\frac{f\'(x)g(x) - f(x)g\'(x)}{g(x)^2}', desc: 'Regola del quoziente' },
  { cmd: 'D[f(g(x))] = f\'(g(x)) \\cdot g\'(x)', desc: 'Regola della catena (Funzioni composte)' },
];

const INTEGRALI = [
  { cmd: '\\int f(x) dx = F(x) + C', desc: 'Definizione di integrale indefinito' },
  { cmd: '\\int x^n dx = \\frac{x^{n+1}}{n+1} + C', desc: 'Integrale di una potenza' },
  { cmd: '\\int \\frac{1}{x} dx = \\ln|x| + C', desc: 'Integrale elementare (logaritmo)' },
  { cmd: '\\int e^x dx = e^x + C', desc: 'Integrale dell\'esponenziale' },
  { cmd: '\\int \\sin x dx = -\\cos x + C', desc: 'Integrale del seno' },
  { cmd: '\\int \\cos x dx = \\sin x + C', desc: 'Integrale del coseno' },
  { cmd: '\\int_a^b f(x) dx = F(b) - F(a)', desc: 'Teorema fondamentale del calcolo (Torricelli-Barrow)' },
  { cmd: '\\int f(x)g\'(x) dx = f(x)g(x) - \\int f\'(x)g(x) dx', desc: 'Integrazione per parti' },
];

const PROBABILITA_STATISTICA = [
  { cmd: '\\mu = \\frac{x_1 + x_2 + \\dots + x_n}{n}', desc: 'Media aritmetica semplice' },
  { cmd: '\\mu = \\frac{1}{n} \\sum_{i=1}^n x_i', desc: 'Media (notazione con sommatoria)' },
  { cmd: '\\sigma^2 = \\frac{1}{n} \\sum_{i=1}^n (x_i - \\mu)^2', desc: 'Varianza' },
  { cmd: 'n! = n \\cdot (n-1) \\cdot \\dots \\cdot 2 \\cdot 1', desc: 'Fattoriale' },
  { cmd: 'P_n = n!', desc: 'Permutazioni semplici' },
  { cmd: 'D_{n,k} = \\frac{n!}{(n-k)!}', desc: 'Disposizioni semplici' },
  { cmd: 'C_{n,k} = \\binom{n}{k} = \\frac{n!}{k!(n-k)!}', desc: 'Combinazioni semplici (Coefficiente Binomiale)' },
  { cmd: 'P(E) = \\frac{\\text{casi favorevoli}}{\\text{casi possibili}}', desc: 'Definizione classica di Probabilità' },
  { cmd: 'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)', desc: 'Probabilità dell\'unione' },
  { cmd: 'P(A|B) = \\frac{P(A \\cap B)}{P(B)}', desc: 'Probabilità condizionata' },
];

const LOGICA_INSIEMI = [
  { cmd: 'x \\in A, y \\notin B', desc: 'Appartenenza e non appartenenza' },
  { cmd: 'A \\subset B, C \\subseteq D', desc: 'Inclusione stretta e larga' },
  { cmd: 'A \\cup B, A \\cap B', desc: 'Unione e Intersezione' },
  { cmd: 'A \\setminus B', desc: 'Differenza insiemistica' },
  { cmd: '\\forall x \\in \\mathbb{R}, \\exists y > x', desc: 'Quantificatori (Per ogni, Esiste)' },
  { cmd: 'p \\implies q', desc: 'Implicazione logica' },
  { cmd: 'p \\Leftrightarrow q', desc: 'Doppia implicazione (Se e solo se)' },
  { cmd: '\\neg p \\lor q', desc: 'Negazione e disgiunzione' },
];

const LETTERE_GRECHE = [
  { cmd: '\\alpha, \\beta, \\gamma, \\delta, \\epsilon', desc: 'Prime lettere minuscole' },
  { cmd: '\\zeta, \\eta, \\theta, \\iota, \\kappa', desc: 'Altre minuscole' },
  { cmd: '\\lambda, \\mu, \\nu, \\xi, \\pi', desc: 'Altre minuscole' },
  { cmd: '\\rho, \\sigma, \\tau, \\upsilon, \\phi', desc: 'Altre minuscole' },
  { cmd: '\\chi, \\psi, \\omega', desc: 'Ultime minuscole' },
  { cmd: '\\Gamma, \\Delta, \\Theta, \\Lambda, \\Xi', desc: 'Maiuscole' },
  { cmd: '\\Pi, \\Sigma, \\Upsilon, \\Phi, \\Psi, \\Omega', desc: 'Maiuscole' },
];

// ==========================================
// COMPONENTI UI
// ==========================================

// Editor LaTeX sticky
function LatexEditorSticky() {
  const [input, setInput] = useState('\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1');
  
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2000,
        background: 'rgba(255,255,255,0.97)',
        boxShadow: '0 6px 24px 0 rgba(0,0,0,0.13), 0 1.5px 0 0 #e0e0e0',
        borderBottom: '2.5px solid #d1d5db',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        transition: 'box-shadow 0.2s',
        padding: '10px 0',
      }}
    >
      <div
        style={{
          maxWidth: 900, // Allargato un po' per far respirare le formule grandi
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: 16,
          width: '100%',
          padding: '0 12px',
        }}
      >
        <div style={{ flex: 2 }}>
          <label style={{ fontWeight: 600, fontSize: 15 }}>Editor LaTeX live</label>
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            rows={2}
            style={{
              width: '100%',
              fontFamily: 'monospace',
              fontSize: 15,
              padding: 8,
              border: '1px solid #ccc',
              borderRadius: 4,
              marginTop: 6,
              resize: 'vertical',
              minWidth: 0,
            }}
          />
        </div>
        <div
          style={{
            flex: 1,
            minWidth: 0,
            padding: 8,
            background: '#f7f7f7',
            borderRadius: 6,
            border: '1px solid #eee',
            marginTop: 26,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 60,
          }}
        >
          <MathBlock>{input}</MathBlock>
        </div>
      </div>
    </div>
  );
}

function TableSection({ title, data }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ color: '#667eea', fontSize: 24, margin: '32px 0 16px 0', borderBottom: '2px solid #edf2f7', paddingBottom: 8 }}>
        {title}
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: 0,
        border: '1px solid #e2e8f0',
        borderRadius: 8,
        overflow: 'hidden',
        background: '#fff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
      }}>
        <div style={{ background: '#f8fafc', fontWeight: 600, padding: '12px 16px', borderRight: '1px solid #e2e8f0', color: '#4a5568' }}>Comando</div>
        <div style={{ background: '#f8fafc', fontWeight: 600, padding: '12px 16px', color: '#4a5568' }}>Rendering</div>
        {data.map((ex, i) => (
          <React.Fragment key={i}>
            <div style={{
              padding: '16px',
              borderRight: '1px solid #e2e8f0',
              borderTop: '1px solid #e2e8f0',
              fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace',
              fontSize: 15,
              background: i % 2 === 0 ? '#ffffff' : '#fcfcfd',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all',
              color: '#d53f8c'
            }}>
              {ex.cmd}
              <div style={{ color: '#718096', fontSize: 13, marginTop: 8, fontFamily: 'system-ui, sans-serif' }}>{ex.desc}</div>
            </div>
            <div style={{
              padding: '16px',
              borderTop: '1px solid #e2e8f0',
              background: i % 2 === 0 ? '#ffffff' : '#fcfcfd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflowX: 'auto', // Permette lo scroll se la formula è enorme
            }}>
              <MathBlock>{ex.cmd}</MathBlock>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function AlmanaccoPage() {
  const editorHeight = 140; // Alzato leggermente per il padding
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '32px 20px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <LatexEditorSticky />
      <div style={{ height: editorHeight }} />
      
      <h1 style={{ marginTop: 24, fontSize: 36, color: '#2d3748' }}>Almanacco Formule LaTeX</h1>
      <p style={{ color: '#4a5568', marginBottom: 40, fontSize: 16, lineHeight: 1.6 }}>
        Reference rapido per la sintassi matematica di Medie e Liceo compatibile con il renderer <b>MathLive React</b>. 
        <br />A sinistra il comando da copiare, a destra il rendering generato nativamente in MathML.
      </p>
      
      <TableSection title="Aritmetica e Algebra" data={ARITMETICA_ALGEBRA} />
      <TableSection title="Equazioni e Disequazioni" data={EQUAZIONI_DISEQUAZIONI} />
      <TableSection title="Geometria Euclidea" data={GEOMETRIA_EUCLIDEA} />
      <TableSection title="Geometria Analitica" data={GEOMETRIA_ANALITICA} />
      <TableSection title="Trigonometria" data={TRIGONOMETRIA} />
      <TableSection title="Limiti" data={LIMITI} />
      <TableSection title="Derivate" data={DERIVATE} />
      <TableSection title="Integrali" data={INTEGRALI} />
      <TableSection title="Probabilità e Statistica" data={PROBABILITA_STATISTICA} />
      <TableSection title="Logica e Insiemistica" data={LOGICA_INSIEMI} />
      <TableSection title="Alfabeto Greco" data={LETTERE_GRECHE} />
      
      <div style={{ 
        marginTop: 64, 
        paddingTop: 24, 
        borderTop: '1px solid #e2e8f0', 
        color: '#a0aec0', 
        fontSize: 14, 
        textAlign: 'center' 
      }}>
        Almanacco formule matematiche React – {new Date().getFullYear()}
      </div>
    </div>
  );
}

export default AlmanaccoPage;
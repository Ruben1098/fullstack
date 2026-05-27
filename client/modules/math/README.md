# MathLive React - Zero-Dependency MathML Renderer 🚀

Una libreria React **completamente autonoma** per il rendering di formule LaTeX con output **MathML nativo**. Nessuna dipendenza esterna oltre React.

## ✨ Caratteristiche

- **🎯 Zero Dependencies**: nessuna libreria matematica esterna
- **🧠 MathML First**: rendering semantico/accessibile basato su MathML
- **🔤 Font KaTeX inclusi**: Main, Math, AMS in `woff2`
- **📦 Single File TS**: logica in `lib/math-react.tsx`
- **🔧 Auto-style injection**: stili MathML iniettati automaticamente

## 📦 Installazione

```bash
npm install react
```

Copia la cartella `res` nel tuo progetto, oppure pubblica il pacchetto così com’è.

## 🚀 Uso rapido

```tsx
import { Math, MathBlock } from './lib/math-react';

export default function App() {
  return (
    <>
      <Math>E = mc^2</Math>
      <MathBlock>\frac{-b \pm \sqrt{b^2-4ac}}{2a}</MathBlock>
    </>
  );
}
```

## 📚 Sintassi supportata (core)

- Frazioni: `\frac{a}{b}`
- Radici: `\sqrt{x}`
- Sup/Sub: `x^2`, `x_i`, `x_i^2`
- Greco/simboli: `\alpha`, `\beta`, `\infty`, `\sum`, `\int`, `\prod`
- Stili base: `\mathbf{}`, `\mathit{}`, `\mathrm{}`, `\mathbb{}`

## 🗂️ Struttura rilevante

- `lib/math-react.tsx` → parser + renderer MathML + componenti React
- `fonts/*.woff2` → font KaTeX importati
- `styles/math-fonts.css` → dichiarazioni `@font-face` + regole MathML

## 📄 Licenza

MIT

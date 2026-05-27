# MathLive React - Zero-Dependency Math Renderer

Libreria React completamente autonoma per il rendering di formule matematiche LaTeX. **Nessuna dipendenza esterna richiesta!**

## 📁 Struttura

```
res/
├── lib/
│   └── math-react.tsx    # Libreria principale (single-file)
├── package.json            # Configurazione pacchetto
├── tsconfig.json          # Configurazione TypeScript
├── examples.tsx           # Esempi di utilizzo
└── README.md              # Documentazione completa
```

## 🚀 Come Usare

### 1. Copia il file nella tua app

Copia semplicemente `lib/math-react.tsx` nella tua cartella `src/lib/`:

```bash
cp res/lib/math-react.tsx your-project/src/lib/
```

### 2. Installa le dipendenze

```bash
npm install react
# Opzionale: types per TypeScript
npm install -D @types/react
```

⚠️ **NON serve installare KaTeX!** Questa libreria è completamente autosufficiente.

### 3. Gli stili sono automatici!

✅ **Nessun CSS da importare** - gli stili vengono iniettati automaticamente!

Puoi comunque personalizzarli se vuoi:

```css
.math-container {
	font-family: 'Custom Math Font';
}
```

### 4. Usa i componenti

```typescript
import { Math, MathBlock } from './lib/math-react';

function App() {
  return (
    <div>
      <Math>E = mc^2</Math>
      <MathBlock>\int_0^1 x^2 dx = \frac{1}{3}</MathBlock>
    </div>
  );
}
```

## 📚 Documentazione Completa

Vedi [README.md](README.md) per la documentazione completa con tutti gli esempi.

## 🎯 Esempi

Vedi [examples.tsx](examples.tsx) per esempi pratici di tutti i componenti e hooks.

## 🔧 Build (Opzionale)

Se vuoi buildare la libreria:

```bash
cd res
npm install
tsc
```

## 📦 Contenuto del Pacchetto

- **math-react.tsx** (420+ righe): Libreria completa con:
     - Componenti: `Math`, `MathBlock`, `MathContainer`
     - Hooks: `useMath`, `useKaTeX`
     - Types TypeScript completi
     - Gestione errori integrata
     - Auto-rendering con delimitatori

## 💡 Perché Single-File?

- ✅ Facile da copiare e incollare
- ✅ Zero configurazione
- ✅ Nessuna build necessaria
- ✅ Perfetto per progetti piccoli/medi
- ✅ Completamente tipizzato
- ✅ Tree-shakeable se usi un bundler moderno

## 🤝 Contributi

Sentiti libero di modificare `math-react.tsx` per le tue esigenze specifiche!

---

**Creato con ❤️ per progetti React che necessitano di rendering matematico veloce e leggero.**

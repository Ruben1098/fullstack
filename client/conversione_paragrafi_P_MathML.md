# Conversione Paragrafi P + MathML

## Obiettivo

Definire una regola per convertire sequenze alternate di oggetti `{ "name": "P" }` e `{ "name": "MathML" }` in una struttura raggruppata in un unico blocco `P` con apertura e chiusura, contenente un array di stringhe e oggetti MathML.

## Regola di Conversione

### Input (esempio tipico)

```json
{ "name": "MathML", "text": "" },
{ "name": "P", "text": "" },
{ "name": "MathML", "text": "" },
{ "name": "P", "text": "" }
```

### Output (dopo conversione)

```json
{ "name": "P", "type": "open" },
[
  { "name": "MathML", "text": "" },
  "",
  { "name": "MathML", "text": "" },
  ""
],
{ "name": "P", "type": "close" },
```

### Dettagli

- Tutti gli oggetti `{ "name": "P", "text": ... }` diventano stringhe nell'array.
- Tutti gli oggetti `{ "name": "MathML", ... }` restano oggetti nell'array.
- Si crea un blocco `{ "name": "P", "type": "open" }` prima dell'array e `{ "name": "P", "type": "close" }` dopo.
- L'array contiene in ordine tutti gli elementi (stringhe e oggetti MathML).

### Esempio più complesso

#### Input

```json
{ "name": "P", "text": "" },
{ "name": "MathML", "text": "" },
{ "name": "P", "text": "" }
```

#### Output

```json
{ "name": "P", "type": "open" },
[
  "",
  { "name": "MathML", "text": "" },
  ""
],
{ "name": "P", "type": "close" },
```

## Note

- La conversione si applica solo a sequenze alternate di `P` e `MathML` (o solo `P`/solo `MathML`), non ad altri tipi di blocchi.
- Gli oggetti MathML possono avere anche altre proprietà, che vanno mantenute.
- Gli oggetti P possono avere anche `props`, che vanno ignorate e convertite solo in stringa.

## Pseudocodice

1. Scorri la lista dei blocchi.
2. Quando trovi una sequenza di `P` e/o `MathML` alternati:
   - Raccogli tutti gli elementi finché non trovi un altro tipo di blocco.
   - Trasforma ogni `P` in stringa, ogni `MathML` lo lasci come oggetto.
   - Inserisci `{ "name": "P", "type": "open" }`, poi l'array, poi `{ "name": "P", "type": "close" }`.
3. Continua fino alla fine del file.

---

Questo file serve come specifica per la conversione automatica dei paragrafi P + MathML.

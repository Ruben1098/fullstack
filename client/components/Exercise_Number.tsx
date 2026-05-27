import { type ReactNode } from "react";

// --- CONFIGURAZIONE ---
// Qui definisci testo e colore per ogni variante
const levels = {
  easy: {
    label: "FACILE",
    color: "text-green-600",
  },
  medium: {
    label: "MEDIO",
    color: "text-yellow-400",
  },
  hard: {
    label: "DIFFICILE",
    color: "text-red-600",
  },
};

// --- TIPI ---
type BaseProps = {
  children?: ReactNode; // Children è opzionale ora
  className?: string;
};

type LevelProps = {
  variant?: keyof typeof levels; // "easy" | "medium" | "hard"
  className?: string;
};

// --- 1. IL ROOT ---
const ExerciseRoot = ({ children, className = "" }: BaseProps) => {
  return (
    <div className={`flex flex-col items-start gap-1 ${className}`}>
      {children}
    </div>
  );
};

// --- 2. HEADER ---
const Header = ({ children, className = "" }: BaseProps) => {
  return (
    <h1 className={`font-montserrat text-gray-800 text-lg  ${className}`}>
      {children}
    </h1>
  );
};

// --- 3. NUMBER ---
const Number = ({ children, className = "" }: BaseProps) => {
  return (
    <p className={`font-montserrat text-brand font-bold text-4xl ${className}`}>
      {children}
    </p>
  );
};

// --- 4. LEVEL (Automatizzato) ---
const Level = ({ variant = "easy", className = "" }: LevelProps) => {
  // Peschiamo etichetta e colore dalla configurazione
  const { label, color } = levels[variant];

  return (
    <p className={`font-montserrat text-sm mt-1 ${className}`}>
      {/* Parte fissa in grigio */}
      <span className="font-semibold text-gray-500">Livello: </span>

      {/* Parte dinamica colorata */}
      <span className={`font-bold ${color}`}>{label}</span>
    </p>
  );
};

// --- ASSEGNAZIONE ---
const ExTitle = Object.assign(ExerciseRoot, {
  Header,
  Number,
  Level,
});

export default ExTitle;

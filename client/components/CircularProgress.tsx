import React from "react";

type CircularProgressProps = {
  value: number; // Valore attuale
  max: number; // Valore massimo
  size?: number; // Dimensione in px
  strokeWidth?: number; // Spessore linea
  color?: string; // Colore della barra (classe Tailwind es. text-brand)
  label?: string; // Testo piccolo sotto i numeri (es. "Completato")
};

export default function CircularProgress({
  value,
  max,
  size = 120,
  strokeWidth = 3,
  color = "text-brand",
  label = "Completato", // Default
}: CircularProgressProps) {
  // 1. Calcolo percentuale sicuro (gestisce divisione per zero)
  const safeMax = max > 0 ? max : 1;
  const percentage = Math.min(Math.max((value / safeMax) * 100, 0), 100);

  // 2. Percorso circolare con circonferenza esatta di 100 unità
  const circlePath =
    "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831";

  return (
    <div
      className="relative flex items-center justify-center font-montserrat"
      style={{ width: size, height: size }}
    >
      <svg
        className="w-full h-full block transform -rotate-90"
        viewBox="0 0 36 36"
      >
        {/* A. TRACK (Sfondo grigio) */}
        <path
          className="text-gray-200"
          d={circlePath}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
        />

        {/* B. FILL (Barra colorata) */}
        <path
          className={`${color} transition-all duration-1000 ease-out`}
          d={circlePath}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={`${percentage}, 100`}
          strokeLinecap="round"
        />
      </svg>

      {/* C. TESTO CENTRALE */}
      <div className="absolute inset-0 flex flex-col items-center justify-center select-none">
        <span className="text-3xl font-bold text-gray-800 flex items-baseline gap-1">
          {value}
          <span className="text-lg text-gray-400 font-medium">/{max}</span>
        </span>

        {label && (
          <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mt-1">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}

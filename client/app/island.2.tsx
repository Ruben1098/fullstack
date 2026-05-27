"use client";

import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { H2, P } from "@/components/elements";

// Materie disponibili
const SUBJECTS = [
  { key: "matematica", label: "Matematica" },
  { key: "fisica", label: "Fisica" },
  { key: "informatica", label: "Informatica" },
];

// Macro-categorie per materia
const MACRO_CATEGORIES: Record<string, { label: string; slug: string }[]> = {
  matematica: [
    { label: "Analisi", slug: "analisi" },
    { label: "Aritmetica e Algebra", slug: "aritmetica-algebra" },
    { label: "Geometria", slug: "geometria" },
    { label: "Probabilità e Statistica", slug: "probabilita-statistica" },
    { label: "Logica", slug: "logica" },
  ],
  fisica: [
    { label: "Meccanica", slug: "meccanica" },
    { label: "Termodinamica", slug: "termodinamica" },
    { label: "Onde e Suono", slug: "onde-suono" },
    { label: "Fisica Moderna", slug: "fisica-moderna" },
    { label: "Astrofisica", slug: "astrofisica" },
  ],
  informatica: [
    { label: "Programmazione", slug: "programmazione" },
    { label: "Algoritmi e Strutture Dati", slug: "algoritmi-strutture-dati" },
    { label: "Sistemi Operativi", slug: "sistemi-operativi" },
    { label: "Sicurezza Informatica", slug: "sicurezza-informatica" },
    { label: "Intelligenza Artificiale", slug: "intelligenza-artificiale" },
  ],
};

export default function HomeIsland2() {
  const [selected, setSelected] = useState("matematica");
  const navigate = useNavigate();
  const macros = MACRO_CATEGORIES[selected] || [];

  // Descrizioni fittizie per ogni materia
  const DESCRIZIONI: Record<string, string[]> = {
    matematica: [
      "Tutto su analisi, algebra, geometria e altro!",
      "Scopri i fondamenti dell'aritmetica e dell'algebra.",
      "Geometria piana e solida spiegata semplice.",
      "Probabilità e statistica per tutti i livelli.",
      "Logica matematica e ragionamento.",
    ],
    fisica: [
      "Meccanica: il movimento spiegato facile.",
      "Termodinamica: calore, energia e trasformazioni.",
      "Onde e suono: vibrazioni e propagazione.",
      "Fisica moderna: relatività e quantistica.",
      "Astrofisica: l'universo in tasca.",
    ],
    informatica: [
      "Programmazione: impara a scrivere codice!",
      "Algoritmi e strutture dati: la base dell'informatica.",
      "Sistemi operativi: come funzionano i computer.",
      "Sicurezza informatica: proteggi i tuoi dati.",
      "Intelligenza artificiale: il futuro è qui!",
    ],
  };

  return (
    <section className="w-full flex flex-col gap-10">
      {/* Navbar filtri materie */}
      <nav className="flex gap-2 overflow-x-auto  px-2 rounded-t-2xl mx-auto w-fit max-w-full">
        {SUBJECTS.map((subject) => (
          <button
            key={subject.key}
            data-selected={selected === subject.key}
            className={`flex flex-col items-center px-3.5 py-1  rounded-full transition-colors font-semibold text-base leading-snug bg-gray-200/65 border-black/5 border w-auto h-auto cursor-pointer my-1 shadow-black/50 shadow-[0_0_6px_-3px] data-[selected=true]:bg-[#ffffff] data-[selected=true]:text-[#115eeb]`}
            onClick={() => setSelected(subject.key)}
            aria-pressed={selected === subject.key}
          >
            <span>{subject.label}</span>
          </button>
        ))}
      </nav>
      {/* Macro-categorie filtrate */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full px-2 md:px-8 lg:px-16 xl:px-24">
        {macros.map((macro, idx) => (
          <button
            key={macro.slug}
            data-selected={selected === macro.key}
            className={`group relative flex flex-col items-start justify-center rounded-xl bg-[#f7fbff] border-[#3111eb] border-l-6 shadow-[0_6px_28px_0_rgba(0,72,144,0.13),0_2px_8px_0_rgba(0,72,144,0.10)] hover:shadow-[0_10px_36px_0_rgba(0,72,144,0.18),0_3px_12px_0_rgba(0,72,144,0.13)] transition-all hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-[#3111eb] p-6 w-full cursor-pointer`}
            onClick={() => navigate({ to: `/${macro.slug}` })}
          >
            {/* Riga logo + titoletto allineata a sinistra */}
            <div className="flex flex-row items-center mb-2 w-full">
              <span className="text-2xl text-[#03111eb] flex-shrink-0">
                {
                  [
                    <svg
                      key="book"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 7H20" />
                      <path d="M6.5 7v10" />
                      <rect width="16" height="20" x="4" y="2" rx="2.5" />
                    </svg>,
                    <svg
                      key="atom"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="1" />
                      <ellipse cx="12" cy="12" rx="10" ry="4" />
                      <ellipse cx="12" cy="12" rx="4" ry="10" />
                    </svg>,
                    <svg
                      key="chip"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <path d="M9 9h6v6H9z" />
                    </svg>,
                    <svg
                      key="chart"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 3v18h18" />
                      <rect x="7" y="12" width="3" height="6" />
                      <rect x="12" y="9" width="3" height="9" />
                      <rect x="17" y="6" width="3" height="12" />
                    </svg>,
                  ][idx % 4]
                }
              </span>
              <span className="text-[1.25rem] font-bold text-gray-800 group-hover:text-[#03111eb] transition-colors">
                {macro.label}
              </span>
            </div>
            {/* Descrizione sotto */}
            <span className="text-sm text-gray-600 group-hover:text-[#03111eb] transition-colors w-full text-left">
              {DESCRIZIONI[selected][idx]}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

"use client";

import { H3, P } from "@/components/elements";
import { Link } from "@tanstack/react-router";

import { useState, useRef, useEffect } from "react";

// Lezioni reali estratte da contents.json (mock)
const derivateLessons = [
  {
    slug: "derivate-fondamentali-tabella-formule",
    title: "Tabella Derivate Fondamentali e Casi Particolari | Analisi 1",
    excerpt:
      "L'elenco completo delle derivate elementari da sapere a memoria, con i trucchi per risolvere i casi più ostici e gli esercizi svolti passo dopo passo.",
    featuredImage: "/derivate_fondamentali_island1.webp",
    category: "Analisi1",
    argument: "Derivate",
  },
  {
    slug: "regole-derivazione-prodotto-quoziente",
    title: "Regole di Derivazione: Somma, Prodotto e Quoziente | Esempi",
    excerpt:
      "Impara a calcolare le derivate con la tabella delle regole fondamentali: prodotto, quoziente, somma e costante. Spiegazioni chiare ed esempi svolti.",
    featuredImage: "/regole_derivazione_island1.webp",
    category: "Analisi1",
    argument: "Derivate",
  },
];

const limitiLessons = [
  {
    slug: "gerarchia-infiniti-infinitesimi",
    title: "Gerarchia degli Infiniti: Tabella e Confronto tra Funzioni",
    excerpt:
      "Scopri l'ordine in cui prevalgono le funzioni nei limiti. Tabella della gerarchia degli infiniti e metodi per confrontare funzioni della stessa classe.",
    featuredImage: "/gerarchia_infiniti_island1.webp",
    category: "Analisi1",
    argument: "Limiti",
  },
  {
    slug: "concetto-limite-definizione-esempi",
    title: "Il Concetto di Limite: Spiegazione Completa, Definizioni ed Esempi",
    excerpt:
      "Guida introduttiva ai limiti in Analisi Matematica: i 4 casi di limite (finito e infinito), teoria semplice e come capire se un limite esiste o meno.",
    featuredImage: "/limiti_definizione_island1.webp",
    category: "Analisi1",
    argument: "Limiti",
  },
  {
    slug: "limiti-notevoli",
    title: "Limiti Notevoli: Formule, Grafici ed Esempi",
    excerpt:
      "Tutte le formule dei limiti notevoli, con grafici, spiegazioni e casi particolari. Impara a riconoscere e risolvere i limiti notevoli più comuni.",
    featuredImage: "/limiti_notevoli_island1.webp",
    category: "Analisi1",
    argument: "Limiti",
  },
];

const otherLessons = [
  {
    slug: "proprieta-dei-logaritmi-tabella-esercizi",
    title: "Proprietà dei Logaritmi: Tabella, Formule ed Esercizi Svolti",
    excerpt:
      "Scopri tutte le proprietà dei logaritmi con la nostra tabella riassuntiva. Impara la definizione, le formule principali e come semplificare le espressioni passo dopo passo.",
    featuredImage: "/prop_logaritmi_island1.webp",
    category: "Matematica",
    argument: "Esponenziali e Logaritmi",
  },
  {
    slug: "disequazioni-secondo-grado-tabella-esercizi",
    title: "Disequazioni di Secondo Grado: Tabella dei Segni e Risoluzione",
    excerpt:
      "Guida pratica alle disequazioni di secondo grado. Consulta la tabella dei segni in base al Delta e impara a risolverle con i nostri esercizi svolti passo passo.",
    featuredImage: "/diseq_II_grado_island1.webp",
    category: "Matematica",
    argument: "Disequazioni",
  },
  {
    slug: "distanza-due-punti-piano-cartesiano-formule",
    title: "Distanza Tra Due Punti: Formule ed Esercizi Svolti",
    excerpt:
      "Impara a calcolare la distanza tra due punti nel piano cartesiano. Consulta la tabella delle formule per segmenti obliqui, orizzontali e verticali con esempi pratici.",
    featuredImage: "/distanza_island1.webp",
    category: "Matematica",
    argument: "Geometria Analitica",
  },
  {
    slug: "calore-specifico-acqua-legge-calorimetria",
    title: "Calore Specifico e Legge della Calorimetria: Spiegazione ed Esempi",
    excerpt:
      "Guida completa al calore specifico dell'acqua e alla Legge della Calorimetria. Scopri le unità di misura (Joule e Calorie), le formule e un esempio pratico di calcolo.",
    featuredImage: "/calore_specifico_island1.webp",
    category: "Fisica",
    argument: "Calorimetria",
  },
  {
    slug: "come-fare-parentesi-graffe-tastiera-windows-mac",
    title: "Come Fare le Parentesi Graffe sulla Tastiera: Windows, Mac e Linux",
    excerpt:
      "Guida rapida alle scorciatoie da tastiera per fare le parentesi graffe. Scopri tutte le combinazioni di tasti corrette per Windows, macOS e Linux.",
    featuredImage: "/parentesi_graffe_island1.webp",
    category: "Informatica",
    argument: "Basi del Computer",
  },
];

export default function CategoryIsland2() {
  // Dropdown stato
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({ teoria: false, esercizi: false });
  const dropdownRef = useRef(null);

  // Chiudi dropdown al click fuori
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Esempio: titolo corso (da props o context, qui statico)
  const courseTitle = "Analisi 1";

  return (
    <section className="w-full flex flex-col gap-6">
      {/* HEADER FILTRI */}
      <header className="flex items-center justify-between w-full px-1 2 relative z-10">
        {/* Titolo o breadcrumb */}
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#3111eb] whitespace-nowrap">
          {courseTitle}
        </h2>
        {/* Bottone Filtra */}
        <div className="relative" ref={dropdownRef}>
          <button
            className="flex items-center gap-2 px-4 py-2 border border-[#3111eb] text-[#3111eb] bg-white rounded-full font-semibold shadow-sm hover:bg-[#f7fbff] transition focus:outline-none focus:ring-2 focus:ring-[#3111eb]/30 w-auto h-auto"
            onClick={() => setIsOpen((v) => !v)}
            aria-haspopup="true"
            aria-expanded={isOpen}
          >
            {/* Icona slider/imbuto minimal */}
            <svg
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 20 20"
              stroke="#3111eb"
              strokeWidth="2"
              className="inline-block"
            >
              <path d="M3 5h14M6 10h8M9 15h2" strokeLinecap="round" />
            </svg>
            Filtra
          </button>
          {/* Dropdown menu */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-xl shadow-lg py-3 flex flex-col gap-2 animate-fade-in z-50">
              <div className="flex gap-2 px-4">
                {/* Pillola Teoria */}
                <button
                  className={`px-3 py-1 rounded-full border text-sm font-medium transition w-auto h-auto
									   ${filters.teoria ? "bg-[#3111eb] text-white border-[#3111eb]" : "bg-white text-[#3111eb] border-[#3111eb]/40 hover:bg-[#f7fbff]"}`}
                  onClick={() =>
                    setFilters((f) => ({ ...f, teoria: !f.teoria }))
                  }
                >
                  Teoria
                </button>
                {/* Pillola Esercizi */}
                <button
                  className={`px-3 py-1 rounded-full border text-sm font-medium transition w-auto h-auto
									   ${filters.esercizi ? "bg-[#3111eb] text-white border-[#3111eb]" : "bg-white text-[#3111eb] border-[#3111eb]/40 hover:bg-[#f7fbff]"}`}
                  onClick={() =>
                    setFilters((f) => ({ ...f, esercizi: !f.esercizi }))
                  }
                >
                  Esercizi
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* CAROSELLI PER ARGOMENTO */}
      <div className="flex flex-col gap-4 w-full">
        {/* Carosello Derivate */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xl leading-none md:text-2xl font-bold capitalize tracking-tight text-title">
              Derivate
            </h2>
          </div>
          <div
            className="flex gap-4  scrollbar-hide  snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {derivateLessons.map((lesson, idx) => (
              <a
                key={lesson.slug}
                href={`/${lesson.slug}`}
                className="no-underline snap-start shrink-0"
                style={{
                  width: "calc(100vw / 3.5 - 1rem)",
                  maxWidth: "260px",
                  minWidth: "180px",
                }}
              >
                <div className="rounded-xl bg-[#f7fbff] border-l-6 border-[#3111eb] flex flex-col items-start justify-between p-6 gap-2 hover:scale-103 transition-all h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3111eb] shadow-[0_6px_28px_0_rgba(0,72,144,0.13),0_2px_8px_0_rgba(0,72,144,0.10)] hover:shadow-[0_10px_36px_0_rgba(0,72,144,0.18),0_3px_12px_0_rgba(0,72,144,0.13)]">
                  <img
                    src={lesson.featuredImage}
                    alt={lesson.title}
                    className="w-full h-auto object-contain rounded-xl"
                  />
                  <H3 className="text-base font-bold whitespace-normal">
                    {lesson.title}
                  </H3>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Carosello Limiti */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xl leading-none md:text-2xl font-bold capitalize tracking-tight text-title">
              Limiti
            </h2>
          </div>
          <div
            className="flex gap-4  scrollbar-hide pb-2 snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {limitiLessons.map((lesson, idx) => (
              <a
                key={lesson.slug}
                href={`/${lesson.slug}`}
                className="no-underline snap-start shrink-0"
                style={{
                  width: "calc(100vw / 3.5 - 1rem)",
                  maxWidth: "260px",
                  minWidth: "180px",
                }}
              >
                <div className="rounded-xl bg-[#f7fbff] border-l-6 border-[#3111eb] flex flex-col items-start justify-between p-6 gap-2 hover:scale-103 transition-all h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3111eb] shadow-[0_6px_28px_0_rgba(0,72,144,0.13),0_2px_8px_0_rgba(0,72,144,0.10)] hover:shadow-[0_10px_36px_0_rgba(0,72,144,0.18),0_3px_12px_0_rgba(0,72,144,0.13)]">
                  <img
                    src={lesson.featuredImage}
                    alt={lesson.title}
                    className="w-full h-auto object-contain rounded-xl"
                  />
                  <H3 className="text-base font-bold line-clamp-2">
                    {lesson.title}
                  </H3>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Carosello Altre Lezioni */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xl leading-none md:text-2xl font-bold capitalize tracking-tight text-title">
              Altre Lezioni
            </h2>
          </div>
          <div
            className="flex gap-4  scrollbar-hide pb-2 snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {otherLessons.map((lesson, idx) => (
              <a
                key={lesson.slug}
                href={`/${lesson.slug}`}
                className="no-underline snap-start shrink-0"
                style={{
                  width: "calc(100vw / 3.5 - 1rem)",
                  maxWidth: "260px",
                  minWidth: "180px",
                }}
              >
                <div className="rounded-xl bg-[#f7fbff] border-l-6 border-[#3111eb] flex flex-col items-start justify-between p-6 gap-2 hover:scale-103 transition-all h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3111eb] shadow-[0_6px_28px_0_rgba(0,72,144,0.13),0_2px_8px_0_rgba(0,72,144,0.10)] hover:shadow-[0_10px_36px_0_rgba(0,72,144,0.18),0_3px_12px_0_rgba(0,72,144,0.13)]">
                  <img
                    src={lesson.featuredImage}
                    alt={lesson.title}
                    className="w-full h-auto object-contain rounded-xl"
                  />
                  <H3 className="text-base font-bold line-clamp-2">
                    {lesson.title}
                  </H3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* CSS per nascondere scrollbar su mobile e animazione dropdown */}
      <style>{`
				       .scrollbar-hide::-webkit-scrollbar { display: none; }
				       .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
				       @keyframes fade-in {
					       from { opacity: 0; transform: translateY(-8px); }
					       to { opacity: 1; transform: translateY(0); }
				       }
				       .animate-fade-in {
					       animation: fade-in 0.18s cubic-bezier(0.4,0,0.2,1);
				       }
			       `}</style>
    </section>
  );
}

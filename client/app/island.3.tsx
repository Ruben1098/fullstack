
export default function GlobalFooter() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="bg-slate-50 text-slate-600 border-t-2 border-[#115eeb] w-full bottom-0 left-0"
      style={{ zIndex: 10 }}
    >
      <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col md:flex-row md:justify-between gap-8 text-center md:text-left ">
        {/* Brand Info */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start">
          <div className="font-bold text-lg text-[#115eeb]">Instanswer</div>
          <div className="text-sm mt-1">La matematica spiegata semplice.</div>
        </div>
        {/* Navigation Links */}
        <nav className="flex flex-col gap-2 md:w-1/3 items-center md:items-start">
          <span className="font-semibold mb-1">Navigazione</span>
          <a href="/" className="hover:underline">Home</a>
          <a href="/chi-siamo" className="hover:underline">Chi Siamo</a>
          <a href="/contatti" className="hover:underline">Contatti</a>
        </nav>
        {/* Legal Links */}
        <nav className="flex flex-col gap-2 md:w-1/3 items-center md:items-start">
          <span className="font-semibold mb-1">Legale</span>
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          <a href="/cookie-policy" className="hover:underline">Cookie Policy</a>
          <a href="/termini-condizioni" className="hover:underline">Termini e Condizioni</a>
        </nav>
      </div>
      <div className="border-t border-brand text-xs text-center py-4 px-2 bg-slate-50">
        <div>© {year} Instanswer. Tutti i diritti riservati.</div>
        <div className="mt-1 text-[11px] text-slate-500 max-w-2xl mx-auto">
          Questo sito partecipa a programmi di affiliazione e riceve una commissione per gli acquisti idonei effettuati tramite i link forniti, senza alcun costo aggiuntivo.
        </div>
      </div>
    </footer>
  );
}

/**
 * HTML shell — wraps every page with head, nav, footer.
 * CSS is served from /styles/globals.css (compiled from app/globals.css).
 */

const ASSETS_URL = (process.env.ASSETS_URL ?? 'http://localhost:5001').replace(/\/$/, '');
const SITE_URL = (process.env.SITE_URL ?? `http://localhost:${process.env.PORT ?? '3001'}`).replace(/\/$/, '');

export interface ShellOptions {
	title: string;
	description?: string;
	canonicalUrl?: string;
	ogImage?: string;
	body: string;
	firstPaint?: string;
	middle?: string;
	headExtra?: string;
}

export function renderShell({ title, description = '', canonicalUrl, ogImage, body, firstPaint, middle, headExtra = '' }: ShellOptions): string {
	const firstPaintBlock = firstPaint ?? `<div class="flex flex-col">${renderBrandNav()}</div>`;
	const middleBlock = middle ?? `<div class="flex flex-col">${body}</div>`;

	return `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escHtml(title)}</title>
  ${description ? `<meta name="description" content="${escAttr(description)}" />` : ''}
  ${canonicalUrl ? `<link rel="canonical" href="${escAttr(canonicalUrl)}" />` : ''}
  ${ogImage ? `<meta property="og:image" content="${escAttr(ogImage)}" />` : ''}
  <meta property="og:title" content="${escAttr(title)}" />
  ${description ? `<meta property="og:description" content="${escAttr(description)}" />` : ''}
  <meta property="og:type" content="article" />

  <style>
    :root {
      --logo-primary: #fcd272;
      --logo-secondary: #86e0ff;
      --p: clamp(0.6rem, 1vw, 0.85rem);
      --round: .935rem;
      --maxwidth: clamp(56rem, calc(95vw - var(--p) * 2), 65rem);
    }
    @font-face {
      font-family: "Instanswer";
      src: url("${ASSETS_URL}/fonts/logo.ttf") format("truetype");
      font-display: swap;
    }
    @font-face {
      font-family: "round";
      src: url("${ASSETS_URL}/fonts/round.ttf") format("truetype");
      font-display: swap;
    }
  </style>

  <link rel="preload" href="${SITE_URL}/styles/globals.css" as="style" type="text/css" crossorigin="anonymous" onload="this.onload=null;this.rel='stylesheet'" />
  <noscript><link rel="stylesheet" href="${SITE_URL}/styles/globals.css" crossorigin="anonymous" /></noscript>
  ${headExtra}

  <!-- KaTeX interactive accordion — minimal vanilla JS -->
  <script>
    document.addEventListener('DOMContentLoaded', function () {
      document.querySelectorAll('[data-faq-btn]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var panel = document.getElementById(btn.getAttribute('aria-controls'));
          var expanded = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', String(!expanded));
          if (panel) panel.hidden = expanded;
          var icon = btn.querySelector('[data-faq-icon]');
          if (icon) icon.style.transform = expanded ? '' : 'rotate(180deg)';
        });
      });

      // Fallback: normalize SSR flat table content into semantic tr/td rows
      // when the browser reparses invalid table children as sibling nodes.
      document.querySelectorAll('table.w-full.grid.grid-cols-1').forEach(function (table) {
        if (table.querySelector('tr')) return;

        var parent = table.parentElement;
        if (!parent) return;

        var collected = [];
        var isHeaderTable = table.classList.contains('mt-7');

        if (isHeaderTable) {
          var scanPrev = table.previousElementSibling;
          while (scanPrev && scanPrev.tagName === 'P') {
            collected.unshift(scanPrev);
            scanPrev = scanPrev.previousElementSibling;
          }

          collected.forEach(function (node) {
            node.className = 'inline m-0 text-left text-lg mx-auto px-4 py-1 text-white rounded-l-full rounded-r-full bg-[#004890] opacity-100';
          });
        } else {
          var scanPrevGeneric = table.previousElementSibling;
          while (scanPrevGeneric) {
            if (scanPrevGeneric.tagName === 'TABLE') break;
            if (scanPrevGeneric.classList && scanPrevGeneric.classList.contains('border-t')) break;
            collected.unshift(scanPrevGeneric);
            scanPrevGeneric = scanPrevGeneric.previousElementSibling;
          }

          if (collected.length === 0) {
            var scanNext = table.nextElementSibling;
            while (scanNext) {
              if (scanNext.tagName === 'TABLE') break;
              if (scanNext.classList && scanNext.classList.contains('border-t')) break;
              collected.push(scanNext);
              scanNext = scanNext.nextElementSibling;
            }
          }
        }

        if (collected.length === 0) return;

        table.textContent = '';

        var cols = collected.length > 1 && collected.length % 2 === 0 ? 2 : 1;
        var rowClass = cols === 2
          ? 'grid-rows-1 auto-cols-fr grid-flow-col grid grid-cols-2 items-center w-full px-6 text-center'
          : 'grid-rows-1 auto-cols-fr grid-flow-col grid grid-cols-1 items-center w-full px-6 text-center';

        for (var i = 0; i < collected.length; i += cols) {
          var tr = document.createElement('tr');
          tr.className = rowClass;

          for (var j = 0; j < cols && i + j < collected.length; j++) {
            var td = document.createElement('td');
            td.className = 'col-span-1';
            td.appendChild(collected[i + j]);
            tr.appendChild(td);
          }

          table.appendChild(tr);
        }
      });
    });
  </script>
</head>
<body class="font-round text-base">
  <div id="content">
    <div id="entry">
      <div id="firstPaint" class="contents">${firstPaintBlock}</div>
      <div id="middle" class="contents">${middleBlock}</div>
      <div id="root-3" class="contents">${renderFooter()}</div>
    </div>
  </div>
</body>
</html>`;
}

function renderBrandNav(): string {
	return `<nav id="brand" class="sticky top-p z-50 row-span-1 col-span-full shrink-0 h-fit flex flex-row items-center w-full max-w-maxwidth"><a href="/" class="font-logo text-6xl mx-auto rounded-full backdrop-blur-lg border border-white/65 bg-white/30 px-6 pt-2 pb-3 leading-7 shadow-black/35 shadow-[0_0_8px_-1px]">instanswer</a></nav>`;
}

function renderFooter(): string {
	const year = new Date().getFullYear();
	return `
  <footer class="bg-slate-50 text-slate-600 border-t-2 border-[#115eeb] w-full bottom-0 left-0" style="z-index: 10;">
    <div class="max-w-5xl mx-auto px-4 py-10 flex flex-col md:flex-row md:justify-between gap-8 text-center md:text-left">
      <div class="md:w-1/3 flex flex-col items-center md:items-start">
        <div class="font-bold text-lg text-[#115eeb]">Instanswer</div>
        <div class="text-sm mt-1">La matematica spiegata semplice.</div>
      </div>
      <nav class="flex flex-col gap-2 md:w-1/3 items-center md:items-start">
        <span class="font-semibold mb-1">Navigazione</span>
        <a href="/" class="hover:underline">Home</a>
        <a href="/chi-siamo" class="hover:underline">Chi Siamo</a>
        <a href="/contatti" class="hover:underline">Contatti</a>
      </nav>
      <nav class="flex flex-col gap-2 md:w-1/3 items-center md:items-start">
        <span class="font-semibold mb-1">Legale</span>
        <a href="/privacy-policy" class="hover:underline">Privacy Policy</a>
        <a href="/cookie-policy" class="hover:underline">Cookie Policy</a>
        <a href="/termini-condizioni" class="hover:underline">Termini e Condizioni</a>
      </nav>
    </div>
    <div class="border-t border-brand text-xs text-center py-4 px-2 bg-slate-50">
      <div>© ${year} Instanswer. Tutti i diritti riservati.</div>
      <div class="mt-1 text-[11px] text-slate-500 max-w-2xl mx-auto">
        Questo sito partecipa a programmi di affiliazione e riceve una commissione per gli acquisti idonei effettuati tramite i link forniti, senza alcun costo aggiuntivo.
      </div>
    </div>
  </footer>`;
}

/** Escape HTML special chars for text content */
export function escHtml(s: string): string {
	return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Escape for use inside attribute values (double-quoted) */
export function escAttr(s: string): string {
	return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

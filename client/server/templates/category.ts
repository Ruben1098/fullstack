import { renderShell, escHtml, escAttr } from './shell.ts';
import type { ContentListItem } from '../types.ts';

export function renderCategoryPage(categorySlug: string, items: ContentListItem[]): string {
	const title = `${slugToTitle(categorySlug)} — Instanswer`;
	const description = `Lezioni di ${slugToTitle(categorySlug)}: guide pratiche, formule e esercizi svolti.`;

	const cards =
		items.length ?
			items.map(item => renderCard(item, categorySlug)).join('\n')
		:	`<p class="text-gray-500 col-span-full text-center py-12">Nessuna lezione trovata per questa categoria.</p>`;

	const body = `
    <div class="w-full max-w-maxwidth px-4 py-8">
      <h1 class="text-3xl lg:text-4xl font-bold text-brand mb-2">${escHtml(slugToTitle(categorySlug))}</h1>
      <p class="text-gray-500 mb-8">${escHtml(description)}</p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${cards}
      </div>
    </div>
  `;

	return renderShell({ title, description, body });
}

function renderCard(item: ContentListItem, categorySlug: string): string {
	return `
  <a
    href="/${categorySlug}/${item.slug}"
    class="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
  >
    ${
		item.featuredImage ?
			`
    <img
      src="${escAttr(item.featuredImage)}"
      alt="${escAttr(item.title)}"
      class="w-full h-40 object-cover"
      loading="lazy"
    />`
		:	''
    }
    <div class="p-4 flex flex-col gap-2 flex-1">
      <span class="text-xs font-semibold text-brand uppercase tracking-wide">${escHtml(item.argument)}</span>
      <h2 class="text-base font-bold leading-snug text-gray-900 line-clamp-2">${escHtml(item.title)}</h2>
      <p class="text-sm text-gray-500 line-clamp-3 flex-1">${escHtml(item.excerpt)}</p>
      <span class="text-xs text-brand font-medium mt-2">Leggi →</span>
    </div>
  </a>`;
}

function slugToTitle(slug: string): string {
	return slug
		.split('-')
		.map(w => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ');
}

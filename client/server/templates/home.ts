import { renderShell, escHtml, escAttr } from './shell.ts';
import type { ContentListItem } from '../types.ts';

export function renderHomePage(items: ContentListItem[]): string {
	// Group by argument
	const groups = new Map<string, ContentListItem[]>();
	for (const item of items) {
		const key = item.argument;
		const group = groups.get(key) ?? [];
		group.push(item);
		groups.set(key, group);
	}

	const sections = [...groups.entries()].map(([argument, groupItems]) => renderSection(argument, groupItems)).join('\n');

	const body = `
    <div class="w-full max-w-maxwidth px-4 py-10">
      <div class="text-center mb-12">
        <h1 class="text-4xl lg:text-5xl font-bold text-brand mb-4">Studia in modo intelligente</h1>
        <p class="text-lg text-gray-500 max-w-xl mx-auto">
          Guide pratiche, formule e spiegazioni chiare per matematica, fisica e informatica.
        </p>
      </div>

      ${sections}
    </div>
  `;

	return renderShell({
		title: 'Instanswer — Matematica e Fisica spiegate semplice',
		description: 'Guide pratiche di matematica, fisica e informatica con formule, esempi svolti e spiegazioni chiare.',
		body,
	});
}

function renderSection(argument: string, items: ContentListItem[]): string {
	const cards = items
		.slice(0, 6)
		.map(
			item => `
    <a
      href="/${item.category.toLowerCase()}/${item.slug}"
      class="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
    >
      ${
		item.featuredImage ?
			`
      <img
        src="${escAttr(item.featuredImage)}"
        alt="${escAttr(item.title)}"
        class="w-full h-36 object-cover"
        loading="lazy"
      />`
		:	''
	}
      <div class="p-4 flex flex-col gap-1 flex-1">
        <span class="text-xs font-semibold text-brand uppercase tracking-wide">${escHtml(item.course)}</span>
        <h3 class="text-sm font-bold leading-snug text-gray-900 line-clamp-2">${escHtml(item.title)}</h3>
        <p class="text-xs text-gray-500 line-clamp-2 flex-1">${escHtml(item.excerpt)}</p>
      </div>
    </a>`,
		)
		.join('\n');

	return `
  <section class="mb-12">
    <h2 class="text-xl font-bold text-gray-800 mb-4 border-l-4 border-brand pl-3">${escHtml(argument)}</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      ${cards}
    </div>
  </section>`;
}

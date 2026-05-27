import { renderShell, escHtml, escAttr } from './shell.ts';
import type { ContentDetail } from '../types.ts';

export function renderArticlePage(item: ContentDetail, baseUrl = ''): string {
	const canonicalUrl = baseUrl ? `${baseUrl}/${item.category.toLowerCase()}/${item.slug}` : undefined;

	const firstPaint = `
    <div class="flex flex-col">
      <nav id="brand" class="sticky top-p z-50 row-span-1 col-span-full shrink-0 h-fit flex flex-row items-center w-full max-w-maxwidth"><a href="/" class="font-logo text-6xl mx-auto rounded-full backdrop-blur-lg border border-white/65 bg-white/30 px-6 pt-2 pb-3 leading-7 shadow-black/35 shadow-[0_0_8px_-1px]">instanswer</a></nav>
      <header class="w-full">
        <div class="flex flex-col md:flex-row lg:items-start justify-between w-full">
          <div class="py-1.5">${item.headingHtml}</div>
          ${item.featuredImage ? `<img class="max-md:sr-only mt-auto lg:my-auto rounded-2xl object-cover h-full w-auto max-w-[30%] max-h-42" src="${escAttr(item.featuredImage)}" alt="${escAttr(item.title)}" loading="eager" decoding="async">` : ''}
        </div>
      </header>
    </div>
  `;

	const middle = `
    <div class="flex flex-col">
      <main class="flex flex-col items-center max-w-maxwidth w-full gap-[calc(3*var(--p))] pb-4">
        <article class="w-full">
          ${item.html}
        </article>
        ${renderFaq(item.faqs)}
      </main>
    </div>
  `;

	return renderShell({
		title: item.title,
		description: item.excerpt,
		canonicalUrl,
		ogImage: item.featuredImage || undefined,
		body: middle,
		firstPaint,
		middle,
		headExtra: item.dynamicCss ? `<style data-instanswer-dynamic-css>${item.dynamicCss}</style>` : '',
	});
}

function renderFaq(faqs: ContentDetail['faqs']): string {
	if (!faqs || faqs.length === 0) return '';

	const items = faqs
		.map(
			(faq, i) => `
    <div class="border border-gray-200 rounded-lg overflow-hidden">
      <button
        class="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
        data-faq-btn
        aria-expanded="false"
        aria-controls="faq-panel-${i}"
      >
        <span class="font-medium">${escHtml(faq.question)}</span>
        <svg
          data-faq-icon
          class="w-5 h-5 transition-transform"
          style="transition: transform 0.2s;"
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        id="faq-panel-${i}"
        class="px-4 pb-4 pt-2 text-gray-600"
        hidden
      >${faq.answer}</div>
    </div>`,
		)
		.join('\n');

	return `
  <section class="w-full mt-12 border-t border-gray-200 pt-8">
    <h2 class="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
    <div class="space-y-4">
      ${items}
    </div>
  </section>`;
}

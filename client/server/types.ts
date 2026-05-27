/** Shared types for the SSR server */

export interface CacheEntry<T> {
	value: T;
	expiresAt: number;
}

export interface ContentListItem {
	slug: string;
	title: string;
	excerpt: string;
	category: string;
	course: string;
	argument: string;
	featuredImage: string;
}

export interface ContentDetail extends ContentListItem {
	school: string;
	class: string;
	has_pdf_resource: boolean;
	dynamicCss?: string;
	headingHtml: string;
	html: string;
	faqs: { question: string; answer: string }[];
}

export interface ApiResponse<T> {
	data: T;
	requestId?: string;
}

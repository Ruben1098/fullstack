// components/BlogPost.tsx

import { InlineMath, MathML } from '@/components/mathml';
import FAQ, { type FAQItem } from '@/components/FAQ';
import Markdown from '@/lib/markdown';
import parser from '@/lib/parser';

interface BlogPostProps {
	title: string;
	excerpt: string;
	featuredImage: string;
	featuredImageAlt: string;
	content: string;
	author: {
		name: string;
		avatar: string;
		url: string;
	};
	date: string;
	readTime: string;

	slug: string;
	faqs: FAQItem[];
	children?: React.ReactNode;
}

export default function BlogPost({
	title,
	excerpt,
	content,
	author,
	date,
	readTime,
	featuredImage,
	featuredImageAlt,
	slug,
	faqs,
	children,
}: BlogPostProps) {
	return (
		<>
			<article className="w-full">
				{/* Article Content */}

				<Markdown content={parser(content)} />

				{children}
			</article>

			{/* FAQ Section */}
			{faqs && faqs.length > 0 && <FAQ faqs={faqs} />}
		</>
	);
}

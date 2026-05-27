import { useState } from 'react';

export interface FAQItem {
	question: string;
	answer: string;
}

interface FAQProps {
	faqs: FAQItem[];
}

export default function FAQ({ faqs }: FAQProps) {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	if (!faqs || faqs.length === 0) return null;

	return (
		<div className="mt-12 border-t border-gray-200 pt-8">
			<h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
			<div className="space-y-4">
				{faqs.map((faq, index) => (
					<div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
						<button className={`w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50 transition-colors ${openIndex === index ? 'bg-gray-50' : ''}`} onClick={() => toggleFAQ(index)} aria-expanded={openIndex === index} aria-controls={`faq-${index}`}>
							<span className="font-medium">{faq.question}</span>
							<svg className={`w-5 h-5 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
							</svg>
						</button>
						<div id={`faq-${index}`} className={`px-4 pb-4 pt-2 text-gray-600 transition-all duration-300 ${openIndex === index ? 'block' : 'hidden'}`} dangerouslySetInnerHTML={{ __html: faq.answer }} />
					</div>
				))}
			</div>
		</div>
	);
}

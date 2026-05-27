import parser from '@/lib/parser';

export default {
	// --- METADATI ---
	slug: '',
	title: '',
	excerpt: '',
	category: '',
	school: '',
	class: '',
	course: '',
	argument: '',
	featuredImage: '/image.webp',
	has_pdf_resource: true,
	heading: `
:H1[]
:P[]
      `,

	content: [
		{ name: 'Shell', props: { type: 'open' } },

		{
			name: 'H2',
			text: 'Parentesi graffa su Windows e Linux.',
		},
		{
			name: 'P',
			text: 'Vediamo nel dettaglio quali sono le combinazioni di tasti da utilizzare per aprire e chiudere le parentesi graffe sui sistemi operativi Windows e Linux',
		},

		{
			name: 'Box',
			type: 'open',
			props: {
				variant: 'step',
			},
		},
		[
			{
				name: 'div',
				type: 'open',
				props: {
					className: 'inline-block relative mx-auto *:m-0!',
				},
			},
			{
				name: 'P',
				text: 'Alt Gr',
				props: {
					className:
						'relative  contrast-110 text-foreground! opacity-100! drop-shadow-[1px_1px_1px] drop-shadow-foreground/65 mx-auto *:m-0! text-xl rounded-xl border-[0.05rem] px-3 py-1 border-black-500 bg-gradient-to-b from-slate-50 to-blue-50 shadow shadow-indigo-100/40 animate-pulse',
				},
			},
			{
				name: 'P',
				text: ' + ',
				props: {
					className:
						'relative  contrast-110 text-foreground! opacity-100! drop-shadow-[1px_1px_1px] drop-shadow-foreground/65 mx-auto *:m-0! text-xl ',
				},
			},
			{
				name: 'P',
				text: 'Shift',
				props: {
					className:
						'relative  contrast-110 text-foreground! opacity-100! drop-shadow-[1px_1px_1px] drop-shadow-foreground/65 mx-auto *:m-0! text-xl rounded-xl border-[0.05rem] px-3 py-1 border-black-500 bg-gradient-to-b from-slate-50 to-blue-50 shadow shadow-indigo-100/40 animate-pulse',
				},
			},
			{
				name: 'P',
				text: ' + ',
				props: {
					className:
						'relative  contrast-110 text-foreground! opacity-100! drop-shadow-[1px_1px_1px] drop-shadow-foreground/65 mx-auto *:m-0! text-xl ',
				},
			},
			{
				name: 'P',
				text: 'è',
				props: {
					className:
						'relative  contrast-110 text-foreground! opacity-100! drop-shadow-[1px_1px_1px] drop-shadow-foreground/65 mx-auto *:m-0! text-xl rounded-xl border-[0.05rem] px-3 py-1 border-black-500 bg-gradient-to-b from-slate-50 to-blue-50 shadow shadow-indigo-100/40 animate-pulse',
				},
			},

			{ name: 'div', type: 'close' },
			{
				name: 'div',
				type: 'open',
				props: {
					className: 'inline-block relative mx-auto *:m-0!',
				},
			},
			{
				name: 'P',
				text: 'Alt Gr',
				props: {
					className:
						'relative  contrast-110 text-foreground! opacity-100! drop-shadow-[1px_1px_1px] drop-shadow-foreground/65 mx-auto *:m-0! text-xl rounded-xl border-[0.05rem] px-3 py-1 border-black-500 bg-gradient-to-b from-slate-50 to-blue-50 shadow shadow-indigo-100/40 animate-pulse',
				},
			},
			{
				name: 'P',
				text: ' + ',
				props: {
					className:
						'relative  contrast-110 text-foreground! opacity-100! drop-shadow-[1px_1px_1px] drop-shadow-foreground/65 mx-auto *:m-0! text-xl ',
				},
			},
			{
				name: 'P',
				text: 'Shift',
				props: {
					className:
						'relative  contrast-110 text-foreground! opacity-100! drop-shadow-[1px_1px_1px] drop-shadow-foreground/65 mx-auto *:m-0! text-xl rounded-xl border-[0.05rem] px-3 py-1 border-black-500 bg-gradient-to-b from-slate-50 to-blue-50 shadow shadow-indigo-100/40 animate-pulse',
				},
			},
			{
				name: 'P',
				text: ' + ',
				props: {
					className:
						'relative  contrast-110 text-foreground! opacity-100! drop-shadow-[1px_1px_1px] drop-shadow-foreground/65 mx-auto *:m-0! text-xl ',
				},
			},
			{
				name: 'P',
				text: '+',
				props: {
					className:
						'relative  contrast-110 text-foreground! opacity-100! drop-shadow-[1px_1px_1px] drop-shadow-foreground/65 mx-auto *:m-0! text-xl rounded-xl border-[0.05rem] px-3 py-1 border-black-500 bg-gradient-to-b from-slate-50 to-blue-50 shadow shadow-indigo-100/40 animate-pulse',
				},
			},

			{ name: 'div', type: 'close' },
		],
		{ name: 'Box', type: 'close' },

		//   tastiera_WINDOWS_graffa.png

		{
			name: 'H2',
			text: 'Parentesi graffa su Mac',
		},

		{
			name: 'P',
			text: 'Invece, su Mac la combinazione di tasti è anche più semplice:',
		},
		{
			name: 'Box',
			type: 'open',
			props: {
				variant: 'step',
			},
		},
		[
			{
				name: 'div',
				type: 'open',
				props: {
					className: 'inline-block relative mx-auto *:m-0!',
				},
			},
			{
				name: 'P',
				text: 'Alt',
				props: {
					className:
						'relative  contrast-110 text-foreground! opacity-100! drop-shadow-[1px_1px_1px] drop-shadow-foreground/65 mx-auto *:m-0! text-xl rounded-xl border-[0.05rem] px-3 py-1 border-black-500 bg-gradient-to-b from-slate-50 to-blue-50 shadow shadow-indigo-100/40 animate-pulse',
				},
			},
			{
				name: 'P',
				text: ' + ',
				props: {
					className:
						'relative  contrast-110 text-foreground! opacity-100! drop-shadow-[1px_1px_1px] drop-shadow-foreground/65 mx-auto *:m-0! text-xl ',
				},
			},
			{
				name: 'P',
				text: 'Shift',
				props: {
					className:
						'relative  contrast-110 text-foreground! opacity-100! drop-shadow-[1px_1px_1px] drop-shadow-foreground/65 mx-auto *:m-0! text-xl rounded-xl border-[0.05rem] px-3 py-1 border-black-500 bg-gradient-to-b from-slate-50 to-blue-50 shadow shadow-indigo-100/40 animate-pulse',
				},
			},
			{
				name: 'P',
				text: ' + ',
				props: {
					className:
						'relative  contrast-110 text-foreground! opacity-100! drop-shadow-[1px_1px_1px] drop-shadow-foreground/65 mx-auto *:m-0! text-xl ',
				},
			},
			{
				name: 'P',
				text: '\\[',
				props: {
					className:
						'relative  contrast-110 text-foreground! opacity-100! drop-shadow-[1px_1px_1px] drop-shadow-foreground/65 mx-auto *:m-0! text-xl rounded-xl border-[0.05rem] px-3 py-1 border-black-500 bg-gradient-to-b from-slate-50 to-blue-50 shadow shadow-indigo-100/40 animate-pulse',
				},
			},

			{ name: 'div', type: 'close' },
			{
				name: 'div',
				type: 'open',
				props: {
					className: 'inline-block relative mx-auto *:m-0!',
				},
			},
			{
				name: 'P',
				text: 'Alt',
				props: {
					className:
						'relative  contrast-110 text-foreground! opacity-100! drop-shadow-[1px_1px_1px] drop-shadow-foreground/65 mx-auto *:m-0! text-xl rounded-xl border-[0.05rem] px-3 py-1 border-black-500 bg-gradient-to-b from-slate-50 to-blue-50 shadow shadow-indigo-100/40 animate-pulse',
				},
			},
			{
				name: 'P',
				text: ' + ',
				props: {
					className:
						'relative  contrast-110 text-foreground! opacity-100! drop-shadow-[1px_1px_1px] drop-shadow-foreground/65 mx-auto *:m-0! text-xl ',
				},
			},
			{
				name: 'P',
				text: 'Shift',
				props: {
					className:
						'relative  contrast-110 text-foreground! opacity-100! drop-shadow-[1px_1px_1px] drop-shadow-foreground/65 mx-auto *:m-0! text-xl rounded-xl border-[0.05rem] px-3 py-1 border-black-500 bg-gradient-to-b from-slate-50 to-blue-50 shadow shadow-indigo-100/40 animate-pulse',
				},
			},
			{
				name: 'P',
				text: ' + ',
				props: {
					className:
						'relative  contrast-110 text-foreground! opacity-100! drop-shadow-[1px_1px_1px] drop-shadow-foreground/65 mx-auto *:m-0! text-xl ',
				},
			},
			{
				name: 'P',
				text: '\\]',
				props: {
					className:
						'relative  contrast-110 text-foreground! opacity-100! drop-shadow-[1px_1px_1px] drop-shadow-foreground/65 mx-auto *:m-0! text-xl rounded-xl border-[0.05rem] px-3 py-1 border-black-500 bg-gradient-to-b from-slate-50 to-blue-50 shadow shadow-indigo-100/40 animate-pulse',
				},
			},

			{ name: 'div', type: 'close' },
		],
		{ name: 'Box', type: 'close' },

		//   tastiera_MAC_graffa.pnG

		{ name: 'Shell', type: 'close' },
	],
};

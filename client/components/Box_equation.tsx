import { InlineMath, MathML } from '@/components/mathml';

import type { ReactNode } from 'react';

// --- TIPI ---
type BaseProps = { children: ReactNode; className?: string };
type BoxProps = BaseProps & {
	variant?: 'intro' | 'theory' | 'result' | 'step';
};
type MathProps = { tex: string }; // Props per la matematica

// --- CONFIGURAZIONE STILI ---
const variants = {
	intro: 'bg-intro_bg border-intro_border',
	theory: 'bg-theory_bg border-theory_border',
	step: 'bg-step_bg border-step_border',
	result: 'bg-result_bg border-result_border',
};

// --- 1. IL ROOT (SCATOLA) ---
const BoxRoot = ({ children, variant = 'step', className = '' }: BoxProps) => {
	return <div className={`rounded-2xl px-8 py-6 my-6 border-l-8 shadow-md ${variants[variant]} ${className}`}>{children}</div>;
};

// --- 2. IL TITOLO ---
const Title = ({ children }: BaseProps) => (
	<h3 className="font-montserrat font-bold text-lg mb-4 opacity-90 border-b border-black/10 pb-2">{children}</h3>
);

// --- 3. IL TESTO (Il tuo <p> potenziato) ---
const Text = ({ children }: BaseProps) => (
	// 'text-justify' e 'leading-relaxed' sono vitali per leggere bene la matematica
	<div className="font-montserrat text-black text-base leading-relaxed mb-4 text-justify">{children}</div>
);

// --- 4. MATEMATICA INLINE (Piccola, nel testo) ---
// La chiamo 'M' perché la scriverai spesso, deve essere breve!
const M = ({ tex }: MathProps) => (
	<span className="mx-1">
		<InlineMath>{tex}</InlineMath>
	</span>
);

// --- 5. MATEMATICA BLOCK (Equazione grande) ---
const Eq = ({ tex }: MathProps) => (
	<div className="my-4 text-center text-lg py-1 ">
		<MathML>{tex}</MathML>
	</div>
);

// --- ASSEGNAZIONE FINALE ---
const BoxEquation = Object.assign(BoxRoot, {
	Title,
	Text,
	M, // Inline Math
	Eq, // Block Equation
});

export default BoxEquation;

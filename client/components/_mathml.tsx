import { Math as CoreMath, MathBlock as CoreMathBlock } from '@/modules/math';
import { cn } from '@/lib/utils';

// FORMATTER (Protegge le radici dalle quadre automatiche)
const autoFormatLatex = latex => {
	if (!latex || typeof latex !== 'string') return latex;

	let formatted = '\\displaystyle ' + latex.trim();

	return (
		formatted
			// Parentesi tonde
			.replace(/(?<!\\)\(\s*/g, '\\left(')
			.replace(/\s*(?<!\\)\)/g, '\\right)')
			// Parentesi quadre (Ignora se c'è sqrt o root prima)
			.replace(/(?<!sqrt)(?<!root)(?<!\\)\[\s*/g, '\\left[')
			.replace(/\s*(?<!\\)\]/g, '\\right]')
			// Graffe
			.replace(/\\\{\s*/g, '\\left\\{')
			.replace(/\s*\\\}/g, '\\right\\}')

			.replace(/(?<!\\)\|(.+?)(?<!\\)\|/g, '\\left|$1\\right|')
	);
};

// COMPONENTI
export const MathML = ({ children, className = '', ...props }) => {
	const processedChildren = autoFormatLatex(children);

	return (
		<CoreMathBlock
			className={cn(
				'relative inline-block contrast-110 text-foreground! opacity-100! mx-auto *:m-0! text-xl font-bold drop-shadow-[1px_1px_1.2px_rgba(0,0,0,0.28)]',
				className,
			)}
			{...props}>
			{processedChildren}
		</CoreMathBlock>
	);
};

export const InlineMath = ({ children, mathML = true, className = '', ...props }) => {
	const processedChildren = autoFormatLatex(children);

	return (
		<span
			className={cn(
				'relative inline-block contrast-110 text-foreground! opacity-100! font-bold drop-shadow-[1px_1px_1.2px_rgba(0,0,0,0.28)]',
				className,
			)}
			{...props}>
			{mathML ?
				<CoreMath className={cn('inline-block', className)}>{processedChildren}</CoreMath>
			: <span>{children}</span>}
		</span>
	);
};

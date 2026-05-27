import { cn } from '@/lib/utils';
import type { PropsWithChildren } from 'react';

type BoxVariant = 'intro' | 'step' | 'theory' | 'alert' | 'result';

const typeBox: { [key in BoxVariant]: string } = {
	intro: 'border-box-intro bg-box-intro-bg',
	step: 'border-box-step bg-box-step-bg',
	theory: 'border-box-theory bg-box-theory-bg',
	alert: 'border-box-alert bg-box-alert-bg',
	result: 'border-box-result bg-box-result-bg',
};

export const Box = ({ children, className = '', variant = 'intro', ...props }: { variant?: BoxVariant; className?: string } & PropsWithChildren) => {
	return (
		<div
			id="box"
			className={cn(
				'flex flex-col items-start justify-center text-left rounded-2xl p-5 gap-3 border-l-6 shadow-md [&>math]:text-2xl! col-span-full w-full',
				typeBox[variant],
				className,
			)}
			{...props}>
			{children}
		</div>
	);
};

export const Slide = ({ children, className = '', ...props }: { className?: string; [key: string]: any } & PropsWithChildren) => (
	<div className={cn('md:px-5 lg:px-19 grid auto-cols-fr auto-rows-subgrid grid-flow-dense items-center lg:gap-9 gap-6.5', className)} {...props}>
		{children}
	</div>
);

export const Shell = ({ children, className = '', ...props }: { className?: string } & PropsWithChildren) => {
	return (
		<div
			className={cn(
				'lg:bg-shell lg:rounded-2xl lg:shadow-[0_0_8px_-1px] lg:shadow-foreground/35 p-4 lg:p-6 w-full grid grid-flow-row grid-cols-1 auto-rows-[minmax(5vh,auto)] items-center gap-4 lg:gap-5',
				className,
			)}
			{...props}>
			{children}
		</div>
	);
};

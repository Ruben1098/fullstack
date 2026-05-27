import type { PropsWithChildren } from 'react';

type NavbarProps = {} & PropsWithChildren;

export default function Navbar({ children }: NavbarProps) {
	return (
		<>
			<ul className="bg-shell relative z-10items-center grid grid-cols shadow-xl shadow-gray-200 justify-center p-6">
				<div className="flex justify-center">
					<li className="text-[#1d4ed8] text-2xl font-bold">MathNotes</li>
				</div>
			</ul>
		</>
	);
}

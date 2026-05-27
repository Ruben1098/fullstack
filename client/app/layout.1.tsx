// main.tsx



import Layout from '~/layout';
import { Link, Outlet } from '@tanstack/react-router';
import GlobalFooter from './island.3';

export const rootId = 'firstPaint';

export default () => (
	<Layout>
		{/* <MetadataProvider> */}

		<nav id="brand" className="sticky top-p z-50 row-span-1 col-span-full shrink-0 h-fit flex flex-row items-center w-full max-w-maxwidth">
			<Link
				to="/"
				className="font-logo text-6xl mx-auto rounded-full backdrop-blur-lg border border-white/65 bg-white/30 px-6 pt-2 pb-3 leading-7 shadow-black/35 shadow-[0_0_8px_-1px]">
				instanswer
			</Link>
		</nav>
		<Outlet />
		{/* </MetadataProvider> */}
		
	</Layout>
);

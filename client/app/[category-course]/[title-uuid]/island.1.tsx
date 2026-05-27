import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import remarkDirective from 'remark-directive';
import remarkElements from '@/lib/remark';
import { useRouterState, useParams } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import Markdown from '@/lib/markdown';
import parser from '@/lib/parser';

const stripNode =
		<T extends { node?: unknown }>(Component: (props: any) => ReactNode) =>
		({ node, ...props }: T) => <Component {...props} />,
	stripComponents = (components: Record<string, (props: any) => ReactNode>) =>
		Object.fromEntries(Object.entries(components).map(([key, value]) => [key, stripNode(value)]));

import contents from '@/constants/contents.json';

const data = contents[0];

export default () => {
	const params = useParams({ strict: false }),
		location = useRouterState({ select: state => state.location });

	// const { data: creator, ...props } = useQuery({
	// 	keys: [`${location.pathname}-page-${alias}`],
	// 	endpoint: `/creators/${alias}`,
	// });
	const { heading, featuredImage } = data;
	return (
		<>
			{/* Article Header */}
			<header className="w-full">
				<div className="flex flex-col md:flex-row lg:items-start justify-between w-full">
					<div className="py-1.5">
						<Markdown content={heading} />
					</div>
					{featuredImage && (
						<img
							className="max-md:sr-only mt-auto lg:my-auto rounded-2xl object-cover h-full w-auto max-w-[30%] max-h-42"
							src={featuredImage}
						/>
					)}
				</div>
			</header>
		</>
	);
};

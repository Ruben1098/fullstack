import 'katex/dist/katex.min.css';

import BlogPost from '@/blocks/BlogPost';
import useQuery from '@/hooks/useQuery';
import parser from '@/lib/parser';
import { useRouterState, useParams } from '@tanstack/react-router';

import contents from '@/constants/contents.json';

const data = contents[3];

export default () => {
	const params = useParams({ strict: false }),
		location = useRouterState({ select: state => state.location });

	const { data: creator, ...props } = useQuery({
		keys: [`{location.pathname}-page-{alias}`],
		endpoint: `/creators/{alias}`,
	});

	return (
		<main className="flex flex-col items-center max-w-maxwidth w-full gap-[calc(3*var(--p))] pb-4">
			<BlogPost {...data} />
		</main>
	);
};

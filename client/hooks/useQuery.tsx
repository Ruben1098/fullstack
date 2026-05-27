import { useQuery } from '@tanstack/react-query';
import { backend, type Callback } from '@/lib/backend';

export default ({ keys, endpoint, ...props }: { keys: string[]; endpoint: string } & Partial<Omit<Parameters<typeof useQuery>[0], 'keys' | 'endpoint'>>, callback: Callback = async res => (await res.json()).data) =>
	useQuery({
		subscribed: true,

		refetchOnMount: false,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
		refetchIntervalInBackground: false,

		structuralSharing: true,
		staleTime: 60000 * 60,
		refetchInterval: 60000 * 15,
		queryKey: keys,
		queryFn: async () => await backend.get(endpoint, callback),
		...props,
	});

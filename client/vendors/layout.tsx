import { StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { I18nProvider } from '@/hooks/i18n';

// Singleton QueryClient
let queryClient: QueryClient;
if (!globalThis.__MY_APP_QUERY_CLIENT__) {
	globalThis.__MY_APP_QUERY_CLIENT__ = new QueryClient();
}

queryClient = globalThis.__MY_APP_QUERY_CLIENT__;
export default ({ children }: { children: React.ReactNode }) => {
	return (
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				{/* <I18nProvider>{children}</I18nProvider> */}
				<div className="flex flex-col">
					{children}
				</div>
			</QueryClientProvider>
		</StrictMode>
	);
};

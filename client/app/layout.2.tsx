// main.tsx

import Layout from '~/layout';
import { Outlet } from '@tanstack/react-router';

export const rootId = 'middle';

export default () => (
	<Layout>
		<Outlet />
		{/* </MetadataProvider> */}
	</Layout>
);

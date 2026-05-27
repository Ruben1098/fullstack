// root.tsx

export default ({ selector, layoutDir, pages }: { selector: string; layoutDir: string; pages: { path: string; dir: string }[] }) => {
	return `

      import { $root } from '$/lib/utils';
      import { lazy } from 'react';
      import { createRootRoute, createRouter, RouterProvider, createRoute as $route } from '@tanstack/react-router';

      const rootRoute = createRootRoute({
                  component: lazy(() => import('${layoutDir}')),
            }),
            getParentRoute = () => rootRoute;

      const routes = [${pages.map(({ path, dir }) => `{ path: '${path}', component: lazy(() => import('${dir}')) }`).join(',')}].map(route => $route({ ...route, getParentRoute })),
            routeTree = rootRoute.addChildren(routes);

      // @ts-ignore
      const router = createRouter({ routeTree });
      $root("${selector}", <RouterProvider router={router} />);
      `;
};

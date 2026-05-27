

      import { $root } from '$/lib/utils';
      import { lazy } from 'react';
      import { createRootRoute, createRouter, RouterProvider, createRoute as $route } from '@tanstack/react-router';

      const rootRoute = createRootRoute({
                  component: lazy(() => import('app/layout.3.tsx')),
            }),
            getParentRoute = () => rootRoute;

      const routes = [{ path: '/', component: lazy(() => import('app/island.3.tsx')) }].map(route => $route({ ...route, getParentRoute })),
            routeTree = rootRoute.addChildren(routes);

      // @ts-ignore
      const router = createRouter({ routeTree });
      $root("#entry #root-3", <RouterProvider router={router} />);
      
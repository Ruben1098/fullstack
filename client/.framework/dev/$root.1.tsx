

      import { $root } from '$/lib/utils';
      import { lazy } from 'react';
      import { createRootRoute, createRouter, RouterProvider, createRoute as $route } from '@tanstack/react-router';

      const rootRoute = createRootRoute({
                  component: lazy(() => import('app/layout.1.tsx')),
            }),
            getParentRoute = () => rootRoute;

      const routes = [{ path: '/', component: lazy(() => import('app/island.1.tsx')) },{ path: '/$category-course', component: lazy(() => import('app/[category-course]/island.1.tsx')) },{ path: '/$category-course/$title-uuid', component: lazy(() => import('app/[category-course]/[title-uuid]/island.1.tsx')) }].map(route => $route({ ...route, getParentRoute })),
            routeTree = rootRoute.addChildren(routes);

      // @ts-ignore
      const router = createRouter({ routeTree });
      $root("#entry #firstPaint", <RouterProvider router={router} />);
      
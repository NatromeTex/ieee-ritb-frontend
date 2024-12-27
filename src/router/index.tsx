import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { LandingPage } from '@/pages/landing-page';
import BaseLayout from '@/layouts/base-layout';
import ScrollToTop from '@/utils/scroll-to-top';

const router = createBrowserRouter([
	{
		children: [
			{
				path: '/',
				element: <LandingPage />,
			},
		],
		path: '/',
		element: (
			<BaseLayout>
				<ScrollToTop />
				<Outlet />
			</BaseLayout>
		),
	},
]);

export function Router() {
	return <RouterProvider router={router} />;
}

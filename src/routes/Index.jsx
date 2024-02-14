import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/not-found";
import Explore from "../pages/explore";
import Notifications from "../pages/notifications";
import MainLayout from "../layouts/main";


const routes = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: 'explore',
				element: <Explore />
			},
			{
				path: 'notifications',
				element: <Notifications />
			},
			// {
			// 	path: 'messages',
			// 	element: <Messages />
			// },
			// {
			// 	path: 'lists',
			// 	element: <Lists />
			// },
			// {
			// 	path: 'bookmarks',
			// 	element: <Bookmarks />
			// },
			// {
			// 	path: ':slug',
			// 	element: <Profile />
			// },
			{
				path: '*',
				element: <NotFound />
			}
		]
	}
])

export default routes
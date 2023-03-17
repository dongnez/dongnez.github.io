import { Home, Proyects, Contact } from "@/pages";
import Root from "@/pages/Root";
import ErrorPage from "@/pages/error/ErrorPage";
import { createBrowserRouter } from "react-router-dom";

export const router  = createBrowserRouter( [
	{
		path:'/',
		element: <Root/>,
		errorElement:<ErrorPage/>,
		children: [
			{
				index:true,
				element: <Home/>
			},
			{
				path:'proyects',
				element: <Proyects/>
			},
			{
				path:'contact',
				element: <Contact/>
			},
		]
	}
]);

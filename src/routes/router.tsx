import { About, Home, Proyects } from "@/pages";
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
				path:'about',
				element: <About/>
			},
			{
				path:'proyects',
				element: <Proyects/>
			},
		]


	}
]);

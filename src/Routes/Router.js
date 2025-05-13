import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Menu from "../components/Menu/Menu";
import FoodItems from "../FoodItems/FoodItems";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Blog from "../components/Blog/Blog";
import MyReviews from "../components/MyReviews/MyReviews";
import OrderedFoods from "../components/OrderedFoods/OrderedFoods";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/menu",
				element: <Menu></Menu>,
			},
			{
				path: "/food/:id",
				element: <FoodItems />,
				// this fetch method is used to see food items in detail
				// loader: ({ params }) =>
				// 	fetch(
				// 		`https://miah-kitchen-server.vercel.app/services/${params.id}`
				// 	),
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
			{
				path: "/blog",
				element: <Blog></Blog>,
			},
			{
				path: "/reviews",
				element: (
					<PrivateRoute>
						<MyReviews />
					</PrivateRoute>
				),
			},
			{
				path: "/ordered",
				element: (
					<PrivateRoute>
						<OrderedFoods />
					</PrivateRoute>
				),
			},
		],
	},
]);

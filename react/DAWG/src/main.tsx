import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import AllGames from "./pages/AllGames.tsx";
import Home from "./pages/Home.tsx";
import MonthlyGames from "./pages/MonthlyGames.tsx";
import YearlyGames from "./pages/YearlyGames.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/all-games",
		element: <AllGames />
	},
	{
		path: "/this-month",
		element: <MonthlyGames />
	},
	{
		path: "/this-year",
		element: <YearlyGames />
	}
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

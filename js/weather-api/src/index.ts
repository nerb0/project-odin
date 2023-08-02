import { format } from "date-fns";
import { getForecastFromUserLocation } from "./controllers/Forecast";
import SearchBar from "./components/Search";
import LoadingHTML from "./components/Loading";
import WeatherContainer from "./components/Weather";
import ForecastContainer from "./components/Forecast";
import "./global.css";

window.onload = async () => {
	const root = document.getElementById("root");
	const mainContainer = document.createElement('div');
	mainContainer.id = "mainContainer";
	mainContainer.className = "rounded-md p-4 bg-sky-400 w-full lg:w-[900px] shadow-md flex flex-col gap-10";
	mainContainer.innerHTML = LoadingHTML;

	root.className =
		"flex flex-col h-screen w-screen min-h-[900px] p-4 items-center justify-center bg-gradient-radial from-cyan-700 to-cyan-800 gap-y-4";
	root.append(mainContainer);
	const weatherForecast = await getForecastFromUserLocation();
	const weatherInfoContainer = WeatherContainer({ current: weatherForecast.current, location: weatherForecast.location })
	const forecastContainer = ForecastContainer(weatherForecast.forecast.forecastday);

	mainContainer.innerHTML = "";
	mainContainer.append(weatherInfoContainer, forecastContainer);

	const searchBar = SearchBar(weatherForecast);
	root.prepend(searchBar);
};

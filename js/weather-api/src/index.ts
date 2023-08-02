import { format } from "date-fns";
import { getHourForecastFromUserLocation, getWeekForecastFromUserLocation } from "./controllers/Forecast";
import LoadingHTML from "./components/Loading";
import "./global.css";
import WeatherContainer from "./components/Weather";
import ForecastContainer from "./components/Forecast";

window.onload = async () => {
	const root = document.getElementById("root");
	root.className =
		"flex h-screen w-screen min-h-[900px] p-4 items-center justify-center bg-gradient-radial from-cyan-700 to-cyan-800";
	root.innerHTML = LoadingHTML;
	try {
		const weatherForecast = await getWeekForecastFromUserLocation();
		console.log(await getHourForecastFromUserLocation());

		const weatherInfoContainer = WeatherContainer({ current: weatherForecast.current, location: weatherForecast.location })
		const forecastContainer = ForecastContainer(weatherForecast.forecast.forecastday);

		const mainContainer = document.createElement('div');
		mainContainer.className = "rounded-md p-4 bg-sky-400 w-full lg:w-[900px] shadow-md flex flex-col gap-10";
		mainContainer.append(weatherInfoContainer, forecastContainer);
		root.innerHTML = "";
		root.append(mainContainer);
	} catch (e) {

	}
};

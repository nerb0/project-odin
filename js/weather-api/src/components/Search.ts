import { getForecastFromCity } from "../controllers/Forecast";
// @ts-ignore
import SearchIcon from "../images/Search.svg";
import ForecastContainer from "./Forecast";
import LoadingHTML from "./Loading";
import WeatherContainer from "./Weather";

export default function SearchBar(forecast: ForecastList) {
  async function searchInputForecast() {
    const mainContent = document.getElementById("mainContainer");
    mainContent.innerHTML = LoadingHTML;
    searchInput.placeholder = "Loading...";
    searchInput.disabled = true;
    searchIcon.replaceWith(searchLoading);
    const fetchedForecast = await getForecastFromCity(searchInput.value);
    mainContent.innerHTML = "";
		if (fetchedForecast.error) {
      const weatherInfoContainer = WeatherContainer({
        current: forecast.current,
        location: forecast.location,
      });
      const forecastContainer = ForecastContainer(
        forecast.forecast.forecastday
      );
			mainContent.append(weatherInfoContainer, forecastContainer);
    } else {
			forecast = fetchedForecast;
      const weatherInfoContainer = WeatherContainer({
        current: forecast.current,
        location: forecast.location,
      });
      const forecastContainer = ForecastContainer(
        forecast.forecast.forecastday
      );

			mainContent.append(weatherInfoContainer, forecastContainer);
		}
    searchInput.placeholder = "Search for a city...";
    searchLoading.replaceWith(searchIcon);
    searchInput.removeAttribute("disabled");
  }

  const searchInput = document.createElement("input");
  searchInput.className =
    "flex-1 bg-transparent text-cyan-950 text-lg outline-none font-bold \
	placeholder:text-cyan-700 placeholder:font-normal";
  searchInput.placeholder = "Search for a city...";
  searchInput.onkeypress = async (ev) => {
    if (ev.keyCode == 13) {
      searchInputForecast();
    }
  };

  const searchLoading = document.createElement("div");
  searchLoading.className =
    "animate-[spin_4s_linear_infinite] rounded-full h-6 w-6 border-2 border-2 border-cyan-950 border-dashed";

  const searchIcon = document.createElement("img");
  searchIcon.className =
    "w-6 h-6 hover:scale-105 transition-transform duration-200 cursor-pointer";
  searchIcon.src = SearchIcon;
  searchIcon.onclick = searchInputForecast;

  const container = document.createElement("div");
  container.className =
    "rounded-md p-4 bg-sky-300 px-2 py-1 w-full lg:w-[900px] shadow-md flex items-center";
  container.append(searchInput, searchIcon);

  return container;
}

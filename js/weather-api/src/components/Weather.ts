import { format } from "date-fns";

function WeatherIcon(condition: WeatherCondition) {
  const image = document.createElement("img");
  image.src = condition.icon;
  image.alt = condition.text;
  image.className = "h-32 w-32 invert brightness-0";

  const container = document.createElement("div");
  container.className = "h-fit w-fit p-2";
  container.append(image);

  return { container, image };
}

function WeatherConditionText(time: string, weather: Weather) {
  const status = document.createElement("div");
	status.className = "text-4xl font-light";
  status.textContent = `
		${format(new Date(time), "EEEE")} | ${weather.condition.text}
	`;

  const temp = document.createElement("div");
	temp.className = "text-8xl font-extrabold ";
  temp.textContent = `${weather.temp_c}°C`;

  const container = document.createElement("div");
  container.className = "relative flex-1";
  container.append(status, temp);
  return { container, status, temp };
}

function WeatherLocationInfo(location: WeatherLocation) {
	const date = document.createElement("div");
	date.className = "font-bold text-lg";
	date.textContent = format(new Date(location.localtime), "LLL d, yyyy");

	const locationName = document.createElement("div");
	locationName.textContent = `${location.name}, ${location.country}`;

  const container = document.createElement("div");
  container.className = "flex flex-col items-end";
  container.append(date, locationName);

  return { container, date, locationName};
}

export default function WeatherContainer(weather: WeatherData) {
	const { container: weatherIconContainer, image: weatherIcon } = WeatherIcon(weather.current.condition);
	const { container: weatherConditionTextContainer, status: weatherStatus, temp: weatherTemp } = WeatherConditionText(weather.location.localtime, weather.current);
	const { container: weatherLocationInfoContainer, date: weatherDate, locationName: weatherLocationName } = WeatherLocationInfo(weather.location);

	const container = document.createElement("div");
	container.className = "flex gap-x-2 text-cyan-950";

	container.append(weatherIconContainer, weatherConditionTextContainer, weatherLocationInfoContainer);
	return container;
}

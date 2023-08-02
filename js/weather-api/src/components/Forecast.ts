import { format } from "date-fns";
// @ts-ignore
import sliderLeft from "../images/AngleLeft.svg";
// @ts-ignore
import sliderRight from "../images/AngleRight.svg";

function ForecastDayCard(forecast: ForecastDay, date: string) {
  const container = document.createElement("div");
  container.className = "p-2 flex flex-col w-32 items-center text-sky-50";
  container.innerHTML = `
		<img class="w-20 h-20 invert brightness-0" src="${forecast.condition.icon}" />
		<div class="font-bold">${format(new Date(date), "E")}</div>
		<div class="text-md">${forecast.avgtemp_c}°C</div>
	`;
  return container;
}

function ForecastHourCard(forecast: ForecastHour) {
  const container = document.createElement("div");
  container.className = "p-2 inline-block w-fit items-center text-sky-50";
  container.innerHTML = `
		<img class="w-20 h-20 invert brightness-0" src="${forecast.condition.icon}" />
		<div class="font-bold">${format(new Date(forecast.time), "hh:mm a")}</div>
		<div class="text-md">${forecast.temp_c}°C</div>
	`;
  return container;
}

function ForecastHourSlider(side: "left" | "right") {
  const slider = document.createElement("img");
  slider.className = "h-12 w-12 invert";
  slider.src = side == "left" ? sliderLeft : sliderRight;
  return slider;
}

function ForecastHourList(forecasts: ForecastHour[]) {
  const forecastList = document.createElement("div");
  forecastList.className = "overflow-x-auto whitespace-nowrap [&>:not(:last-child)]:mr-3 flex-1 no-scrollbar";
  forecastList.append(...forecasts.map(ForecastHourCard));

  const sliderLeft = ForecastHourSlider("left");
  const sliderRight = ForecastHourSlider("right");
  // const sliderContainer = document.createElement("div");
  // sliderContainer.className = "flex justify-center";
  // sliderContainer.append(sliderLeft, sliderRight);

  const container = document.createElement("div");
  container.className = "flex items-center mt-4";
  container.append(sliderLeft, forecastList, sliderRight);
  return container;
}

export default function ForecastContainer(forecasts: Forecast[]) {
  function ForecastIntervalCard(interval: string) {
    const card = document.createElement("div");
    card.className = `px-4 py-1 bg-cyan-400 
			[&.is-active]:bg-cyan-600 [&.is-active]:pointer-events-none [&:not(.is-active)]:cursor-pointer [&:not(.is-active)]:hover:scale-105
			transition-transform ease-in`;
    card.textContent = interval;
    card.onclick = () => {
      const active = card.parentNode.querySelector(".is-active");
      if (active) active.classList.remove("is-active");
      card.classList.add("is-active");
			if (container.contains(forecastHourList)) forecastHourList.replaceWith(forecastDayList);
			else forecastDayList.replaceWith(forecastHourList);
    };
    return card;
  }

  const weeklyInterval = ForecastIntervalCard("Weekly");
  const hourlyInterval = ForecastIntervalCard("Hourly");
  const intervalContainer = document.createElement("div");
  hourlyInterval.classList.add("rounded-r-full");
  weeklyInterval.classList.add("is-active", "rounded-l-full");
  intervalContainer.className =
    "absolute -top-4 left-4 font-bold text-white flex select-none";
  intervalContainer.append(weeklyInterval, hourlyInterval);

  const forecastDayList = document.createElement("div");
  forecastDayList.className = "flex";
  forecastDayList.append(
    ...forecasts.map((forecast) => ForecastDayCard(forecast.day, forecast.date))
  );

  const forecastHourList = ForecastHourList(forecasts[0].hour);

  const container = document.createElement("div");
  container.className = "relative p-2 rounded-md bg-sky-500";
  container.append(intervalContainer, forecastDayList);

  return container;
}

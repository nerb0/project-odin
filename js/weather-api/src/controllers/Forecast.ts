export const WEATHER_API_URL = 'http://api.weatherapi.com/v1';

export async function getWeekForecastFromCity(city: string): Promise<ForecastList> {
	const result = await fetch(`${WEATHER_API_URL}/forecast.json?key=${process.env.API_KEY}&q=${city}&days=8`);
	return await result.json();
}

export async function getWeekForecastFromUserLocation(): Promise<ForecastList> {
	const result = await fetch(`${WEATHER_API_URL}/forecast.json?key=${process.env.API_KEY}&q=auto:ip&days=8`);
	return await result.json();
}

export async function getHourForecastFromUserLocation(): Promise<ForecastList> {
	const result = await fetch(`${WEATHER_API_URL}/forecast.json?key=${process.env.API_KEY}&q=auto:ip`);
	return await result.json();
}

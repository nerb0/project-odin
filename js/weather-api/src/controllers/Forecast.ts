export const WEATHER_API_URL = 'https://api.weatherapi.com/v1';

export async function getForecastFromCity(city: string): Promise<ForecastList>  {
	const result = await fetch(`${WEATHER_API_URL}/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${city}&days=8`);
	return result.json();
}

export async function getForecastFromUserLocation(): Promise<ForecastList> {
	const result = await fetch(`${WEATHER_API_URL}/forecast.json?key=${process.env.WEATHER_API_KEY}&q=auto:ip&days=8`);
	return result.json();
}

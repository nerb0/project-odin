export {};

declare global {
  type Weather = {
    temp_c: number;
    temp_f: number;
    feelslike_c: number;
    feelslike_f: number;
    condition: WeatherCondition;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    is_day: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  };
  type WeatherData = {
    current: Weather & {
      last_updated: string;
      last_updated_epoch: number;
    };
    location: WeatherLocation;
  };
  type WeatherLocation = {
    lat: number;
    Ion: number;
    name: string;
    region: string;
    country: string;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  type WeatherCondition = {
    text: string;
    icon: string;
    code: number;
  };
	type ForecastList = WeatherData & {
		forecast: {
			forecastday: Forecast[];
		};
	}
  type Forecast = {
    date: string;
    date_epoch: number;
    day: ForecastDay;
    astro: ForecastAstro;
		hour: ForecastHour[];
  };
  type ForecastDay = {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    maxwind_mph: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    totalprecip_in: number;
    avgvis_km: number;
    avgvis_miles: number;
    avghumidity: number;
    condition: WeatherCondition;
    uv: number;
  };
  type ForecastAstro = {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
    moon_illumination: number;
  };
  type ForecastHour = Weather & {
		chance_of_snow: number;
		chance_of_rain: number;
		cloud: number;
		dewpoint_c: number;
		dewpoint_f: number;
		heatindex_c: number;
		heatindex_f: number;
    humidity: number;
		time_epoch: number;
		time: string;
		vis_km: number;
		vis_miles: number;
    windchill_c: number;
    windchill_f: number;
    will_it_rain: number;
    will_it_snow: number;
  };
}

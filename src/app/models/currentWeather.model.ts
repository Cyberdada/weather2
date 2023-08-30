import { LocationCurrent } from './location.model';
// Just added all attributes returned from the weatherservice,
// wihtout any mapping.
// (prefer camelCase to underscore, but on the other hand easier to compare
// to values that we receive from server now...

export interface CurrentWeather {
  location: LocationCurrent;
  current: WeatherDetail;
}

export interface WeatherBase {
  temp_c: number;
  temp_f: number;
  is_day: boolean;
  condition: Condition;
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
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export interface WeatherDetail extends WeatherBase {
  last_updated_epoch: number;
  last_updated: string;
 
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}


export interface Forecast {
location: LocationCurrent,
current: 

}


export interface ForecastDay {
date: string, 
date_epoch:number

}

export interface day {
  maxtemp_c: number,
  maxtemp_f: number,
  mintemp_c: number,
  mintemp_f: number,
  avgtemp_c: number,
  avgtemp_f: number,
  maxwind_mph: number,
  maxwind_kph: number,
  totalprecip_mm: number,
  totalprecip_in: number,
  totalsnow_cm: number,
  avgvis_km: number,
  avgvis_miles: number,
  avghumidity: number,
  daily_will_it_rain: number,
  daily_chance_of_rain: number,
  daily_will_it_snow: number,
  daily_chance_of_snow: number,
  condition: Condition
  uv: number
}

export interface Astro {
  sunrise:string,
  sunset: string,
  moonrise:string ,
  moonset: string,
  moon_phase: string,
  moon_illumination: number,
  is_moon_up: boolean,
  is_sun_up: boolean
}

export interface hour extends WeatherBase{

  
  windchill_c: number,
  windchill_f: number,
  heatindex_c: number,
  heatindex_f: number,
  dewpoint_c: number,
  dewpoint_f: number,
  will_it_rain: number,
  chance_of_rain: number,
  will_it_snow: number,
  chance_of_snow: number
}


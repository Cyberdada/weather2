import { LocationCurrent } from './location.model';
// Just added all attributes returned from the weatherservice,
// wihtout any mapping.
// (prefer camelCase to underscore, but on the other hand easier to compare
// to values that we receive from server now...

export interface CurrentWeather {
  location: LocationCurrent;
  current: WeatherDetail;
}

export interface WeatherDetail {
  last_updated_epoch: number;
  last_updated: string;
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

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

import { Observable, of } from 'rxjs';
import { CurrentWeather } from './models/currentWeather.model';
import { currentWeatherMock } from './currentWeather.mock';

export class WeatherServiceMock {
  byLocation(location: string): Observable<CurrentWeather> {
    return of(currentWeatherMock);
  }
}

export { currentWeatherMock };

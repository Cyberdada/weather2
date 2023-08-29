import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CurrentWeather } from './models/currentWeather.model';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(
    private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) {}

  byLocation(location: string): Observable<CurrentWeather> {
    const locationUrl = `${environment.weatherUri}current.json?key=${environment.apiKey}&q=${location}&aqi=no`;
    return this.httpClient
      .get<CurrentWeather>(locationUrl)
      .pipe(
        catchError(
          this.errorHandlerService.handleHttpError<CurrentWeather>(
            'byLocation',
            'WeatherService',
            `location = ${location}`
          )
        )
      );
  }

  //TODO! Type result
  forecast(location: string): Observable<any> {
    const locationUrl = `${environment.weatherUri}forecast.json?key=${environment.apiKey}&q=${location}&aqi=no&alerts=no`;
    return this.httpClient
      .get<CurrentWeather>(locationUrl)
      .pipe(
        catchError(
          this.errorHandlerService.handleHttpError<CurrentWeather>(
            'Forecast',
            'WeatherService',
            `location = ${location}`
          )
        )
      );
  }
}

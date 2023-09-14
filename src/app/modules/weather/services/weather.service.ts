import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Forecast, Weather } from '../weather.model';

@Injectable()
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5';
  private apiKey = '1f16a05faf8b859e20d3f1c52484725c';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<Weather> {

    return this.http.get<Weather>(`${this.apiUrl}/weather`, {
      params: this.getAPIParams(city),
    });
  }

  getForecast(city: string): Observable<Forecast[]> {
    return this.http
      .get<{ list: Forecast[] }>(`${this.apiUrl}/forecast`, {
        params: this.getAPIParams(city),
      })
      .pipe(
        map((data: { list: Forecast[] }) =>
          data.list.filter((forecast) =>
            forecast.dt_txt.toString().includes('12:00:00')
          )
        )
      );
  }

  private getAPIParams(city: string) {
    return new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appId', this.apiKey);
  }
}

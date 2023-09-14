import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Weather } from '../weather.model';

@Injectable()
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5';
  private apiKey = '1f16a05faf8b859e20d3f1c52484725c';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<Weather> {
    const params = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appId', this.apiKey);

    return this.http.get<Weather>(`${this.apiUrl}/weather`, {
      params,
    });
  }
}

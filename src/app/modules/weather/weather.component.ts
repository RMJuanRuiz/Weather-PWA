import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Forecast, Weather } from './weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  weather: Weather | undefined;
  forecast$: Observable<Forecast[]> | undefined;

  constructor(private weatherService: WeatherService) {}

  search(city: string) {
    this.weatherService
      .getWeather(city)
      .subscribe((weather) => (this.weather = weather));

    this.forecast$ = this.weatherService.getForecast(city);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { WeatherComponent } from './weather.component';
import { WeatherService } from './services/weather.service';

@NgModule({
  declarations: [WeatherComponent],
  providers: [WeatherService],
  imports: [CommonModule, MatCardModule, MatIconModule, MatInputModule],
  exports: [WeatherComponent],
})
export class WeatherModule {}

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  CurrentWeather,
  WeatherDetail,
} from '../../models/currentWeather.model';
import { CommonModule } from '@angular/common';
import { GaugeComponent } from 'src/app/shared/gauge/gauge.component';
import { LocationCurrent } from 'src/app/models/location.model';
import { LocationComponent } from '../location/location.component';

@Component({
  standalone: true,
  imports: [CommonModule, GaugeComponent, LocationComponent],
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultComponent {
  @Input() set current(value: CurrentWeather) {
    this.detail = value.current;
    this.windms = Math.round((value.current.wind_kph * 1000) / 60 / 60);
    this.gustms = Math.round((value.current.gust_kph * 1000) / 60 / 60);
    this.location = value.location;
  }

  @Output() remove = new EventEmitter();
  @Output() forecast = new EventEmitter();
  detail!: WeatherDetail;
  location!: LocationCurrent;
  windms = 0;
  gustms = 0;
}

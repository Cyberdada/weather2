import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Forecast } from 'src/app/models/currentWeather.model';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastComponent {
  @Input() forecast: Forecast | null = null;
  windkphToMs(value: number): number {
    return Math.round((value * 1000) / 60 / 60);
  }
}

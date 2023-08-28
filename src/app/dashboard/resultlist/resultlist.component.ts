import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from '../result/result.component';
import { CurrentWeather } from 'src/app/models/currentWeather.model';

@Component({
  selector: 'app-resultlist',
  standalone: true,
  imports: [CommonModule, ResultComponent],
  templateUrl: './resultlist.component.html',
  styleUrls: ['./resultlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultlistComponent {
  results: Array<CurrentWeather> = [];
  @Input() set current(value: CurrentWeather | null) {
    console.log('hej ' + value?.location.tz_id);
    if (!value) return;
    if (
      this.results.findIndex(
        (itm) =>
          itm.location.tz_id === value.location.tz_id &&
          value.location.name === itm.location.name
      ) === -1
    ) {
      this.results.push(value);
    }
  }
}

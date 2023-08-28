import {
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { WeatherService } from '../../weather.service';
import { CurrentWeather } from '../../models/currentWeather.model';
import { SearchComponent } from '../search/search.component';
import { ResultlistComponent } from '../resultlist/resultlist.component';

@Component({
  standalone: true,
  imports: [SearchComponent, ResultlistComponent],
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent {
  constructor(
    private readonly weatherService: WeatherService,
    private readonly cdr: ChangeDetectorRef
  ) {}
  result: CurrentWeather | null = null;
  search(filterValue: string) {
    this.weatherService.byLocation(filterValue).subscribe((retval) => {
      this.result = retval;
      this.cdr.detectChanges();
    });
  }
}

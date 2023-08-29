import {
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
  HostListener,
} from '@angular/core';
import { WeatherService } from '../../weather.service';
import { CurrentWeather } from '../../models/currentWeather.model';
import { SearchComponent } from '../search/search.component';
import { ResultlistComponent } from '../resultlist/resultlist.component';
import { LocationService } from 'src/app/shared/location.service';

@Component({
  standalone: true,
  imports: [SearchComponent, ResultlistComponent],
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent implements OnInit, OnDestroy {
  constructor(
    private readonly weatherService: WeatherService,
    private readonly locationService: LocationService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  @HostListener('window:beforeunload', ['$event'])
  handleBeforeUnload() {
    this.ngOnDestroy();
  }

  results: Array<CurrentWeather> = [];
  isWaiting = false;

  ngOnInit(): void {
    const latlong = this.locationService.load();
    latlong.forEach((itm) => this.search(itm));
  }

  ngOnDestroy(): void {
    const lst: Array<string> = [];
    this.results.forEach((itm) =>
      lst.push(`${itm.location.lat},${itm.location.lon}`)
    );
    this.locationService.persist(lst);
  }

  search(filterValue: string) {
    this.isWaiting = true;
    this.cdr.detectChanges();
    this.weatherService.byLocation(filterValue).subscribe((retval) => {
      this.addResult(retval);
      this.isWaiting = false;
      this.cdr.detectChanges();
    });
  }

  onRemove(ix: number) {
    this.results.splice(ix, 1);
    this.results = [...this.results];
    this.cdr.detectChanges();
  }
  private addResult(value: CurrentWeather) {
    if (
      this.results.findIndex(
        (itm) =>
          itm.location.lat === value.location.lat &&
          value.location.lon === itm.location.lon
      ) === -1
    ) {
      this.results.push(value);
      this.results = [...this.results];
    }
  }
}

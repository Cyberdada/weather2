import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { LocationCurrent } from '../../models/location.model';
import { SearchLocationComponent } from '../search-location/search-location.component';

@Component({
  standalone: true,
  imports: [SearchLocationComponent],
  selector: 'app-search',
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  @Input() location: LocationCurrent | undefined;
  @Output() searchSelected: EventEmitter<string> = new EventEmitter<string>();
}

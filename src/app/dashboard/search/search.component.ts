import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { SearchLocationComponent } from '../search-location/search-location.component';

@Component({
  standalone: true,
  imports: [SearchLocationComponent],
  selector: 'app-search',
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  @Input() isWaiting = false;
  @Output() searchSelected: EventEmitter<string> = new EventEmitter<string>();
}

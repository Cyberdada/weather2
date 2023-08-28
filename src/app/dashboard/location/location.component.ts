import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LocationCurrent } from '../../models/location.model';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-location',
  templateUrl: './location.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent {
  @Input() location!: LocationCurrent;
  @Input() lastUpdated = '';
  @Input() isWaiting = false;
  @Input() errorHasOccurred = false;
}

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
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
  private theLocation!: LocationCurrent;

  //Naive solution for wrongly formatted date. We will se if it needs to be changed

  @Input() set location(value: LocationCurrent) {
    this.theLocation = value;
    this.localtime =
      this.theLocation.localtime.length < 16
        ? `${this.theLocation.localtime.substring(
            0,
            11
          )}0${this.theLocation.localtime.substring(11)}`
        : this.theLocation.localtime;
  }
  get location() {
    return this.theLocation;
  }

  localtime = '';
  @Input() lastUpdated = '';
  @Input() isWaiting = false;
  @Input() errorHasOccurred = false;

  @Output() remove = new EventEmitter();
  @Output() forecast = new EventEmitter();
}

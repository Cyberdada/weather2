import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApplicationHttpError } from '../../shared/applicationError.model';
import { LocationComponent } from '../location/location.component';

@Component({
  standalone: true,
  imports: [CommonModule, LocationComponent],
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchLocationComponent {
  @Output() locationSelected: EventEmitter<string> = new EventEmitter<string>();

  @Input() isWaiting = false;
  constructor(private readonly cdr: ChangeDetectorRef) {}

  filterChanged(event: Event): void {
    if (event.target) {
      this.isWaiting = true;
      this.locationSelected.emit(
        (event.target as HTMLInputElement).value.trim()
      );
    }
  }
}

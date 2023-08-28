import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { LocationCurrent } from '../../models/location.model';
import { ApplicationHttpError } from '../../shared/applicationError.model';
import { ErrorHandlerService } from '../../shared/error-handler.service';
import { LocationComponent } from '../location/location.component';

@Component({
  standalone: true,
  imports: [CommonModule, LocationComponent],
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchLocationComponent implements OnInit, OnDestroy {
  private destroySubject$: Subject<void> = new Subject();

  theLocation: LocationCurrent | undefined;
  error$!: Observable<ApplicationHttpError>;

  @Input() set location(value: LocationCurrent | undefined) {
    this.theLocation = value;
    this.isWaiting = false;
  }
  get location(): LocationCurrent | undefined {
    return this.theLocation;
  }
  @Output() locationSelected: EventEmitter<string> = new EventEmitter<string>();

  isSearching = false;
  errorHasOccurred = false;
  isWaiting = false;
  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly errorHandlerService: ErrorHandlerService
  ) {}

  ngOnInit(): void {
    this.error$ = this.errorHandlerService.error$;
    this.error$.pipe(takeUntil(this.destroySubject$)).subscribe(() => {
      this.isWaiting = false;
      this.errorHasOccurred = true;
      this.cdr.detectChanges();
    });
  }
  ngOnDestroy(): void {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }

  filterChanged(event: Event): void {
    if (event.target) {
      this.isWaiting = true;
      this.errorHasOccurred = false;
      this.locationSelected.emit(
        (event.target as HTMLInputElement).value.trim()
      );

      this.isSearching = false;
    }
  }
}

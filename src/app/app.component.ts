import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { ErrorHandlerService } from './shared/error-handler.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ApplicationHttpError } from './shared/applicationError.model';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';

@Component({
  standalone: true,
  imports: [OverviewComponent, SnackbarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  private destroySubject$: Subject<void> = new Subject();
  error$!: Observable<ApplicationHttpError>;
  message = '';
  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly errorHandlerService: ErrorHandlerService
  ) {}

  ngOnInit(): void {
    this.error$ = this.errorHandlerService.error$;
    this.error$.pipe(takeUntil(this.destroySubject$)).subscribe((itm) => {
      this.message = `${itm.message}  ${itm.params}`;
      this.cdr.detectChanges();
      setTimeout(() => {
        this.message = '';
        this.cdr.detectChanges();
      }, 2500);
    });
  }
  ngOnDestroy(): void {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }
}

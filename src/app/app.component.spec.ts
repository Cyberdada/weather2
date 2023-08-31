import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';
import { OverviewComponent } from './dashboard/overview/overview.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, SnackbarComponent, OverviewComponent],
    }).compileComponents();
  });
});

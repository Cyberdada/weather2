import { Component } from '@angular/core';
import { OverviewComponent } from './dashboard/overview/overview.component';

@Component({
  standalone: true,
  imports: [OverviewComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'weather';
}

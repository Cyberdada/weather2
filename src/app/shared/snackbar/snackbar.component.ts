import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnackbarComponent {
  theMessage = '';
  @Input() set message(value: string) {
    this.theMessage = value;
  }
  get message() {
    return this.theMessage;
  }
}

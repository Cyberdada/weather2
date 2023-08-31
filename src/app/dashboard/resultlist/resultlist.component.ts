import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from '../result/result.component';
import { CurrentWeather } from 'src/app/models/currentWeather.model';

@Component({
  selector: 'app-resultlist',
  standalone: true,
  imports: [CommonModule, ResultComponent],
  templateUrl: './resultlist.component.html',
  styleUrls: ['./resultlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultlistComponent {
  @Input() results: Array<CurrentWeather> = [];
  @Output() remove = new EventEmitter<number>();
  @Output() forecast = new EventEmitter<number>();
}

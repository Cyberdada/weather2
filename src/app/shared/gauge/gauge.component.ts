import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
// Gauge code nicked and modified from
// https://stackoverflow.com/questions/67235098/how-to-create-semi-circle-ellipse-with-html-css-like-a-gauge-speedometer

// Gauge shows values from -45 to 45,
// therefore gauge value = value * 2 (45 c = 90 deg)

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss'],
})
export class GaugeComponent {
  @Input() value = 0;
  @Input() size = 60;
}

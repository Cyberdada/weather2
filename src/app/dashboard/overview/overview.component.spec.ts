import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { OverviewComponent } from './overview.component';
import { WeatherService } from '../../weather.service';
import { WeatherServiceMock } from '../../weather.service.mock';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LocationCurrent } from '../../models/location.model';
import { WeatherDetail } from '../../models/currentWeather.model';

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;
  const weatherServiceMock = new WeatherServiceMock();
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockSearchComponent,
        MockResultComponent,
        OverviewComponent,
      ],
      providers: [
        {
          provide: WeatherService,
          useValue: weatherServiceMock,
        },
      ],
    });

    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('search should return result in a call to weatherservice', async () => {
    spyOn(weatherServiceMock, 'byLocation');
    fakeAsync(async () => {
      component.search('lon og don');
      tick(300);
      fixture.detectChanges();
      expect(weatherServiceMock.byLocation).toHaveBeenCalled();
    });
  });
});

@Component({
  selector: 'app-search',
  template: '',
})
class MockSearchComponent {
  @Input() location: LocationCurrent | undefined;
  @Output() searchSelected: EventEmitter<string> = new EventEmitter<string>();
}

@Component({
  selector: 'app-result',
  template: '',
})
class MockResultComponent {
  @Input() current: WeatherDetail | undefined;
}

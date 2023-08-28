import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLocationComponent } from './search-location.component';
import { Component, Input } from '@angular/core';
import { LocationCurrent } from '../../models/location.model';
import { currentWeatherMock } from '../../weather.service.mock';

describe('SearchLocationComponent', () => {
  let component: SearchLocationComponent;
  let fixture: ComponentFixture<SearchLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockLocationComponent, SearchLocationComponent],
    });
    fixture = TestBed.createComponent(SearchLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setting location should set waiting to false', () => {
    component.isWaiting = true;
    component.location = currentWeatherMock.location;
    expect(false).toEqual(component.isWaiting);
  });

  it('filterChanged should set waiting to true if there is an event.target', () => {
    component.isSearching = true;
    component.filterChanged({ target: { value: 'bongo ' } } as never);
    expect(false).toEqual(component.isSearching);
  });
});

@Component({
  selector: 'app-location',
  template: '',
})
class MockLocationComponent {
  @Input() location: LocationCurrent | undefined;
  @Input() isWaiting = false;
  @Input() errorHasOccurred = false;
}

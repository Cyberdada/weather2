import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLocationComponent } from './search-location.component';
import { Component, Input } from '@angular/core';
import { LocationCurrent } from '../../models/location.model';

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

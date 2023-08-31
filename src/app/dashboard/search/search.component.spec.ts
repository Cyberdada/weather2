import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LocationCurrent } from '../../models/location.model';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockSearchLocation, SearchComponent],
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-search-location',
  template: '',
})
class MockSearchLocation {
  @Input() location: LocationCurrent | undefined;
  @Output() locationSelected: EventEmitter<string> = new EventEmitter<string>();
}

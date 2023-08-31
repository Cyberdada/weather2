import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { of } from 'rxjs';
import { ErrorHandlerServiceMock } from 'src/app/shared/error-handler.service.mock';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpClientSpy: { get: jasmine.Spy; post: jasmine.Spy };
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HttpClient, useValue: httpClientSpy },
        { provide: ErrorHandlerService, useValue: mockErrorHandler },
      ],
    });
    service = TestBed.inject(WeatherService);
  });
  const mockErrorHandler = new ErrorHandlerServiceMock();
  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('byLocation should return an observable if location is found', (done: DoneFn) => {
    const getMock = httpClientSpy.get.and.callFake(() => of({}));
    service.byLocation('London').subscribe(() => {
      done();
      expect(getMock).toHaveBeenCalled();
    });
  });

  test('byLocation should invoke errorHandlerService if error is thrown', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(
      of(new HttpErrorResponse({ status: 422 }))
    );
    spyOn(mockErrorHandler, 'handleHttpError');
    service.byLocation('London').subscribe((itm) => {
      console.log(itm);
      done();
      expect(mockErrorHandler.handleHttpError).toHaveBeenCalled();
    });
  });
});

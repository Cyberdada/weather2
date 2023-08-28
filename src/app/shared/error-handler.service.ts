import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { ApplicationHttpError } from './applicationError.model';
import { HttpErrorResponse } from '@angular/common/http';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  private readonly errorSource = new ReplaySubject<ApplicationHttpError>(1);
  // eslint-disable-next-line @typescript-eslint/member-ordering
  error$ = this.errorSource.asObservable();

  constructor(private readonly loggerService: LoggerService) {}

  handleHttpError<T>(
    operation = 'defaultOp',
    component = 'defaultComp',
    params = '',
    result?: T
  ) {
    return (error: HttpErrorResponse): Observable<T> => {
      {
        const message =
          error.status !== 0 &&
          error.error &&
          error.error.error &&
          error.error.error.message
            ? error.error.error.message
            : error.message;

        const httpError: ApplicationHttpError = {
          operation,
          component,
          params,
          error,
          message,
        };
        this.loggerService.logHttpError(httpError);
        this.errorSource.next(httpError);
        return of(result as T);
      }
    };
  }
}

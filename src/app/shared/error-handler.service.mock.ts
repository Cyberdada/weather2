import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export class ErrorHandlerServiceMock {
  handleHttpError<T>(
    operation = 'defaultOp',
    component = 'defaultComp',
    params = '',
    result?: T
  ) {
    return (error: HttpErrorResponse): Observable<T> => {
      return of(result as T);
    };
  }
}

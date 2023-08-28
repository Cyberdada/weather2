import { HttpErrorResponse } from '@angular/common/http';

export interface ApplicationHttpError {
  component: string;
  operation: string;
  params: string;
  error: HttpErrorResponse;
  message: string;
}

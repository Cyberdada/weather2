import { Injectable } from '@angular/core';
import { ApplicationHttpError } from './applicationError.model';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  // This should probably do something more intelligent in the future
  // for now it only dumps info into the console.

  logHttpError(error: ApplicationHttpError) {
    console.warn(
      `Error: ${error.error.status}
  Message: ${error.message} 
  Params: ${error.params}`
    );
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  persist(list: Array<string>) {
    if (list.length === 0) return;
    localStorage.setItem('latlongs', JSON.stringify(list));
  }
  load(): Array<string> {
    const retval = localStorage.getItem('latlongs');
    return retval === null ? [] : JSON.parse(retval);
  }
}

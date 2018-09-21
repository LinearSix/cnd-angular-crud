import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {Volcano} from './volcano';
import {VOLCANOES} from './mock-volcanoes';

@Injectable({
  providedIn: 'root'
})
export class VolcanoService {

  constructor() {
  }

  getVolcanoes(): Observable<Volcano[]> {
    return of(VOLCANOES);
  }
}

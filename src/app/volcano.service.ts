import {Injectable} from '@angular/core';

import {Volcano} from './volcano';
import {VOLCANOES} from './mock-volcanoes';

@Injectable({
  providedIn: 'root'
})
export class VolcanoService {

  constructor() {
  }

  getVolcanoes(): Volcano[] {
    return VOLCANOES;
  }
}

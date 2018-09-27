import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import {Volcano} from '../volcano';
import {VolcanoService} from '../volcano.service';

@Component({
  selector: 'app-volcano-search',
  templateUrl: './volcano-search.component.html',
  styleUrls: [ './volcano-search.component.css' ]
})
export class VolcanoSearchComponent implements OnInit {
  volcanoes$: Observable<Volcano[]>;
  private searchTerms = new Subject<string>();

  constructor(private volcanoService: VolcanoService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.volcanoes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.volcanoService.searchVolcanoes(term)),
    );
  }
}

import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

import {Volcano} from './volcano';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class VolcanoService {
  private volcanoesUrl = 'api/volcanoes';  // URL to web api

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {
  }

  private log(message: string) {
    this.messageService.add(`VolcanoService: ${message}`);
  }

  getVolcanoes(): Observable<Volcano[]> {
    this.messageService.add('VolcanoService: fetched volcanoes');
    return this.http.get<Volcano[]>(this.volcanoesUrl)
      .pipe(
        tap(volcanoes => this.log('fetched volcanoes')),
        catchError(this.handleError('getVolcanoes', []))
      );
  }

  getVolcano(id: number): Observable<Volcano> {
    const url = `${this.volcanoesUrl}/${id}`;
    return this.http.get<Volcano>(url)
      .pipe(
        tap(_ => this.log(`fetched volcano id=${id}`)),
        catchError(this.handleError<Volcano>(`getVolcano id=${id}`))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

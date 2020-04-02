import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import { catchError, tap } from 'rxjs/internal/operators';
import { CountryModel } from '../models/country.model';

@Injectable()
export class CountryService {

  public URL_API = 'https://restcountries.eu/rest/v2/all';

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<CountryModel.ICountry[]>{
    return this.http.get<CountryModel.ICountry[]>(this.URL_API).pipe(
      catchError(
        this.handleError<CountryModel.ICountry[]>('Country API',[]))
    );;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string) {
    console.log(message);
  }
}

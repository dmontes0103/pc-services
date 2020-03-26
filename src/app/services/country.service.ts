import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CountryService {

  public URL_API = 'https://restcountries.eu/rest/v2/all';

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<any>{
    return this.http.get(this.URL_API);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  quoteUrl='https://type.fit/api/quotes';
  
  constructor(private http: HttpClient) {

   
   }

   getQuotes():Observable<any>
   {
    return this.http.get(this.quoteUrl);
   }
}

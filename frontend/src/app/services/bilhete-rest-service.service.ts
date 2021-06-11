import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bilhete } from '../model/bilhete';

const endpoint = 'http://localhost:3000/api/v1/bilhete';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class BilheteRestServiceService {
  constructor(private http: HttpClient) {}

 
  addBilhete(bilhete: Bilhete): Observable<any> {
    console.log(bilhete);
    return this.http.post<Bilhete>(endpoint + '/addBilhete', bilhete);
  }

}

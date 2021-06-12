import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bilhete } from '../model/bilhete';
import { Evento } from '../model/evento';

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
    console.log(bilhete.eventID);
    return this.http.post<Bilhete>(endpoint + '/' + bilhete.eventID, bilhete);
  }

  listAllBilhetes(): Observable<any> {
    return this.http.get<Bilhete[]>(endpoint + '/allBilhetes');
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../model/evento';

const endpoint = 'http://localhost:3000/api/v1/event';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class EventRestServiceService {
  constructor(private http: HttpClient) {}

  addEvento(evento: Evento): Observable<any> {
    console.log(evento);
    return this.http.post<Evento>(endpoint + '/create', evento);
  }

  listAllEvento(): Observable<any> {
    return this.http.get<Evento[]>(endpoint + '/allEvents');
  }
  
  editEvento(evento:Evento){
    return this.http.put<Evento>(endpoint + '/edit/' + evento._id, evento);
 
  }
  getEvento(eventoId:string){
    return this.http.get<Evento>(endpoint + '/getEvento/' + eventoId);
 
  }
  
  listAllAvailableEvento(): Observable<any> {
    return this.http.get<Evento[]>(endpoint + '/allAvailableEvents');
  }

}

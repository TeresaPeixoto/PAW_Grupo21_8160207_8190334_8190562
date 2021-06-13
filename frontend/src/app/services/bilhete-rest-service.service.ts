import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bilhete } from '../model/bilhete';
import { User } from '../model/user';

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

  listAllBilhetes(id: string): Observable<any> {
    return this.http.get<Bilhete[]>(endpoint + '/viewtickets/' + id);
  }

  getBilhete(bilheteId:string){
    return this.http.get<Bilhete>(endpoint + '/view/' + bilheteId);
 
  }
  editBilheteByID(bilhete:Bilhete){
    return this.http.put<Bilhete>(endpoint + '/edit/' + bilhete._id, bilhete);
 
  }
  deleteBilhete(bilhete: Bilhete){
    return this.http.delete<Bilhete>(endpoint + '/delete/' + bilhete._id);
 
  }

  cancelarBilhete(bilhete:Bilhete){
    return this.http.put<Bilhete>(endpoint + '/cancelticket/' + bilhete._id, bilhete);
  }

  aceitarBilhete(bilhete:Bilhete){
    return this.http.put<Bilhete>(endpoint + '/aceitarticket/' + bilhete._id, bilhete);
  }
  listAllBilhetesUser():Observable<any>{
    return this.http.get<Bilhete[]>(endpoint + '/allbilhetes');
  }

}

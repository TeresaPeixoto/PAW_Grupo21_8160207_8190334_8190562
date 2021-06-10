import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PedidoModel } from '../model/pedido';

const endpoint = 'http://localhost:3000/api/v1/requests';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})

export class RequestRestServiceService {
  constructor(private http: HttpClient) {}

  createRequest(pedido: PedidoModel): Observable<any> {
    return this.http.post<PedidoModel>(endpoint + '/createRequest', pedido);
  }

  getRequest(email: string): Observable<any> {
    return this.http.get<any>(endpoint + '/getRequestByEmail/' +email );
  }

  getAllRequests():Observable<any>{
    return this.http.get<PedidoModel[]>(endpoint + '/allRequest');

  }

  deleteRequest(id: string):Observable<any>{
    return this.http.delete<any>(endpoint+'/deleteRequest/'+ id);
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Local } from '../model/local';

const endpoint = 'http://localhost:3000/api/v1/local';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class LocalRestServiceService {
  constructor(private http: HttpClient) {}

  createLocal(local: Local): Observable<any> {
    return this.http.post<Local>(endpoint + '/create', local);
  }

  getAllLocals(): Observable<any> {
    return this.http.get<Local[]>(endpoint + '/showAllLocals');
  }

  editEvento(local: Local): Observable<any> {
    return this.http.put<Local>(endpoint + '/edit/' + local._id, local);
  }

  getLocal(localID: string): Observable<any> {
    return this.http.get<Local>(endpoint + '/showLocal/' + localID);
  }

  deleteLocal(id: string): Observable<any> {
    return this.http.delete<Local>(endpoint + '/delete/' + id);
  }
}

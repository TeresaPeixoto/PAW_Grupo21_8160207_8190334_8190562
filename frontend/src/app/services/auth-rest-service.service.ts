import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../model/login';
import { User } from '../model/user';

const endpoint = 'http://localhost:3000/api/v1/auth/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthRestServiceService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(
      endpoint + 'login',
      new LoginModel(email, password)
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  register(user: User): Observable<any> {
    console.log('no serviço');
    console.log(user);
    return this.http.post<User>('http://localhost:3000/api/v1/register', user);
  }

  save(user:User){
    return this.http.put<any>('http://localhost:3000/api/v1/users/clientProfile/edit/' + user.email, user);
 
  }

  getUser(email: string): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/v1/users/clientProfile/' + email);
  }

  getAllUsers():Observable<any>{
    return this.http.get<User[]>('http://localhost:3000/api/v1/users/allUsers');
  }

  becomeAdmin(tempUser: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/v1/adminsaywhat', tempUser
    );
  }
  becomePromotor(email: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/v1/adminsaywhat/newPromot', email
    );
  }

  suspendUser(email: any): Observable<any> {
    return this.http.put<any>('http://localhost:3000/api/v1/users/clientProfile/suspend/'+ email, email
    );
  }

  activeUser(email: any): Observable<any> {
    return this.http.put<any>('http://localhost:3000/api/v1/users/clientProfile/active/'+ email, email
    );
  }

  removeProm(email: any): Observable<any> {
    return this.http.put<any>('http://localhost:3000/api/v1/users/clientProfile/demotepromotor/'+ email, email
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

import {  Router } from '@angular/router';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';

@Component({
  selector: 'app-home-prom',
  templateUrl: './home-prom.component.html',
  styleUrls: ['./home-prom.component.css']
})
export class HomePromComponent implements OnInit {

  currentUser: User;
  email:string;
  constructor(
    private auth: AuthRestServiceService, 
    private router: Router,) {
    this.currentUser = new User();
    this.email="";
    }

  ngOnInit(): void {
    var tempUser = localStorage.getItem('currentUser');
    
    if (tempUser != null) {
      
      this.email = JSON.parse(tempUser).email;
      this.auth.getUser(this.email).subscribe((user: User) => {
        if (user) {
          console.log(user);
          if(user.role=="promotor"){
          this.currentUser = user;
          console.log(this.currentUser);
        }else{
          
        this.router.navigate(['/home']);
        }} else {
          alert('Erro no pedido do utilizador!');
        }
      });
    }
  }
  
  logout(): void {
    console.log('clicou no logout');
    this.auth.logout();
  }
}

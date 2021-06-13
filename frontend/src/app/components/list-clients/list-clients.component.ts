import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css'],
})
export class ListClientsComponent implements OnInit {
  currentUser: User;
  users: Array<User> = [];
  verify: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthRestServiceService
  ) {
    this.currentUser = new User();
    this.verify = true;
  }

  ngOnInit(): void {
    var tempUser = localStorage.getItem('currentUser');

    if (tempUser != null) {
      this.currentUser = JSON.parse(tempUser);
    }

    this.auth.getAllUsers().subscribe((users: Array<User>) => {
      console.log(users);
      for (let i = 0; i < users.length; i++) {
        if (users[i] != null && users[i].role == 'cliente') {
          
            this.users.push(users[i]);
            console.log(users[i]);
          
        }
      }
    });
  }

  load() {
    location.reload();
  }

  suspend(email:any): void {
    this.auth.suspendUser(email).subscribe((user:any)=>{
      if(user){
        console.log(user);
      }else{
        alert('Erro!');
      }
    })
  }

  active(email:any): void {
    this.auth.activeUser(email).subscribe((user:any)=>{
    if(user){
      console.log(user);
    }else{
      alert('Erro!');
    }
  })}


  logout(): void {
    console.log('clicou no logout');
    this.auth.logout();
  }
}

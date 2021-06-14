import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-list-prom',
  templateUrl: './list-prom.component.html',
  styleUrls: ['./list-prom.component.css'],
})
export class ListPromComponent implements OnInit {
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
        if (users[i] != null && users[i].role == 'promotor') {
          this.users.push(users[i]);
          console.log(users[i]);
        }
      }
    });
  }

  load() {
    location.reload();
  }

  removeProm(email: any): void {
    this.auth.removeProm(email).subscribe((user: any) => {
      if (user) {
        console.log(user);
      } else {
        alert('Erro!');
      }
    });
  }

  logout(): void {
    console.log('clicou no logout');
    this.auth.logout();
  }
}

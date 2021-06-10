import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-become-admin',
  templateUrl: './become-admin.component.html',
  styleUrls: ['./become-admin.component.css'],
})
export class BecomeAdminComponent implements OnInit {
  currentUser: User;
  email: string;
  password: string;

  constructor(private router: Router, private auth: AuthRestServiceService) {
    this.currentUser = new User();
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void {}

  becomeAdmin(): void {
    this.auth.becomeAdmin({"email":this.email, "pass":this.password}).subscribe((user: any) => {
      console.log(user);
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        
      } else {
        alert('Erro!');
      }
    });
  }
}

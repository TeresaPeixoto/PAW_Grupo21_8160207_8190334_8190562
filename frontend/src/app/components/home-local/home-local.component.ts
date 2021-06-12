import { Component, OnInit } from '@angular/core';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';

import { User } from 'src/app/model/user';
@Component({
  selector: 'app-home-local',
  templateUrl: './home-local.component.html',
  styleUrls: ['./home-local.component.css']
})
export class HomeLocalComponent implements OnInit {

  currentUser: User;
  constructor(private auth: AuthRestServiceService) { 
    
    this.currentUser = new User();
  }

  ngOnInit(): void {
    var tempUser = localStorage.getItem('currentUser');

    if (tempUser != null) {
      this.currentUser = JSON.parse(tempUser);
    }
  }

  logout(): void {
    console.log('clicou no logout');
    this.auth.logout();
  }
}

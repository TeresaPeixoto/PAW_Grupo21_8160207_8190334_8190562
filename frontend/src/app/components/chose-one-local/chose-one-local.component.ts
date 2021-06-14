import { Component, OnInit } from '@angular/core';
import { Local } from 'src/app/model/local';
import { User } from 'src/app/model/user';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-chose-one-local',
  templateUrl: './chose-one-local.component.html',
  styleUrls: ['./chose-one-local.component.css'],
})
export class ChoseOneLocalComponent implements OnInit {
  currentUser: User;
  email: string;
  local: Local;
  idLocal: string;

  public formulario: FormGroup = new FormGroup({
    idLocal: new FormControl(null, [Validators.required]),
 
  });

  constructor(private auth: AuthRestServiceService) {
    this.currentUser = new User();
    this.email = '';
    this.local = new Local();
    this.idLocal='';
  }

  ngOnInit(): void {
    var tempUser = localStorage.getItem('currentUser');

    if (tempUser != null) {
      this.email = JSON.parse(tempUser).email;
      this.currentUser = JSON.parse(tempUser);
    }
  }

  logout(): void {
    console.log('clicou no logout');
    this.auth.logout();
  }
}

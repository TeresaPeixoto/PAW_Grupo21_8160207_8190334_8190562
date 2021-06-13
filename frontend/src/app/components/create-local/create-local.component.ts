import { Component, OnInit } from '@angular/core';
import { Local } from '../../model/local';
import { LocalRestServiceService } from 'src/app/services/local-rest-service.service';
import { Router } from '@angular/router';
import { EventRestServiceService } from 'src/app/services/event-rest-service.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';

@Component({
  selector: 'app-create-local',
  templateUrl: './create-local.component.html',
  styleUrls: ['./create-local.component.css'],
})
export class CreateLocalComponent implements OnInit {
  public formulario: FormGroup = new FormGroup({
    morada: new FormControl(null, [Validators.required]),
    maxLotacao: new FormControl(null, [Validators.required]),
    lotacaoPercent: new FormControl('', [
      Validators.required,
      Validators.max(90),
      Validators.min(20),
    ])
  });

  local: Local = new Local();
  currentUser: User;
  email:string;

  constructor(
    private auth: AuthRestServiceService,
    private router: Router,
    private authServive: EventRestServiceService,
    private rest: LocalRestServiceService
  ) {
    this.currentUser = new User();
    this.email="";
  }

  ngOnInit(): void {
    var tempUser = localStorage.getItem('currentUser');

    if (tempUser != null) {
      this.email = JSON.parse(tempUser).email;
      this.currentUser = JSON.parse(tempUser);
    }

    this.auth.getUser(this.email).subscribe((user: User) => {
      console.log(user);
      if (user) {
        if (user.role == 'cliente') {
          this.router.navigate(['/home']);
        } else {
          this.currentUser = user;
          console.log(this.currentUser);
        }
      }
    });
  }

  createLocal(): void {
    if (this.formulario.status === 'INVALID') {
      console.log('formulario invalido');
    } else {
      console.log('na funçao de adicionar local');
      this.rest.createLocal(this.formulario.value).subscribe((local: any) => {
        console.log(local);
        if (local) {
          this.router.navigate(['/']);
        } else {
          alert('Erro em adicionar local');
        }
      });
    }
  }

  logout(): void {
    console.log('clicou no logout');
    this.auth.logout();
  }
}

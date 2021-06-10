import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import { Router } from '@angular/router';
import { AuthRestServiceService } from 'src/app/services/auth-rest-service.service';
import { FormGroup, Validators, FormControl, MinLengthValidator, MinValidator } from '@angular/forms';

@Component({
  selector: 'app-registo',
  templateUrl: './registo.component.html',
  styleUrls: ['./registo.component.css'],
})
export class RegistoComponent implements OnInit {
  user: User = new User();
  error: any;

  public formulario: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    userName: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    birthDate: new FormControl(null, [Validators.required]),
    cellphone: new FormControl(null, [ Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
    address: new FormControl(null, [Validators.required]),
    nif: new FormControl(null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
  });

  constructor(
    private router: Router,
    private authServive: AuthRestServiceService
  ) {}

  ngOnInit(): void {}

  registo(): void {
    console.log("na funcao de registo");
    this.authServive
      .register(this.formulario.value)
      .subscribe((user: any) => {
        console.log(user);
        if (user) {
          this.router.navigate(['/login']);
        } else {
          alert('Erro no registo!');
        }
      });
  }
}

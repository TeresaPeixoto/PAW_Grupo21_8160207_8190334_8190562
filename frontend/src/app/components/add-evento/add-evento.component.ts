import { Component, OnInit } from '@angular/core';
import { Evento } from '../../model/evento';
import { Router } from '@angular/router';
import { EventRestServiceService } from 'src/app/services/event-rest-service.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';

@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.component.html',
  styleUrls: ['./add-evento.component.css'],
})
export class AddEventoComponent implements OnInit {
  evento: Evento = new Evento();
  error: any;
  imageSrc: string | undefined;
  currentUser: User;
  email: string;

  public formulario: FormGroup = new FormGroup({
    eventName: new FormControl(null, [Validators.required]),
    local: new FormControl(null, [Validators.required]),
    eventDate: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    lugares: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    lotacao: new FormControl('', [
      Validators.required,
      Validators.max(90),
      Validators.min(20),
    ]),
    eventPicture: new FormControl(null, [Validators.required]),
  });

  //locais: Array<Local> = [];

  constructor(
    private auth: AuthRestServiceService,
    private router: Router,
    private authServive: EventRestServiceService
  ) {
    this.currentUser = new User();
    this.email = '';
  }

  ngOnInit(): void {
    var tempUser = localStorage.getItem('currentUser');
    
    if (tempUser != null) {
      
      this.email = JSON.parse(tempUser).email;

    this.auth.getUser(this.email).subscribe((user: User) => {
      console.log(user);
      if (user) {
        if (user.role == 'promotor') {
          this.currentUser = user;
          console.log(this.currentUser);
        } else {
          this.router.navigate(['/home']);

          /*
    for (let i = 0; i < locais.length; i++) {
      if (
        locais[i]._id != null) {
        this.locais.push(locais[i]);
        console.log(locais[i]);
      }
    }*/
        }
      }
    });}
  }
  add_evento(): void {
    if (this.formulario.status === 'INVALID') {
      console.log('formulario invalido');
    } else {
      console.log('na funçao de adicionar evento');
      this.authServive
        .addEvento(this.formulario.value)
        .subscribe((evento: any) => {
          console.log(evento);
          if (evento) {
            this.router.navigate(['/']);
          } else {
            alert('Erro em adicionar evento');
          }
        });
    }
  }

  logout(): void {
    console.log('clicou no logout');
    this.auth.logout();
  }
  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageSrc = reader.result as string;

        this.formulario.patchValue({
          eventPicture: reader.result,
        });
      };
    }
  }
}

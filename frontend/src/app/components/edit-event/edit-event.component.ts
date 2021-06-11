import { Component, OnInit } from '@angular/core';
import { Evento } from '../../model/evento';
import { Router, ActivatedRoute } from '@angular/router';
import { EventRestServiceService } from 'src/app/services/event-rest-service.service';
import { User } from 'src/app/model/user';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css'],
})
export class EditEventComponent implements OnInit {
  evento: Evento = new Evento();
  error: any;
  imageSrc: string | undefined;
  currentUser: User;
  email: string;
  currentEvent: Evento;
  dImage: any;

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

  constructor(
    private auth: AuthRestServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private rest: EventRestServiceService
  ) {
    this.currentUser = new User();
    this.email = '';
    this.currentEvent = new Evento();
  }

  ngOnInit(): void {
    console.log(this.currentEvent);
    this.route.params.subscribe((params) => {
      console.log(params);
      this.rest.getEvento(params.id).subscribe((evento: any) => {
        this.currentEvent = evento;
        this.dImage = this.currentEvent.eventPicture;
      });
    });
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
          }
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

  updateEvent(): void {
    console.log('chegou aqui');
    console.log(this.currentEvent);
    this.rest.editEvento(this.currentEvent).subscribe((currentEvent: any) => {
      if (currentEvent) {
        console.log(currentEvent);
      } else {
        alert('Erro no update!');
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Evento } from '../../model/evento';
import { Router } from '@angular/router';
import { EventRestServiceService } from 'src/app/services/event-rest-service.service';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-list-all-events',
  templateUrl: './list-all-events.component.html',
  styleUrls: ['./list-all-events.component.css'],
})
export class ListAllEventsComponent implements OnInit {
  evento: Evento;
  eventos: Array<Evento> = [];
  currentUser: User;
  email: string;

  constructor(
    private router: Router,
    private rest: EventRestServiceService,
    private auth: AuthRestServiceService
  ) {
    this.evento = new Evento();
    this.currentUser = new User();
    this.email = '';
  }

  ngOnInit(): void {
    this.getAllEvents();

    var tempUser = localStorage.getItem('currentUser');
    if (tempUser != null) {
      this.email = JSON.parse(tempUser).email;
      this.auth.getUser(this.email).subscribe((user: User) => {
        if (user) {
          this.currentUser = user;
          console.log(this.currentUser);
        } else {
          alert('Erro no pedido do utilizador!');
        }
      });
    }
  }

  getAllEvents() {
    this.rest.listAllEvento().subscribe((eventos: Array<Evento>) => {
      console.log(eventos);
      for (let i = 0; i < eventos.length; i++) {
        if (eventos[i]._id != null) {
          this.eventos.push(eventos[i]);
          console.log(eventos[i]);
        }
      }
    });
  }

  verMais() {
    this.rest.editEvento(this.evento).subscribe((evento: any) => {});
  }
}

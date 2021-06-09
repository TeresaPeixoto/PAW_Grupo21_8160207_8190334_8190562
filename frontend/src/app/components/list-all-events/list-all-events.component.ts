import { Component, OnInit } from '@angular/core';
import { Evento } from '../../model/evento';
import { Router, ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
    private rest: EventRestServiceService,
    private auth: AuthRestServiceService
  ) {
    this.evento = new Evento();
    this.currentUser = new User();
    this.email = '';
  }

  ngOnInit(): void {
    var tempUser = localStorage.getItem('currentUser');

    if (tempUser != null) {
      this.email = JSON.parse(tempUser).email;
      this.currentUser = JSON.parse(tempUser);
    }
    this.getAllAvailableEvents();
  }

  getAllAvailableEvents() {
    this.rest.listAllAvailableEvento().subscribe((eventos: Array<Evento>) => {
      console.log(eventos);
      for (let i = 0; i < eventos.length; i++) {
        if (
          eventos[i]._id != null &&
          eventos[i].eventStatus == 'Por decorrer'
        ) {
          this.eventos.push(eventos[i]);
          console.log(eventos[i]);
        }
      }
    });
  }

  verMais() {
    this.rest.editEvento(this.evento).subscribe((evento: any) => {});
  }

  logout(): void {
    console.log('clicou no logout');
    this.auth.logout();
  }
}

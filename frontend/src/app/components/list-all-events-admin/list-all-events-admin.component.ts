import { Component, OnInit } from '@angular/core';
import { Evento } from '../../model/evento';
import { Router, ActivatedRoute } from '@angular/router';
import { EventRestServiceService } from 'src/app/services/event-rest-service.service';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-list-all-events-admin',
  templateUrl: './list-all-events-admin.component.html',
  styleUrls: ['./list-all-events-admin.component.css'],
})
export class ListAllEventsAdminComponent implements OnInit {
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
    this.route.params.subscribe((params) => {
      console.log(params);
      if (params.sla == 1) {
        this.getAllAvailableEvents();
      } else if (params.sla == 2) {
        this.getAllFinishedEvents();
      } else {
        console.log('Erro');
      }
    });

    var tempUser = localStorage.getItem('currentUser');

    if (tempUser != null) {
      this.email = JSON.parse(tempUser).email;
      this.currentUser = JSON.parse(tempUser);
    }
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

  getAllFinishedEvents() {
    this.rest.listAllFinishedEvents().subscribe((eventos: Array<Evento>) => {
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

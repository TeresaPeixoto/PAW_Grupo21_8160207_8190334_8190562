import { Component, OnInit } from '@angular/core';
import { Evento } from '../../model/evento';
import { Router, ActivatedRoute } from '@angular/router';
import { EventRestServiceService } from 'src/app/services/event-rest-service.service';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';
import { User } from 'src/app/model/user';
import { Local } from 'src/app/model/local';
import { LocalRestServiceService } from 'src/app/services/local-rest-service.service';

@Component({
  selector: 'app-list-all-events',
  templateUrl: './list-all-events.component.html',
  styleUrls: ['./list-all-events.component.css'],
})
export class ListAllEventsComponent implements OnInit {
  evento: Evento;
  eventos: Array<any> = [];
  currentUser: User;
  email: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rest: EventRestServiceService,
    private auth: AuthRestServiceService,
    private localService: LocalRestServiceService
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
    this.rest.listAllAvailableEvento().subscribe((eventos: Array<any>) => {
      console.log(eventos);
      for (let i = 0; i < eventos.length; i++) {
        if (
          eventos[i]._id != null &&
          eventos[i].eventStatus == 'Por decorrer'
        ) {
          this.localService.getAllLocals().subscribe((local: any) => {
            console.log(local);
            for (let j = 0; j < local.length; j++) {
              if (local[j]._id != eventos[i].localID) {
                eventos[i]['morada'] = local[j].morada;
                eventos[i]['maxLotacao'] = local[j].maxLotacao;
                eventos[i]['currentLotacao'] = local[j].currentLotacao;

                this.eventos.push(eventos[i]);
                console.log(eventos[i]);
              }
            }
          });
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

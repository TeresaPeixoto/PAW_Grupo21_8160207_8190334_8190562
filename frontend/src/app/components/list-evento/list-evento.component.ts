import { Component, OnInit } from '@angular/core';
import { Evento } from '../../model/evento';
import { Router, ActivatedRoute } from '@angular/router';
import { EventRestServiceService } from 'src/app/services/event-rest-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';
import { User } from 'src/app/model/user';
import { Local } from 'src/app/model/local';
import { LocalRestServiceService } from 'src/app/services/local-rest-service.service';

@Component({
  selector: 'app-list-evento',
  templateUrl: './list-evento.component.html',
  styleUrls: ['./list-evento.component.css'],
})
export class ListEventoComponent implements OnInit {
  currentEvent: any;
  dImage: any;
  currentUser: User;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rest: EventRestServiceService,
    private auth: AuthRestServiceService,
    private localService: LocalRestServiceService
  ) {

    this.currentUser = new User();
  }

  ngOnInit(): void {
    var tempUser = localStorage.getItem('currentUser');

    if (tempUser != null) {
      this.currentUser = JSON.parse(tempUser);
    }

    console.log(this.currentEvent);
    this.route.params.subscribe((params) => {
      console.log(params);
      this.rest.getEvento(params.id).subscribe((evento: any) => {
        this.currentEvent = evento;
        this.dImage = this.currentEvent.eventPicture;
        this.localService.getLocal(evento.localID).subscribe((local: any) => {
          console.log(local);

          if (local._id != null) {
            this.currentEvent['morada'] = local.morada;
            this.currentEvent['maxLotacao'] = local.maxLotacao;
            this.currentEvent['currentLotacao'] = local.currentLotacao;

          }
        });
      });
    });
  }

  updateEvent(): void {
    console.log('chegou aqui');
    this.rest.editEvento(this.currentEvent).subscribe((currentEvent: any) => {
      if (currentEvent) {
        this.router.navigate(['/']);
      } else {
        alert('Erro no update!');
      }
    });
  }

  

  logout(): void {
    console.log('clicou no logout');
    this.auth.logout();
  }
}

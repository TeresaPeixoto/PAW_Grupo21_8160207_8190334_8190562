import { Component, OnInit } from '@angular/core';
import { Evento } from '../../model/evento';
import { Router, ActivatedRoute } from '@angular/router';
import { EventRestServiceService } from 'src/app/services/event-rest-service.service';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';
import { User } from 'src/app/model/user';
import { Local } from 'src/app/model/local';
import { LocalRestServiceService } from 'src/app/services/local-rest-service.service';

@Component({
  selector: 'app-list-event-prom',
  templateUrl: './list-event-prom.component.html',
  styleUrls: ['./list-event-prom.component.css'],
})
export class ListEventPromComponent implements OnInit {
  evento: Evento;
  eventos: Array<any> = [];
  currentUser: User;
  email: string;
  id: string;

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
    this.id = '';
  }

  ngOnInit(): void {
    var tempUser = localStorage.getItem('currentUser');

    if (tempUser != null) {
      this.email = JSON.parse(tempUser).email;
      this.currentUser = JSON.parse(tempUser);

      this.auth.getUser(this.email).subscribe((user: any) => {
        console.log(user);
        if (user) {
          this.id = user._id;
          console.log(this.id);

          this.getAllEvents();
        } else {
          this.router.navigate(['/home']);
        }
      });
    }
  }

  getAllEvents(): void {
    this.rest
      .listEventBySpecificPromotor(this.id)
      .subscribe((eventos: Array<any>) => {
        console.log(eventos);console.log("eventos");
        for (let i = 0; i < eventos.length; i++) {
          if (eventos[i]._id != eventos[i].localID) {
            this.localService.getAllLocals().subscribe((local: any) => {
              console.log(local);
              for (let j = 0; j < local.length; j++) {
                if (local[j]._id != null) {
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

  logout(): void {
    console.log('clicou no logout');
    this.auth.logout();
  }
}

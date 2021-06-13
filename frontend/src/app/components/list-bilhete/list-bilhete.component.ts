import { Component, OnInit } from '@angular/core';
import { Bilhete } from 'src/app/model/bilhete';
import { Router, ActivatedRoute } from '@angular/router';
import { BilheteRestServiceService } from 'src/app/services/bilhete-rest-service.service';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';
import { User } from 'src/app/model/user';
import { EventRestServiceService } from 'src/app/services/event-rest-service.service';
import { Evento } from 'src/app/model/evento';

@Component({
  selector: 'app-list-bilhete',
  templateUrl: './list-bilhete.component.html',
  styleUrls: ['./list-bilhete.component.css'],
})
export class ListbilheteComponent implements OnInit {
  currentBilhete: Bilhete;
  comp: any;
  currentUser: User;
  bilhetes: Array<any> = [];
  currentEvent: Evento;
  b:any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rest: BilheteRestServiceService,
    private auth: AuthRestServiceService,
    private eventService: EventRestServiceService
  ) {
    this.currentBilhete = new Bilhete();
    this.currentUser = new User();
    this.currentEvent = new Evento();
  }

  ngOnInit(): void {
    var tempUser = localStorage.getItem('currentUser');

    if (tempUser != null) {
      this.currentUser = JSON.parse(tempUser);
    }

    console.log(this.currentBilhete);
    this.route.params.subscribe((params) => {
      console.log(params);
      this.rest.getBilhete(params.id).subscribe((bilhete: any) => {
        this.currentBilhete = bilhete;
        this.comp = this.currentBilhete.comprovativo;
      });
    });
  }

  listBilhete(): void {
    console.log('chegou aqui');
      if (this.currentBilhete) {
            console.log(this.currentBilhete);
            console.log(this.bilhetes);

            this.eventService.getEvento(this.b.eventID).subscribe((evento: any) => {
              //como é apenas para listar
              this.b.eventName= evento.eventName; 
              
              this.bilhetes.push(this.b);
            });
        this.router.navigate(['/']);
      } else {
        alert('Erro na listagem!');
      }
    
  }

  logout(): void {
    console.log('clicou no logout');
    this.auth.logout();
  }
}

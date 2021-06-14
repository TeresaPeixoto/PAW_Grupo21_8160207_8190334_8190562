import { Component, OnInit } from '@angular/core';
import { Bilhete } from 'src/app/model/bilhete';
import { Router, ActivatedRoute } from '@angular/router';
import { BilheteRestServiceService } from 'src/app/services/bilhete-rest-service.service';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';
import { User } from 'src/app/model/user';
import { EventRestServiceService } from 'src/app/services/event-rest-service.service';

@Component({
  selector: 'app-prom-accept-bilhete',
  templateUrl: './prom-accept-bilhete.component.html',
  styleUrls: ['./prom-accept-bilhete.component.css']
})
export class PromAcceptBilheteComponent implements OnInit {
  currentUser: User;
  email: string;
  bilhete: Bilhete;
  bilhetes: Array<any> = [];
  userId: string;
  comp:any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rest: BilheteRestServiceService,
    private auth: AuthRestServiceService,
    private eventService: EventRestServiceService
  ) {
    this.bilhete = new Bilhete();
    this.currentUser = new User();
    this.email = '';
    this.userId = '';

  }

  ngOnInit(): void {
    var tempUser = localStorage.getItem('currentUser');

    if (tempUser != null) {
      this.email = JSON.parse(tempUser).email;
      this.currentUser = JSON.parse(tempUser);
      this.userId = JSON.parse(tempUser)._id;
    }
    this.auth.getUser(this.email).subscribe((user: any) => {
      if (user) {
        this.currentUser = user;
        console.log(this.currentUser);
        if(this.currentUser.role=="promotor"){
          this.userId = user._id;
          this.getAllBilhetes();
        }    
      } else {
        alert('Erro no pedido do utilizador!');
      }
    });
  }

  getAllBilhetes() {
    this.rest
      .listAllBilhetesUser()
      .subscribe((bilhetes: Array<any>) => {
        console.log(bilhetes);
        for (let i = 0; i < bilhetes.length; i++) {
          if (bilhetes[i]._id != null) {
            console.log(bilhetes[i].eventID);
            console.log(bilhetes[i]);
            
            this.eventService.getEvento(bilhetes[i].eventID).subscribe((evento: any) => {
              //como é apenas para listar
             // console.log(evento.eventName);
             console.log("dentro da funcao get evento")
             console.log(evento);
              bilhetes[i].name= evento.eventName; 
              this.bilhetes.push(bilhetes[i]);
              console.log(this.bilhetes);
             // console.log(bilhetes[i].name);
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




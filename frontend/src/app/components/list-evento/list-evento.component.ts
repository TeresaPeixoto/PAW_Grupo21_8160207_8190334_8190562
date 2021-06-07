import { Component, OnInit } from '@angular/core';
import { Evento } from '../../model/evento';
import { Router } from '@angular/router';
import { EventRestServiceService } from 'src/app/services/event-rest-service.service';

@Component({
  selector: 'app-list-evento',
  templateUrl: './list-evento.component.html',
  styleUrls: ['./list-evento.component.css'],
})
export class ListEventoComponent implements OnInit {
  currentEvent: Evento;

  constructor(private router: Router, private rest: EventRestServiceService) {
    this.currentEvent = new Evento();
  }

  ngOnInit(): void {
    var tempEvent = localStorage.getItem('currentEvent');
    if (tempEvent != null) {
    }
/*
    this.rest.listAllEvento().subscribe((currentEvent: any) => {
      console.log(currentEvent);
      currentEvent[0].eventName="teste";
      this.rest.editEvento(currentEvent[0]).subscribe((currentEvent2:any)=>{
          console.log(currentEvent2);
      });
    });*/
  }

  updateEvent(): void {
    console.log("chegou aqui");
    this.rest.editEvento(this.currentEvent)
    .subscribe((currentEvent: any) => {
      if (this.currentEvent) {
        this.router.navigate(['/']);
      } else {
        alert('Erro no update!');
      }
    });
  }
}

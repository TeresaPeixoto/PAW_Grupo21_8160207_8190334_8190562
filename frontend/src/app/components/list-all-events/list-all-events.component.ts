import { Component, OnInit } from '@angular/core';
import { Evento } from '../../model/evento';
import { Router } from '@angular/router';
import { EventRestServiceService } from 'src/app/services/event-rest-service.service';

@Component({
  selector: 'app-list-all-events',
  templateUrl: './list-all-events.component.html',
  styleUrls: ['./list-all-events.component.css'],
})
export class ListAllEventsComponent implements OnInit {
evento: Evento;
  eventos: Array<Evento> = [];

  constructor(private router: Router, private rest: EventRestServiceService) {
  this.evento= new Evento;
  }

  ngOnInit(): void {
    this.getAllEvents();
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


  verMais(){
    this.rest.editEvento(this.evento)
    .subscribe((evento: any) => {
      
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Evento } from '../../model/evento';
import { Router } from '@angular/router';
import { EventRestServiceService } from 'src/app/services/event-rest-service.service';

@Component({
  selector: 'app-list-all-available-events',
  templateUrl: './list-all-available-events.component.html',
  styleUrls: ['./list-all-available-events.component.css'],
})
export class ListAllAvailableEventsComponent implements OnInit {
evento: Evento;
  eventos: Array<Evento> = [];

  constructor(private router: Router, private rest: EventRestServiceService) {
  this.evento= new Evento;
  }

  ngOnInit(): void {
    this.getAllAvailableEvents();
  }

  getAllAvailableEvents() {
    this.rest.listAllAvailableEvento().subscribe((eventos: Array<Evento>) => {
      console.log(eventos);
      for (let i = 0; i < eventos.length; i++) {
        if(typeof eventos[i].eventDate !== "undefined"){
            let data1 =typeof eventos[i].eventDate;
           
            console.log(data1);
       
            let today = new Date();
          
        if (eventos[i]._id != null && typeof data1> typeof today) {
          this.eventos.push(eventos[i]);
          console.log(eventos[i]);

        }
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

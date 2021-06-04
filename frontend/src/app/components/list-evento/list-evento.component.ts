import { Component, OnInit } from '@angular/core';
import { Evento } from '../../model/evento';
import { Router } from '@angular/router';
import { EventRestServiceService } from 'src/app/services/event-rest-service.service';
import {
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-list-evento',
  templateUrl: './list-evento.component.html',
  styleUrls: ['./list-evento.component.css']
})
export class ListEventoComponent implements OnInit {
  currentEvent: Evento;

   
  constructor(
    private router: Router,
    private rest: EventRestServiceService) { 
      this.currentEvent=new Evento;
    }

  ngOnInit(): void {
    var tempEvent = localStorage.getItem('currentEvent');
    if (tempEvent != null) {
      
    }
  }

  
    this.rest.save(this.currentUser).subscribe((currentUser: any) => {
      if (this.currentUser) {
        this.router.navigate(['/list']);
      } else {
        alert('Erro no update!');
      }
    });
  }

  updateEvent(): void {
    console.log(this.currentEvent);
    this.rest.save
  }

}

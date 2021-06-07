import { Component, OnInit } from '@angular/core';
import { Evento } from '../../model/evento';
import { Router , ActivatedRoute} from '@angular/router';
import { EventRestServiceService } from 'src/app/services/event-rest-service.service';


@Component({
  selector: 'app-list-evento',
  templateUrl: './list-evento.component.html',
  styleUrls: ['./list-evento.component.css'],
})
export class ListEventoComponent implements OnInit {
  currentEvent: Evento;  

  constructor(private router: Router, private route: ActivatedRoute, private rest: EventRestServiceService) {
    this.currentEvent = new Evento();
    
}

  ngOnInit(): void {
    console.log(this.currentEvent);
    this.route.params.subscribe(params =>{
      console.log(params);
      this.rest.getEvento(params.id).subscribe((evento: any)=>{
          this.currentEvent=evento;

    });

    })
    

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

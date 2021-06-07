import { Component, OnInit } from '@angular/core';
import { Evento } from '../../model/evento';
import { Router } from '@angular/router';
import { EventRestServiceService } from 'src/app/services/event-rest-service.service';
import {
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';



//atualizou!!!!

@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.component.html',
  styleUrls: ['./add-evento.component.css'],
})
export class AddEventoComponent implements OnInit {
  evento: Evento = new Evento();
  error: any;

  public formulario: FormGroup = new FormGroup({
    eventName: new FormControl(null, [Validators.required]),
    local: new FormControl(null, [Validators.required]),
    eventDate: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    lugares: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    lotacao: new FormControl(null, Validators.required),
  });

  constructor(
    private router: Router,
    private authServive: EventRestServiceService
  ) {}

  ngOnInit(): void {}

  add_evento(): void {
    console.log("na funçao de adicionar evento");
    this.authServive
      .addEvento(this.formulario.value)
      .subscribe((evento:any)=>{
        console.log(evento);
        if(evento){
          this.router.navigate(['/']);
        }else{
          alert('Erro em adicionar evento');
        }
      })

  }
}

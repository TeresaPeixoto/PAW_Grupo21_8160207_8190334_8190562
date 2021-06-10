import { Component, OnInit } from '@angular/core';
import { Evento } from '../../model/evento';
import { Router } from '@angular/router';
import { EventRestServiceService } from 'src/app/services/event-rest-service.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

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
    lotacao: new FormControl('', [Validators.required, Validators.max(90), Validators.min(20)]),
  });

  constructor(
    private router: Router,
    private authServive: EventRestServiceService
  ) {}

  ngOnInit(): void {}

  add_evento(): void {
    if (this.formulario.status === 'INVALID') {
      console.log('formulario invalido');
    } else {
      console.log('na funçao de adicionar evento');
      this.authServive
        .addEvento(this.formulario.value)
        .subscribe((evento: any) => {
          console.log(evento);
          if (evento) {
            this.router.navigate(['/']);
          } else {
            alert('Erro em adicionar evento');
          }
        });
    }
  }
}

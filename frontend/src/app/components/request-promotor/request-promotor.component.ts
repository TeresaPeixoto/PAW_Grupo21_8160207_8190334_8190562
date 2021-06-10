import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RequestRestServiceService } from 'src/app/services/requests-rest-service.service';
import { Router } from '@angular/router';
import { PedidoModel } from 'src/app/model/pedido';

@Component({
  selector: 'app-request-promotor',
  templateUrl: './request-promotor.component.html',
  styleUrls: ['./request-promotor.component.css'],
})
export class RequestPromotorComponent implements OnInit {
  public formulario: FormGroup = new FormGroup({
    descricao: new FormControl(null, [Validators.required]),
  });

  pedido: PedidoModel;
  email: string;
  constructor(private router: Router, private rest: RequestRestServiceService) {
    this.pedido = new PedidoModel();
    this.email = '';
  }

  ngOnInit(): void {
    var tempUser = localStorage.getItem('currentUser');

    if (tempUser != null) {
      this.email = JSON.parse(tempUser).email;
    }
  }

  createRequest() {
    console.log('clicou no enviar pedido');
    console.log(this.formulario.value);
    this.formulario.value['email'] = this.email;
    this.rest
      .createRequest(this.formulario.value)
      .subscribe((pedido: any) => {
        console.log(pedido);
        if (pedido) {
          this.router.navigate(['/list']);
        } else {
          alert('Erro no pedido!');
        }
      });
  }
}

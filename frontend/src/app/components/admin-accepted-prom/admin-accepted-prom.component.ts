import { Component, OnInit } from '@angular/core';
import { RequestRestServiceService } from 'src/app/services/requests-rest-service.service';
import { Router } from '@angular/router';
import { PedidoModel } from 'src/app/model/pedido';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-admin-accepted-prom',
  templateUrl: './admin-accepted-prom.component.html',
  styleUrls: ['./admin-accepted-prom.component.css'],
})
export class AdminAcceptedPromComponent implements OnInit {
  pedido: PedidoModel;
  pedidos: Array<PedidoModel> = [];

  currentUser: User;

  constructor(
    private router: Router,
    private rest: RequestRestServiceService,
    private auth: AuthRestServiceService
  ) {
    this.pedido = new PedidoModel();
    this.currentUser = new User();
  }

  ngOnInit(): void {
    var tempUser = localStorage.getItem('currentUser');

    if (tempUser != null) {
      this.currentUser = JSON.parse(tempUser);
    }
    this.getAllRequests();
  }

  getAllRequests(): void {
    this.rest.getAllRequests().subscribe((pedidos: Array<PedidoModel>) => {
      console.log(pedidos);

      for (let i = 0; i < pedidos.length; i++) {
        if (pedidos[i].email != null && pedidos[i].descricao != null) {
          this.pedidos.push(pedidos[i]);
          console.log(pedidos[i]);
        }
      }
    });
  }

  load() {
    location.reload()
  }
  accepted(tempPedido: any): void {
    this.rest.deleteRequest(tempPedido._id).subscribe((temPedido: PedidoModel) => {
    if (temPedido) {
      this.auth.becomePromotor(tempPedido).subscribe((tempPromot:any)=>{
        if(tempPromot){
          this.load();
          console.log(tempPromot);
          
        }else{
          console.log("ardeu");
        }
      })
    } else {
      alert('Erro!');
    }
  });}

  delete(id: any): void {
    console.log(id);
    this.rest.deleteRequest(id).subscribe((temPedido: PedidoModel) => {
      if (id) {
        this.router.navigate(['/listRequests']);
      } else {
        alert('Erro!');
      }
    });
  }

  logout(): void {
    console.log('clicou no logout');
    this.auth.logout();
  }
}

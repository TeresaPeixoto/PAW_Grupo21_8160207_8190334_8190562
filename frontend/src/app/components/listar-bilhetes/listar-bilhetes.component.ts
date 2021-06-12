import { Component, OnInit } from '@angular/core';
import { Bilhete } from 'src/app/model/bilhete';
import { Router, ActivatedRoute } from '@angular/router';
import { BilheteRestServiceService } from 'src/app/services/bilhete-rest-service.service';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';
import { User } from 'src/app/model/user';
@Component({
  selector: 'app-listar-bilhetes',
  templateUrl: './listar-bilhetes.component.html',
  styleUrls: ['./listar-bilhetes.component.css']
})
export class ListarBilhetesComponent implements OnInit {
  currentUser: User;
  email: string;
  bilhete: Bilhete;
  bilhetes: Array<Bilhete> = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rest: BilheteRestServiceService,
    private auth: AuthRestServiceService
  ) { 
    this.bilhete = new Bilhete();
    this.currentUser = new User();
    this.email = '';
  }

  ngOnInit(): void {
    var tempUser = localStorage.getItem('currentUser');

    if (tempUser != null) {
      this.email = JSON.parse(tempUser).email;
      this.currentUser = JSON.parse(tempUser);
    }
    this.getAllBilhetes();
  }
  getAllBilhetes() {
    this.rest.listAllBilhetes().subscribe((bilhetes: Array<Bilhete>) => {
      console.log(bilhetes);
      for (let i = 0; i < bilhetes.length; i++) {
        if (
          bilhetes[i]._id != null 
        ) {
          this.bilhetes.push(bilhetes[i]);
          console.log(bilhetes[i]);
        }
      }
    });
  }
/*
  verMais() {
    this.rest.editEvento(this.evento).subscribe((evento: any) => {});
  }*/

  logout(): void {
    console.log('clicou no logout');
    this.auth.logout();
  }


}

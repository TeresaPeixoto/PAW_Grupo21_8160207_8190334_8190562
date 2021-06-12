import { Component, OnInit } from '@angular/core';
import { Local } from '../../model/local';
import { LocalRestServiceService } from 'src/app/services/local-rest-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';

@Component({
  selector: 'app-edite-local',
  templateUrl: './edite-local.component.html',
  styleUrls: ['./edite-local.component.css'],
})
export class EditeLocalComponent implements OnInit {
  public formulario: FormGroup = new FormGroup({
    lotacaoPercent: new FormControl('', [
      Validators.max(90),
      Validators.min(20),
    ]),
  });

  currentLocal: Local;
  currentUser: User;
  email: string;

  constructor(
    private auth: AuthRestServiceService,
    private router: Router,
    private rest: LocalRestServiceService,
    private route: ActivatedRoute
  ) {
    this.currentUser = new User();
    this.email = '';
    this.currentLocal = new Local();
  }

  ngOnInit(): void {
    var tempUser = localStorage.getItem('currentUser');

    if (tempUser != null) {
      
      this.email = JSON.parse(tempUser).email;
      this.currentUser = JSON.parse(tempUser);
    }

    this.auth.getUser(this.email).subscribe((user: User) => {
      if (user) {
        if (user.role == 'cliente') {
          this.router.navigate(['/home']);
        } else {
          this.currentUser = user;
        }
      }
    });

    this.route.params.subscribe((params) => {
      console.log(params); 
      this.rest.getLocal(params.id).subscribe((local: any) => {
        
        if (local) {
          this.currentLocal = local;
         console.log("oi");
        } else {
          alert('Erro no pedido do local!');
        }
      });
    });
  }

  updateLocal(): void {
     console.log("update local");
    this.rest.editEvento(this.currentLocal).subscribe((local: any) => {
     
      if (local) {
        this.router.navigate(['/listAllLocals']);
      } else {
        alert('Erro no update!');
      }
    });
  }

  logout(): void {
    console.log('clicou no logout');
    this.auth.logout();
  }
}

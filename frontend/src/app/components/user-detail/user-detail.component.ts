import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';
import { RequestRestServiceService} from '../../services/requests-rest-service.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})

export class UserDetailComponent implements OnInit {
  password: string;
  email: string;
  passwordV: string;
  currentUser: User;
  verify : boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthRestServiceService,
    private rest : RequestRestServiceService
  ) {
    this.email = '';
    this.password = '';
    this.passwordV = '';
 this.verify= true;
    this.currentUser = new User();
  }

  ngOnInit(): void {
    var tempUser = localStorage.getItem('currentUser');
    if (tempUser != null) {
      this.email = JSON.parse(tempUser).email;
      this.auth.getUser(this.email).subscribe((user: User) => {
        if (user) {
          if(user.role=="cliente"){
            this.rest.getRequest(this.email).subscribe((pedido:any)=>{
              console.log(pedido);
              if(pedido.length==0){
                this.verify=false;
              }
            })
          }
          this.currentUser = user;
          console.log(this.currentUser);
        } else {
          alert('Erro no pedido do utilizador!');
        }
      });
    }
  }
  logout(): void {
    console.log('clicou no logout');
    this.auth.logout();
  }
  
}

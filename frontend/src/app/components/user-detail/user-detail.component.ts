import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  userName: string;
  email: string;
  cellphone: number;
  birthDate: Date;
  address: string;
  password: string;
  nif: number;

  currentUser: User;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rest: AuthRestServiceService
  ) {
    this.userName = '';
    this.email = '';
    this.cellphone = 0;
    this.birthDate = new Date();
    this.address = '';
    this.password = '';
    this.nif = 0;

    this.currentUser = new User();
  }

  ngOnInit(): void {
    var tempUser = localStorage.getItem('currentUser');
    if (tempUser != null) {
      this.email = JSON.parse(tempUser).email;
      this.rest.getUser(this.email).subscribe((user: User) => {
        if (user) {
          console.log(this.birthDate);
          /* this.userName=user.userName;
      this.cellphone=user.cellphone;
      this.birthDate=user.birthDate;
      this.address=user.address;
      this.nif=user.nif;*/

          this.currentUser = user;
          console.log(this.currentUser);
        } else {
          alert('Erro no pedido do utilizador!');
        }
      });
      //this.userName=JSON.parse(tempUser).email;
    }
  }

  updateUser(): void {
   this.rest
   .save(this.currentUser)
   .subscribe((currentUser:any)=> {
  
    if (this.currentUser) {
      this.router.navigate(['/']);
    } else {
      alert('Erro no update!');
    }
  });
  
}
}

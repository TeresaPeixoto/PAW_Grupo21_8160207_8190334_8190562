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
  password: string;
  email: string;
  passwordV: string;
  currentUser: User;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rest: AuthRestServiceService
  ) {
    this.email = '';
    this.password = '';
    this.passwordV = '';

    this.currentUser = new User();
  }

  ngOnInit(): void {
    var tempUser = localStorage.getItem('currentUser');
    if (tempUser != null) {
      this.email = JSON.parse(tempUser).email;
      this.rest.getUser(this.email).subscribe((user: User) => {
        if (user) {
          this.currentUser = user;
          console.log(this.currentUser);
        } else {
          alert('Erro no pedido do utilizador!');
        }
      });
    }
  }

  updateUser(): void {
    console.log(this.currentUser);

    if (this.password != '' && this.passwordV != '') {
      if (this.password == this.passwordV) {
        this.currentUser.password=this.password;
      }
    }
    this.rest.save(this.currentUser)
    .subscribe((currentUser: any) => {
      if (this.currentUser) {
        this.router.navigate(['/list']);
      } else {
        alert('Erro no update!');
      }
    });
  }
}

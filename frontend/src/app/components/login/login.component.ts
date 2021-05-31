import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRestServiceService } from 'src/app/services/auth-rest-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string;
  password:string;

  constructor(private router: Router, private authServive: AuthRestServiceService) { 
    this.password="";
    this.email="";
  }

  ngOnInit(): void {
  }

  login(): void{
    console.log("clicou no login")
    this.authServive.login(this.email, this.password).subscribe((user : any)=>{
      console.log(user);
      if (user && user.token) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.router.navigate(['/']);
      } else {
        alert('Erro no login!');
      }
    })
  }

}

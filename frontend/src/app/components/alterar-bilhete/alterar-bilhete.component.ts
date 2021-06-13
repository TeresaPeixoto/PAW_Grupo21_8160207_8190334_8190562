import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';
import { BilheteRestServiceService } from 'src/app/services/bilhete-rest-service.service';
import { Bilhete } from 'src/app/model/bilhete';

@Component({
  selector: 'app-alterar-bilhete',
  templateUrl: './alterar-bilhete.component.html',
  styleUrls: ['./alterar-bilhete.component.css']
})
export class AlterarBilheteComponent implements OnInit {
  bilhete: Bilhete = new Bilhete();
  error: any;
  currentUser: User;
  email: string;
  currentBilhete: Bilhete;

  public formulario: FormGroup = new FormGroup({
    lugares: new FormControl(null, [Validators.required]),
    comprovativo: new FormControl(null, [Validators.required])
  });

  constructor(
    private auth: AuthRestServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private rest: BilheteRestServiceService
  ) {
    this.currentUser = new User();
    this.email = '';
    this.currentBilhete= new Bilhete();
  }

  ngOnInit(): void {
    console.log(this.currentBilhete);
    this.route.params.subscribe((params) => {
      console.log(params);
      this.rest.getBilhete(params.id).subscribe((bilhete: any) => {
        this.currentBilhete = bilhete;
      });
    });
    var tempUser = localStorage.getItem('currentUser');

    if (tempUser != null) {
      this.email = JSON.parse(tempUser).email;

      this.auth.getUser(this.email).subscribe((user: User) => {
        console.log(user);
        if (user) {
            this.currentUser = user;
            console.log(this.currentUser);
          } else {
            this.router.navigate(['/home']);
          }
        
      });
    }
  }

  logout(): void {
    console.log('clicou no logout');
    this.auth.logout();
  }

 

  updateBilhete(): void {
    console.log('chegou aqui');
    console.log(this.currentBilhete);
    this.rest.editBilhete(this.currentBilhete).subscribe((currentBilhete: any) => {
      if (currentBilhete) {
        console.log(currentBilhete);
      } else {
        alert('Erro no update!');
      }
    });
  }
}

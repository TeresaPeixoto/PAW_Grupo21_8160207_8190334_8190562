import { Component, OnInit } from '@angular/core';
import { BilheteRestServiceService } from 'src/app/services/bilhete-rest-service.service';
import { Bilhete } from 'src/app/model/bilhete';
import { EventRestServiceService } from 'src/app/services/event-rest-service.service';
import { Evento } from '../../model/evento';
import { User } from 'src/app/model/user';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-remove-bilhete',
  templateUrl: './remove-bilhete.component.html',
  styleUrls: ['./remove-bilhete.component.css']
})
export class RemoveBilheteComponent implements OnInit {
  bilhete: Bilhete = new Bilhete();
  error: any;
  currentUser: User;
  email: string;
  currentBilhete: Bilhete;

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
  
     
    }
  }

    removeBilhete(){

    }

}

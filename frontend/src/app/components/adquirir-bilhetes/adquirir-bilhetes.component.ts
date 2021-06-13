import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router , ActivatedRoute} from '@angular/router';
import { BilheteRestServiceService } from 'src/app/services/bilhete-rest-service.service';
import { Bilhete } from 'src/app/model/bilhete';
import { EventRestServiceService } from 'src/app/services/event-rest-service.service';
import { Evento } from '../../model/evento';
import { User } from 'src/app/model/user';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';

@Component({
  selector: 'app-adquirir-bilhetes',
  templateUrl: './adquirir-bilhetes.component.html',
  styleUrls: ['./adquirir-bilhetes.component.css']
})
export class AdquirirBilhetesComponent implements OnInit {
  bilhete: Bilhete = new Bilhete();
  cE: Evento;  
  error: any;
  comp: string | undefined;
  currentUser: User;
  email: string;
  currentEventID: string;
  currentUserID: string;

  public formulario: FormGroup = new FormGroup({  
    lugares: new FormControl(null, [Validators.required]),
    comprovativo: new FormControl(null, [Validators.required])
  });

  constructor(
    private router: Router,
    private authServive: BilheteRestServiceService,
    private route: ActivatedRoute,
    private rest: EventRestServiceService,
    private auth: AuthRestServiceService)
    {
      this.currentUser = new User();
    this.email = '';
    this.cE = new Evento();
    this.currentEventID= '';
    this.currentUserID='';
    }
  

  ngOnInit(): void {
    var tempUser = localStorage.getItem('currentUser');
    
    if (tempUser != null) {
      
      this.email = JSON.parse(tempUser).email;

    this.auth.getUser(this.email).subscribe((user: any) => {
      console.log(user);
      this.currentUser = user;
          console.log(this.currentUser);
          console.log(user);
          this.currentUserID=user._id;
        })

    this.route.params.subscribe(params =>{
      console.log(params);
      this.rest.getEvento(params.id).subscribe((currentEvent: Evento)=>{
            this.currentEventID=params.id;this.cE=currentEvent;
        
          console.log(this.cE.eventName);
    });
  })

    }
  }


  add_bilhete(): void {
    if (this.formulario.status === 'INVALID') {
      console.log('formulario invalido');
    } else {
      this.formulario.value["eventID"]=this.currentEventID;
      this.formulario.value["userID"]=this.currentUserID;
      console.log(this.formulario.value);
      console.log('na funçao de adquirir evento');
      this.authServive
        .addBilhete(this.formulario.value)
        .subscribe((bilhete: any) => {
          console.log(bilhete);
          if (bilhete) {
            this.router.navigate(['/']);
          } else {
            alert('Erro em adquirir bilhete');
          }
        });
    }
  }

  onFileChange(bilhete:any) {
    const reader = new FileReader();
    
    if(bilhete.target.files && bilhete.target.files.length) {
      const [file] = bilhete.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.comp = reader.result as string;
     
        this.formulario.patchValue({
         comprovativo: reader.result
        });
   
      };
   
    }
  }

  logout(): void {
    console.log('clicou no logout');
    this.auth.logout();
  }
}



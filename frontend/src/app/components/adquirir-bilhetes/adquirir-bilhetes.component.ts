import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router , ActivatedRoute} from '@angular/router';
import { BilheteRestServiceService } from 'src/app/services/bilhete-rest-service.service';
import { Bilhete } from 'src/app/model/bilhete';
import { EventRestServiceService } from 'src/app/services/event-rest-service.service';
import { Evento } from '../../model/evento';

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
  eName: string | undefined;
  ePrice: number | undefined;

  public formulario: FormGroup = new FormGroup({
    eventName: new FormControl(null, [Validators.required]),
    nome: new FormControl(null, [Validators.required]),
    cc: new FormControl(null, [Validators.required]),
    hora: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    comprovativo: new FormControl(null, [Validators.required])
  });

  constructor(
    private router: Router,
    private authServive: BilheteRestServiceService,
    private route: ActivatedRoute,
    private rest: EventRestServiceService) {
    this.cE = new Evento();
    }
  

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      console.log(params);
      this.rest.getEvento(params.id).subscribe((currentEvent: any)=>{
          this.cE=currentEvent;
          this.eName=this.cE.eventName;
          this.ePrice=this.cE.price;
    });
  })
}


  add_bilhete(): void {
    if (this.formulario.status === 'INVALID') {
      console.log('formulario invalido');
    } else {
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
}



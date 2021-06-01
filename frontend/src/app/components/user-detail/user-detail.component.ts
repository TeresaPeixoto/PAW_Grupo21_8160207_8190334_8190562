import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
userName:string;
email:string;
cellphone:number;
birthDate:Date;
address:string;
password:string;
nif:number;

  constructor(private router:Router, private route:ActivatedRoute, private rest: AuthRestServiceService) { 
    this.userName="";
    this.email="";
    this.cellphone=0;
    this.birthDate=new Date();
    this.address="";
    this.password="";
    this.nif=0;
  }


  ngOnInit(): void {
    var tempUser=localStorage.getItem('currentUser');
    if(tempUser!= null){
   this.email=JSON.parse(tempUser).email;
   this.rest.getUser(this.email).subscribe((user : any)=>{
    console.log(user);
    if (user) {
      
      this.userName=user.userName;
      this.cellphone=user.cellphone;
      this.birthDate=user.birthDate;
      this.address=user.address;
      this.nif=user.nif;

    } else {
      alert('Erro no pedido do utilizador!');
    }
  });
    //this.userName=JSON.parse(tempUser).email;

  }
}

  updateUser():void{

  }

}


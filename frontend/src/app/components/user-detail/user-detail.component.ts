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

  constructor(private router:Router, private route:ActivatedRoute, private rest: AuthRestServiceService) { 
    this.userName="";
  }


  ngOnInit(): void {
    var tempUser=localStorage.getItem('currentUser');
    if(tempUser!= null){
   this.userName=JSON.parse(tempUser).userName;
  }
    //this.userName=JSON.parse(tempUser).email;

  }

}

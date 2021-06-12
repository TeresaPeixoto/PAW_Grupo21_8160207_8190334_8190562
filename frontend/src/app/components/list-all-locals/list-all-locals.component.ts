import { Component, OnInit } from '@angular/core';
import { Local } from '../../model/local';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalRestServiceService } from '../../services/local-rest-service.service';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-list-all-locals',
  templateUrl: './list-all-locals.component.html',
  styleUrls: ['./list-all-locals.component.css'],
})
export class ListAllLocalsComponent implements OnInit {
  local: Local;
  locais: Array<Local> = [];
  currentUser: User;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rest: LocalRestServiceService,
    private auth: AuthRestServiceService
  ) {
    this.local = new Local();
    this.currentUser = new User();
  }

  ngOnInit(): void {
    var tempUser = localStorage.getItem('currentUser');

    if (tempUser != null) {
      this.currentUser = JSON.parse(tempUser);
    }

    this.getAllLocals();
  }

  getAllLocals() {
    this.rest.getAllLocals().subscribe((locais: Array<Local>) => {
      console.log(locais);
      for (let i = 0; i < locais.length; i++) {
        if (locais[i] != null) {
          this.locais.push(locais[i]);
          console.log(locais[i]);
        }
      }
    });
  }

  deleteLocal(id: any): void {
    this.rest.deleteLocal(id).subscribe((local: any) => {
      console.log(id);
      if (id) {
        this.load();
        this.router.navigate(['/listAllLocals']);
      } else {
        alert('Erro!');
      }
    });
  }

  load() {
    location.reload();
  }

  logout(): void {
    console.log('clicou no logout');
    this.auth.logout();
  }
}

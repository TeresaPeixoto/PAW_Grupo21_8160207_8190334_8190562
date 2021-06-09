import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistoComponent } from './components/registo/registo.component';
import {UserDetailComponent} from './components/user-detail/user-detail.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import {AddEventoComponent} from './components/add-evento/add-evento.component';
import { ListEventoComponent} from './components/list-evento/list-evento.component';
import { ListAllEventsComponent} from './components/list-all-events/list-all-events.component';
import {BecomeAdminComponent} from './components/become-admin/become-admin.component';
import {HomeAdminComponent} from './components/home-admin/home-admin.component';
import {ListAllEventsAdminComponent} from './components/list-all-events-admin/list-all-events-admin.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registo', component: RegistoComponent },
  {path :'list', component: UserDetailComponent, canActivate: [AuthGuardGuard] },
  {path : 'creatEvent', component: AddEventoComponent, canActivate: [AuthGuardGuard]},
  {path : 'listEvent/:id' , component:ListEventoComponent, canActivate: [AuthGuardGuard]},
  {path : 'home' , component:ListAllEventsComponent, canActivate: [AuthGuardGuard]},
  { path : 'adminSayWhat', component:BecomeAdminComponent},
  {path : 'homeAdmin', component:HomeAdminComponent},
  {path : 'listAllEventAdmin/:sla' , component:ListAllEventsAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

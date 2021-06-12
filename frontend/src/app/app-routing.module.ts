import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistoComponent } from './components/registo/registo.component';
import {UserDetailComponent} from './components/user-detail/user-detail.component';
import { UserEditComponent} from './components/user-edit/user-edit.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import {AddEventoComponent} from './components/add-evento/add-evento.component';
import { ListEventoComponent} from './components/list-evento/list-evento.component';
import { ListAllEventsComponent} from './components/list-all-events/list-all-events.component';
import {BecomeAdminComponent} from './components/become-admin/become-admin.component';
import {HomeAdminComponent} from './components/home-admin/home-admin.component';
import {ListAllEventsAdminComponent} from './components/list-all-events-admin/list-all-events-admin.component';
import {RequestPromotorComponent} from './components/request-promotor/request-promotor.component';
import{AdminAcceptedPromComponent} from './components/admin-accepted-prom/admin-accepted-prom.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import {AdquirirBilhetesComponent} from './components/adquirir-bilhetes/adquirir-bilhetes.component';
import { CreateLocalComponent } from './components/create-local/create-local.component';
import { HomeLocalComponent } from './components/home-local/home-local.component';
import { ListAllLocalsComponent } from './components/list-all-locals/list-all-locals.component';
import { EditeLocalComponent } from './components/edite-local/edite-local.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'registo', component: RegistoComponent },
  {path :'list', component: UserDetailComponent, canActivate: [AuthGuardGuard] },
  {path : 'editProfile', component:UserEditComponent, canActivate: [AuthGuardGuard]},
  {path : 'creatEvent', component: AddEventoComponent, canActivate: [AuthGuardGuard]},
  {path : 'listEvent/:id' , component:ListEventoComponent},
  {path : 'home' , component:ListAllEventsComponent},
  {path : 'adminSayWhat', component:BecomeAdminComponent},
  {path : 'homeAdmin', component:HomeAdminComponent , canActivate: [AuthGuardGuard]},
  {path : 'listAllEventAdmin/:sla' , component:ListAllEventsAdminComponent, canActivate: [AuthGuardGuard]},
  {path : 'createRequest', component :RequestPromotorComponent, canActivate: [AuthGuardGuard]},
  {path : 'listRequests', component :AdminAcceptedPromComponent, canActivate: [AuthGuardGuard]}, 
  {path : 'addBilhete/:id', component : AdquirirBilhetesComponent, canActivate: [AuthGuardGuard]},
  {path : 'editEvent/:id', component :EditEventComponent, canActivate: [AuthGuardGuard]},
  {path : 'createLocal', component : CreateLocalComponent, canActivate:[AuthGuardGuard]},
  {path : 'homeLocal', component : HomeLocalComponent, canActivate:[AuthGuardGuard]},
  {path : 'listAllLocals', component : ListAllLocalsComponent, canActivate:[AuthGuardGuard]},
  {path: 'editeLocal/:id' , component:EditeLocalComponent, canActivate:[AuthGuardGuard]},
  {path : 'listClients', component: ListClientsComponent, canActivate:[AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

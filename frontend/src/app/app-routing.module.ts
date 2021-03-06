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
import { CancelarBilheteComponent } from './components/cancelar-bilhete/cancelar-bilhete.component';
import { ListarBilhetesComponent } from './components/listar-bilhetes/listar-bilhetes.component';
import { AlterarBilheteComponent } from './components/alterar-bilhete/alterar-bilhete.component';
import { RemoveBilheteComponent } from './components/remove-bilhete/remove-bilhete.component';
import { ListbilheteComponent } from './components/list-bilhete/list-bilhete.component';
import { PromAcceptBilheteComponent } from './components/prom-accept-bilhete/prom-accept-bilhete.component';
import { AceitarBilheteComponent } from './components/aceitar-bilhete/aceitar-bilhete.component';
import { ListEventPromComponent } from './components/list-event-prom/list-event-prom.component';
import { HomeEventComponent } from './components/home-event/home-event.component';
import { ListPromComponent } from './components/list-prom/list-prom.component';
import { ChoseOneLocalComponent } from './components/chose-one-local/chose-one-local.component';
import { HomePromComponent } from './components/home-prom/home-prom.component';
import { HomeEventPromComponent } from './components/home-event-prom/home-event-prom.component';

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
  {path: 'listTickets' , component: ListarBilhetesComponent, canActivate:[AuthGuardGuard]},
 {path: 'cancelarBilhete/:id', component: CancelarBilheteComponent, canActivate:[AuthGuardGuard]},
 {path: 'alterarBilhete/:id', component: AlterarBilheteComponent, canActivate:[AuthGuardGuard]},
  {path: 'promAcceptBilhete', component: PromAcceptBilheteComponent, canActivate:[AuthGuardGuard]},
 {path: 'deleteBilhete/:id', component: RemoveBilheteComponent, canActivate:[AuthGuardGuard]},
 {path : 'listBilhete/:id' , component: ListbilheteComponent, canActivate:[AuthGuardGuard]},
  {path: 'aceitarBilhete/:id', component: AceitarBilheteComponent, canActivate:[AuthGuardGuard]},
  {path: 'listEventByProm', component: ListEventPromComponent, canActivate:[AuthGuardGuard]},
  {path: 'editeLocal/:id', component: EditeLocalComponent, canActivate:[AuthGuardGuard]},
  {path : 'homeEvento', component : HomeEventComponent, canActivate:[AuthGuardGuard]},
  {path : 'listAllClients', component : ListClientsComponent, canActivate:[AuthGuardGuard]},
  {path : 'listProm' , component : ListPromComponent, canActivate:[AuthGuardGuard]},
  {path : 'choseOneLocal', component : ChoseOneLocalComponent, canActivate:[AuthGuardGuard]},
  {path : 'homeProm', component : HomePromComponent, canActivate:[AuthGuardGuard]},
  {path : 'homeEventProm', component:HomeEventPromComponent, canActivate:[AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

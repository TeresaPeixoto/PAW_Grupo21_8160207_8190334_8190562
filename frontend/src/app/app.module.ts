import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistoComponent} from './components/registo/registo.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorInterceptor } from './interceptors/auth-interceptor.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { AddEventoComponent } from './components/add-evento/add-evento.component';
import { ListEventoComponent } from './components/list-evento/list-evento.component';
import { ListAllEventsComponent } from './components/list-all-events/list-all-events.component';
import {MatListModule} from '@angular/material/list';
import { BecomeAdminComponent } from './components/become-admin/become-admin.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { ListAllEventsAdminComponent } from './components/list-all-events-admin/list-all-events-admin.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { RequestPromotorComponent } from './components/request-promotor/request-promotor.component';
import { AdminAcceptedPromComponent } from './components/admin-accepted-prom/admin-accepted-prom.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistoComponent,
    UserDetailComponent,
    LoginComponent,
    AddEventoComponent,
    ListEventoComponent,
    ListAllEventsComponent,
    BecomeAdminComponent,
    HomeAdminComponent,
    ListAllEventsAdminComponent,
    UserEditComponent,
    RequestPromotorComponent,
    AdminAcceptedPromComponent,
    EditEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatListModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

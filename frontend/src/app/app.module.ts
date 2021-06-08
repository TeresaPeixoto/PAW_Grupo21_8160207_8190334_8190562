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
import { ListAllAvailableEventsComponent } from './components/list-all-available-events/list-all-available-events.component';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    RegistoComponent,
    UserDetailComponent,
    LoginComponent,
    AddEventoComponent,
    ListEventoComponent,
    ListAllAvailableEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatListModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { MatCardModule} from '@angular/material/card';  
import { MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    RegistoComponent,
    UserDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
    MatCardModule,
    MatButtonModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

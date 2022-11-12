import { ListStudentsComponent } from './views/admin/list-students/list-students.component';
import { LoginComponent } from './views/login/login.component';
import { HomeAdminComponent } from './views/admin/home/home-admin.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListStudentsComponent,
    HomeAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

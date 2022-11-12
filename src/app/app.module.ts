import { AdminService } from './services/admin.service';
import { AuthService } from './services/auth.service';
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
import { HomeStudentComponent } from './views/student/home-student/home-student.component';
import { StudentDetailComponent } from './views/admin/student-detail/student-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListStudentsComponent,
    HomeAdminComponent,
    HomeStudentComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, //nos permite comunicarnos via http con nuestro gateway
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule
  ],
  providers: [
    AuthService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { AdminService } from './services/admin.service';
import { AuthService } from './services/auth.service';
import { AdminGuard } from './services/admin.guard';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeStudentComponent } from './views/student/home-student/home-student.component';
import { StudentDetailComponent } from './views/admin/student-detail/student-detail.component';
import { StudentGuard } from './services/student.guard';
import { JwtInterceptor } from './services/jwt-interceptor.interceptor';
import { TableModule } from 'primeng/table';
import {MenuModule} from 'primeng/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AdminComponent } from './layout/admin/admin.component';
import { CreateStudentComponent } from './views/admin/create-student/create-student.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListStudentsComponent,
    HomeAdminComponent,
    HomeStudentComponent,
    StudentDetailComponent,
    AdminComponent,
    CreateStudentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, //nos permite comunicarnos via http con nuestro gateway
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule,
    TableModule,
    MenuModule,
  ],
  providers: [
    AuthService,
    AdminService,
    AdminGuard,
    StudentGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

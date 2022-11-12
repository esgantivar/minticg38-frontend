import { ListStudentsComponent } from './views/admin/list-students/list-students.component';
import { LoginComponent } from './views/login/login.component';
import { HomeAdminComponent } from './views/admin/home/home-admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "admin",
    component: HomeAdminComponent
  },
  {
    path: "admin/estudiantes",
    component: ListStudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

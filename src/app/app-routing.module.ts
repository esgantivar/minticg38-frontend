import { StudentDetailComponent } from './views/admin/student-detail/student-detail.component';
import { HomeStudentComponent } from './views/student/home-student/home-student.component';
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
  },
  {
    path: "admin/estudiantes/:id",
    component: StudentDetailComponent
  },
  {
    path: "estudiante",
    component: HomeStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

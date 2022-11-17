import { CreateStudentComponent } from './views/admin/create-student/create-student.component';
import { AdminGuard } from './services/admin.guard';
import { StudentDetailComponent } from './views/admin/student-detail/student-detail.component';
import { HomeStudentComponent } from './views/student/home-student/home-student.component';
import { ListStudentsComponent } from './views/admin/list-students/list-students.component';
import { LoginComponent } from './views/login/login.component';
import { HomeAdminComponent } from './views/admin/home/home-admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentGuard } from './services/student.guard';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "admin",
    component: HomeAdminComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "admin/estudiantes",
    component: ListStudentsComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "admin/estudiantes/crear",
    component: CreateStudentComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "admin/estudiantes/:id",
    component: StudentDetailComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "estudiante",
    component: HomeStudentComponent,
    canActivate: [StudentGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

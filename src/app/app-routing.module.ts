import { ListRegistrationsComponent } from './views/admin/registrations/list-registrations/list-registrations.component';
import { CreateRegistrationComponent } from './views/admin/registrations/create-registration/create-registration.component';
import { CreateSubjectComponent } from './views/admin/subjects/create-subject/create-subject.component';
import { DetailSubjectComponent } from './views/admin/subjects/detail-subject/detail-subject.component';
import { ListSubjectsComponent } from './views/admin/subjects/list-subjects/list-subjects.component';
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
    path: "admin/materias",
    component: ListSubjectsComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "admin/materias/crear",
    component: CreateSubjectComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "admin/materias/:id",
    component: DetailSubjectComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "admin/inscripciones",
    component: ListRegistrationsComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "admin/inscripciones/crear",
    component: CreateRegistrationComponent,
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

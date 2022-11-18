import { AdminService } from './../../../../services/admin.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.css']
})
export class CreateSubjectComponent implements OnInit {
  public loading: boolean;
  public departments: Array<any> = [];
  public subject: any = {
    name: "",
    course_credits: 0,
    department: null
  }
  constructor(private router: Router, private admin: AdminService) { }

  ngOnInit(): void {
    this.loading = true;
    this.admin.getDepartments().subscribe({
      next: (response: any) => {
        this.departments = response.departments;
        console.log(this.departments);
        this.loading = false;
      }
    })
  }

  public create(evt:any) {
    this.admin.createSubject(evt).subscribe({
      next: (response: any) => {
        alert("Se creo la materia de forma exitosa");
        this.router.navigateByUrl("/admin/materias");
      },
      error: () => {
        alert('Se presento un error');
      }
    })
  }

}

import { Router } from '@angular/router';
import { AdminService } from './../../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css'],
})
export class ListStudentsComponent implements OnInit {
  public students: Array<any> = [];

  constructor(private adminService: AdminService,
    private router: Router) { }

  ngOnInit(): void {
    this.adminService.getStudents().subscribe({
      next: (response: any) => {
        //exitoso
        this.students = response.students;
      },
      error: (error) => {
        //error
        console.error(error);
        alert("Se presento un error")
      }
    })
  }

  public verDetalle(student: any) {
    this.router.navigate(["/admin/estudiantes", student._id])
  }
}

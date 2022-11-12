import { AdminService } from './../../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  public studentId: any;
  public student: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.studentId = this.route.snapshot.paramMap.get("id")
    if (this.studentId) {
      this.adminService.getStudentById(this.studentId).subscribe({
        next: (response: any) => {
          this.student = response;
        },
        error: (error) => {
          alert("Se presento un error");
          this.router.navigateByUrl("/admin/estudiantes");
        }
      })
    } else {
      this.router.navigateByUrl("/admin/estudiantes");
    }
  }

  public update() {
    this.adminService.updateStudent(this.student).subscribe({
      next: () => {
        alert("Se ha actualizado con exito el estudiante");
      },
      error: () => {
        alert("se presento un error")
      }
    })
  }

  public delete() {
    if (confirm("¿Desea borrar el estudiante?")) {
      this.adminService.deleteStudent(this.studentId).subscribe({
        next: () => {
          alert("Se ha borrado con exito el estudiante");
          this.router.navigateByUrl("/admin/estudiantes");
        },
        error: () => {
          alert("se presento un error")
        }
      })
    }
  }
}

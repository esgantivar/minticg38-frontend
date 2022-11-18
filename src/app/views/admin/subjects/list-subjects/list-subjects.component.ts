import { Router } from '@angular/router';
import { AdminService } from './../../../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-subjects',
  templateUrl: './list-subjects.component.html',
  styleUrls: ['./list-subjects.component.css']
})
export class ListSubjectsComponent implements OnInit {
  public subjects = [];
  constructor(private adminService: AdminService,
    private router: Router) { }

  ngOnInit(): void {
    this.adminService.getSubjects().subscribe({
      next: (response: any) => {
        this.subjects = response.subjects;
      }
    })
  }

  createSubject() {
    this.router.navigateByUrl("/admin/materias/crear")
  }

  editSubject(subject: any) {
    this.router.navigateByUrl(`/admin/materias/${subject._id}`);
  }

  deleteSubject(subject: any) {
    if (confirm('¿Desea borrar la materia?')) {
      this.adminService.deleteSubject(subject._id).subscribe({
        next: () => {
          alert("La materia fue borrada con existo")
          /* Despues de borrada la materia de la base de datos, debo borrarla de la interfaz*/
          const index = this.subjects.findIndex((s: any) => s._id === subject._id)
          this.subjects.splice(index, 1);
        },
        error: () => {
          alert("Se presento un error");
        }
      })
    }
  }

}

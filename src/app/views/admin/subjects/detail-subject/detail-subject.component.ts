import { AdminService } from './../../../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-detail-subject',
  templateUrl: './detail-subject.component.html',
  styleUrls: ['./detail-subject.component.css']
})
export class DetailSubjectComponent implements OnInit {
  public subject: any;
  public departments: Array<any> = [];
  constructor(private admin: AdminService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      forkJoin([
        this.admin.getDepartments(),
        this.admin.getSubjectById(id)
      ]).subscribe({
        next: (responses: any[]) => {
          this.departments = responses[0].departments;
          this.subject = responses[1];
        }
      });
    }

  }

  public update(evt: any) {
    console.log(evt);
    this.admin.updateSubject(this.subject["_id"], evt).subscribe({
      next: () => {
        alert("la actualización fue exitosa")
      },
      error: () => {
        alert("Se presento un error al intentar actualizar la materia");
      }
    })
  }

}

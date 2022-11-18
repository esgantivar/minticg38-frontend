import { forkJoin } from 'rxjs';
import { AdminService } from './../../../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.css']
})
export class CreateRegistrationComponent implements OnInit {
  public students: Array<any> = [];
  public subjects: Array<any> = [];
  constructor(private admin: AdminService) { }

  ngOnInit(): void {
    forkJoin([
      this.admin.getStudents(),
      this.admin.getSubjects()
    ]).subscribe({
      next: (responses: any[]) => {
        this.subjects = responses[1].subjects;
        this.subjects = this.subjects.map((s) => {
          return {
            ...s,
            full_name: `${s.name} (${s.course_credits})`
          };
        })
        this.students = responses[0].students;
        this.students = this.students.map((s) => {
          return {
            ...s, //spread operator
            full_name: `${s.first_name} ${s.last_name}`
          }
        })
      }
    });
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  @Input()
  public labelButton: string;

  @Input()
  public departments: Array<any> = [];

  @Input()
  public subject: any = {
    name: "",
    course_credits: 0,
    department: null
  }
  @Output()
  public onSend = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  send() {
    this.onSend.emit({
      "course_credits": this.subject.course_credits,
      "department": {
        "id": this.subject?.department?._id
      },
      "name": this.subject.name
    });
  }

}

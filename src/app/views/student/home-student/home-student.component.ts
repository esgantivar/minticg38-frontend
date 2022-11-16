import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.css']
})
export class HomeStudentComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {

  }

}

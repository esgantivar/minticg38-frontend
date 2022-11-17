import { Router } from '@angular/router';
import { AdminService } from './../../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  public student: any = {
    "cedula": "",
    "email": "",
    "first_name": "",
    "last_name": "",
    "username": "",
    "password": ""
  };
  constructor(private adminService: AdminService,
    private router: Router) { }

  ngOnInit(): void {

    const mipromesa = new Promise((resolve, reject)=> {
    });

    mipromesa.then(()=> {
      console.log("la respuesta fue exitosa");
    }).catch(()=> {
      console.log("se genero un error")
    })

  }

  public createStudent() {
    this.adminService.createStudent(this.student).subscribe({
      next: () => {
        alert("Estudiante se creo de forma exitosa");
        this.router.navigateByUrl("/admin/estudiantes");
      },
      error: () => {
        alert("Se presento un error");
      },
      complete: () => {
        console.log("se cerro la petición")
      }
    });
   /*
    const result = this.adminService.createStudent(this.student);
    console.log(result);
    // Error porq esto no es sincronico
    */
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  public getStudents() {
    return this.httpClient.get("http://127.0.0.1:5020/students", {
      headers: {
        "Authorization": "Bearer " + sessionStorage.getItem("jwt")
      }
    });
  }

  public getStudentById(id: string) {
    return this.httpClient.get("http://127.0.0.1:5020/students/" + id, {
      headers: {
        "Authorization": "Bearer " + sessionStorage.getItem("jwt")
      }
    });
  }

  public updateStudent(student: any) {
    return this.httpClient.put("http://127.0.0.1:5020/students/" + student["_id"], {
      "cedula": student["cedula"],
      "email": student["email"],
      "first_name": student["first_name"],
      "last_name": student["last_name"]
    }, {
      headers: {
        "Authorization": "Bearer " + sessionStorage.getItem("jwt")
      }
    });
  }

  public deleteStudent(id: string) {
    return this.httpClient.delete("http://127.0.0.1:5020/students/" + id, {
      headers: {
        "Authorization": "Bearer " + sessionStorage.getItem("jwt")
      }
    })
  }
}

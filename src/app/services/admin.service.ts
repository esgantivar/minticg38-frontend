import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  public getStudents() {
    return this.httpClient.get(`${environment.gatewayURL}/students`);
  }

  public getStudentById(id: string) {
    return this.httpClient.get(`${environment.gatewayURL}/students/${id}`);
  }

  public updateStudent(student: any) {
    return this.httpClient.put(`${environment.gatewayURL}/students/${student["_id"]}`, {
      "cedula": student["cedula"],
      "email": student["email"],
      "first_name": student["first_name"],
      "last_name": student["last_name"]
    });
  }

  public deleteStudent(id: string): Observable<any> {
    return this.httpClient.delete(`${environment.gatewayURL}/students/${id}`);
  }

  public createStudent(student: any) {
    return this.httpClient.post(`${environment.gatewayURL}/students`, student);
  }

  public getSubjects() {
    return this.httpClient.get(`${environment.gatewayURL}/subjects`);
  }

  public createSubject(body: any) {
    return this.httpClient.post(`${environment.gatewayURL}/subjects`, body);
  }

  public deleteSubject(id: string) {
    return this.httpClient.delete(`${environment.gatewayURL}/subjects/${id}`);
  }

  public getSubjectById(id: string) {
    return this.httpClient.get(`${environment.gatewayURL}/subjects/${id}`);
  }

  public updateSubject(id:string, subject: any) {
    return this.httpClient.put(`${environment.gatewayURL}/subjects/${id}`, subject);
  }

  public getDepartments() {
    return this.httpClient.get(`${environment.gatewayURL}/departments`);
  }
}

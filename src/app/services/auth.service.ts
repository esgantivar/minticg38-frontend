import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  public login(body: any) {
    return this.httpClient.post(`http://127.0.0.1:5020/login`, body)
  }

  public logout() {
    sessionStorage.removeItem("jwt");
    this.router.navigateByUrl("/login");
  }
}

import { environment } from './../../environments/environment';
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
    // return this.httpClient.post(environment.gatewayURL + '/login', body)
    return this.httpClient.post(`${environment.gatewayURL}/login`, body)
  }

  public logout() {
    sessionStorage.removeItem("jwt");
    this.router.navigateByUrl("/login");
  }
}

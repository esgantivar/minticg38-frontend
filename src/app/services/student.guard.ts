import jwtDecode from 'jwt-decode';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const jwt = sessionStorage.getItem("jwt");
    if(jwt) {
      const payload: any = jwtDecode(jwt);
      if (payload.sub.role.name != "Estudiante") {
        this.router.navigateByUrl("/login");
        return false;
      }
    } else {
      return false;
    }
    return true;
  }
}

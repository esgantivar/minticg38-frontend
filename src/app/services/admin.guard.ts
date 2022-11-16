import jwtDecode from 'jwt-decode';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const jwt = sessionStorage.getItem("jwt")
    if(jwt) {
      const payload: any = jwtDecode(jwt);
      /* Template string */
      /*
      "http://127/" + "students/" + id -> concatenación de strings (pegar strings)
      `http://127/students/${id}` -> Template string
       */
      if (payload.sub.role.name != "Administrador") {
        this.router.navigateByUrl("/login");
        return false;
      }
    } else {
      return false;
    }
    return true;
  }
}

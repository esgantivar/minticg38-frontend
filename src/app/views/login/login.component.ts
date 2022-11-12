import jwtDecode  from 'jwt-decode';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    // cada que ingresamos a esta vista
    const token = sessionStorage.getItem("jwt");
    if (token) {
      //si existe el token
      this.routeTo(token);
    }
  }

  public login() {
    if (this.username == '') {
      alert('el usuario es obligatorio');
    } else if (this.password == '') {
      alert('la contraseña es obligatoria');
    } else {
      const body = {
        username: this.username,
        password: this.password,
      };
      this.authService.login(body).subscribe({
        next: (response:any)=> {
          //exitosa
          sessionStorage.setItem("jwt", response.token)
          this.routeTo(response.token);
        },
        error: (error)=> {
          alert("se ha presentado un error");
        }
      })
    }
  }

  private routeTo(token:string) {
    const payload:any = jwtDecode(token);
    switch(payload.sub.role.name) {
      case "Administrador":
        this.router.navigateByUrl("/admin");
        break;
      case "Estudiante":
        this.router.navigateByUrl("/estudiante");
        break;
    }
  }
}

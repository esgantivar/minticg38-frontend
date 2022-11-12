import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  public username: string;
  public password: string;

  constructor(public router: Router) {

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
      console.log(body);
      this.router.navigateByUrl("/admin");
    }
  }
}

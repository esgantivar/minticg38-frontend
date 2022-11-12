import { AuthService } from './../../../services/auth.service';
import { Component } from "@angular/core";

@Component({
  selector: "app-admin-home",
  templateUrl: "./home-admin.component.html"
})
export class HomeAdminComponent {
  constructor(private authService: AuthService) {
  }
  public logout() {
    this.authService.logout();
  }
}

import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from "@angular/core";
import { MenuItem } from 'primeng/api';

@Component({
  selector: "app-admin-home",
  templateUrl: "./home-admin.component.html"
})
export class HomeAdminComponent implements OnInit {
  items: MenuItem[];
  constructor(private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Estudiantes',
        icon: 'pi pi-fw pi-users',
        command: () => {
          this.router.navigateByUrl("/admin/estudiantes")
        }
      },
      {
        label: 'Departamentos',
        icon: 'pi pi-fw pi-building',
      },
      {
        label: 'Materias',
        icon: 'pi pi-fw pi-align-justify',
      },
      {
        label: 'Inscripciones',
        icon: 'pi pi-fw pi-pencil',
      }
    ]
  }
  public logout() {
    this.authService.logout();
  }
}

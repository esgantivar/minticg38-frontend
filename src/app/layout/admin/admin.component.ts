import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  items: MenuItem[];

  constructor(private router: Router, private authService: AuthService) { }

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

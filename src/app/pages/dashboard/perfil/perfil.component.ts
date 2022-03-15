import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [
  ]
})
export class PerfilComponent implements OnInit {

  user?: Usuario;

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.user = {
      nombre: "Alejandro",
      apellido_paterno: "Arelis",
      apellido_materno: "Olivas",
      user: "AlejandroArelis",
      email: "alejandro.arelis@outlook.com"
    }
  }

  logOut() {
    this._router.navigate(["/", "auth"]);
  }

}

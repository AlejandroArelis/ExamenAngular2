import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styles: [
  ]
})
export class SingUpComponent implements OnInit {

  // Modelo
  form: FormGroup;

  // Banderas
  loading = false;
  showPassword = false;
  error = false;

  // Mensajes

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _route: Router
  ) {
    this.form = this._formBuilder.group({
      user: ["", Validators.required],
      password: ["", Validators.required],
      nombre: ["", Validators.required],
      apellido_paterno: ["", Validators.required],
      apellido_materno: [""],
    });
  }

  ngOnInit(): void {
  }

  signUp() {
    this._authService.signUp(this.form.value);
    this._route.navigate(["..", "log-in"]);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  // Modelo
  form: FormGroup;

  // Banderas
  loagind = false;
  showPassword = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService:AuthService,
    private _route:Router
  ) {

    this.form = this._formBuilder.group({
      user: ["", Validators.required],
      password: ["", Validators.required],
      recordar: [false]
    });
  }

  ngOnInit(): void {
  }

  login() {
    this._authService.login(this.form.value);
    this._route.navigate(["/dashboard"]);
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "log-in",
        loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
      },
      {
        path: "sign-up",
        loadChildren: () => import("./sing-up/sing-up.module").then(m => m.SingUpModule)
      },
      {
        path: "**",
        redirectTo: "log-in"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

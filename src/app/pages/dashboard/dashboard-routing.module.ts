import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "bienvenida",
        loadChildren: () => import("./bienvenida/bienvenida.module").then(m => m.BienvenidaModule)
      },
      {
       path:  "ingredientes-populares",
       loadChildren: () => import("./ingredientes-populares/ingredientes-populares.module").then(m => m.IngredientesEspecialesModule)
      },
      {
        path:  "ingredientes-populares/:id/platillos",
        loadChildren: () => import("./platillos/platillos.module").then(m => m.PlatillosModule)
       },
      {
        path: "platillos",
        loadChildren: () => import("./platillos/platillos.module").then(m => m.PlatillosModule)
      },
      {
        path: "platillo/:id",
        loadChildren: () => import("./platillos/platillo/platillo.module").then(m => m.PlatilloModule)
      },
      {
        path: "perfil",
        loadChildren: () => import("./perfil/perfil.module").then(m => m.PerfilModule)
      },
      {
        path: "**",
        redirectTo: "bienvenida"
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

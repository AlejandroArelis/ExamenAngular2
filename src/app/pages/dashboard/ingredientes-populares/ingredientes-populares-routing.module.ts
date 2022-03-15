import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientesPopularesComponent } from './ingredientes-populares.component';

const routes: Routes = [
  {
    path: "",
    component: IngredientesPopularesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientesEspecialesRoutingModule { }

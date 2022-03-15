import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientesEspecialesRoutingModule } from './ingredientes-populares-routing.module';
import { IngredientesPopularesComponent } from './ingredientes-populares.component';
import { AppModule } from 'src/app/app.module';
import { IngredienteComponent } from './ingrediente/ingrediente.component';
import { MaterialModule } from 'src/app/modules/material.module';


@NgModule({
  declarations: [
    IngredientesPopularesComponent,
    IngredienteComponent
  ],
  imports: [
    CommonModule,
    IngredientesEspecialesRoutingModule,
    MaterialModule
  ]
})
export class IngredientesEspecialesModule { }

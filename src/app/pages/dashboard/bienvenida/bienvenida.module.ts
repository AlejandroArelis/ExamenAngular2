import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BienvenidaRoutingModule } from './bienvenida-routing.module';
import { BienvenidaComponent } from './bienvenida.component';
import { MaterialModule } from 'src/app/modules/material.module';


@NgModule({
  declarations: [
    BienvenidaComponent
  ],
  imports: [
    CommonModule,
    BienvenidaRoutingModule,
    MaterialModule
  ]
})
export class BienvenidaModule { }

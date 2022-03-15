import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatilloRoutingModule } from './platillo-routing.module';
import { PlatilloComponent } from './platillo.component';
import { MaterialModule } from 'src/app/modules/material.module';


@NgModule({
  declarations: [
    PlatilloComponent
  ],
  imports: [
    CommonModule,
    PlatilloRoutingModule,
    MaterialModule
  ]
})
export class PlatilloModule { }

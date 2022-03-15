import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatillosRoutingModule } from './platillos-routing.module';
import { PlatillosComponent } from './platillos.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { PlatilloItemComponent } from './platillo-item/platillo-item.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PlatillosComponent,
    PlatilloItemComponent
  ],
  imports: [
    CommonModule,
    PlatillosRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class PlatillosModule { }

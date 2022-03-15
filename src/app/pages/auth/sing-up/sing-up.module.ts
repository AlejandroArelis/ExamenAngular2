import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingUpRoutingModule } from './sing-up-routing.module';
import { SingUpComponent } from './sing-up.component';
import { GeneralModule } from 'src/app/modules/general.module';
import { MaterialModule } from 'src/app/modules/material.module';


@NgModule({
  declarations: [
    SingUpComponent
  ],
  imports: [
    CommonModule,
    SingUpRoutingModule,
    GeneralModule,
    MaterialModule
  ]
})
export class SingUpModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { SharedModule } from '../shared/shared.module'
import { FormsValidationRoutingModule } from "./forms-validation-routing.module";

import { FormsValidationMainComponent } from './forms-validation-main.component';

@NgModule({
  imports: [
    SharedModule,
    FormsValidationRoutingModule,
    FormsModule
  ],
  declarations: [
    FormsValidationMainComponent
  ]
})
export class FormsValidationModule { }

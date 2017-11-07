import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module'
import { FormsValidationRoutingModule } from "./forms-validation-routing.module";

import { FormsValidationMainComponent } from './forms-validation-main.component';

@NgModule({
  imports: [
    SharedModule,
    FormsValidationRoutingModule
  ],
  declarations: [
    FormsValidationMainComponent
  ]
})
export class FormsValidationModule { }

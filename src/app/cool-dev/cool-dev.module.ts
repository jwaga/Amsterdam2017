import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module'
import { CoolDevRoutingModule } from "./cool-dev-routing.module";

import { CoolDevMainComponent } from './cool-dev-main.component';

@NgModule({
  imports: [
    SharedModule,
    CoolDevRoutingModule
  ],
  declarations: [
    CoolDevMainComponent
  ]
})
export class CoolDevModule { }

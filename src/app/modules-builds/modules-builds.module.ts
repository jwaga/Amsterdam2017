import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module'
import { ModulesBuildsRoutingModule } from "./modules-builds-routing.module";

import { ModulesBuildsMainComponent } from './modules-builds-main.component';

@NgModule({
  imports: [
    SharedModule,
    ModulesBuildsRoutingModule
  ],
  declarations: [
    ModulesBuildsMainComponent
  ]
})
export class ModulesBuildsModule { }

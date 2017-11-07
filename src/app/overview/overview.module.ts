import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module'
import { OverviewRoutingModule } from "./overview-routing.module";

import { OverviewMainComponent } from './overview-main.component';

@NgModule({
  imports: [
    SharedModule,
    OverviewRoutingModule
  ],
  declarations: [
    OverviewMainComponent
  ]
})
export class OverviewModule { }

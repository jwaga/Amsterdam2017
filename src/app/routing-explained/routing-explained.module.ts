import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module'
import { RoutingExplainedRoutingModule } from "./routing-explained-routing.module";

import { RoutingExplainedMainComponent } from './routing-explained-main.component';

@NgModule({
  imports: [
    SharedModule,
    RoutingExplainedRoutingModule
  ],
  declarations: [
    RoutingExplainedMainComponent
  ]
})
export class RoutingExplainedModule { }

import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module'
import { RoutingExplainedRoutingModule } from "./routing-explained-routing.module";

import { RoutingExplainedMainComponent } from './routing-explained-main.component';
import { RouteAComponent } from './route-a/route-a.component';
import { RouteBComponent } from './route-b/route-b.component';
import { SomeguardGuard } from './someguard.guard';
import { RouteCComponent } from './route-c/route-c.component';

@NgModule({
  imports: [
    SharedModule,
    RoutingExplainedRoutingModule
  ],
  declarations: [
    RoutingExplainedMainComponent,
    RouteAComponent,
    RouteBComponent,
    RouteCComponent
  ],
  providers: [
    SomeguardGuard
  ]
})
export class RoutingExplainedModule { }

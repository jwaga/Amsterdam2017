import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module'
import { ComponentsCommunityRoutingModule } from "./components-community-routing.module";

import { ComponentsCommunityMainComponent } from './components-community-main.component';

@NgModule({
  imports: [
    SharedModule,
    ComponentsCommunityRoutingModule
  ],
  declarations: [
    ComponentsCommunityMainComponent
  ]
})
export class ComponentsCommunityModule { }

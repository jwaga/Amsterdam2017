import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ArchitectureRoutingModule } from "./architecture-routing.module";

import { ArchitectureMainComponent } from './architecture-main.component';

@NgModule({
  imports: [
    SharedModule,
    ArchitectureRoutingModule
  ],
  declarations: [
    ArchitectureMainComponent
  ]
})
export class ArchitectureModule { }

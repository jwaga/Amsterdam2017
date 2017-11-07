import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ArchitectureRoutingModule } from "./architecture-routing.module";

import { ArchitectureMainComponent } from './architecture-main.component';
import { PatientService } from "./patient.service";

@NgModule({
  imports: [
    SharedModule,
    ArchitectureRoutingModule
  ],
  declarations: [
    ArchitectureMainComponent
  ],
  providers: [
    PatientService
  ]
})
export class ArchitectureModule { }

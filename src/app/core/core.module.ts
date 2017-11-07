import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module'

import { MainViewComponent } from './main-view.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    MainViewComponent
  ],
  exports: [
    MainViewComponent
  ]
})
export class CoreModule { }

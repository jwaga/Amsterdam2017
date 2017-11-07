import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module'

import { MainViewComponent } from './main-view.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [
    MainViewComponent
  ],
  exports: [
    MainViewComponent
  ]
})
export class CoreModule { }

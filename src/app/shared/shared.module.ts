import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from '@angular/material';
import { MatChipsModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material';

@NgModule({
  imports: [
    MatGridListModule,
    MatChipsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  exports: [
    MatGridListModule,
    MatChipsModule,
    MatToolbarModule,
    MatTooltipModule
  ]
})
export class MaterialDesignWrapperModule { } 

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignWrapperModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    MaterialDesignWrapperModule
  ]
})
export class SharedModule { }

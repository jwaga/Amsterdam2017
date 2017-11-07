import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorPickerModule } from 'ngx-color-picker';

import { MatGridListModule } from '@angular/material';
import { MatChipsModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    MatGridListModule,
    MatChipsModule,
    MatToolbarModule,
    ColorPickerModule
  ],
  exports: [
    MatGridListModule,
    MatChipsModule,
    MatToolbarModule,
    ColorPickerModule
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ColorPickerModule } from 'ngx-color-picker';
import { Ng2CompleterModule } from "ng2-completer";

import { MatGridListModule } from '@angular/material';
import { MatChipsModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    FormsModule,
    MatGridListModule,
    MatChipsModule,
    MatToolbarModule,
    ColorPickerModule,
    Ng2CompleterModule
  ],
  exports: [
    FormsModule,
    MatGridListModule,
    MatChipsModule,
    MatToolbarModule,
    ColorPickerModule,
    Ng2CompleterModule
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

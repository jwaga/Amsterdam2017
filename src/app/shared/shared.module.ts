import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material';
import { MatChipsModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material';

@NgModule({
  imports: [
    FormsModule,
    MatGridListModule,
    MatChipsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatSlideToggleModule
  ],
  exports: [
    FormsModule,
    MatGridListModule,
    MatChipsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatSlideToggleModule
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatGridListModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  exports: [
    MatGridListModule
  ]
})
export class AppMaterialModule { }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

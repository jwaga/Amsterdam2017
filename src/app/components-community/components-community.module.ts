import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module'
import { ComponentsCommunityRoutingModule } from "./components-community-routing.module";

import { ComponentsCommunityMainComponent } from './components-community-main.component';

import { ColorPickerModule } from 'ngx-color-picker';
import { Ng2CompleterModule } from "ng2-completer";
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [
    SharedModule,
    ComponentsCommunityRoutingModule,
    ColorPickerModule,
    Ng2CompleterModule,
    PdfViewerModule
  ],
  declarations: [
    ComponentsCommunityMainComponent
  ]
})
export class ComponentsCommunityModule { }

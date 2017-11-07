import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsCommunityMainComponent } from './components-community-main.component'

const routes: Routes = [
    {
        path: '',
        component: ComponentsCommunityMainComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ComponentsCommunityRoutingModule { }
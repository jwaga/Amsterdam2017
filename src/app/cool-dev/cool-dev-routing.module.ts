import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoolDevMainComponent } from './cool-dev-main.component'

const routes: Routes = [
    {
        path: '',
        component: CoolDevMainComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class CoolDevRoutingModule { }
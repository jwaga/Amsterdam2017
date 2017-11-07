import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutingExplainedMainComponent } from './routing-explained-main.component'

const routes: Routes = [
    {
        path: '',
        component: RoutingExplainedMainComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class RoutingExplainedRoutingModule { }
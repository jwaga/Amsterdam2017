import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewMainComponent } from './overview-main.component'

const routes: Routes = [
    {
        path: '',
        component: OverviewMainComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class OverviewRoutingModule { }
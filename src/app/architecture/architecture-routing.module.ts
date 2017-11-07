import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArchitectureMainComponent } from './architecture-main.component'

const routes: Routes = [
    {
        path: '',
        component: ArchitectureMainComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ArchitectureRoutingModule { }
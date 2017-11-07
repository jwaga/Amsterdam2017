import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModulesBuildsMainComponent } from './modules-builds-main.component'

const routes: Routes = [
    {
        path: '',
        component: ModulesBuildsMainComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ModulesBuildsRoutingModule { }
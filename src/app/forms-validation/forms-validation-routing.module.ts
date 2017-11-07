import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsValidationMainComponent } from './forms-validation-main.component'

const routes: Routes = [
    {
        path: '',
        component: FormsValidationMainComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class FormsValidationRoutingModule { }
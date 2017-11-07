import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainViewComponent } from './core/main-view.component'

const routes: Routes = [
    {
        path: '',
        component: MainViewComponent
    }
    // TODO: Lazy load the feature modules
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
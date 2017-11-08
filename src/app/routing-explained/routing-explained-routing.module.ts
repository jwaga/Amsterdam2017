import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutingExplainedMainComponent } from './routing-explained-main.component'
import { RouteAComponent } from './route-a/route-a.component'
import { RouteBComponent } from './route-b/route-b.component'
import { RouteCComponent } from './route-c/route-c.component'
import { SomeguardGuard } from './someguard.guard'

const routes: Routes = [
    {
        path: '',
        component: RoutingExplainedMainComponent,
        children: [{
            path: 'routeA',
            component: RouteAComponent
        },
        {
            path: 'routeB',
            canActivate: [SomeguardGuard],
            component: RouteBComponent
        },
        {
            path: 'routeC',
            component: RouteCComponent
        },
        {
            path: 'routeC/:id',
            component: RouteCComponent
        }]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class RoutingExplainedRoutingModule { }
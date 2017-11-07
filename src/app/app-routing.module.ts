import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainViewComponent } from './core/main-view.component'

const routes: Routes = [
    {
        path: '',
        component: MainViewComponent
    },
    {
        path: 'overview',
        loadChildren: './overview/overview.module#OverviewModule'
    },
    {
        path: 'cool-dev',
        loadChildren: './cool-dev/cool-dev.module#CoolDevModule'
    },
    {
        path: 'architecture',
        loadChildren: './architecture/architecture.module#ArchitectureModule'
    },
    {
        path: 'modules-builds',
        loadChildren: './modules-builds/modules-builds.module#ModulesBuildsModule'
    },
    {
        path: 'forms-validation',
        loadChildren: './forms-validation/forms-validation.module#FormsValidationModule'
    },
    {
        path: 'routing-explained',
        loadChildren: './routing-explained/routing-explained.module#RoutingExplainedModule'
    },
    {
        path: 'components-community',
        loadChildren: './components-community/components-community.module#ComponentsCommunityModule'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
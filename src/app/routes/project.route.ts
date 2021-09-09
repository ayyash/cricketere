import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared.module';
import { Routes, RouterModule } from '@angular/router';
import * as CoreComponents from '../core/components';
import { ProjectModule } from './project.module';

const routes: Routes = [
    {
        path: '',
        component: CoreComponents.ProjectListComponent
    }
    , {
        path: 'create',
        component: CoreComponents.ProjectCreateComponent
    }

    , {
        path: 'edit/:id',
        component: CoreComponents.ProjectEditComponent
    }

    , {
        path: ':id',
        component: CoreComponents.ProjectViewComponent
    }


    // **gulproute**
];

@NgModule({
    imports: [
        SharedModule,
        ProjectModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        CoreComponents.ProjectListComponent
        , CoreComponents.ProjectViewComponent
        , CoreComponents.ProjectCreateComponent
        , CoreComponents.ProjectEditComponent
        // **gulpcomponent**
    ]
})

export class ProjectRoutingModule { }

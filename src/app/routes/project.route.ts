import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ProjectModule } from './project.module';
import { ProjectCreateComponent } from '../components/project/create.component';
import { ProjectEditComponent } from '../components/project/edit.component';
import { ProjectListComponent } from '../components/project/list.component';
import { ProjectViewComponent } from '../components/project/view.component';
import { ProjectResolve } from '../services/project.resolve';
// **gulpimport**

const routes: Routes = [
    {
        path: '',
        component: ProjectListComponent
    }
    , {
        path: 'create',
        component: ProjectCreateComponent,
        resolve: {
            ready: ProjectResolve
        }
    }

    , {
        path: 'edit/:id',
        component: ProjectEditComponent
    }

    , {
        path: ':id',
        component: ProjectViewComponent
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
        ProjectListComponent
        , ProjectViewComponent
        , ProjectCreateComponent
        , ProjectEditComponent
        // **gulpcomponent**
    ]
})

export class ProjectRoutingModule { }

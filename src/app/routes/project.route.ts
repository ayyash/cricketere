import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectCreateComponent } from '../components/project/create.component';
import { ProjectEditComponent } from '../components/project/edit.component';
import { ProjectListComponent } from '../components/project/list.component';
import { ProjectViewComponent } from '../components/project/view.component';
import { ProjectResolve } from '../services/project.resolve';
import { StarsPartialComponent } from '../components/common/stars.partial';
import { ProjectCardPartialComponent } from '../components/project/card.partial';
import { SHARED_COMPONENTS } from '../core/shared.const';
import { CommonModule } from '@angular/common';
import { ProjectFormPartialComponent } from '../components/project/form.partial';
import { ReactiveFormsModule } from '@angular/forms';
import { MdInputModule } from '../lib/mdinput/mdinput.module';
// **gulpimport**

const routes: Routes = [
    {
        path: '',
        component: ProjectListComponent,
        title: 'LIST_PROJECTS'
    }
    , {
        path: 'create',
        component: ProjectCreateComponent,
        title: 'CREATE_PROJECT',
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
      CommonModule,
        StarsPartialComponent,
        ProjectCardPartialComponent,
        ReactiveFormsModule,
        MdInputModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ProjectListComponent
        , ProjectViewComponent
        , ProjectCreateComponent
        , ProjectEditComponent
        , ProjectFormPartialComponent,
        // **gulpcomponent**
    ]
})

export class ProjectRoutingModule { }

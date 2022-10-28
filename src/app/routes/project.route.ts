import { ENVIRONMENT_INITIALIZER } from '@angular/core';
import { Routes} from '@angular/router';
import { ProjectCreateComponent } from '../components/project/create.component';
import { ProjectEditComponent } from '../components/project/edit.component';
import { ProjectListComponent } from '../components/project/list.component';
import { ProjectViewComponent } from '../components/project/view.component';
import { ConfigService } from '../services/config.service';
import { ProjectResolve } from '../services/project.resolve';
// **gulpimport**

export const ProjectRoutes: Routes = [
    {
        path: '',
        component: ProjectListComponent,
        title: 'LIST_PROJECTS',
        providers: [
          {
            provide: ENVIRONMENT_INITIALIZER,
            multi: true,
            useValue() {
              // same effect everywhere
              _seqlog('PublicRoutes');
              _attn('this is nothing', 'list of projects');
            },
          }
        ]
    }
    , {
        path: 'create',
        component: ProjectCreateComponent,
        title: 'CREATE_PROJECT',
        resolve: {
            ready: ProjectResolve
        },
        providers: [
          {
            provide: ENVIRONMENT_INITIALIZER,
            multi: true,
            useValue() {
              _seqlog('PublicRoutes');
              _attn(ConfigService.Config.isServed, 'create');
            },
          }
        ]
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

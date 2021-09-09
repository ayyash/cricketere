import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared.module';
import { RouterModule } from '@angular/router';
import * as CoreComponents from '../core/components';

@NgModule({
    imports: [
        SharedModule,
        RouterModule
    ],
    declarations: [
        CoreComponents.ProjectCardPartialComponent
        , CoreComponents.ProjectFormPartialComponent
        // **gulpcomponent**
    ],
    exports: [
        CoreComponents.ProjectCardPartialComponent
        , CoreComponents.ProjectFormPartialComponent
        // **gulpcomponent**
    ]
})

export class ProjectModule { }

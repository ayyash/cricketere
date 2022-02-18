import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared.module';
import { RouterModule } from '@angular/router';
import { ProjectCardPartialComponent } from '../components/project/card.partial';
import { ProjectFormPartialComponent } from '../components/project/form.partial';
// **gulpimport**

@NgModule({
    imports: [
        SharedModule,
        RouterModule
    ],
    declarations: [
        ProjectCardPartialComponent
        , ProjectFormPartialComponent
        // **gulpcomponent**
    ],
    exports: [
        ProjectCardPartialComponent
        , ProjectFormPartialComponent
        // **gulpcomponent**
    ]
})

export class ProjectModule { }

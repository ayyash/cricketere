import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared.module';
import { RouterModule } from '@angular/router';
import { ProjectFormPartialComponent } from '../components/project/form.partial';
import { StarsPartialComponent } from '../components/common/stars.partial';
// **gulpimport**

@NgModule({
    imports: [
        SharedModule,
        RouterModule,
    ],
    declarations: [
         ProjectFormPartialComponent
        // **gulpcomponent**
    ],
    exports: [
         ProjectFormPartialComponent
        // **gulpcomponent**
    ]
})

export class ProjectModule { }

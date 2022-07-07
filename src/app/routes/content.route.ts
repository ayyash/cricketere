import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ContentDetailsComponent } from '../components/content/details.component';
// **gulpimport**

const routes: Routes = [
   {
    path: 'details',
    component: ContentDetailsComponent
}

// **gulproute**
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
         ContentDetailsComponent
// **gulpcomponent**
    ]
})

export class ContentRoutingModule { }

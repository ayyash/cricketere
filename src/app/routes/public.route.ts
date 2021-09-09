import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared.module';
import { Routes, RouterModule } from '@angular/router';
import * as CoreComponents from '../core/components';



const routes: Routes = [
    {
        path: '',
        component: CoreComponents.PublicHomeComponent,
        data: {
            title: 'SITE_NAME'
        }
    }
    , {
        path: 'login',
        component: CoreComponents.PublicLoginComponent
    }

    , {
        path: 'forgot',
        component: CoreComponents.PublicForgotComponent
    }

    // **gulproute**
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        CoreComponents.PublicHomeComponent
        , CoreComponents.PublicLoginComponent
        , CoreComponents.PublicForgotComponent
        // **gulpcomponent**
    ]
})
export class PublicRoutingModule { }


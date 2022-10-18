import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { PublicForgotComponent } from '../components/public/forgot.component';
import { PublicHomeComponent } from '../components/public/home.component';
import { PublicLoginComponent } from '../components/public/login.component';
import { ProjectCardPartialComponent } from '../components/project/card.partial';
// **gulpimport**

const routes: Routes = [
    {
        path: '',
        component: PublicHomeComponent,
        title: 'SITE_NAME'
    }
    , {
        path: 'login',
        component: PublicLoginComponent,
        title: 'LOGIN'
    }

    , {
        path: 'forgot',
        component: PublicForgotComponent
    }

    // **gulproute**
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        ProjectCardPartialComponent
    ],
    declarations: [
        PublicHomeComponent
        , PublicLoginComponent
        , PublicForgotComponent
        // **gulpcomponent**
    ]
})
export class PublicRoutingModule { }


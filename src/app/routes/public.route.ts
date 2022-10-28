import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicForgotComponent } from '../components/public/forgot.component';
import { PublicHomeComponent } from '../components/public/home.component';
import { PublicLoginComponent } from '../components/public/login.component';
import { ProjectCardPartialComponent } from '../components/project/card.partial';
import { CommonModule } from '@angular/common';
import { SHARED_COMPONENTS} from '../core/shared.const';
import { ReactiveFormsModule } from '@angular/forms';
import { MdInputModule } from '../lib/mdinput/mdinput.module';
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
        RouterModule.forChild(routes),
        CommonModule,
        MdInputModule,
        ReactiveFormsModule,
        ProjectCardPartialComponent
        , ...SHARED_COMPONENTS
    ],
    declarations: [
      PublicHomeComponent,
      PublicLoginComponent,
      PublicForgotComponent
    ]
})
export class PublicRoutingModule { }


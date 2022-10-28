import { Routes } from '@angular/router';
import { PublicForgotComponent } from '../components/public/forgot.component';
import { PublicHomeComponent } from '../components/public/home.component';
import { PublicLoginComponent } from '../components/public/login.component';
// **gulpimport**

export const PublicRoutes: Routes = [
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

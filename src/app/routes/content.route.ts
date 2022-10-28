import { Routes } from '@angular/router';
import { ContentDetailsComponent } from '../components/content/details.component';
import { ContentStandaloneComponent } from '../components/content/standalone.component';
// **gulpimport**

export const ContentRoutes: Routes = [
  {
    path: 'details',
    component: ContentDetailsComponent,
    title: 'Details'
  }

  , {
    path: 'standalone',
    component: ContentStandaloneComponent
  }

  // **gulproute**
];


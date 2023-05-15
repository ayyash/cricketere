import { Routes } from '@angular/router';
import { ContentDetailsComponent } from '../components/content/details.component';
import { ContentStandaloneComponent } from '../components/content/standalone.component';
import { ContentDialogComponent } from '../components/content/dialog.component';
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

  ,{
    path: 'dialog',
    component: ContentDialogComponent
}

// **gulproute**
];


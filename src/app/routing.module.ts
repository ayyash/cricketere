import { ViewportScroller } from '@angular/common';
import { ENVIRONMENT_INITIALIZER, importProvidersFrom, inject } from '@angular/core';
import { provideRouter, Router, RouteReuseStrategy, RouterModule, Routes, Scroll, TitleStrategy, withDebugTracing, withEnabledBlockingInitialNavigation, withInMemoryScrolling, withPreloading, withRouterConfig } from '@angular/router';
import { filter } from 'rxjs';
import { NotFoundComponent } from './components/layouts/404.component';
import { ErrorComponent } from './components/layouts/error.component';
import { MainLayoutComponent } from './components/layouts/main.component';
import { SingleLayoutComponent } from './components/layouts/single.component';
import { PreloadService } from './core/preload.service';
import { RouteReuseService } from './core/routereuse.service';
import { ConfigService } from './services/config.service';
import { CricketTitleStrategy } from './services/title.service';


const AppRoutes: Routes = [
  {
    path: 'error',
    component: SingleLayoutComponent,
    children: [
      {
        path: '',
        component: ErrorComponent,
        title: 'ERROR'
      }
    ]
  },
  {
    path: '404',
    component: SingleLayoutComponent,
    children: [
      {
        path: '',
        component: NotFoundComponent,
        title: 'NOT_FOUND'
      }
    ]
  },

  // lazy loading? remove declration from app.module

  {
    path: 'projects',
    component: MainLayoutComponent,
    loadChildren: () => import('./routes/project.route').then(m => m.ProjectRoutes),
    data: { preload: true, delay: 4000 }

  },
  {
    path: 'products',
    component: MainLayoutComponent,
    loadChildren: () => import('./routes/product.route').then(m => m.ProductRoutes),
    data: { preload: true }

  },
  // turn this into standalone

  {
    path: 'content',
    component: SingleLayoutComponent,
    loadChildren: () => import('./routes/content.route').then(m => m.ContentRoutes),
    data: { preload: true, delay: 1000 }

  },
  {
    path: '',
    component: SingleLayoutComponent,
    loadChildren: () => import('./routes/public.route').then(m => m.PublicRoutes),
    data: { preload: true }

  },
  // **gulproute**
  {
    path: '**',
    redirectTo: '/404', // make 404
    pathMatch: 'full'
  }
];


const appFactory = (router: Router) => () => {
  _seqlog('appFactory');
  _attn(ConfigService.Config.isServed, 'config served');
  router.events.pipe(
    filter(event => event instanceof Scroll)
  ).subscribe({
    next: (e: Scroll) => {
      _attn(e.position, 'position');
      _attn(ConfigService.Config.isServed, 'config served');

    }
  });
};

export const AppRouteProviders = [

  importProvidersFrom(RouterModule.forRoot(AppRoutes, {
    preloadingStrategy: PreloadService,
    paramsInheritanceStrategy: 'always',
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'disabled',
    initialNavigation: 'enabledBlocking'
  })),
  { provide: RouteReuseStrategy, useClass: RouteReuseService },
  { provide: TitleStrategy, useClass: CricketTitleStrategy },
  {
    provide: ENVIRONMENT_INITIALIZER,
    multi: true,
    useFactory: appFactory,
    deps: [Router]
  }
];

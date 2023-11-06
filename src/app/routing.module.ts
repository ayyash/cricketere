import { ENVIRONMENT_INITIALIZER, importProvidersFrom } from '@angular/core';
import { RouteReuseStrategy, Router, RouterModule, Routes, Scroll, TitleStrategy } from '@angular/router';
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
  // provideRouter(AppRoutes,
    // withPreloading(PreloadService),
    // withInMemoryScrolling({
    //   scrollPositionRestoration: 'disabled',
    // }),
    // withEnabledBlockingInitialNavigation(),
    // withRouterConfig({
    //   paramsInheritanceStrategy: 'always',
    //   onSameUrlNavigation: 'reload'
    // }),
    // withDebugTracing()
  // ),
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

/*
 useValue() {
      _seqlog('AppRouteProviders');
      const router = inject(Router);
      const viewportScroller = inject(ViewportScroller);

      router.events.pipe(
        filter(event => event instanceof Scroll)
      ).subscribe({
        next: (e: Scroll) => {
          if (e.position) {
            // backward navigation
            _attn(e.position, 'position');
            viewportScroller.scrollToPosition(e.position);
          } else if (e.anchor) {
            // anchor navigation
            _attn(e.anchor, 'anchor');
            viewportScroller.scrollToAnchor(e.anchor);
          } else {
            // forward navigation
            // check url if page exists do not scroll
            if (!e.routerEvent.urlAfterRedirects.includes('page')) {
              _attn('no page', 'scroll top');
              viewportScroller.scrollToPosition([0, 0]);
            }
          }
        }
      });
    },
    */

// @NgModule({
//   imports: [
//     RouterModule.forRoot(AppRoutes, {
//       preloadingStrategy: PreloadService,
//       paramsInheritanceStrategy: 'always',
//       onSameUrlNavigation: 'reload',
//       scrollPositionRestoration: 'disabled',
//       initialNavigation: 'enabledBlocking'
//     })
//   ],
//   exports: [RouterModule],
//   providers: [{ provide: RouteReuseStrategy, useClass: RouteReuseService },
//   { provide: TitleStrategy, useClass: CricketTitleStrategy }]

// })
// export class AppRoutingModule {
//   constructor(
//     router: Router,
//     // location: Location, // angular/common
//     viewportScroller: ViewportScroller,

//   ) {
//     _seqlog('app routing');

//     router.events.pipe(
//       filter(event => event instanceof Scroll)
//     ).subscribe({
//       next: (e: Scroll) => {
//         if (e.position) {
//           // backward navigation
//           // _attn(e.position, 'position');
//           viewportScroller.scrollToPosition(e.position);
//         } else if (e.anchor) {
//           // anchor navigation
//           // _attn(e.anchor, 'anchor');
//           viewportScroller.scrollToAnchor(e.anchor);
//         } else {
//           // forward navigation
//           // check url if page exists do not scroll
//           if (!e.routerEvent.urlAfterRedirects.includes('page')) {
//             // _attn('no page', 'scroll top');
//             viewportScroller.scrollToPosition([0, 0]);
//           }
//         }
//       }
//     });

    // for netlify solution for URL based with /en/ base href, use query
    // router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    // ).subscribe({
    //   next: (e: NavigationEnd) => {
    //     if (router.url.indexOf('nf_route=') < 0 ) {
    //       // not good enough this ignores other params
    //       location.go(router.url, 'nf_route=1');
    //     }
    //   }
    // });

//   }
// }



import { ViewportScroller, Location } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouteReuseStrategy, RouterModule, Routes, Scroll, TitleStrategy } from '@angular/router';
import { filter } from 'rxjs';
import { NotFoundComponent } from './components/layouts/404.component';
import { ErrorComponent } from './components/layouts/error.component';
import { MainLayoutComponent } from './components/layouts/main.component';
import { SingleLayoutComponent } from './components/layouts/single.component';
import { PreloadService } from './core/preload.service';
import { RouteReuseService } from './core/routereuse.service';
import { CricketTitleStrategy } from './services/title.service';


const routes: Routes = [
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
    path: '',
    component: SingleLayoutComponent,
    loadChildren: () => import('./routes/public.route').then(m => m.PublicRoutingModule),
    data: { preload: true }

  },
  {
    path: 'projects',
    component: MainLayoutComponent,
    loadChildren: () => import('./routes/project.route').then(m => m.ProjectRoutingModule),
    data: { preload: true }

  },
  {
    path: 'products',
    component: MainLayoutComponent,
    loadChildren: () => import('./routes/product.route').then(m => m.ProductRoutingModule),
    data: { preload: true }

  },
  {
    path: 'content',
    component: SingleLayoutComponent,
    loadChildren: () => import('./routes/content.route').then(m => m.ContentRoutingModule),
    data: { preload: true, delay: 1000 }

  },
  // **gulproute**
  {
    path: '**',
    redirectTo: '/404', // make 404
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadService,
      paramsInheritanceStrategy: 'always',
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
    })
  ],
  exports: [RouterModule],
  providers: [{ provide: RouteReuseStrategy, useClass: RouteReuseService },
  { provide: TitleStrategy, useClass: CricketTitleStrategy }]

})
export class AppRoutingModule {
  constructor(
    router: Router,
    // location: Location, // angular/common
    viewportScroller: ViewportScroller,

  ) {
    _seqlog('app routing');

    router.events.pipe(
      filter(event => event instanceof Scroll)
    ).subscribe({
      next: (e: Scroll) => {
        //  if (e.anchor) {
        //     viewportScroller.scrollToAnchor(e.anchor);
        //  }
        // if (e.position) {
        //   // backward navigation
        //   // _attn(e.position, 'position');
        //   viewportScroller.scrollToPosition(e.position);
        // } else if (e.anchor) {
        //   // anchor navigation
        //   // _attn(e.anchor, 'anchor');
        //   viewportScroller.scrollToAnchor(e.anchor);
        // } else {
        //   // forward navigation
        //   // check url if page exists do not scroll
        //   if (!e.routerEvent.urlAfterRedirects.includes('page')) {
        //     // _attn('no page', 'scroll top');
        //     viewportScroller.scrollToPosition([0, 0]);
        //   }
        // }
      }
    });

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

  }
}



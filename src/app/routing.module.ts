import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import * as CoreComponents from './core/components';
import { PreloadService } from './core/preload.service';
import {  RouteReuseService  } from './core/routereuse.service';

const routes: Routes = [
    {
        path: 'error',
        component: CoreComponents.SingleLayoutComponent,
        children: [
            {
                path: '',
                component: CoreComponents.ErrorComponent,
                data: {
                    title: 'ERROR'
                }
            }
        ]
    },
    {
        path: '404',
        component: CoreComponents.SingleLayoutComponent,
        children: [
            {
                path: '',
                component: CoreComponents.NotFoundComponent,
                data: {
                    title: 'NOT_FOUND'
                }
            }
        ]
    },

    // lazy loading? remove declration from app.module
    {
        path: '',
        component: CoreComponents.SingleLayoutComponent,
        loadChildren: () => import('./routes/public.route').then(m => m.PublicRoutingModule),
        data: {preload: true}

    },
    {
        path: 'projects',
        component: CoreComponents.MainLayoutComponent,
        loadChildren: () => import('./routes/project.route').then(m => m.ProjectRoutingModule),
        data: {preload: true}

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
            initialNavigation: 'enabledBlocking'
        })
    ],
    exports: [RouterModule],
    providers: [{provide: RouteReuseStrategy, useClass: RouteReuseService}]

})
export class AppRoutingModule {}



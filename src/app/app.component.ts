import { Component } from '@angular/core';
import { NavigationEnd, Router, NavigationCancel, ActivatedRoute } from '@angular/router';
import { LoaderService, SeoService } from './core/services';
import { GaTracking } from './core/ga';
import { filter } from 'rxjs/operators';
@Component({
    selector: 'app-root',
    template: '<http-loader></http-loader><sh-toast *shServerRender="false"></sh-toast><router-outlet></router-outlet>'
})
export class AppComponent {
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private seoService: SeoService,
        private LoaderService: LoaderService // @Inject(LOCALE_ID) protected localeId: string
    ) {


        // this.router.initialNavigation();


        this.router.events
            .pipe(filter(e => e instanceof NavigationEnd || e instanceof NavigationCancel))
            .subscribe(event => {
                // use snapshot to get title, instead of data subscribe?
                // note to self: this is okay because the main trigger is the event change
                let route = this.activatedRoute.snapshot;
                while (route.firstChild) {
                    route = route.firstChild;
                }
                // return route.data;
                if (route.data && route.data.title) {
                    this.seoService.setPageTitle(route.data.title);
                }

                if (event instanceof NavigationEnd) {
                    if (event.urlAfterRedirects === '/404') {
                        // if 404 is the url, do nothing, the 404 has already been handled
                        if (event.url !== '/404') {
                            this.LoaderService.emitUrl(event.url);
                            GaTracking.RegisterError('404: ' + event.url, false);
                        }
                    } else {
                        this.LoaderService.emitUrl(event.urlAfterRedirects);
                    }
                } else if (event instanceof NavigationCancel) {
                    this.LoaderService.emitUrl(event.url);
                    // this happens when user isn't logged in
                }


            });

    }
}

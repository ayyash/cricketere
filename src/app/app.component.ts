import { Component } from '@angular/core';
import { NavigationEnd, Router, NavigationCancel, ActivatedRoute } from '@angular/router';
import { LoaderService, SeoService } from './core/services';
import { GaTracking } from './core/ga';
import { filter } from 'rxjs/operators';
import { ConfigInitService } from './services/configinit.service';
import { GtmTracking } from './core/gtm';
@Component({
    selector: 'app-root',
    template: '<http-loader></http-loader><sh-toast *shServerRender="false"></sh-toast><router-outlet></router-outlet>'
})
export class AppComponent {
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private seoService: SeoService,
        private configInit: ConfigInitService,
        private LoaderService: LoaderService // @Inject(LOCALE_ID) protected localeId: string
    ) {


        // this.router.initialNavigation();


        this.router.events
            .pipe(filter(e => e instanceof NavigationEnd || e instanceof NavigationCancel))
            .subscribe(event => {
                _seqlog('router event');
                // use snapshot to get title, instead of data subscribe?
                // note to self: this is okay because the main trigger is the event change
                let route = this.activatedRoute.snapshot;
                while (route.firstChild) {
                    route = route.firstChild;
                }



                if (event instanceof NavigationEnd) {
                    GtmTracking.Reset();
                    if (event.urlAfterRedirects === '/404') {
                        // if 404 is the url, do nothing, the 404 has already been handled
                        if (event.url !== '/404') {
                            this.LoaderService.emitUrl(event.url);
                            GaTracking.RegisterError('404: ' + event.url, false);
                        }
                    } else {
                        this.LoaderService.emitUrl(event.urlAfterRedirects);

                         // return route.data;
                        this.seoService.setPage(route.data?.title);
                    }
                } else if (event instanceof NavigationCancel) {
                    this.LoaderService.emitUrl(event.url);
                    // this happens when user isn't logged in
                }


            });

    }
}

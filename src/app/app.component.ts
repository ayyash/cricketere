import { Component } from '@angular/core';
import { NavigationEnd, Router, NavigationCancel, RouterModule } from '@angular/router';
import { LoaderService } from './core/services';
import { filter } from 'rxjs/operators';
import { EnumGtmEvent, GtmTracking } from './core/gtm';
import { LoaderComponent } from './components/common/loader.partial';
import { AppShellRenderDirective } from './lib/directives/render.directive';
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, LoaderComponent, AppShellRenderDirective],
    template: `<http-loader></http-loader>

    <router-outlet></router-outlet>`
})
export class AppComponent {
    constructor(
        private router: Router,
        private LoaderService: LoaderService // @Inject(LOCALE_ID) protected localeId: string
    ) {


        // this.router.initialNavigation();

        this.router.events
            .pipe(filter(e => e instanceof NavigationEnd || e instanceof NavigationCancel))
            .subscribe(event => {
                _seqlog('router event');
                if (event instanceof NavigationEnd) {
                    GtmTracking.Reset();
                    if (event.urlAfterRedirects === '/404') {
                        // if 404 is the url, do nothing, the 404 has already been handled
                        if (event.url !== '/404') {
                            this.LoaderService.emitUrl(event.url);
                            GtmTracking.RegisterEvent({event: EnumGtmEvent.Error}, {error: '404: ' + event.url});
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

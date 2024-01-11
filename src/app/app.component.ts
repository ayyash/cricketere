import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LoaderComponent } from './components/common/loader.partial';
import { EnumGtmEvent, GtmTracking } from './core/gtm';
import { LoaderService } from './core/services';
import { AppShellRenderDirective } from './lib/directives/render.directive';
import { ToastPartialComponent } from './lib/toaster/toast.component';
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, LoaderComponent, ToastPartialComponent, AppShellRenderDirective],
    template: `<http-loader></http-loader>
    <gr-toast *shServerRender="false"></gr-toast>
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

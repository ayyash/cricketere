import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';

import { Res } from '../core/resources';
import { Title, Meta } from '@angular/platform-browser';
import { GaTracking, IGaDims } from '../core/ga';

@Injectable({
    providedIn: 'root'
})
export class SeoService {

    constructor(
        private title: Title,
        private meta: Meta,
        @Inject(DOCUMENT) private doc: Document,
        private platform: Platform
    ) {

        // add all basic unchanging links
        const _hostname = this.doc.location.hostname.split('.');

        if (!this.platform.isBrowser) {

            // set all required meta tags
        }


    }

    setPageTitle(key: string) {
        // set generic page title (brought from data)
        const _title = Res.Get('PAGE_TITLES')[key] || Res.Get('DEFAULT_PAGE_TITLE');
        this.setTitle(_title + ' - ' + Res.Get('SITE_NAME'));
    }
    setPageSeo(){
        // set meta tags per page then register call
        // use platform for meta tags on server
        this.gaTrack();
    }

    private setTitle(title: string) {
        // after setting title, send google analytics page view, not before
        this.title.setTitle(title);
    }
    private gaTrack(dims?: IGaDims, path?: string) {
        // send goole analytics view when seo is set per page
        GaTracking.RegisterView(path || this.doc.location.pathname, dims);
    }


    getPagePath() {
        return this.doc.location.pathname;
    }
}

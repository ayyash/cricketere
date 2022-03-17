import { Inject, Injectable } from '@angular/core';

import { Res } from '../core/resources';
import { Title, Meta } from '@angular/platform-browser';
import { GaTracking, IGaDims } from '../core/ga';
import { Platform } from '../lib/platform.service';
import { DOCUMENT } from '@angular/common';
import { IProject } from '../core/services';
import { Config } from '../config';
import { toFormat } from '../core/common';


const tags =  [
    { property: 'og:url', content: 'pageUrl' },
    { property: 'twitter:image', content: 'imageurl' },
    { property: 'twitter:title', content: '[title]' },
    { property: 'twitter:description', content: '[description]' },
    { name: 'description', property: 'og:description', content: '[description]' },
    { name: 'title', property: 'og:title', content: '[title]' },
    { name: 'image', property: 'og:image', content: 'imageurl' }
 ];


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
        // const _hostname = this.platform.doc.location.hostname.split('.');
        this.AddTags();

    }


    AddTags() {

        // add tags
        this.meta.addTags(Config.Seo.tags);

        // add title
        // this.setTitle('[Title] - Sekrab Garage');

        // add canonical and alternate links
        // this.createCanonicalLink();
        // this.createAlternateLink();

    }

    private createAlternateLink() {
        const _link = this.doc.createElement('link');
        _link.setAttribute('rel', 'alternate');

        _link.setAttribute('hreflang', 'en');

        _link.setAttribute('href', '[url]');

        this.doc.head.appendChild(_link);
    }

    private createCanonicalLink() {
        const _canonicalLink = this.doc.createElement('link');
        _canonicalLink.setAttribute('rel', 'canonical');

        _canonicalLink.setAttribute('href', '[url]');

        this.doc.head.appendChild(_canonicalLink);
    }

    setProject(project: IProject) {
        // set title
        this.setTitle(toFormat(Res.Get('SEO_CONTENT')['PRODUCT_TITLE'], project.title, project.category));

        // set url
        this.setUrl();

        // set description
        this.setDescription(project.description);

        // set image
        this.setImage(project.image);

    }

    setSearchResults(total: number, category?: string) {
        // Title: 34 projects in Turtles.
        // Desc: Found 34 projects categorized under Turtles.
        this.setTitle(toFormat(Res.Get('SEO_CONTENT')['PROJECT_RESULTS_TITLE'], total, category));

        this.setDescription(toFormat(Res.Get('SEO_CONTENT')['PROJECT_RESULTS_DESC'], total, category));
        this.setUrl();
        this.setImage();
    }

    private setTitle(title: string) {
        const _title = `${ title } - ${Res.Get('SITE_NAME')}`;

        this.title.setTitle(_title);
        this.meta.updateTag({ name: 'title', property: 'og:title', content: _title });
        this.meta.updateTag({ property: 'twitter:title', content: _title });

    }
    private setDescription(description: string) {
        this.meta.updateTag({ name: 'description', property: 'og:description', content: description });
    }
    private setImage(imageUrl?: string) {
        // prepare image, either passed or
        const _imageUrl = imageUrl || (Config.Seo.defaultImage);

        this.meta.updateTag({ name: 'image', property: 'og:image', content: _imageUrl });
        this.meta.updateTag({ property: 'twitter:image', content: _imageUrl });

    }
    private setUrl() {
        _attn(this.doc.URL, 'doc.url');
        _attn(this.doc.location.pathname, 'doc.location.pathname');


        this.meta.updateTag({ property: 'og:url', content: this.doc.URL });

    }

    setPageTitle(key: string) {
        // set generic page title (brought from data)
        const _title = Res.Get('PAGE_TITLES')[key] || Res.Get('DEFAULT_PAGE_TITLE');
        this.setTitle(_title );
    }



    getPagePath() {
        return this.platform.doc.location.pathname;
    }
}

import { Injectable } from '@angular/core';

import { Config } from '../config';
import { Res } from '../core/resources';
import { SeoService } from './seo.service';



@Injectable({
    providedIn: 'root'
})
export class HomeSeoService extends SeoService {


    setHome() {


        this.updateJsonSnippet({
            '@type': 'Organization',
            url: this.defaultUrl,
            logo: Config.Seo.logoUrl,
            name: Res.Get('SITE_NAME')
        });

        // also add search

        this.updateJsonSnippet({
            '@type': 'Website',
            url: this.defaultUrl,
            potentialAction: {
                '@type': 'SearchAction',
                target: {
                    '@type': 'EntryPoint',
                    urlTemplate: this.defaultUrl + '?q={search_term}',
                },
                'query-input': 'required name=search_term',
            },
        });

    }


}

import { Injectable } from '@angular/core';

import { Res } from '../core/resources';
import { Title, Meta } from '@angular/platform-browser';
import { Platform } from '../lib/platform.service';
import { IListOptions, IProject, ListOptions, SeoService } from '../core/services';
import { Config } from '../config';
import { GetMatrixParamsAsString, toFormat } from '../core/common';
import { environment } from '../../environments/environment';



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

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
export class ProjectSeoService extends SeoService {


    setProject(project: IProject) {


        // set title
        this.setTitle(toFormat(Res.Get('SEO_CONTENT')['PRODUCT_TITLE'], project.title, project.category.value));

        // set url
        this.setUrl();

        // set description
        this.setDescription(project.description);

        // set image
        this.setImage(project.image);

        // add snippets

        this.updateJsonSnippet({
            '@type': 'Article',
            headline: project.title,
            image: project.image,
            datePublished: (new Date()).toISOString(),
            author: [{
                '@type': 'Organization',
                name: Res.Get('SITE_NAME'),
                url: this.defaultUrl
            }]
        });

        this.updateJsonSnippet({
            '@type': 'BreadcrumbList',
            itemListElement: [{
                '@type': 'ListItem',
                position: 1,
                name: project.category.value,
                item: this.siteUrl + 'projects?categories=' + project.category.key
            }, {
                '@type': 'ListItem',
                position: 2,
                name: project.title
            }]
        });


    }

    setSearchResults(params: IListOptions, projects: IProject[]) {
        // Title: 34 projects in Turtles.
        // Desc: Found 34 projects categorized under Turtles.
        this.setTitle(toFormat(Res.Get('SEO_CONTENT')['PROJECT_RESULTS_TITLE'], params.total, params.category.value));

        this.setDescription(toFormat(Res.Get('SEO_CONTENT')['PROJECT_RESULTS_DESC'], params.total, params.category.value));
        this.setUrl(params);
        this.setImage();

        let i = 1;
        const url = this.siteUrl + 'projects/';
        this.updateJsonSnippet({
            '@type': 'ItemList',
            itemListElement: projects.map(n => {
                return {
                    '@type': 'ListItem',
                    url: url + n.id,
                    position: i++,
                };
            })
        });
    }



}

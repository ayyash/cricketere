import { Injectable } from '@angular/core';

import { Res } from '../core/resources';
import { Title, Meta } from '@angular/platform-browser';
import { Platform } from '../lib/platform.service';
import { IListOptions, IProject, ListOptions } from '../core/services';
import { Config } from '../config';
import { GetMatrixParamsAsString, toFormat } from '../core/common';
import { environment } from '../../environments/environment';



@Injectable({
	providedIn: 'root'
})
export class SeoService {

	private _canonicalLink: HTMLLinkElement;
	private _alternateLinks: HTMLLinkElement[] = [];

	constructor(
		private title: Title,
		private meta: Meta,
		private platform: Platform
	) {
		// add all basic unchanging links
		this.AddTags();

	}


	AddTags() {

		// add tags
		this.meta.addTags(Config.Seo.tags);


		// if (environment.production && this.platform.isBrowser) return;
        const _canonical = this.platform.doc.querySelector('link[rel="canonical"]');
		if (_canonical) {
			this._canonicalLink = _canonical as HTMLLinkElement;
		} else {
            this.createCanonicalLink();
        }


		const _links = this.platform.doc.querySelectorAll('link[rel="alternate"]');
		if (_links.length > 0) {
			this._alternateLinks = Array.from(_links) as HTMLLinkElement[];
		} else {
			Config.Seo.hrefLangs.forEach(() => this.createAlternateLink());
		}


	}
	get url(): string {
		let url = this.platform.doc.location.pathname;
		if (url.indexOf(';') > -1) {
			url = url.substring(0, url.indexOf(';'));
		}
		return url;
	}

	private createAlternateLink() {
		// append alternate link to body
		const _link = this.platform.doc.createElement('link');
		_link.setAttribute('rel', 'alternate');
		this.platform.doc.head.appendChild(_link);
		this._alternateLinks.push(_link);
	}


	private createCanonicalLink() {


		const _canonicalLink = this.platform.doc.createElement('link');
		_canonicalLink.setAttribute('rel', 'canonical');
		this.platform.doc.head.appendChild(_canonicalLink);
		this._canonicalLink = _canonicalLink;


	}

	setProject(project: IProject) {
		// set title
		this.setTitle(toFormat(Res.Get('SEO_CONTENT')['PRODUCT_TITLE'], project.title, project.category.value));

		// set url
		this.setUrl();

		// set description
		this.setDescription(project.description);

		// set image
		this.setImage(project.image);

	}

	setSearchResults(params: IListOptions) {
		// Title: 34 projects in Turtles.
		// Desc: Found 34 projects categorized under Turtles.
		this.setTitle(toFormat(Res.Get('SEO_CONTENT')['PROJECT_RESULTS_TITLE'], params.total, params.category.value));

		this.setDescription(toFormat(Res.Get('SEO_CONTENT')['PROJECT_RESULTS_DESC'], params.total, params.category.value));
		this.setUrl(params);
		this.setImage();
	}

	private setTitle(title: string) {
		const _title = `${title} - ${Res.Get('SITE_NAME')}`;

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
	private setUrl(params?: IListOptions) {
		// if (environment.production && this.platform.isBrowser) return;

		// prefix with baseUrl and remove language, but not in development
		const path = this.platform.doc.location.pathname.substring(
			environment.production ? 4 : 1
		);

		let url = toFormat(
			Config.Seo.baseUrl,
			Config.Basic.country,
			Config.Basic.language,
			path
		);

		if (url.indexOf(';') > -1) {
			url = url.substring(0, url.indexOf(';'));

			// if category or page exist, append them as query params
			if (params) {
				const s = new URLSearchParams();
				params.category && s.append('category', params.category.key);
				params.page && s.append('page', params.page.toString());
				url += '?' + s.toString();
			}
		}

		// set attribute and og:url
		this._canonicalLink.setAttribute('href', url);
		this.meta.updateTag({ property: 'og:url', content: url });

		this.setAlternateLinks(path);

	}

	private setAlternateLinks(path: string) {
		// for each config hrefLang, set the link that already exists

		Config.Seo.hrefLangs.forEach((n, i) => {
			// what is the right language
			let lang = n.language;
			if (lang === 'x-default') lang = Config.Seo.defaultLanguage;

			// construct the url
			const url = toFormat(
				Config.Seo.baseUrl,
				n.region || Config.Seo.defaultRegion,
				lang,
				path
			);

			// construct hreflang
			const hreflang = n.language + (n.region ? '-' + n.region : '');
			this._alternateLinks[i].setAttribute('href', url);
			this._alternateLinks[i].setAttribute('hreflang', hreflang);

		});
	}

	setPage(key: string) {
		// set generic page title (brought from data)
		const _title = Res.Get('PAGE_TITLES')[key] || Res.Get('DEFAULT_PAGE_TITLE');
		this.setTitle(_title);

		this.setUrl();
	}

	getNextLink(params: IListOptions): string {
		// add 1 to page, append url and return
		const _params = { ...params, page: params.page + 1 };
		return this.url + GetMatrixParamsAsString(ListOptions.MapSeoOptions(_params));
	}







	getPagePath() {
		return this.platform.doc.location.pathname;
	}
}

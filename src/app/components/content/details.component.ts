import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Config } from '../../config';
import { Res } from '../../core/resources';
import { ConfigService } from '../../core/services';
import { Platform } from '../../lib/platform.service';

enum EnumRate {
    AWEFUL = 1,
    POOR = 2,
    OK = 4,
    FAIR = 8,
    GREAT = 16
}


@Component({

    templateUrl: './details.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentDetailsComponent implements OnInit {

    total: number = 0;

    enumRate = EnumRate;

    arrayOfThings = [
        {
            id: 1,
            key: 'elephant'
        },
        {
            id: 2,
            key: 'lion'
        },
        {
            id: 3,
            key: 'tiger'
        },
        {
            id: 4,
            key: 'bear'
        }
    ];

    rates = [
        EnumRate.AWEFUL,
        EnumRate.POOR,
        EnumRate.OK,
        EnumRate.FAIR,
        EnumRate.GREAT
    ];

    productRating = EnumRate.GREAT;

    date1 = new Date(Date.now() - 1000);
    date2 = new Date(Date.now() - 1000 * 60 * 60 * 24 * 2);
    date3 = new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 3);
    date4 = new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 7);
    date5 = new Date(Date.now() + 1000 * 60 * 60 * 3);


    constructor(private platform: Platform) {
        //
    }
    ngOnInit(): void {
        //

    }
    switchLanguage(lang: string) {

        this.setCookie(lang, ConfigService.Config.Res.cookieName, 365);
        this.platform.doc.location.reload();
    }

    switchServerLanguage(lang: string):string {

        // send a query param to server, try to keep the path as is
        return this.platform.doc.URL + '?srvrlang=' + lang;
    }

    getLanguageLink(lang: string): string {
        // go to: ...
        // replace current language with new language
        return this.platform.doc.URL.replace(`/${Res.language}/`, `/${lang}/`);

    }

    private setCookie(value: string, key: string, expires: number) {
        if (this.platform.isBrowser) {

            let cookieStr = encodeURIComponent(key) + '=' + encodeURIComponent(value) + ';';
            const dtExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);

            cookieStr += 'expires=' + dtExpires.toUTCString() + ';';
            cookieStr += 'path=/;';

            document.cookie = cookieStr;
        }
    }


}

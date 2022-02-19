import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';



@Injectable({providedIn: 'root'})
export class Platform {

    isBrowser: boolean = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === 'object' && !!document;

    doc: Document = this._doc;

    constructor(@Inject(PLATFORM_ID) private _platformId: Object,
     @Inject(DOCUMENT) private _doc: Document) {}
}

import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';



@Injectable({ providedIn: 'root' })
export class Platform {

  isBrowser: boolean;
  doc: Document;

  constructor(@Inject(PLATFORM_ID) private _platformId: Object,
    @Inject(DOCUMENT) private _doc: Document) {
    this.isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === 'object' && !!document;
    this.doc = this._doc;
  }
}

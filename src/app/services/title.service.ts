import { Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { SeoService } from './seo.service';

// this is aweful
@Injectable({providedIn: 'root'})
export class CricketTitleStrategy extends TitleStrategy {
  constructor(private seoService: SeoService) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    this.seoService.setPage(title);
  }
}

import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  OnDestroy
} from '@angular/core';
import { LoaderService, ILoaderState, SeoService } from '../../core/services';
import { map, share } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../lib/pipes/translate.pipe';

@Component({
  selector: 'cr-pager',
  // templateUrl: './pager.partial.html',
  template: `
    <div class="pager" [class.loading]="loading$ | async">
        <button class="btn-fake" *ngIf="isLoadMore" (click)="page($event)" title="{{'show more' | translate:'ShowMore'}}">More</button>
    </div>
    <!-- // for SEO purposes keep a static link of the next page -->
    <!-- <a [href]="mimicHref" *shServerRender="true">Next</a> -->
  `,
  styleUrls: ['./pager.less'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule, TranslatePipe]
  // changeDetection: ChangeDetectionStrategy.OnPush // note to self, very little changes here so its okay
})
export class PagerPartialComponent implements OnInit, OnDestroy {
  @Input() isLoadMore = false;
  @Output() onPage: EventEmitter<any> = new EventEmitter();

  // private subscription: Subscription;


  mimicHref = '';

  // loading = false;

  loading$: Observable<boolean>;

  constructor(private loaderService: LoaderService, private seoService: SeoService) {
    //
  }
  ngOnInit(): void {
    //
    // this.subscription = this.loaderService.stateItem$.pipe(share()).subscribe((state: ILoaderState) => {
    //   // if state is false, paging has ended, hide loader
    //   if (!state.show) {
    //     this.loading = false;
    //   }
    // });
    this.loading$ = this.loaderService.stateItem$.pipe(
      map(state => state ? state.show : false)
    );

    this.mimicHref = this.getMimicHref();

  }
  page(event: any): void {
    this.onPage.emit(event);
    // emit a show event, no just show a loading effect
    // this.loading = true;
  }
  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  getMimicHref() {
    // do your best, find "page" and add one
    // this is for SEO purposes to allow indexing of next page
    const regex = /page=(\d+)/i;
    let nextUrl = this.seoService.getPagePath();
    const pagefound = nextUrl.match(regex);

    if (pagefound && pagefound.length) {
      const p = parseInt(pagefound[1], 10) + 1;
      const x = 'page=' + p;
      nextUrl = nextUrl.replace(regex, x);
    } else {
      nextUrl += ';page=2';
    }
    return nextUrl;
  }
}

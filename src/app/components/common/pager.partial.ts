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
import { share } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
    selector: 'cr-pager',
    templateUrl: './pager.partial.html',
    styleUrls: ['./pager.less'],
    encapsulation: ViewEncapsulation.None,
   // changeDetection: ChangeDetectionStrategy.OnPush // note to self, very little changes here so its okay
})
export class PagerPartialComponent implements OnInit, OnDestroy {
    @Input() isLoadMore = false;
    @Output() onPage: EventEmitter<void> = new EventEmitter();

    private subscription: Subscription;

    mimicHref = '';

    loading = false;

    constructor(private loaderService: LoaderService, private seoService: SeoService) {
        //
    }
    ngOnInit(): void {
        //
        this.subscription = this.loaderService.loaderState.pipe(share()).subscribe((state: ILoaderState) => {
            // if state is false, paging has ended, hide loader
            if (!state.show) {
                this.loading = false;
            }
        });

        this.mimicHref = this.getMimicHref();

    }
    page(): void {
        this.onPage.emit();
        // emit a show event, no just show a loading effect
        this.loading = true;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
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

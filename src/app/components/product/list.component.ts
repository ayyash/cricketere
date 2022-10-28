import { CommonModule, Location } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { catchError, distinctUntilChanged, distinctUntilKeyChanged, map, Observable, of, switchMap, tap } from 'rxjs';
import { Config } from '../../config';
import { hasMore } from '../../core/common';
import { EnumGtmEvent, EnumGtmSource, GtmTracking } from '../../core/gtm';
import { Toast } from '../../lib/toaster/toast.state';
import { IList, IListOptions } from '../../models/list.model';
import { IProduct } from '../../models/product.model';
import { ParamState } from '../../services/param.state';
import { ProductService } from '../../services/product.service';
import { ProductState } from '../../services/product.state';

@Component({

    templateUrl: './list.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ParamState]
})
export class ProductListComponent implements OnInit {

    products$: Observable<IProduct[]>;
    params$: Observable<IListOptions>;

    everything$: Observable<IList<IProduct> & IListOptions>;

    constructor(private productService: ProductService,
        private productState: ProductState,
        private router: Router,
        private paramState: ParamState,
        private location: Location,
        private toast: Toast,
        private route: ActivatedRoute) {

        //
    }
    ngOnInit(): void {
        //
        this.params$ = this.paramState.stateItem$;

        this.products$ = this.route.paramMap.pipe(
            map((p) => {
                return {
                    page: +p.get('page') || 1,
                    isPublic: p.get('public') === 'true',
                    size: Config.Basic.defaultSize
                };
            }),
            // here add a filter to filter out changes we do not want to trigger
            // distinctUntilKeyChanged('page'),
            distinctUntilChanged((prev, next) => {
                if (prev.isPublic !== next.isPublic) {
                    this.productState.emptyList();
                    next.page = 1;
                }
                // if neither changes return true
                return prev.page >= next.page && prev.isPublic === next.isPublic;
            }),
            switchMap((params) => this.productService.GetProducts(params).pipe(
                switchMap(products => {
                    const _hasMore = hasMore(
                        products.total,
                        params.size,
                        params.page
                    );

                    // update state
                    this.paramState.UpdateState({
                        total: products.total,
                        hasMore: _hasMore,
                        ...params
                    });
                    return this.productState.appendList(products.matches);
                }),
                catchError(e => this.toast.HandleUiError(e))
            ))
        );

        this.productState.emptyList();

        this.paramState.UpdateState({total: 2034, page: 1, size: Config.Basic.defaultSize});



    }
    nextPage(event: MouseEvent) {
        event.preventDefault();

        // increase page, and get all other params
        const page = this.paramState.currentItem.page + 1;
        const isPublic = this.paramState.currentItem.isPublic;

        // dependency of Angular router
        this.router.navigate(['.', { page, public: isPublic }], {
          skipLocationChange: true
        });

        GtmTracking.RegisterEvent({event: EnumGtmEvent.PageView}, GtmTracking.MapPath(`;page=${page};public=${isPublic}`));


        // this.location.go(`/products;page=${page};public=${isPublic}`);
      }
      showProducts(isPublic: boolean, event: MouseEvent) {
        // simple routing event, what will happen to page?
        event.preventDefault();
        this.router.navigate(['.', { page: 1, public: isPublic }], {replaceUrl: true});
      }

      getNextLink() {
        const page = this.paramState.currentItem.page + 1;
        const isPublic = this.paramState.currentItem.isPublic;

        return `/products;page=${page};public=${isPublic}`;
      }
      getShowLink(isPublic: boolean) {
        return `/products;page=1;public=${isPublic}`;
      }

      locationChange() {
        this.router.navigate(['.', { page: 2 }], {skipLocationChange: true});
      }

      trackThis(item: IProduct) {
        // register event view_item in GA4 for this click
        GtmTracking.RegisterEvent(
          {
            event: EnumGtmEvent.Click,
            source: EnumGtmSource.ProductsList,
          },
          GtmTracking.MapProducts([item])
        );
      }
}

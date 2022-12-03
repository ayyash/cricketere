import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LoaderService, ILoaderState } from '../../core/services';
import { map, share } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'http-loader',
    template: `<div *ngIf="show$ | async" class="httploader">
    <div class="line"></div>
    <div class="subline inc"></div>
    <div class="subline dec"></div></div>`,
    styleUrls: ['./loader.less'],
    standalone: true,
    imports: [CommonModule]
})
export class LoaderComponent implements OnInit, OnDestroy {
    show = false;
    private subscription: Subscription;

    show$: Observable<boolean>;

    constructor(
        private loaderService: LoaderService
    ) { }

    ngOnInit() {
      this.show$ = this.loaderService.stateItem$.pipe(
         map(state => state ? state.show : false)
      );


    }
    ngOnDestroy() {
         this.subscription.unsubscribe();
    }
}

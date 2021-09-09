import { Directive, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { auditTime } from 'rxjs/operators';

@Directive({
    selector: '[shScroll]',
    exportAs: 'shScroll'
})
export class ScrollDirective implements AfterViewInit, OnDestroy {
    // the heading of the app, keep somethign showing on scroll events

    private _savevalue = 0;
    private _scrolledSubscription: Subscription;

    constructor() {}

    ngAfterViewInit() {
            // subscribe to window scroll to react by adding a class to the body

            this._setValue();

            this._scrolledSubscription = fromEvent(window, 'scroll')
                .pipe(auditTime(1000))
                .subscribe(v => {
                    const _diff = window.pageYOffset - this._savevalue;
                   

                    if (_diff > 50) {
                        // scrolling down
                        document.body.classList.add('sc_down');
                        document.body.classList.remove('sc_up');
                    } else if (_diff < -50) {
                        // scrolling up
                        document.body.classList.add('sc_up');
                        document.body.classList.remove('sc_down');
                    }
                    this._savevalue = window.pageYOffset;
                     // Fix a mobile vh problem when address bar disappares
                });
                window.addEventListener('resize', this._setValue);
        
    }
    ngOnDestroy() {
        if (this._scrolledSubscription) {
            this._scrolledSubscription.unsubscribe();
        }
    }
    private _setValue() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        this._savevalue = window.pageYOffset;

    }
}

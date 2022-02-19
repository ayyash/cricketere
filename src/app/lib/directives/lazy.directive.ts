import { Directive, ElementRef, Input, Renderer2, AfterViewInit } from '@angular/core';
import { Platform } from '../platform.service';

@Directive({
    selector: '[shLazy]',
    exportAs: 'shLazy'
})
export class LazyDirective implements AfterViewInit {
    @Input() shLazy: string;

    constructor(private el: ElementRef, private renderer: Renderer2, private platform: Platform) {
        //
    }

    ngAfterViewInit() {
        // if on server, do not show image
        if (!this.platform.isBrowser) {
            return;
        }

        // on intersection lazy load it // TODO: test on safari
        // give it a minimum height so that it always gets caught
        // https://github.com/verlok/lazyload/issues/350#issuecomment-499974362
        this.renderer.setStyle(this.el.nativeElement, 'minHeight', '5px');

        if (!IntersectionObserver) {
            this.renderer.setProperty(this.el.nativeElement, 'src', this.shLazy);
            return;
        }

        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // load image from data-img
                    const img = entry.target;
                    img.setAttribute('src', this.shLazy);

                    observer.disconnect();
                }
            });
        });

        io.observe(this.el.nativeElement);
    }
}

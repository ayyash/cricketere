import { OnInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';


@Directive({
    selector: '[cri18n]',
    exportAs: 'cri18n'
})
export class Cri18nDirective implements OnInit {

    @Input() cri18n: string;

    constructor(private el: ElementRef, private renderer: Renderer2) {
        //
    }

    ngOnInit() {
        //
    }
}

import { Directive, ViewContainerRef  } from '@angular/core';

@Directive({
    selector: '[dialog-content]'
})
export class DialogContentDirective {
    constructor(public viewContainerRef: ViewContainerRef) {}
}


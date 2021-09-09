import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

interface LetContext<T> {
    shLet: T | null;
}

@Directive({
    selector: '[shLet]'
})
export class LetDirective<T> {
    private _context: LetContext<T> = {shLet: null};

    constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef<LetContext<T>>) {
        this.viewContainer.createEmbeddedView(this.templateRef, this._context);
    }

    @Input()
    set shLet(value: T) {
        this._context.shLet = value;
    }
}

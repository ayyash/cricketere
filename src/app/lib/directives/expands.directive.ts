
import {
    Directive, Input, Output, OnDestroy, HostListener, EventEmitter, ElementRef,
    AfterViewInit
} from '@angular/core';

export interface IExpandsOptions {
    src: string;
    active: boolean;
    togglecss: string;
    hidesrc: string;
    showsrc: string;
    isvisible: boolean; // default state, false is default
}

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[shExpands]',
    exportAs: 'expands'
})
export class ExpandsDirective implements OnDestroy, AfterViewInit {

    // WATCH: is partial good enough? i doubt
    @Input() options: Partial<IExpandsOptions>;
    @Input('shExpands') expands: string; // = type of behavior, default none, poplist, list... etc

    @Output() onShow = new EventEmitter();
    @Output() onHide = new EventEmitter();
    @Output() onToggle = new EventEmitter();
    @Output() onLoad = new EventEmitter();

    private defaultOptions: IExpandsOptions = {
        src: '.h',
        showsrc: '.showexpands',
        hidesrc: '.hideexpands',
        active: true,
        togglecss: 'toggle',
        isvisible: false
    };
    private _options: IExpandsOptions;
    private element: HTMLElement;

    constructor(private el: ElementRef) {
        // when the src is clicked, add class to element, let css handle behavior

    }

    ngAfterViewInit(): void {

        this._options = {...this.defaultOptions, ...this.options};

        this.element = this.el.nativeElement;

        // according to state, do something
        this._options.isvisible ? this.show() : this.hide();

        this.onLoad.emit();

    }

    @HostListener('click', ['$event.target'])
    onClick(target: HTMLElement): void {
        // WATCH: new condition, if the src contains the target
        // this means there can only be one src, watch for it
        if (target.matches(this._options.src) || this.element.querySelector(this._options.src)?.contains(target)) {
            // toggle
            this._options.isvisible ? this.hide() : this.show();
        }

        if (target.matches(this._options.showsrc)) {
            // show
            this.show();
        }
        if (target.matches(this._options.hidesrc)) {
            // hide
            this.hide();
        }


    }

    public hide(): void {
        if (!this._options.active) {
            return;
        }

        // toggle if isvisible was true
        if (this._options.isvisible) {
            this.onToggle.emit();
        }
        this._options.isvisible = false;
        this.element.classList.remove(this._options.togglecss);
        this.onHide.emit();

    }
    public show(): void {
        if (!this._options.active) {
            return;
        }
        // toggle if isvisible was false
        if (!this._options.isvisible) {
            this.onToggle.emit();
        }

        this._options.isvisible = true;
        this.element.classList.add(this._options.togglecss);
        this.onShow.emit();
    }

    @HostListener('document:click', ['$event.target'])
    onDocClick(target: HTMLElement): void {
        // if poplist, hide
        if (this.expands === 'poplist') {

            if (!this.element.contains(target)) {
                this.hide();
            }
        }

    }


    ngOnDestroy(): void {
        //
        this.hide();

    }


}

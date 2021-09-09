// static modal directive, can be linked to any html dialog to create the behavior of a dialog
import {
    Directive,
    Input,
    Output,
    OnDestroy,
    HostListener,
    EventEmitter,
    ElementRef,
    AfterViewInit
} from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[modal]',
    exportAs: 'modal'
})
export class ModalDirective implements OnDestroy, AfterViewInit {
    // connect opener to a trigger by css selector
    @Input('modal') trigger: string;

    // look for html elements to interact with
    // TODO: clone configs internally to allow partial config

    @Input() config: {
        modalSelector: string;
        closeSelector: string;
        titleSelector: string;
        modalContentSelector: string;
        bodyCss: string;
    } = {
            modalSelector: '.dr-modal-overlay',
            closeSelector: '.dr-close',
            titleSelector: '.dr-title',
            modalContentSelector: '.dr-content',
            bodyCss: 'mdl-open'
        };

    @Output() onShow = new EventEmitter();
    @Output() onHide = new EventEmitter();
    @Output() onLoad = new EventEmitter();

    $title: HTMLElement | null;
    $modalElement: HTMLElement;
    isopen: boolean;

    constructor(private el: ElementRef, private _platform: Platform) { }

    ngAfterViewInit(): void {
        if (this._platform.isBrowser) {
            this.$modalElement = this.el.nativeElement.querySelector(this.config.modalSelector);

            this.$title = this.$modalElement.querySelector(this.config.titleSelector);

            this.onLoad.emit();

            // nice to have, type onload, if onload show here
        }
    }
    public hide(emit = true): void {
        // hide dialog
        if (this._platform.isBrowser) {
            this.$modalElement.style.display = 'none';
            if (emit) {
                this.onHide.emit();
            }
            document.body.classList.remove(this.config.bodyCss);
            this.isopen = false;
        }
    }
    public show(title?: string): void {
        // show dialog
        if (this._platform.isBrowser) {

            // change title
            if (this.$title && title) {
                this.$title.textContent = title;
            }
            this.$modalElement.style.display = 'block';
            this.onShow.emit();
            // add a class to body to help in positioning better
            document.body.classList.add(this.config.bodyCss);
            this.isopen = true;
        }
    }

    public changeTitle(title?: string): void {
        if (this._platform.isBrowser) {
            // change title

            if (this.$title && title) {
                this.$title.textContent = title;
            }

        }
    }

    @HostListener('click', ['$event.target'])
    onClick(target: HTMLElement): void {
        // if target outside modalcontent, hide
        // note to self, i keep forgetting this, when u face an issue with dialog hiding on click of something rememebr
        // when u remove from angular and it does NOt reflect on DOM, the dom is now "outside" the dialog
        // thus return false on the first conditional statement
        if (this._platform.isBrowser) {
            if (!target.closest(this.config.modalContentSelector)) {
                this.hide();
            }
            // if target is close, hide
            if (target.matches(this.config.closeSelector)) {
                this.hide();
            }
        }
    }

    @HostListener('document:click', ['$event.target'])
    onDocumentClick(target: HTMLElement): void {
        // if this is the trigger, or a closest is the trigger, do trigger
        if (this.trigger) {
            if (target.matches(this.trigger) || target.closest(this.trigger)) {
                // itself or its parent
                const _t = target.matches(this.trigger) ? target : target.closest(this.trigger);
                if (_t) {

                    this.show(_t.getAttribute('title') || undefined);
                }
            }
        }

    }

    @HostListener('window:keydown', ['$event'])
    closeEscape(event: KeyboardEvent): void {
        // hide on escape
        if (event.code === 'Escape') {
            this.hide();
        }
    }

    ngOnDestroy(): void {
        // shit, this caused issues
        // hide without emitting
        this.hide(false);
    }
}

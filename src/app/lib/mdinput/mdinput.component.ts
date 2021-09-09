import { Component, Input, ContentChild, AfterContentInit } from '@angular/core';
import { MdInputDirective } from './mdinput.directive';
// import { NgControl } from '@angular/forms';

// this is a better way than smartinput directive
@Component({
    selector: 'md-input',
    template: `
        <div [class.md-field]="normal" (click)="gainFocus()"
         [class.focused]="isFocused"
         [class.notempty]="!isEmpty"
         [class.touched]="input?.formControl?.touched"
         [class.invalid]="input?.formControl?.invalid"
         [class.dirty]="input?.formControl?.dirty" >
            <label class="md-label" *ngIf="placeholder" for="{{ id }}">{{placeholder}}</label>
            <ng-content></ng-content>
            <span [class.md-asterisk]="required"></span>
            <span class="md-invalid-feedback">{{ labelText }}</span>
            <ng-content select="[helptext]"></ng-content>
        </div>
    `
})
export class MdInputComponent implements AfterContentInit {
    required: boolean;
    id: string;

    // required: boolean;
    get labelText(): string {
        return this.input.errorText;
    }

    @Input() placeholder: string;
    @Input('static') holdFocus: boolean; // if static, do not interace always show as focused
    @Input() normal = true;


    @ContentChild(MdInputDirective)
    input: MdInputDirective;

    // mmm, why am i using this?
    // @ContentChild(NgControl)
    // control: NgControl;


    get isFocused(): boolean {
        if (this.holdFocus) {
            return true;
        }

        if (this.input) {
            // if input focused and value is empty return tru
            return this.input.focus; // || !!this.input.$element.value;
        }
        return false;
    }

    get isEmpty(): boolean {

        if (this.holdFocus) {
            return false;
        }

        if (this.input) {
            // if has no value return true
            return !this.input.$element.value;
        }
        return false;
    }


    gainFocus() {
        // WATCH: bubbling
        if (this.input) {
            this.input.$element.focus();

        }

    }
    ngAfterContentInit() {
        this.required = this.input.required; // dont expect this to change

        this.input.$element.classList.add('materialinput');

        this.id = this.input.$element.id;


    }
}

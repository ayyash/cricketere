import { Directive, Input, OnInit, ElementRef, forwardRef, HostListener } from '@angular/core';
import { Validator, FormControl, NG_VALIDATORS, Validators } from '@angular/forms';
import { Res } from '../../core/resources';
import { MdPatterns } from './validators';
import { Subject, Observable } from 'rxjs';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[mdinput]',
    exportAs: 'mdcontrol',
    providers: [
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: forwardRef(() => MdInputDirective)
        }
    ]
})
export class MdInputDirective implements OnInit, Validator {
    constructor(private el: ElementRef) {}
    @Input('mdtype') type: any;

    // note to self, required validation is handled by angular
    @Input() required = false;

    // note to self, do no name "pattern" because that is handled by angular
    @Input('mdpattern') pattern = '';

    @Input() errorMessage: string;

    formControl: FormControl;
    errorText: string;
    $element: HTMLInputElement;

    focus = false;

    private _focus: Subject<string> = new Subject();
    focus$: Observable<string> = this._focus.asObservable();

    private _blur: Subject<any> = new Subject();
    blur$: Observable<any> = this._blur.asObservable();

    private updateError() {
        if (this.formControl.errors) {
            const key = Object.keys(this.formControl.errors)[0];
            // TODO: roll bock message
            this.errorText = Res.Get(`INVALID_${key}_FORMAT`, this.errorMessage);
        }
    }

    // i can pollute this with hostlisters
    @HostListener('focus')
    onFocus() {
        this.focus = true;
        this._focus.next(this.$element.value);
    }
    @HostListener('blur', ['$event.relatedTarget'])
    onBlur(relatedTarget: HTMLElement) {
        this.focus = false;
        this._blur.next(relatedTarget);

        // sometimes, for single character input, the validator does not fire (it needs a tick)
        // for those extremely rare cases, catch errors a tick away. This needs more thought
    //    this.updateError();
    }


    ngOnInit() {
        this.$element = this.el.nativeElement;

    }

    // may be thsi is better than ngcontrol?
    // get isvalid(): boolean {
    //     return this.formControl.valid;
    // }

    customValidate(fn: () => boolean) {
        // carry out custom validation, add error message if invalid
        const isvalid = fn.call(this);

        if (!isvalid) {
            this.errorText = Res.Get(this.errorMessage, this.errorMessage);
            this.$element.classList.add('ng-invalid');
        } else {
            this.errorText = '';
            this.$element.classList.remove('ng-invalid');
        }
        return isvalid;
    }

    validate(c: FormControl): { [key: string]: any} | null {
        // call the validation by attribute and return
        this.formControl = c;


        let validator: any;
        // if required, reset error label, and let angular handle it
        if (this.required) {
            this.errorText = Res.Get('Required');
        }

        // custom
        if (this.type === 'custom') {
            if (this.errorMessage) {
                this.errorText = Res.Get(this.errorMessage, this.errorMessage);
            }
            // no validation here, the custom function called in ui will take over errortext
            return null;
        }

        if (!c.value || c.value === '') {
            // return Validators.required(c);
            return null; // if optional do not process further
        }
        if (this.pattern !== '') {
            let _message = Res.Get('INVALID_FORMAT');

            // if email, use built in
            if (this.pattern === 'email') {
                _message = Res.Get('INVALID_email_FORMAT');
                validator = Validators.email(c);
            } else {
                // fetch different built in formats here
                // if _p not defined, use pattern as is
                let _p = MdPatterns.Get(this.pattern);
                if (_p) {
                    _message = Res.Get(`INVALID_${this.pattern}_FORMAT`, _message);
                } else {
                    _p = this.pattern;
                }

                validator = Validators.pattern(_p)(c);
            }

            if (this.errorMessage) {
                _message = Res.Get(this.errorMessage, this.errorMessage);
            }

            this.errorText = _message;

            if (validator) {
                return validator;
            }


            return null;
        }

        if (this.type === 'range') {
            let _message = Res.Get('INVALID_VALUE');

            if (this.errorMessage) {
                _message = Res.Get(this.errorMessage, this.errorMessage);
            }
            const _v: any = {
                range: {
                    valid: false
                }
            };
            const val = Number(c.value);

            if (isNaN(val)) {
                // adding level of validation where entered value is not a number
                _message = Res.Get('INAVLID_NUMBER');
                return _v;
            }

            this.errorText = _message;
            // why am i doing this? to make min and max dynamicly bound
            const min = this.el.nativeElement.min || null;
            const max = this.el.nativeElement.max || null;

            if ((min !== null && min > val) || (max !== null && max < val)) {
                return _v;
            }

            return null;
        }

        this.updateError();

        return null;
    }
}

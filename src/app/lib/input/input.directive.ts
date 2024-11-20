import { Directive, ElementRef, Input, OnInit, signal } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';
import { InputPatterns } from './patterns';

@Directive({
  selector: '[crinput]',
  providers: [{ provide: NG_VALIDATORS, multi: true, useExisting: InputDirective }],
  standalone: true,
})
export class InputDirective implements OnInit, Validator {

  @Input() min?: number;
  @Input() max?: number;
  @Input() minlength?: number;
  @Input() maxlength?: number;
  @Input() block?: [number, number];
  @Input() pattern?: string;
  @Input() crpattern?: string;
  @Input() email?: boolean;


  constructor(private el: ElementRef) { }

  public get element(): HTMLElement {
    return this.el.nativeElement;
  };

  public errorText = signal('Required');

  ngOnInit(): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {


    this.errorText.set('Required');
    if (this.min && control.value) {
      if (Validators.min(this.min)(control)) {
        this.errorText.set('Too small');
      }
    }

    if (this.max && control.value) {
      if (Validators.max(this.max)(control)) {
        this.errorText.set('Too large');
      }
    }

    if (this.minlength && control.value) {
      if (Validators.minLength(this.minlength)(control)) {
        this.errorText.set('Too short');
      }
    }

    if (this.maxlength && control.value) {
      if (Validators.maxLength(this.maxlength)(control)) {
        this.errorText.set('Too long');
      }
    }


    if (this.block) {
      // its valid if the value is outside the block array
      if (control.value >= this.block[0] && control.value <= this.block[1]) {
        this.errorText.set(`Invalid number`);
        return {
          block: true
        }
      }
    }

    if(this.pattern) {
      this.errorText.set('Invalid format');
    }
    if(this.email) {
      this.errorText.set('Invalid email format');
    }

    if(this.crpattern) {
      this.errorText.set('Invalid format');
      // if pattern exists in our list, use validators
      let _pattern = InputPatterns.Get(this.crpattern);
      if (_pattern) {
        this.errorText.set(`Invalid ${this.crpattern} format`);
        return Validators.pattern(_pattern)(control);
      }

    }
    return null;

  }
}

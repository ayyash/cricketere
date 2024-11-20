import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, Input, ViewEncapsulation } from '@angular/core';
import { FormControlName } from '@angular/forms';
import { InputDirective } from './input.directive';

@Component({
  selector: 'cr-input',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: 'input.css',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="{{ cssPrefix }}-field" [class.cr-invalid-form]="invalidForm">
      <label class="cr-label" for="{{id}}">{{ placeholder }}</label>
      <ng-content></ng-content>
      <span class="cr-required"></span>
      <span class="cr-feedback" [class.cr-form-feedback]="invalidForm">{{ errorText }}</span>
      <span class="cr-help">
        <ng-content select="[helptext]"></ng-content>
      </span>
    </div>
    `,
})

export class CrInputPartial implements AfterContentInit {

  @ContentChild(InputDirective, { static: true }) inputDirective!: InputDirective;
  @ContentChild(FormControlName, { static: true }) s!: FormControlName;

  @Input() placeholder: string;
  @Input() cssPrefix: string = 'cr';
  @Input() error: string;
  @Input() invalidForm: boolean;

  get errorText(): string {
    return this.error || this.inputDirective.errorText();
  }


  id!: string;

  ngAfterContentInit() {
    if (this.inputDirective) {
      const element = this.inputDirective.element;

      this.id = element.id;
      element.classList.add(`cr-input`);
      element.setAttribute('placeholder', this.placeholder);


    }

  }


}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputDirective } from '../../lib/input/input.directive';
import { CrInputPartial } from '../../lib/input/input.partial';
import { InputPatterns } from '../../lib/input/patterns';
@Component({
  selector: 'app-product-form'
  , changeDetection: ChangeDetectionStrategy.OnPush
  , standalone: true
  // , styleUrl: 'form.css'
  // , encapsulation: ViewEncapsulation.None
  , imports: [CommonModule, RouterModule, ReactiveFormsModule, CrInputPartial, InputDirective],
  template: `
  <form [formGroup]="fg" (ngSubmit)="create()" class="cr-form">
    <cr-input placeholder="Valvet">
      <input crinput type="text" id="valvet" class="w100" formControlName="valvet" required  />
    </cr-input>
    <cr-input placeholder="Mars">
      <input crinput type="number" id="mars" class="w100" formControlName="mars" required [min]="2" [max]="4" />
      <ng-container helptext>Range of 2 - 4</ng-container>
    </cr-input>
    <cr-input placeholder="Reverse range">
      <input crinput type="number" id="buler" class="w100" formControlName="buler"  [block]="[2,4]" />
      <ng-container helptext>Less than 2, or more than 4</ng-container>
    </cr-input>
    <cr-input placeholder="Skippy">
      <input crinput type="text" id="skippy" class="w100" formControlName="skippy" [minlength]="3" [maxlength]="6"   />
      <ng-container helptext>Three to 6 characters</ng-container>
    </cr-input>
    <cr-input placeholder="Email">
      <input crinput type="email" id="email" class="w100" formControlName="email" [email]="true" />
      <ng-container helptext>Native email</ng-container>
    </cr-input>
    <cr-input placeholder="Phone">
      <input crinput type="text" id="phone" class="w100" formControlName="phone"  crpattern="phone" />
      <ng-container helptext>Alphabets and spaces</ng-container>
    </cr-input>
    <cr-input placeholder="Shortname">
      <input crinput type="text" id="shortname" class="w100" formControlName="shortname"  crpattern="shortname" />
      <ng-container helptext>Alphanumeric, 5 characters</ng-container>
    </cr-input>
    <cr-input placeholder="Some pattern" error="Invalid koolaid format">
      <input crinput type="text" id="koolaid" class="w100" formControlName="koolaid"  pattern="[1-9]{2,4}" />
      <ng-container helptext>Two to 4 numbers</ng-container>
    </cr-input>

    <cr-input placeholder="Custom name" error="Bob is not allowed" >
      <input crinput type="text" id="name" class="w100" formControlName="name" />
      <ng-container helptext>Not bob</ng-container>
    </cr-input>
    <cr-input placeholder="Role" error="Required. And cannot match name to avoid confusion." [invalidForm]="fg.hasError('unambiguousRole')">
      <input crinput type="text" id="role" class="w100" formControlName="role" [required]="true"  />
      <!-- <span *ngIf="fg.hasError('unambiguousRole')" class="cr-form-feedback cr-feedback"></span> -->
    </cr-input>


    <div class="breath">

      <button class="btn-fake" type="button" (click)="reset()">Reset</button>
      <button class="btn-rev" type="submit">Submit</button>
    </div>
  </form>
  `
})
export class ProductFormPartial implements OnInit {

  valvet: FormControl;
  fg: FormGroup;

  forbiddenNameValidator = (nameRe: RegExp): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  };

  unambiguousRoleValidator = (control: AbstractControl): ValidationErrors | null => {
    const name = this.fg?.get('name')?.value;
    const role = this.fg?.get('role')?.value;
    if (!role) return null;
    return name && role && name === role ? { unambiguousRole: true } : null;
  };

  constructor(private fb: FormBuilder) {
    //
  }
  ngOnInit(): void {

    InputPatterns.addPattern('shortname', '[A-Za-z]{5}');

    this.fg = this.fb.group({
      valvet: [''],
      mars: [1],
      buler: [],
      skippy: [],
      email: [],
      shortname: [],
      phone: [],
      koolaid: [],
      name: ['', this.forbiddenNameValidator(/bob/i)],
      role: ['']

    }, { validators: this.unambiguousRoleValidator });

  }

  checkRole() {
    this.fg.get('role').updateValueAndValidity();
  }
  reset() {
    this.fg.reset();
    // this.fg.patchValue({valvet: 'valvet', role: 'fff'});
  }

  create() {
    // this.fg.get('role').updateValueAndValidity();
    _attn(this.fg.value);
    _attn(this.fg.valid);
    // const x = Validators.min(2)(this.fg.get('mars'));
    // _attn(this.fg.get('mars').valid, 'is it valid');
  }

}

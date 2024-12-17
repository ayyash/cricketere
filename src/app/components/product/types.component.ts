import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputDirective } from '../../lib/input/input.directive';
import { CrInputPartial } from '../../lib/input/input.partial';
import { matchPasswordFn } from '../../lib/input/validators';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
  <div class="page">
    <div class="container">
      <form [formGroup]="fg" (ngSubmit)="submit()" class="cr-form" >
        <cr-input placeholder="Valvet">
          <input crinput type="text" id="valvet" class="w100" formControlName="valvet" required  />
        </cr-input>
        <cr-input placeholder="Email">
          <input crinput type="email" autocomplete="email" [email]="true" id="email"  class="w100" formControlName="email"  />
          <ng-container helptext>Valid email</ng-container>
        </cr-input>
        <cr-input placeholder="Number">
          <input crinput type="number"  id="number"  class="w100" formControlName="number"  />
          <ng-container helptext>Any number</ng-container>
        </cr-input>
        <cr-input placeholder="Url">
          <input crinput type="url" id="url" class="w100" formControlName="url" crpattern="url"  [required]="true" />
          <ng-container helptext>https://...</ng-container>
        </cr-input>
        <h4 class="f4 spaced">Password</h4>
        <div class="spaced row-spaced">
          <div class="col c-6">
            <cr-input placeholder="Password">
              <input crinput type="password" autocomplete="new-password" id="pwd" (change)="fg?.get('pwd2')?.updateValueAndValidity()"
              class="w100" formControlName="pwd" crpattern="password" [required]="true" />
              <ng-container helptext>Alphanumeric and special characters, 8 characters minimum</ng-container>
            </cr-input>
          </div>
          <div class="col c-6">
            <cr-input placeholder="Confirm password" error="Does not match" >
              <input crinput type="password" autocomplete="new-password" id="pwd2" class="w100" formControlName="pwd2"  [required]="true" />
              <ng-container helptext>Should match password</ng-container>
            </cr-input>

          </div>
        </div>
        <div class="spaced">
          <h4 class="f4 spaced">Date fields</h4>
          <cr-input placeholder="When?" error="Required in the future">
            <input crinput type="date" id="appointment" class="w100" formControlName="appointment" [required]="true" validator="future"  />
            <ng-container helptext>Future date</ng-container>
          </cr-input>
          <cr-input placeholder="Date range" error="Out of range">
            <input crinput type="date" id="daterange" class="w100" formControlName="daterange" [params]="params"
            validator="dateRangeFn"  />
            <ng-container helptext>Between 1 Jan 2024 - 1 Jan 2025</ng-container>
          </cr-input>

        </div>

        <div class="spaced">
          <cr-input placeholder="Operating system">
            <select crinput id="os" class="w100" formControlName="os" [required]="true">
              <option value="">Select</option>
              <option value="1">Windows</option>
              <option value="2">Mac</option>
              <option value="3">Linux</option>
              <option value="4">Android</option>
            </select>
          </cr-input>
        </div>

        <cr-input placeholder="History">
          <textarea crinput id="history" [minlength]="10" [maxlength]="20"
           class="w100" formControlName="history" [required]="true"></textarea>
          <ng-container helptext>Write away</ng-container>
        </cr-input>

        <div class="spaced">
          <h4 class="f4 spaced">Checkboxes and radio boxes</h4>

          <cr-input placeholder="Colors" error="At least one color" >
          <div formGroupName="colors" crinput>
              <label>
                <input type="checkbox" name="colors" id="color1" formControlName="red">
                Red
              </label> <br>
              <label>
                <input type="checkbox" name="colors" id="color2" formControlName="black">
                Black
              </label> <br>
              <label>
                <input type="checkbox" name="colors" id="color3" formControlName="green">
                Green
              </label> <br>
            </div>
          </cr-input>


          <cr-input placeholder="Terms and conditions" error="Please accept">
            <input type="checkbox" name="accept" [required]="true" crinput id="accept" formControlName="accept">
          </cr-input>
          <cr-input placeholder="Gender"  [invalidForm]="fg.get('gender').invalid">
            <div crinput >
              <input type="radio" name="gender" value="male" [required]="true"  id="male" formControlName="gender"> Male
              <input type="radio" name="gender" value="female"  [required]="true" id="female" formControlName="gender"> Female
            </div>
          </cr-input>
        </div>

        <div class="spaced">
          <h4 class="f4 spaced">File upload</h4>
          <cr-input placeholder="Upload document" error="Invalid format or size">
            <input crinput type="file" id="file" class="w100" formControlName="doc" crpattern="image"  #f validator="sizeFn" [params]="fparams" (change)="updateSize(f)" />
            <ng-container helptext>JPG, PNG only. 1 MB max.</ng-container>
          </cr-input>
        </div>
        <div class="breath">
          <button class="btn-rev" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
    `,
    imports: [CommonModule, RouterModule, ReactiveFormsModule, CrInputPartial, InputDirective]
})

export class ProductTypesComponent implements OnInit {
  fg: FormGroup;

  minDate = new Date(2024, 0, 1);
  maxDate = new Date(2025, 0, 1);
  params;
  fparams: { size: number, max: number };

  atleastOne = (control: AbstractControl): ValidationErrors | null => {
    // if all controls are false, return error
    const values = Object.values(control.value);
    if (values.some(v => v === true)) {
      return null;
    }
    return { atleastOne: true };

  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.fg = this.fb.group({
      valvet: [''],
      email: [''],
      number: [''],
      url: [''],
      pwd: [''],
      pwd2: [''],
      appointment:[null],
      daterange:[null],
      os: [],
      doc: [],
      history: [],
      colors: this.fb.group({
        red: [],
        black: [],
        green: [],
      }, { validators: this.atleastOne}),
      accept: [],
      gender: []

    });

    this.params = { minDate: this.minDate, maxDate: this.maxDate };
    this.fparams  = { size: 0, max: 100 };

    this.fg.get('pwd2').setValidators(matchPasswordFn(this.fg.get('pwd')));

  }

  updateSize(f: HTMLInputElement) {
    this.fparams.size = f.files[0]?.size;
    this.fg.get('doc').updateValueAndValidity();
  }

  submit() {
    _attn(this.fg.get('doc').valid);
    _attn(this.fg.value);
    _attn(this.fg.invalid);
  }
}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputDirective } from '../../lib/input/input.directive';
import { CrInputPartial } from '../../lib/input/input.partial';
import { UploadPartial } from "../../lib/upload/upload.partial";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div class="page">
    <div class="container">
      <form [formGroup]="fg" (ngSubmit)="submit()" class="cr-form" >

      <cr-input placeholder="Email">
          <input crinput type="email" autocomplete="email" [email]="true" id="email"  class="w100" formControlName="email"  />
          <ng-container helptext>Valid email</ng-container>
        </cr-input>
        <cr-input placeholder="Number">
          <input crinput type="number"  id="number"  class="w100" formControlName="number"  />
          <ng-container helptext>Any number</ng-container>
        </cr-input>

        <cr-upload css="cr-field"></cr-upload>

        <div class="breath">
          <button class="btn-rev" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
    `,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, CrInputPartial, InputDirective, UploadPartial]
})

export class ProductUploadComponent implements OnInit {
  fg: FormGroup;

  fparams: { size: number, max: number; };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.fg = this.fb.group({
      email: [],
      number: []
    });

    this.fparams = { size: 0, max: 100 };


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

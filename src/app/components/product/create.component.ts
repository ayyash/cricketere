import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Toast } from '../../lib/toast/toast.state';
import { ProductFormPartial } from './form.component';

@Component({

    templateUrl: './create.html',
    changeDetection: ChangeDetectionStrategy.OnPush
    , standalone: true
    , imports: [CommonModule, RouterModule, ReactiveFormsModule, ProductFormPartial]
})
export class ProductCreateFormPartial implements OnInit {


    forceValidation = false;
    productForm: FormGroup;



    constructor(private fb: FormBuilder, private toast: Toast) {
        //
    }
    ngOnInit(): void {
        //

        this.productForm = this.fb.group({
            fieldname: [],
            fieldgroup: this.fb.group({
                fieldname: []
            }),
            list: []
        });
    }

    // use to compare for initial select... keep '=='
    compareFn(c1: any, c2: any): boolean {
        // tslint:disable-next-line:triple-equals
        return c1 && c2 ? c1.id == c2.id : false;
    }

    saveProduct(): void {
        this.forceValidation = false;
        this.toast.Hide();


        if (this.productForm.valid) {
            // clone into a new object
            const _value = this.productForm.value;

            const _product = { ..._value};

            // then emit
        } else {
            this.forceValidation = true;
            this.toast.ShowError('INVALID_FORM');
        }
    }
}

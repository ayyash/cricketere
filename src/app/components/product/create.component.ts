import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MdInputModule } from '../../lib/mdinput/mdinput.module';
import { Toast } from '../../lib/toast/toast.state';
import { IViewMode } from '../../models/viewmode.model';

@Component({

    templateUrl: './create.html',
    changeDetection: ChangeDetectionStrategy.OnPush
    , standalone: true
    , imports: [CommonModule, RouterModule, MdInputModule]
})
export class ProductCreateFormPartial implements OnInit {

    // Add types
    @Input() mode: IViewMode = {forNew: true};

    @Output() onSave: EventEmitter<any> = new EventEmitter<any>();
    @Output() onCancel: EventEmitter<void> = new EventEmitter();

    forceValidation = false;
    productForm: UntypedFormGroup;

    constructor(private fb: UntypedFormBuilder, private toast: Toast) {
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
            this.onSave.emit(_product);
        } else {
            this.forceValidation = true;
            this.toast.ShowError('INVALID_FORM');
        }
    }
}

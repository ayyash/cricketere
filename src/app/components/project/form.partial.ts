import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MdInputModule } from '../../lib/mdinput/mdinput.module';
import { Toast } from '../../lib/toast/toast.state';
import { IProject } from '../../models/project.model';
import { IViewMode } from '../../models/viewmode.model';


@Component({
    selector: 'cr-project-form',
    templateUrl: './form.partial.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, ReactiveFormsModule, MdInputModule]
})
export class ProjectFormPartialComponent implements OnInit {

    // Add types
    @Input() mode: IViewMode = {forNew: true};

    @Output() onSave: EventEmitter<Partial<IProject>> = new EventEmitter<Partial<IProject>>();
    @Output() onCancel: EventEmitter<void> = new EventEmitter();

    forceValidation = false;
    projectForm: UntypedFormGroup;

    constructor(private fb: UntypedFormBuilder, private toast: Toast) {
        //
    }
    ngOnInit(): void {
        //
        this.projectForm = this.fb.group({
            fieldname: [],
            name: [],
            list: [],
            email: [],
            number: [],
            checkme: [],
            minlength: [],
            maxlength: [],
            minvalue: [],
            maxvalue: [],
            phone: [],
            range: []
        });
    }

    // use to compare for initial select... keep '=='
    compareFn(c1: any, c2: any): boolean {
        // tslint:disable-next-line:triple-equals
        return c1 && c2 ? c1.id == c2.id : false;
    }

    saveProject(): void {
        this.forceValidation = false;
        this.toast.Hide();


        if (this.projectForm.valid) {
            // clone into a new object
            const _value = this.projectForm.value;

            const _project = { ..._value};

            // then emit
            this.onSave.emit(_project);
            // test project


        } else {
            this.forceValidation = true;
            this.toast.ShowError('INVALID_FORM');
        }
    }
}

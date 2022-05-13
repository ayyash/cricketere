import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IProject, IViewMode} from '../../core/services';
import { Toast } from '../../lib/toast';


@Component({
    selector: 'cr-project-form',
    templateUrl: './form.partial.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectFormPartialComponent implements OnInit {

    // Add types
    @Input() mode: IViewMode = {forNew: true};

    @Output() onSave: EventEmitter<Partial<IProject>> = new EventEmitter<Partial<IProject>>();
    @Output() onCancel: EventEmitter<void> = new EventEmitter();

    forceValidation = false;
    projectForm: FormGroup;

    constructor(private fb: FormBuilder, private toast: Toast) {
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
        this.onSave.emit({
            title: 'new project',
            description: 'new project description'
        })

        if (this.projectForm.valid) {
            // clone into a new object
            const _value = this.projectForm.value;

            const _project = { ..._value};

            // then emit
            // this.onSave.emit(_project);
            // test project

        } else {
            this.forceValidation = true;
            this.toast.Show('INVALID_FORM', { sticky: false, extracss: 'error' });
        }
    }
}

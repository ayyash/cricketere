import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { IViewMode} from '../../core/services';
import { Toast } from '../../lib/toast';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../lib/pipes/translate.pipe';
import { MdInputModule } from '../../lib/mdinput/mdinput.module';
import { ProjectCardPartialComponent } from '../project/card.partial';


@Component({
    templateUrl: './forgot.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, TranslatePipe, ReactiveFormsModule, MdInputModule, ProjectCardPartialComponent],
    standalone: true
})
export class PublicForgotComponent implements OnInit {

    // Add types
    @Input() mode: IViewMode = {forNew: true};

    @Output() onSave: EventEmitter<any> = new EventEmitter<any>();
    @Output() onCancel: EventEmitter<void> = new EventEmitter();

    forceValidation = false;
    forgotForm: UntypedFormGroup;

    constructor(private fb: UntypedFormBuilder,
        // private authService: AuthService,
        private router: Router,
        private toast: Toast) {
        //
    }
    ngOnInit(): void {
        //
        this.forgotForm = this.fb.group({
            email: []
        });
    }



    submit(): void {
        this.forceValidation = false;
        this.toast.Hide();


        if (this.forgotForm.valid) {
            // this.authService.ForgotPassword(this.forgotForm.value.email).subscribe(
            //     () => {
            //         // ok, display message and go back to login
            //         this.toast.Show('RESET_SENT', {sticky: false, extracss: 'success'});
            //         this.router.navigateByUrl(Config.Basic.loginRoute);

            //     },
            //     error => this.toast.HandleUiError(error)
            // );

        } else {
            this.forceValidation = true;
            this.toast.Show('INVALID_FORM', { sticky: false, extracss: 'error' });

        }
    }
}

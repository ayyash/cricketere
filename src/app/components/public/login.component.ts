import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Config } from '../../config';
import { GtmTracking } from '../../core/gtm';
import { AuthService } from '../../core/services';
import { Toast } from '../../lib/toast';

@Component({

    templateUrl: './login.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./login.less']
})
export class PublicLoginComponent implements OnInit {

    loginForm: FormGroup;
    forceValidation: boolean;
    constructor(
        private toast: Toast,
        private router: Router,
        private fb: FormBuilder,
        private authService: AuthService
    ) {
        //
    }
    ngOnInit(): void {
        //
        this.loginForm = this.fb.group({
            username: [],
            password: []
        });


    }

    login(): void {
        // stage 2: normal login
        this.forceValidation = false;
        this.toast.Hide();





        if (this.loginForm.valid) {


            const _user = this.loginForm.value;

            this.authService.Login(_user.username, _user.password).subscribe(
                {
                    next: result => {
                        if (result) {
                            this.router.navigateByUrl(this.authService.redirectUrl || Config.Basic.defaultRoute);
                        }
                    },
                    error: error => this.toast.HandleUiError(error)
                }

            );

        }
        else {
            this.forceValidation = true;
            this.toast.Show('INVALID_FORM', { sticky: false, extracss: 'error' });

        }

    }

}

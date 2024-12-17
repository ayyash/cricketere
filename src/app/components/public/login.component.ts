import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Config } from '../../config';
import { MdInputModule } from '../../lib/mdinput/mdinput.module';
import { TranslatePipe } from '../../lib/pipes/translate.pipe';
import { EnumTimeout } from '../../lib/toast/toast.model';
import { Toast } from '../../lib/toast/toast.state';
import { AuthService } from '../../services/auth.service';

@Component({
    templateUrl: './login.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./login.less'],
    imports: [CommonModule, ReactiveFormsModule, TranslatePipe, MdInputModule, RouterModule]
})
export class PublicLoginComponent implements OnInit {

  loginForm: UntypedFormGroup;
  forceValidation: boolean;
  constructor(
    private toast: Toast,
    private router: Router,
    private fb: UntypedFormBuilder,
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

      // this.router.navigateByUrl(this.authService.redirectUrl || Config.Basic.defaultRoute);

      this.authService.Login(_user.username, _user.password).pipe(
        catchError(e => {
          return this.toast.HandleUiError(e, {
            timeout: EnumTimeout.Never,
            buttons: [
              {
                text: 'Login',
                css: 'btn-fake',
                click: (event) => {
                  // reroute
                  this.router.navigateByUrl(this.authService.redirectUrl || Config.Basic.defaultRoute);
                  this.toast.Hide();
                }
              },
              this.toast.dismissButton],
          });
        })
      ).subscribe(
        {
          next: result => {
            if (result) {
              this.router.navigateByUrl(this.authService.redirectUrl || Config.Basic.defaultRoute);
            }
          },
          // error: error => this.toast.HandleUiError(error)
        }

      );

    }
    else {
      this.forceValidation = true;
      // this.toast.Show('INVALID_FORM', { sticky: false, extracss: 'error' });

    }

  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { Res } from '../../core/resources';
import { IUiError } from '../../models/error.model';
import { StateService } from '../../services/state.abstract';
import { IToastButton, IToast } from './toast.model';


@Injectable({ providedIn: 'root' })
export class Toast extends StateService<IToast> {
    //
    // private toast: BehaviorSubject<IToast | null> = new BehaviorSubject(null);
    // toast$: Observable<IToast | null> = this.toast.asObservable();

    public dismissButton: IToastButton = {
        css: 'btn-close',
        text: 'Dismiss',
        click: (event: MouseEvent) => {
            this.Hide();
        }
    }

    private defaultOptions: IToast = {
        css: 'toast',
        extracss: '',
        text: '',
        buttons: [this.dismissButton]
    }


    Show(code: string, options?: IToast): void {

        const _options: IToast = { ...this.defaultOptions, ...options };

        // get message from code
        const message = Res.Get(code, options?.text || resources.keys.Unknown);
        this.SetState({ ..._options, text: message, });
    }

    ShowError(code: string, options?: IToast) {
        this.Show(code, { extracss: 'error', ...options });
    }
    ShowSuccess(code: string, options?: IToast) {
        this.Show(code, { extracss: 'success', ...options });
    }
    ShowWarning(code: string, options?: IToast) {
        this.Show(code, { extracss: 'warning', ...options });
    }

    Hide() {
        this.RemoveState();
    }

    HandleUiError(error: IUiError, options?: IToast): Observable<any> {

        // check code for generic responses
        // 400 and 500 are errors
        // 401 and 403 are info with relogin
        // 404 is warning

        if (error.code) {
            // do a switch case for specific errors
            switch (error.status) {
                case 500:
                    // terrible error, code always unknown
                    this.ShowError('Unknown', options);
                    break;
                case 400:
                    // server error
                    this.ShowError(error.code, options);
                    break;
                case 401:
                case 403:
                    // auth error, just show a unified message
                    this.Show('UNAUTHORIZED', options);
                    break;
                case 404:
                    // thing does not exist, better let each component decide
                    this.ShowWarning(error.code, options);
                    break;
                default:
                    // other errors
                    this.ShowError(error.code, options);
            }
            return of(null);
        } else {
            // else, throw it back to Angular Error Service, this is a JS error
            return throwError(() => error);
        }
    }
}

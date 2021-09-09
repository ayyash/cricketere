import { throwError, Observable } from 'rxjs';
import { IUiError } from '../core/services';
import { HttpResponse, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

//  upgrade to rxjs by implementing a custom pipe
declare module 'rxjs/internal/Observable' {
    interface Observable<T> {
        debug: (...args: any) => Observable<T>;
        catchProjectError: (...args: any) => Observable<T>;
    }
}

Observable.prototype.debug = function(message: string, methodName: string, type: string = '') {
    // _debug(this.operator.project);
    return this.pipe(
        tap(nextValue => {
            let value = nextValue;

            if (nextValue instanceof HttpResponse) {
                value = nextValue.body;
            }
            if (nextValue && (<any>nextValue).type !== HttpEventType.Sent) {
                _debug(value, `${methodName} ${message}`, type);
            }
        })
    );
};

Observable.prototype.catchProjectError = function(message: string, methodName: string) {
    return this.pipe(
        catchError((error: HttpErrorResponse) => {
            // let code: any = 'Unknown';

            const uiError: IUiError = {
                code: 'Unknown',
                internalMessage: '',
                serverMessage: undefined,
                status: 0
            };
            let m = error.message;
            if (error instanceof HttpErrorResponse) {
                m = error.status + ' ' + error.message;
                uiError.status = error.status;
                switch (error.status) {
                    case 404:
                        uiError.code = 'PAGE_NOT_FOUND';

                        break;
                    case 401: // this is invalid access token, retry this one ony
                    case 403: // this is invalid authorization, this is a deadend
                        uiError.code = 'UNAUTHORIZED';
                        break;
                    case 499:
                        uiError.code = 'INVALID_SERVER_FORM';
                        break;
                    default:
                        // case 400: // this is bad requet, let the code return the right string
                        uiError.code = 'Unknown';

                        // take note of bad error format from server! bleh!
                        if (error.error) {
                            if (error.error.code) {
                                uiError.code = error.error.code;
                            }
                            if (error.error.message) {
                                uiError.internalMessage = error.error.message;
                                m += '\n' + uiError.code;
                                m += ': ' + uiError.internalMessage;
                            }
                            if (error.error.serverMessage) {
                                uiError.serverMessage = error.error.serverMessage;
                                uiError.code = '-1'; // force server message
                            }
                        }
                }
            } else {
                // just throw error as is
                m = error;
                uiError.internalMessage = error;
            }
            _debug(m, `${methodName} ${message}`, 'e');
            // WATCH: keep an eye on syntax
            return throwError(() => uiError);
        })
    );
};

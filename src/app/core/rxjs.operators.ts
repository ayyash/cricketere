import { HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';
import { MonoTypeOperatorFunction, Observable, of, pipe, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


export const debug = (message: string, type?: string): MonoTypeOperatorFunction<any> => {
    return pipe(
        tap({
            next: nextValue => {
                let value = nextValue;

                if (nextValue instanceof HttpResponse) {
                    // value is the body
                    value = nextValue.body;
                }
                // just filter out the sent event
                if (nextValue && nextValue.type !== HttpEventType.Sent) {
                    _debug(value, message, type);
                }

            },
            error: (error) => {
                let value = error;
                if (error instanceof HttpErrorResponse) {
                    value = `${error.status} ${error.message}`;
                }
                _debug(value, message, 'e');

            }
        })
    );
};

export const debugError = (message: string): MonoTypeOperatorFunction<any> => {
    return pipe(
        catchError(error => {
            _debug(error, message, 'e');
            return throwError(() => error);
        })
    );
};

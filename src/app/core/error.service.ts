import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class CricketereErrorHandler implements ErrorHandler {

    handleError(error: any) {
        // TODO: log

        _debug(error, 'Unhandled Error', 'f');

    }
}

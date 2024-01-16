import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';

import { Res } from './resources';
import { catchAppError, debug } from './rxjs.operators';

@Injectable()
export class LocalInterceptor implements HttpInterceptor {
    constructor(
        @Optional() @Inject('serverUrl') protected serverUrl: string
    ) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log('xxxx', this.serverUrl);

        if (req.url.indexOf('localdata') < 0) {
            return next.handle(req);
        }

        let url = req.url;
        if (this.serverUrl) {
            // on ssr get a full url of current server, this needs to be mapped to express in final app
            url = `${this.serverUrl}/${Res.language}/${req.url}`;
        }

        const adjustedReq = req.clone({ url: url });
        return next
            .handle(adjustedReq).pipe(
                debug(`${req.method} ${req.urlWithParams}`, 'p'),
                catchAppError(`${req.method} ${req.urlWithParams}`)
            );
    }
}

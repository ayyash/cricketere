import { Observable } from 'rxjs';
import { Injectable, Optional, Inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { debug, catchAppError } from './rxjs.operators';
import { Res } from './resources';

@Injectable()
export class LocalInterceptor implements HttpInterceptor {
    constructor(
        @Optional() @Inject('serverUrl') protected serverUrl: string
    ) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.indexOf('localdata') < 0) {
            return next.handle(req);
        }

        // let url = 'http://localhost:1212/en/' + req.url;
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

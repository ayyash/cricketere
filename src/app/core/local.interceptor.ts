import { Observable } from 'rxjs';
import { Injectable, Optional, Inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Request } from 'express';
import { REQUEST } from '@nguniversal/express-engine/tokens';

import { Config } from '../config';

@Injectable()
export class LocalInterceptor implements HttpInterceptor {
    constructor(
        @Optional() @Inject(REQUEST) protected request: Request
    ) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.indexOf('localdata') < 0) {
            return next.handle(req);
        }

        let url = req.url;
        if (this.request) {
            // on ssr get a full url of current server, this needs to be mapped to express in final app
            url = `${this.request.protocol}://${this.request.get('host')}/${Config.Basic.language}/${req.url}`;
        }

        const adjustedReq = req.clone({ url: url });
        return next
            .handle(adjustedReq)
            .catchProjectError(req.urlWithParams, req.method)
            .debug(req.urlWithParams, req.method, 'p');
    }
}

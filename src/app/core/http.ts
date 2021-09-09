import { Observable } from 'rxjs';
import { finalize, shareReplay, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpHeaders
} from '@angular/common/http';
import { ConfigService, LoaderService } from './services';


@Injectable()
export class CricketereInterceptor implements HttpInterceptor {
    private isRefreshingToken = false;
    // tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

    constructor(private loaderService: LoaderService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.indexOf('localdata') > -1 ) {
            // pass through
           return next.handle(req);
        }
        const url = ConfigService.Config.API.apiRoot + req.url;


        const adjustedReq = req.clone({ url: url, setHeaders: this.getHeaders(req.headers) });
        this.loaderService.show();

        return next
            .handle(adjustedReq)
            .pipe(
                shareReplay(),
                map(response => this.mapData(response)),
                finalize(() => {
                    this.loaderService.hide();
                })
            )
            .catchProjectError(req.urlWithParams, req.method)
            .debug(req.urlWithParams, req.method, 'p');
        // do catch 401 here
    }

    private getHeaders(reqheaders: HttpHeaders): any {
        //  authorization here
        let headers: any = {};


        return headers;
    }

     // if response wrapped with "data"
     private mapData(response: any) {
        if (response instanceof HttpResponse) {

            // clone body and modify so that "data" is removed as a wrapper
            if (response.body && response.body.data) {
                response = response.clone({ body: response.body.data });
            }
        }
        return response;
    }

}

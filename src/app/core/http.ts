import { Observable, Subject, throwError } from 'rxjs';
import { finalize, shareReplay, map, catchError, filter, switchMap } from 'rxjs/operators';
import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpHeaders,
  HttpContextToken,
  HttpContext,
  HttpErrorResponse
} from '@angular/common/http';
import { AuthService, ConfigService, LoaderService } from './services';
import { debug, catchAppError } from './rxjs.operators';
import { AuthState } from '../services/auth.state';
// import { REQUEST } from '@nguniversal/express-engine/tokens';
// import { Request } from 'express';


// create a context token
const LOADING_SOURCE = new HttpContextToken<string>(() => '');

export const applyContext = (src: string) => {
  return { context: new HttpContext().set(LOADING_SOURCE, src) };
};

@Injectable()
export class CricketereInterceptor implements HttpInterceptor {

  isBusy: boolean;
  recall: Subject<boolean> = new Subject();

  constructor(private loaderService: LoaderService,
    private authState: AuthState,
    private authService: AuthService,

    ) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url.indexOf('localdata') > -1 || req.url.indexOf('http') > -1) {
      // pass through
      return next.handle(req);
    }
    const url = ConfigService.Config.API.apiRoot + req.url;


    const adjustedReq = req.clone({ url: url, setHeaders: this.getHeaders() });
    this.loaderService.show(req.context.get(LOADING_SOURCE));

    if (req.body) {
      _debug(req.body, `Request ${req.method} ${req.urlWithParams}`, 'p');
    }

    return next
      .handle(adjustedReq)
      .pipe(
        shareReplay(),
        catchError(error => {
          // catch errors, if 401, refresh token needs to be resent for a new access token
          // this is exactly like catchAppError

          if (error instanceof HttpErrorResponse
            && req.url.indexOf('login') < 0
            && error.status === 401) {

            return this.handle401Error(adjustedReq, next);
          }
          return throwError(() => error);
        }),
        map(response => this.mapData(response)),
        finalize(() => {
          this.loaderService.hide(req.context.get(LOADING_SOURCE));
        }),
        debug(`${req.method} ${req.urlWithParams}`, 'p'),
        catchAppError(`${req.method} ${req.urlWithParams}`)
      );
  }

  private getHeaders(): any {

    //  authorization here
    let headers: any = {};
    const _auth = this.authState.GetToken();

    if (_auth && _auth !== '') {
      headers['Authorization'] = `Bearer ${_auth}`;
    };
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

  private handle401Error(req: HttpRequest<any>, next: HttpHandler): Observable<any> {


    if (!this.isBusy) {
      this.isBusy = true;
      this.recall.next(false);

      return this.authService.RefreshToken()
        .pipe(
          switchMap((result: boolean) => {
            if (result) {
              // tokens saved, re-adjust request with new access token
              this.recall.next(true);
              return next.handle(req.clone({ setHeaders: this.getHeaders() }));
            }
            throw (false);
          }),
          catchError(error => {
            // exeption or simply bad refresh token, logout an reroute
            this.authState.Logout(true);
            return throwError(() => error);
          }),
          finalize(() => {
            this.isBusy = false;
          })
        );
    } else {
      // scenario: two API calls, first 401, refreshToken is locked, while client tries to renew token
      // second call comes in, finds it locked, tries again, only to reproduce another 401
      // it keeps happening until the first call unlocks
      // to fix that, watch a subject for the token set, and recall API
      return this.recall.pipe(
        filter(ready => ready === true),
        // take(1),
        // why do I have to take? test me
        switchMap(ready => {
          return next.handle(req.clone({ setHeaders: this.getHeaders() }));
        })
      );

    }

  };

}

import { HttpHandlerFn, HttpHeaders, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize, map, shareReplay } from 'rxjs';
import { catchAppError, debug } from './rxjs.operators';
import { ConfigService, LoaderService } from './services';


const getHeaders = (reqheaders: HttpHeaders): any => {
   //  authorization here
   let headers: any = {};


   return headers;
};

// if response wrapped with "data"
const mapData = (response: any) => {
   if (response instanceof HttpResponse) {

      // clone body and modify so that "data" is removed as a wrapper
      if (response.body && response.body.data) {
         response = response.clone({ body: response.body.data });
      }
   }
   return response;
};

export const CricketereInterceptorFn: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {

   const loaderService = inject(LoaderService);


   if (req.url.indexOf('localdata') > -1 || req.url.indexOf('http') > -1) {
      // pass through
      return next(req);
   }
   const url = ConfigService.Config.API.apiRoot + req.url;


   const adjustedReq = req.clone({ url: url, setHeaders: getHeaders(req.headers) });
   loaderService.show();

   if (req.body) {
      _debug(req.body, `Request ${req.method} ${req.urlWithParams}`, 'p');
   }

   return next(adjustedReq)
      .pipe(
         shareReplay(),
         map(response => mapData(response)),
         finalize(() => {
            loaderService.hide();
         }),
         debug(`${req.method} ${req.urlWithParams}`, 'p'),
         catchAppError(`${req.method} ${req.urlWithParams}`)
      );
};

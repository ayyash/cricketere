// import { HttpInterceptorFn, HttpRequest, HttpHandlerFn } from '@angular/common/http';
// import { inject, ProviderToken } from '@angular/core';
// import { Res } from './resources';
// import { debug, catchAppError } from './rxjs.operators';


// export const LocalInterceptorFn: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {

//    const serverUrl = inject(<ProviderToken<unknown>><unknown>'serverUrl', {optional: true});

//    if (req.url.indexOf('localdata') < 0) {
//       return next(req);
//   }

//   let url = req.url;
//   if (serverUrl) {
//       // on ssr get a full url of current server, this needs to be mapped to express in final app
//       url = `${serverUrl}/${Res.language}/${req.url}`;
//    }

//   const adjustedReq = req.clone({ url: url });
//   return next(adjustedReq).pipe(
//           debug(`${req.method} ${req.urlWithParams}`, 'p'),
//           catchAppError(`${req.method} ${req.urlWithParams}`)
//       );
// }

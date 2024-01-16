import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchAppError, debug } from './rxjs.operators';
import { REQUEST, SERVER_URL } from './server.token';


export const LocalInterceptorFn: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {

  // const serverUrl = inject(Injector).get('serverUrl', null);
  // console.log('xxxx', serverUrl);


  // const f = inject(Injector).get(INITIAL_CONFIG, null, {optional: true});
  // console.log('fffff', f);
  const serverUrl = inject(SERVER_URL, {optional: true});
  const _req = inject(REQUEST, {optional: true});

  console.log('serverurl', serverUrl);
   if (req.url.indexOf('localdata') < 0) {
      return next(req);
  }


  let url = req.url;
  if (serverUrl) {
      // on ssr get a full url of current server, this needs to be mapped to express in final app
      url = `${serverUrl}/${req.url}`;
  }

  const adjustedReq = req.clone({ url: url });
  return next(adjustedReq).pipe(
          debug(`${req.method} ${req.urlWithParams}`, 'p'),
          catchAppError(`${req.method} ${req.urlWithParams}`)
      );
}



import { enableProdMode } from '@angular/core';

import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/ssr';
import { AngularNodeAppEngine, writeResponseToNodeResponse } from '@angular/ssr/node';
import { appProviders } from './src/app.config';
import { AppComponent } from './src/app/app.component';
import { _global } from './src/app/core/common';
import { environment } from './src/environments/environment';

// following lines is for prerender to work
// export { renderApplication } from '@angular/platform-server';
// export { AppServerModule } from './src/app/app.server.module';


const _app = (context: BootstrapContext) => bootstrapApplication(AppComponent, {
  providers: [
    provideServerRendering(),
    ...appProviders,
  ]}, context
);
export default _app;

  _global.localStorage = {
    getItem: function (key) {
        return null;

    },
    setItem: function (key, value) {

        // console.log('setting item', key, value);
    },
    clear: function () {
    },
    removeItem: function (key) {
    },
    length: 0
};
_global._debug = function (o, message, type) {

};
_global._attn = function (o, message) {
}
_global._seqlog = function (message) {
    // console.log(message);
}

export const engine = new AngularNodeAppEngine({allowedHosts: ['localhost']});
export { writeResponseToNodeResponse };
// export function ishee(req, res, next) {
//   angularApp
//       .handle(req)
//       .then((response) =>
//         response ? writeResponseToNodeResponse(response, res) : next(),
//       )
//       .catch(next);
// }


// export const reqHandler = createRequestHandler(async (req: Request) => {
//   const res: Response | null = await engine.handle(req);
//   return res;
// });


// create engine
// const engine = new CommonEngine({ bootstrap: _app, allowedHosts: ['localhost'] });

// export interface RenderOptions extends CommonEngineRenderOptions {
//   req: Request;
//   res?: Response;
//   serverUrlPath: string;
// }


// express engine
// export function crExpressEgine(
//   filePath: string,
//   options: any,
//   callback: (err?: Error | null, html?: string) => void,
// ) {
//   try {
//     // we'll grab the options from external call in express
//     const renderOptions = { ...options };

//     console.log('xxxxxxxxxxxxxx', renderOptions);
//     // the url is the only option we should no longer set in Angular, so we'll set in Express route

//     // this may be overrwitten, but I don't wish to, it will be the first argument of the express "render"
//     // renderOptions.documentFilePath = filePath;

//     // the options contain settings.view value which is set by app.set('views', 'client'); in Express server
//     // renderOptions.publicPath = (options as any).settings?.views;

//     // an old feature that was never documented, now it is, inlineCriticalCss

//     // append the new providers

//     renderOptions.providers = [...(renderOptions.providers ?? []),
//     {
//       provide: 'SERVER_URL',
//       useValue: renderOptions['serverUrl']
//     },
//     // {
//     //   provide: REQUEST,
//     //   useValue: renderOptions.req
//     // },
//     // {
//     //   provide: RESPONSE,
//     //   useValue: renderOptions.res
//     // }
//   ];

//   engine.handle(renderOptions.req)
//     .then(async (response) => {
//       if (!response) {
//         return callback(new Error(`Angular App Engine returned null for path: ${renderOptions.req.url}`));
//       }

//       const html = await response.text();
//       callback(null, html);
//     })

//       // .render(renderOptions)
//       // .then((html) => callback(null, html))
//       .catch(callback);
//   } catch (err) {
//     callback(err);
//   }
// };

// export AppEngine
if (environment.production) {
  enableProdMode();
}



import 'zone.js/dist/zone-node';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { enableProdMode} from '@angular/core';
// import { platformFactory } from './src/app/services/config.service';
import { environment } from './src/environments/environment';
import { AppServerModule } from './src/app/app.server.module';

// following lines is for prerender to work
export { AppServerModule } from './src/app/app.server.module';


// The Express app is exported so that it can be used by serverless Functions.
// *************************AYYASH********************/
// export the bare minimum, let nodejs take care of everything else
export const AppEngine = ngExpressEngine({
    bootstrap: AppServerModule,
    // PLATFORMINIT: use this for static injected config
    // providers:[
        // {
        //     provide: PLATFORM_INITIALIZER,
        //     useFactory: platformFactory,
        //     multi: true,
        // }
    // ]
});


if (environment.production) {
    enableProdMode();
  }


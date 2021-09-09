import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import { AppServerModule } from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
// *************************AYYASH********************/
// export the bare minimum, let nodejs take care of everything else
export const AppEngine = ngExpressEngine({
    bootstrap: AppServerModule
});


export * from './src/main.server';

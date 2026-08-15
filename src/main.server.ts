import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/ssr';
import { appProviders } from './app.config';
import { AppComponent } from './app/app.component';



const _app = (context: BootstrapContext) => bootstrapApplication(AppComponent, {
  providers: [
    provideServerRendering(),
    ...appProviders,
  ]}, context
);
export default _app;

import { LoaderComponent } from '../components/common/loader.partial';
import { GtmDirective } from '../lib/directives/gtm.directive';
import { AppShellRenderDirective } from '../lib/directives/render.directive';
import { TranslatePipe } from '../lib/pipes/translate.pipe';
import { ToastPartialComponent } from '../lib/toaster/toast.component';

export const SHARED_COMPONENTS = [
  // add common standalone components
  LoaderComponent,
  ToastPartialComponent,
  AppShellRenderDirective,
  TranslatePipe,
  GtmDirective
] as const;

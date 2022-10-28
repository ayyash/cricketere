import { DataPartialComponent } from '../components/common/data.partial';
import { LoaderComponent } from '../components/common/loader.partial';
import { ModalPartialComponent } from '../components/common/modal.partial';
import { PagerPartialComponent } from '../components/common/pager.partial';

export const SHARED_COMPONENTS = [
  // add common standalone components
  LoaderComponent,
  ModalPartialComponent,
  PagerPartialComponent,
  DataPartialComponent,
] as const;

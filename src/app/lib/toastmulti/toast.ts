import { ApplicationRef, ComponentRef, EmbeddedViewRef, Injectable, createComponent } from '@angular/core';
import { timer } from 'rxjs';
import { Res } from '../../core/resources';
import { StateService } from '../../services/state.abstract';
import { IToast, EnumTimeout } from './toast.model';
import { ToastPartialComponent } from './toast.component';


@Injectable({ providedIn: 'root' })
export class Toast  {

  constructor(private appRef: ApplicationRef) {
  }

  Show(message: string): ComponentRef<ToastPartialComponent> {

    // create component and insert it, keep track of it
    const componentRef = createComponent(ToastPartialComponent, {
      environmentInjector: this.appRef.injector
    });

    this.appRef.attachView(componentRef.hostView);

    componentRef.setInput('options', {text: message});

    document.body.append((<EmbeddedViewRef<any>>componentRef.hostView).rootNodes[0]);

    const s = componentRef.instance.onClose.subscribe(() => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
      s.unsubscribe();
    });

    return componentRef;

  }

  Hide(ref: ComponentRef<ToastPartialComponent>) {
    ref.instance.onClose.emit();
  }

}

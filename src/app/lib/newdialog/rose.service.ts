// this service will find application ref
// create Rose
// the be used as following:

import { ApplicationRef, EmbeddedViewRef, Inject, Injectable, Injector, StaticProvider, Type, createComponent } from '@angular/core';
import { RosePartialComponent } from './rose.partial';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class RoseService {

  constructor(
    // bring in the application ref
    private appRef: ApplicationRef,
    @Inject(DOCUMENT) private doc: Document
  ) { }

  // open method
  public open(c: Type<any>, options?: {
    title?: string,
    data?: any,
    onclose?: () => void;
    providers?: StaticProvider[];
  }) {


    _attn(this.appRef.viewCount);

    // first create a Rose component
    const componentRef = createComponent(RosePartialComponent, {
      environmentInjector: this.appRef.injector
    });

    // append to body, we will use platform document for this
    this.doc.body.append((<EmbeddedViewRef<any>>componentRef.hostView).rootNodes[0]);

    // attach view
    this.appRef.attachView(componentRef.hostView);

    // assign title
    componentRef.instance.title = options?.title || '';

    // when closed destroy
    const s = componentRef.instance.onClose.subscribe(() => {
      // call onclose if exists

      if (options?.onclose) {
        options.onclose();
      }

      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
      s.unsubscribe();
    });

    // gain reference to my child after creating Rose
    // const child = (<EmbeddedViewRef<any>>componentRef.hostView).rootNodes[0].querySelector('#rosechild')

    const _injector = options?.providers?.length ? Injector.create({ providers: options.providers }) : null;


    // now create c, and append to rose host view
    const childRef = createComponent(c, {
      environmentInjector: this.appRef.injector,
      elementInjector: _injector

    });


    // append to parent element
    const rose = componentRef.instance.content.nativeElement;
    const peach = (<EmbeddedViewRef<any>>childRef.hostView).rootNodes[0];

    rose.after(peach);

    // rose.parentElement.append(peach);


    // attach that as well
    this.appRef.attachView(childRef.hostView);



    childRef.instance.data = options?.data;
    childRef.instance.rose = componentRef.instance;

    childRef.instance.onChildClose?.subscribe(() => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();

    });

    // childRef.instance.onEmit?.subscribe((data: any) => {
    //   options?.onEmit?.(data);
    // });

    return childRef.instance;



  }

  public open2(c: Type<any>, options?: {
    title?: string,
    data?: any,
    onclose?: () => void;
    services?: any;
  }) {

    // const x = Injector.create(options.services);

    // first create peach
    const childRef = createComponent(c, {
      environmentInjector: this.appRef.injector,
      // elementInjector: x
    });

    // attach that as well
    this.appRef.attachView(childRef.hostView);

    // get rootnode
    const rootNode = (<EmbeddedViewRef<any>>childRef.hostView).rootNodes[0];

    // const nodes = (<EmbeddedViewRef<any>>childRef.hostView).rootNodes;
    // then create rose and pass projectable nodes

    const a = rootNode.querySelector('[a]');
    const b = rootNode.querySelector('[b]');

    // first create a Rose component
    const componentRef = createComponent(RosePartialComponent, {
      environmentInjector: this.appRef.injector,
      // like this
      projectableNodes: [[a], [b]]
    });


    // append to body, we will use platform document for this
    this.doc.body.append((<EmbeddedViewRef<any>>componentRef.hostView).rootNodes[0]);

    // attach view
    this.appRef.attachView(componentRef.hostView);

    // assign title
    componentRef.instance.title = options?.title;

    // when closed destroy
    const s = componentRef.instance.onClose.subscribe(() => {
      // call onclose if exists

      if (options?.onclose) {
        options.onclose();
      }

      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
      s.unsubscribe();
    });

    // gain reference to my child after creating Rose
    // const child = (<EmbeddedViewRef<any>>componentRef.hostView).rootNodes[0].querySelector('#rosechild')

    // now create c, and append to rose host view
    // const childRef = createComponent(c, {
    //   environmentInjector: this.appRef.injector,
    //   // hostElement: child
    // });

    // // attach that as well
    // this.appRef.attachView(childRef.hostView);

    // append to parent element
    // componentRef.instance.content.nativeElement.parentElement.appendChild((<EmbeddedViewRef<any>>childRef.hostView).rootNodes[0]);


    childRef.instance.data = options?.data;
    childRef.instance.rose = componentRef.instance;

    childRef.instance.onChildClose?.subscribe(() => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();

    });

    // childRef.instance.onEmit?.subscribe((data: any) => {
    //   options?.onEmit?.(data);
    // });

    return childRef.instance;



  }

}

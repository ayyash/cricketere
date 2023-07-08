import { Component, ChangeDetectionStrategy, ApplicationRef, createComponent, EmbeddedViewRef, TemplateRef, ElementRef, ContentChild, ViewChild } from '@angular/core';
/* STANDALONE */
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RosePartialComponent } from './rose.partial';
import { Toast } from '../../lib/toastmulti/toast';
import { PeachPartialComponent } from './peech.partial';
import { RoseService } from '../../lib/newdialog/rose.service';
import { SomeService } from './test.service';
/* ENDSTANDALONE */

@Component({

  templateUrl: './dialog.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ SomeService]
  /* STANDALONE */
  , standalone: true
  , imports: [CommonModule, RouterModule]
  /* ENDSTANDALONE */
})
export class ContentDialogComponent {

  constructor(private appRef: ApplicationRef,
    private toast: Toast,
    private someService: SomeService,
    private roseService: RoseService) {

  }

  ayyash(): void {
    // show toast
    const ref = this.toast.Show('oh oh, this is now working');
    // this.toast.Hide(ref);
  }

  insertElement(): void {


    // const host = document.getElementById('hostmehere');

    // const newHost = document.createElement('somenewelement');
    // document.body.append(newHost);

    const componentRef = createComponent(RosePartialComponent, {
      // hostElement: newHost,
      environmentInjector: this.appRef.injector
    });

    this.appRef.attachView(componentRef.hostView);

    // componentRef.setInput('something', 'anytnig else');
    componentRef.instance.something = 'anything else';

    document.body.append((<EmbeddedViewRef<any>>componentRef.hostView).rootNodes[0]);

    componentRef.instance.ok();

    const s = componentRef.instance.onSomething.subscribe((data: string) => {
      _attn(data, 'emitted');
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
      s.unsubscribe();
    });
  }

  insertPeach(): void {
    // insert rose, get hostView, then append peach component to it
    const componentRef = createComponent(RosePartialComponent, {
      // hostElement: newHost,
      environmentInjector: this.appRef.injector,
    });

    this.appRef.attachView(componentRef.hostView);


    document.body.append((<EmbeddedViewRef<any>>componentRef.hostView).rootNodes[0]);


    //  need to change this into getting reference to ng-template
    const child = (<EmbeddedViewRef<any>>componentRef.hostView).rootNodes[0].querySelector('#mychild');

    // get reference to ng-template in rose


    // again for peech
    const peachRef = createComponent(PeachPartialComponent, {
      // hostElement: child,
      environmentInjector: this.appRef.injector
    });



    this.appRef.attachView(peachRef.hostView);

    // (<ElementRef>componentRef.instance.content).nativeElement.parentElement.appendChild((<EmbeddedViewRef<any>>peachRef.hostView).rootNodes[0]);


    const ss = peachRef.instance.onPeach.subscribe((data: string) => {
      _attn(data, 'onpeach');
      ss.unsubscribe();
    });

    peachRef.instance.peachSomething = 'new peach something';
    // peachRef.injector.get(SomeService).UpdateState({item: 'peach from dialog'});

    _attn(componentRef.instance.content, 'xxx');

    // (<TemplateRef<any>>componentRef.instance.content).createEmbeddedView(null);
    // _attn(componentRef.instance.content.nativeElement, 'content');

  }


  openRose(): void {
    const peachRef = this.roseService.open(PeachPartialComponent,
      {
        title: 'Peach says hello',
        data: 'some string',
        providers: [{provide: SomeService, useValue: this.someService}]
      });

      // peachRef.providers = [{provide: SomeService, useValue: this.someService}];
    // peachRef.onEmit.subscribe((data: string) => {
    //   _attn(data, 'onpeach');
    // });
  }

  openRose2(): void {
    const peachRef = this.roseService.open2(PeachPartialComponent,
      {
        title: 'Peach says hello',
        data: 'some string',
        // services: {providers: [{provide: SomeService, useValue: this.someService}]}
      });


  }



  insertPeachFirst() {
    // create peach first, then rose with projectableNodes

    const peachRef = createComponent(PeachPartialComponent, {
      environmentInjector: this.appRef.injector
    });

    this.appRef.attachView(peachRef.hostView);

    // get root node of peach
    const peachRoot = (<EmbeddedViewRef<any>>peachRef.hostView).rootNodes[0];
    _attn(peachRoot, 'peach root');


    const newHost = document.createElement('somenewelement');
    // document.body.append(newHost);

    const componentRef = createComponent(RosePartialComponent, {
      // hostElement: newHost,
      environmentInjector: this.appRef.injector,
      projectableNodes: [[peachRoot]]
    });

    this.appRef.attachView(componentRef.hostView);

    document.body.append((<EmbeddedViewRef<any>>componentRef.hostView).rootNodes[0]);

  }




  updateState() {
    // update this local service
    this.someService.UpdateState({ item: 'app componetn clicked' });

    _attn(this.someService.currentItem);
  }

  check() {
    _attn(this.someService.currentItem, 'checking from root');
  }


}

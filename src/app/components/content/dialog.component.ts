import { Component, OnInit, ChangeDetectionStrategy, ApplicationRef, Injector, createComponent, ViewRef, EmbeddedViewRef, ComponentRef } from '@angular/core';
/* STANDALONE */
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RosePartialComponent } from './rose.partial';
import { SeoService } from '../../services/seo.service';
import { Toast } from '../../lib/toastmulti/toast';
/* ENDSTANDALONE */

@Component({

  templateUrl: './dialog.html',
  changeDetection: ChangeDetectionStrategy.OnPush
  /* STANDALONE */
  , standalone: true
  , imports: [CommonModule, RouterModule]
  /* ENDSTANDALONE */
})
export class ContentDialogComponent {

  constructor(private appRef: ApplicationRef,
    private toast: Toast,
    private seoService: SeoService) {

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


}

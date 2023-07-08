import { Component, OnInit, ChangeDetectionStrategy, createComponent, ApplicationRef, ViewChild, ElementRef, EmbeddedViewRef, Injector } from '@angular/core';
/* STANDALONE */
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentMintPartialComponent } from './mint.partial';
import { MintService } from './mint.service';
/* ENDSTANDALONE */

@Component({

  templateUrl: './mint.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MintService]
  /* STANDALONE */
  , standalone: true
  , imports: [CommonModule, RouterModule]
  /* ENDSTANDALONE */
})
export class ContentMintComponent implements OnInit {

  @ViewChild('content', { static: true, read: ElementRef })
  content!: ElementRef;

  opened: any[] = [];

  constructor(private appRef: ApplicationRef, private mintService: MintService) {

    //
  }
  ngOnInit(): void {
    //
  }

  inspect() {
    _attn(this.appRef);
  }

  insertMint(): void {


    // create injector first
    const _injector = Injector.create({ providers: [{ provide: MintService, useValue: this.mintService }] });

    // pass it to component
    const componentRef = createComponent(ContentMintPartialComponent, {
      environmentInjector: this.appRef.injector,
      elementInjector: _injector
    });



    this.appRef.attachView(componentRef.hostView);

    const s = componentRef.instance.onClose.subscribe(() => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
      s.unsubscribe();
    });

    const contentElement = this.content.nativeElement;
    const child = (<EmbeddedViewRef<any>>componentRef.hostView).rootNodes[0];

    contentElement.after(child);


  }
  setMessage() {
    this.mintService.setMessage('Mint parent');
    _attn(this.mintService.message, 'message set');
  }
  getMessage() {
    _attn(this.mintService.getMessage(), 'From parent');
  }
}

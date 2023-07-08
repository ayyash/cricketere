import { Component, ChangeDetectionStrategy, Input, OnInit, EventEmitter, Output, AfterContentInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({

  template: `
    {{ something }} zzzz
    <div class="box">
      <div id="mychild"></div>
      <ng-template #content></ng-template>
    </div>
    <div class="box box-white">

      <ng-content></ng-content>
    </div>
   <button class="btn-rev" (click)="ok()">Yes</button>
   <button class="btn-fake" (click)="no()">Cancel</button>
   <button class="btn-fake" (click)="onAny()">Remove</button>
   `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RosePartialComponent implements OnInit, AfterContentInit, AfterViewInit {

  @Input() something: string = 'default something';

  @Output() onSomething: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('content', { static: true, read: ElementRef}) content: any;


  constructor(
    private seoService: SeoService
  ) {
    //
    this.something = 'something else';

    _attn(this.content, 'content');
  }
  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    _attn(this.content, 'after content');

  }
  ngAfterViewInit(): void {
    _attn(this.content, 'after view');
  }

  ok(): void {
    _attn('ok');

  }
  no(): void {
    _attn('no');
  }
  onAny(): void {
    this.onSomething.emit('any');
  }
}


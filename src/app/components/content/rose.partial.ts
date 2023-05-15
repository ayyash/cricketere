import { Component, ChangeDetectionStrategy, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({

  template: `
    {{ something }} zzzz
   <button class="btn-rev" (click)="ok()">Yes</button>
   <button class="btn-fake" (click)="no()">Cancel</button>
   <button class="btn-fake" (click)="onAny()">Remove</button>
   `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RosePartialComponent implements OnInit {

  @Input() something: string = 'default something';

  @Output() onSomething: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private seoService: SeoService
  ) {
    //
    this.something = 'something else';


  }
  ngOnInit(): void {
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


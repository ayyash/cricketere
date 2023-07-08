import { Component, ChangeDetectionStrategy, Input, OnInit, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { RosePartialComponent } from '../../lib/newdialog/rose.partial';
import { SomeService } from './test.service';

@Component({

  template: `
  fffffffffffff
    <p a>
    Hello {{ peachSomething }} <br>
    <button class="btn-rev" (click)="ok()">Yes Iniside peech</button>
    <button class="btn-rev" (click)="clickPeach()">Click peach</button>
    <button class="btn-rev" (click)="update()">Update state</button>
    </p>
    <div b>here is b</div>
   `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeachPartialComponent implements OnInit, AfterViewInit {

  @Input() peachSomething: string = 'default peach';
  @Output() onPeach: EventEmitter<string> = new EventEmitter<string>();
  @Output() onChildClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() onEmit: EventEmitter<any> = new EventEmitter<any>();

  // must have to be a proper dialog
  data: any;

  rose: RosePartialComponent;
  constructor(private someService: SomeService) {

    // _attn(this.data, 'constructor');
  }

  ngOnInit(): void {
    // _attn(this.data, 'ngOnInit');
  }

  ngAfterViewInit(): void {

    // _attn(this.data, 'ngAfterViewInit');
    _attn(this.someService.currentItem, 'after init');
  }


  ok(): void {

    _attn(this.rose, 'whats in rose');
    this.rose.close();
  }

  clickPeach(): void {
    // this.onPeach.emit('any');
    // this.onChildClose.emit('something');
    this.onEmit.emit('emitted from peach');

    _attn(this.someService.currentItem, 'after a while in peach');

  }

  update(): void {
    this.someService.UpdateState({item: 'update state from peach'});
  }

}


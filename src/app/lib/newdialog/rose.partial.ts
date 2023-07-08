import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({

  template: `
    <div class="rose-overlay" >
      <div class="dialog modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
                <h6 class="f6 modal-title">{{ title }}</h6>
                <button type="button" class="modal-close" (click)="close()"></button>
            </div>
            <div class="box box-white">
              select A
              <ng-content select="[b]"></ng-content>
            </div>
            <div class="modal-body" >
              xxx <br>
              <ng-container #content></ng-container>
               <br>
              yyy
              <!-- <ng-template #content></ng-template> -->
            </div>
            <div class="box box-blue">
              select B
              <ng-content select="[a]"></ng-content>
            </div>

          </div>
        </div>
      </div>
    </div>
   `,
  styleUrls: ['./rose.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  standalone: true
})
export class RosePartialComponent {
  @ViewChild('content', { static: true, read: ElementRef }) content!: ElementRef;


  @Input() title: string = 'Default tile';

  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();


  close(): void {
    this.onClose.emit();
  }
}


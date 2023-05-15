import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Toast } from './toast';
import { IToast } from './toast.model';

@Component({
  template: `
      <div class="toast inview" >
        <div class="text" [innerHtml]="options.text"></div>
        <div class="buttons">
            <button class="btn-close"
            (click)="closeToast()" >Close</button>
        </div>

      </div>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./toast.less'],
  encapsulation: ViewEncapsulation.None
})
export class ToastPartialComponent {

  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  @Input() options: IToast;

  constructor(public toastState: Toast) {
  }
  closeToast(): void {
    this.onClose.emit();
  }
}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Toast } from './toast.state';

@Component({
    selector: 'gr-toast',
    template: `
    <ng-container *ngIf="toastState.stateItem$ | async as toast">
      <div [class.inview]="toast.visible"
      class="{{ toast.css}} {{toast.extracss}}" >
        <div class="text">{{toast.text }}</div>
        <div class="buttons" *ngIf="toast.buttons.length">
            <button *ngFor="let button of toast.buttons"
            [class]="button.css"
            (click)="button.click($event)" >{{button.text}}</button>
        </div>

      </div>
    </ng-container>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./toast.less'],
})
export class ToastPartialComponent {
    constructor(public toastState: Toast) {
    }
}

import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Toast } from './toast.service';
import { IToast, IToastButton } from './toast.model';

@Component({
    selector: 'sh-toast',
    template: `
        <ng-container *ngIf="(toast$ | async) as toast">
            <div class="{{toast.css}} {{ toast.extracss }}" [class.out]="toast.isHiding">
                <div>
                {{ toast.text }}
                </div>
                <span *ngFor="let button of toast.buttons" (click)="click(button, $event)" [class]="button.css">{{button.text}}</span>
                <span
                    class="symbol icon-close closelabel"
                    title="{{ toast.closetext }}"
                    (click)="hide(toast)"
                ></span></div></ng-container>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./toast.less']
})
export class ToastPartialComponent implements OnInit, OnDestroy {
    toast$: Observable<IToast | null >;

    constructor(private toastService: Toast) {
        //
    }
    ngOnInit(): void {

        this.toast$ = this.toastService.toast$.debug('TOAST', 'Subject');
    }
    hide(toast: IToast): void {
        this.toastService.Hide();
        // how to eit something here
        if (toast.onHide) {
            toast.onHide.call(toast);
        }
    }
    ngOnDestroy(): void {

        this.toastService.Hide();
    }
    click(button: IToastButton, event: MouseEvent) {
        button.click.call(button, event);
    }
}

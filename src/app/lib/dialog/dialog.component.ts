import {
    Component,
    Type,
    ComponentFactoryResolver,
    ViewChild,
    OnDestroy,
    ComponentRef,
    AfterViewInit,
    ChangeDetectorRef,
    ViewEncapsulation
} from '@angular/core';
import { DialogContentDirective } from './insertion.directive';
import { Subject } from 'rxjs';
import { DialogRef } from './dialog-ref';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements AfterViewInit, OnDestroy {
    componentRef: ComponentRef<any>;

    @ViewChild(DialogContentDirective)
    contentPoint: DialogContentDirective;

    dialogTitle: string;

    dialogMode: string;

    private readonly _onClose = new Subject<any>();
    public onClose = this._onClose.asObservable();

    childComponentType: Type<any>;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private cd: ChangeDetectorRef,
        private dialogRef: DialogRef
    ) {}

    ngAfterViewInit() {
        this.loadChildComponent(this.childComponentType);
        this.cd.detectChanges();
    }

    onOverlayClicked(evt: MouseEvent) {
        // AYYASH: this should only next onclose, not close
        this._onClose.next(null);
        // this.dialogRef.close();
    }

    onDialogClicked(evt: MouseEvent) {
        evt.stopPropagation();
    }

    loadChildComponent(componentType: Type<any>) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

        const viewContainerRef = this.contentPoint.viewContainerRef;
        viewContainerRef.clear();

        this.componentRef = viewContainerRef.createComponent(componentFactory);
        this.dialogTitle = this.dialogRef.dialogTitle;
        this.dialogMode = this.dialogRef.dialogMode;
        // next open
        this.dialogRef.open(this.componentRef.instance);  // pass child component
    }

    ngOnDestroy() {

        if (this.componentRef) {
            this.componentRef.destroy();
        }
    }

    close() {
        this._onClose.next(null);
    }
}

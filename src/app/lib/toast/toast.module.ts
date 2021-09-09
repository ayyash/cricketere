import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastPartialComponent } from './toast.partial';

@NgModule({
    declarations: [ToastPartialComponent],
    imports: [
        CommonModule
    ],
    exports: [ToastPartialComponent]
})
export class ToastModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MdInputModule } from '../lib/mdinput/mdinput.module';
import { LibModule } from '../lib/lib.module';
import { ToastModule } from '../lib/toast';
import { DialogModule } from '../lib/dialog';
import { DataPartialComponent } from '../components/common/data.partial';
import { LoaderComponent } from '../components/common/loader.partial';
import { ModalPartialComponent } from '../components/common/modal.partial';
import { PagerPartialComponent } from '../components/common/pager.partial';
import { StarsPartialComponent } from '../components/common/stars.partial';

@NgModule({
    imports: [CommonModule, MdInputModule, LibModule, ToastModule, DialogModule],
    declarations: [
        LoaderComponent,
        ModalPartialComponent,
        PagerPartialComponent,
        DataPartialComponent,
        StarsPartialComponent
    ],
    exports: [
        LoaderComponent,
        ModalPartialComponent,
        DataPartialComponent,
        PagerPartialComponent,
        StarsPartialComponent,
        CommonModule,
        FormsModule,
        MdInputModule,
        LibModule,
        DialogModule,
        ToastModule,
        ReactiveFormsModule]
})
export class SharedModule { }

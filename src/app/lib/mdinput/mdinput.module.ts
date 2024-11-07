import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MdInputComponent } from './mdinput.component';
import { MdInputDirective } from './mdinput.directive';

@NgModule({
    declarations: [MdInputDirective, MdInputComponent],
    imports: [
        CommonModule

    ],
    exports: [MdInputComponent, MdInputDirective, ReactiveFormsModule]
})
export class MdInputModule { }

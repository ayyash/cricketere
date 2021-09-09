import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdInputDirective } from './mdinput.directive';
import { MdInputComponent } from './mdinput.component';

@NgModule({
    declarations: [MdInputDirective, MdInputComponent],
    imports: [
        CommonModule
    ],
    exports: [MdInputComponent, MdInputDirective]
})
export class MdInputModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { DialogContentDirective } from './insertion.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [DialogComponent, DialogContentDirective]
})
export class DialogModule {}

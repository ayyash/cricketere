import { Component, ChangeDetectionStrategy } from '@angular/core';
/* STANDALONE */
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PeachPartialComponent } from './peech.partial';
import { RoseService } from '../../lib/newdialog/rose.service';
/* ENDSTANDALONE */

@Component({

  templateUrl: './properdialog.html',
  changeDetection: ChangeDetectionStrategy.OnPush
  /* STANDALONE */
  , standalone: true
  , imports: [CommonModule, RouterModule]
  /* ENDSTANDALONE */
})
export class ContentDialogComponent {

  constructor(
    private roseService: RoseService) {

  }


  openRose(): void {
   const peachRef =  this.roseService.open(PeachPartialComponent,
      {
        title: 'Peach says hello',
        data: 'some string'
      });

      // peachRef.onEmit.subscribe((data: string) => {
      //   _attn(data, 'onpeach');
      // });
  }

}

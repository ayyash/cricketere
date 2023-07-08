import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
/* STANDALONE */
import { CommonModule } from '@angular/common';
import { MintService } from './mint.service';
/* ENDSTANDALONE */

@Component({

  template: `
    <div class="box">
      <button class="btn" (click)="setMessage()">Set Message</button>
      <button class="btn" (click)="getMessage()">Get Message</button>
      <button class="btn" (click)="close()">Destroy</button>
    </div>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush
  /* STANDALONE */
  , standalone: true
  , imports: [CommonModule]
  /* ENDSTANDALONE */
})
export class ContentMintPartialComponent implements OnInit {
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();

  constructor(private mintService: MintService) {
    //
  }
  ngOnInit(): void {
    _attn(this.mintService.message, 'Partial message');
  }

  setMessage() {
    this.mintService.setMessage('Mint child');
    _attn(this.mintService.message, 'message set');
  }

  getMessage() {
    _attn(this.mintService.getMessage(), 'From child');
  }

  close() {
    this.onClose.emit();
  }
}

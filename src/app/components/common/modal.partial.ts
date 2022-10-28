import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cr-modal',
  templateUrl: './modal.partial.html',
  standalone: true,
  imports: [CommonModule]
})
export class ModalPartialComponent {
    @Input() withFooter = false;

}

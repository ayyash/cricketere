import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
    selector: 'cr-product-expiry',
    templateUrl: './expiry.partial.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, ReactiveFormsModule]
})
export class ProductExpiryPartial implements AfterViewInit {
  @ViewChild('month', {read: ElementRef}) month!: ElementRef;
  @ViewChild('year', {read: ElementRef}) year!: ElementRef;
  @Output() onValue: EventEmitter<{month: string, year: string}> = new EventEmitter();

  constructor() {
    //
  }

  ngAfterViewInit() {

    const month = this.month.nativeElement as HTMLInputElement;
    const year = this.year.nativeElement as HTMLInputElement;
    // input event only fires if there is space in the input for entry.
    // If an input of x length has x characters, keyboard press will not fire this input event.
    month.addEventListener('input', (event) => {

      const value = month.value.toString();
      // adds 0 to month user input like 9 -> 09
      if (value.length === 1 && +value > 1) {
        month.value = '0' + value;
      }
      // bounds
      if (value === '00') {
        month.value = '01';
      } else if (+value > 12) {
        month.value = '12';
      }
      // if we have a filled input we jump to the year input
      if (month.value.length >= 2) {
        year.focus();
      }
      event.stopImmediatePropagation();
    });

    month.addEventListener('keypress', e => this.maskInput(e, month));
    year.addEventListener('keypress', e => this.maskInput(e, year));

    month.addEventListener('change', e => this.emitValue());
    year.addEventListener('change', e => this.emitValue());

  }

  private emitValue() {
    // grab values of both targets and emit
    this.onValue.emit({month: this.month.nativeElement.value, year: this.year.nativeElement.value});
  }
  private maskInput(event: KeyboardEvent, target: HTMLInputElement) {
    // if not a number, prevent
      // also check that maxlenght is working properly
      if (/[^0-9]/.test(event.key) || target.value.length >= 2) {
        event.preventDefault();
      }
  }


}

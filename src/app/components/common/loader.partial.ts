import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { share } from 'rxjs/operators';
import { ILoaderState, LoaderService } from '../../core/services';

@Component({
  selector: 'http-loader',
  template: `<div *ngIf="show" class="httploader" >
    <div class="line"></div>
    <div class="subline inc"></div>
    <div class="subline dec"></div></div>`,
  styleUrls: ['./loader.less'],
  standalone: true,
  imports: [CommonModule]
})
export class LoaderComponent implements OnInit, OnDestroy {
  show = false;
  private subscription: Subscription;

  constructor(
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.subscription = this.loaderService.stateItem$
      .pipe(share())
      .subscribe((state: ILoaderState) => {
        this.show = state.show;
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

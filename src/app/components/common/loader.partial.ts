import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../services/loader.service';

@Component({
    selector: 'http-loader',
    template: `<div *ngIf="show$ | async" class="httploader">
    <div class="line"></div>
    <div class="subline inc"></div>
    <div class="subline dec"></div></div>`,
    styleUrls: ['./loader.less'],
    standalone: true,
    imports: [CommonModule]
})
export class LoaderComponent implements OnInit {

    show$: Observable<boolean>;

    constructor(
        private loaderService: LoaderService
    ) { }

    ngOnInit() {
      this.show$ = this.loaderService.stateItem$.pipe(
         map(state => state ? state.show : false)
      );


    }

}

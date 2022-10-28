import { Component, OnInit } from '@angular/core';
import { GtmComponent } from '../abstract/gtm.abstract';

@Component({
    templateUrl: './main.component.html'
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent extends GtmComponent implements OnInit {


    constructor() {
        super();
     }

    ngOnInit() {
    }



}

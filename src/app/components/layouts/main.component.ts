import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../core/services';
import { GtmDirective } from '../../lib/directives/gtm.directive';
import { TranslatePipe } from '../../lib/pipes/translate.pipe';
import { GtmComponent } from '../abstract/gtm.abstract';

@Component({
    templateUrl: './main.component.html',
    standalone: true,
    imports: [CommonModule, RouterModule, TranslatePipe, GtmDirective]
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent extends GtmComponent implements OnInit {


    constructor() {
        super();
     }

    ngOnInit() {
    }



}

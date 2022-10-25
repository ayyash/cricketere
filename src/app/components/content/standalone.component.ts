import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomCurrencyPipe } from '../../lib/pipes/currency.pipe';
import { StarsPartialComponent } from '../common/stars.partial';

@Component({

    templateUrl: './standalone.html',
    standalone: true,
    imports: [StarsPartialComponent, CustomCurrencyPipe, RouterModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentStandaloneComponent implements OnInit {
    constructor() {
        //
    }
    ngOnInit(): void {
        //
    }
}

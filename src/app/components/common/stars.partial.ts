import {
    Component, OnInit, ChangeDetectionStrategy, Input, ViewEncapsulation
} from '@angular/core';

@Component({
    selector: 'cr-stars',
    template: `<span class="stars-outer"><span class="stars-inner {{starCss}}" [style.width]="raterounded"></span></span>`,
    styleUrls: ['./stars.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class StarsPartialComponent implements OnInit {
    // input number, create stars accordingly

    @Input() rating: number;

    raterounded: string;
    starCss: string;

    constructor() {
        //
    }
    ngOnInit(): void {

        // const starPercentage = (this.rating / 5) * 100;
        this.raterounded = (Math.round(this.rating * 2) * 10 + 1) + '%';
        this.starCss = 'stars-' + Math.floor(this.rating);

    }


}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

enum EnumRate {
    AWEFUL = 1,
    POOR = 2,
    OK = 4,
    FAIR = 8,
    GREAT = 16
}


@Component({

    templateUrl: './details.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentDetailsComponent implements OnInit {

    total: number = 0;

    enumRate = EnumRate;

    arrayOfThings = [
        {
            id: 1,
            key: 'elephant'
        },
        {
            id: 2,
            key: 'lion'
        },
        {
            id: 3,
            key: 'tiger'
        },
        {
            id: 4,
            key: 'bear'
        }
    ];

    rates = [
        EnumRate.AWEFUL,
        EnumRate.POOR,
        EnumRate.OK,
        EnumRate.FAIR,
        EnumRate.GREAT
    ];

    productRating = EnumRate.GREAT;

    date1 = new Date(Date.now() - 1000);
    date2 = new Date(Date.now() - 1000 * 60 * 60 * 24 * 2);
    date3 = new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 3);
    date4 = new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 7);
    date5 = new Date(Date.now() + 1000 * 60 * 60 * 3);


    constructor() {
        //
    }
    ngOnInit(): void {
        //

    }
}

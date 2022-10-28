import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({

    templateUrl: './error.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true})
export class ErrorComponent implements OnInit {
    constructor() {
        //
    }
    ngOnInit(): void {
        // read query string to know what to display in each case
    }
}

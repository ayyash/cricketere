import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    templateUrl: './edit.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule]
})
export class ProjectEditComponent implements OnInit {
    constructor() {
        //
    }
    ngOnInit(): void {
        //
    }
}

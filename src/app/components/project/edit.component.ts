import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({

    templateUrl: './edit.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
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

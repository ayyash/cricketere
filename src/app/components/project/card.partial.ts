import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IViewMode } from '../../core/services';

@Component({
    selector: 'cr-project-card',
    templateUrl: './card.partial.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCardPartialComponent implements OnInit {
    @Input() mode: IViewMode = {compact: false};
    constructor() {
        //
    }
    ngOnInit(): void {
        //
    }
}

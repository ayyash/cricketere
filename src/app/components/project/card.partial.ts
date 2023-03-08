import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IViewMode } from '../../core/services';
import { StarsPartialComponent } from '../common/stars.partial';

@Component({
    selector: 'cr-project-card',
    templateUrl: './card.partial.html',
    standalone: true,
    imports: [CommonModule, RouterModule, StarsPartialComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCardPartialComponent implements OnInit {
    @Input() mode: IViewMode = {compact: false};
    constructor() {
        //
    }
    ngOnInit(): void {
    }
}

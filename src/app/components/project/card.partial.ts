import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IViewMode } from '../../models/viewmode.model';
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
        //
    }
}

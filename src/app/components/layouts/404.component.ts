import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoaderService } from '../../core/services';
import { TranslatePipe } from '../../lib/pipes/translate.pipe';

@Component({
    templateUrl: './404.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [TranslatePipe]
})
export class NotFoundComponent implements OnInit {

    constructor(private loaderService: LoaderService) { }

    ngOnInit() {
        _debug(this.loaderService.currentItem?.url, '404ed url');

    }
}

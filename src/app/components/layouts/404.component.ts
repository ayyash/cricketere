import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoaderService } from '../../core/services';

@Component({
    templateUrl: './404.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent implements OnInit {

    constructor(private loaderService: LoaderService) { }

    ngOnInit() {
        _debug(this.loaderService.urlSubject.getValue(), '404ed url');
    }
}

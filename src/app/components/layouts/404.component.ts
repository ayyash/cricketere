import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslatePipe } from '../../lib/pipes/translate.pipe';
import { LoaderService } from '../../services/loader.service';

@Component({
    templateUrl: './404.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TranslatePipe]
})
export class NotFoundComponent implements OnInit {

    constructor(private loaderService: LoaderService) { }

    ngOnInit() {
        _debug(this.loaderService.currentItem?.url, '404ed url');

    }
}

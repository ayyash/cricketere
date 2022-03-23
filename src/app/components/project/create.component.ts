import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({

    templateUrl: './create.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCreateComponent implements OnInit {
    x$: Observable<any>;

    constructor(private route: ActivatedRoute) {
        //
    }
    ngOnInit(): void {
        //
        this.x$ = this.route.data.pipe(
            tap(n => _attn(n, 'route data'))
        );

    }
}

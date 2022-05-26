import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';
import { catchAppError } from '../../core/rxjs.operators';
import { Toast } from '../../lib/toaster/toast.state';
import { IUiError } from '../../models/error.model';
import { IProject } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({

    templateUrl: './create.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCreateComponent implements OnInit {
    x$: Observable<any>;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private toast: Toast,
        private projectService: ProjectService) {
        //
    }
    ngOnInit(): void {
        //
        this.x$ = this.route.data.pipe(
            tap(n => _attn(n, 'route data'))
        );


    }

    create(project: Partial<IProject>) {
        this.projectService.CreateProject(project).pipe(
            catchError(e => this.toast.HandleUiError(e, {
                buttons: [{
                    text: 'LOGIN', click: (event) => {
                        // reroute
                        this.router.navigate(['/login']);
                        this.toast.Hide();
                    }
                }]
            }))
        )
            .subscribe({
                next: (data) => {
                    _attn(data?.id, 'succeded');
                },
                error: (error: IUiError) => {
                    _attn(error, 'error');
                    this.toast.Show(error.code);
                }
            });

    }
}

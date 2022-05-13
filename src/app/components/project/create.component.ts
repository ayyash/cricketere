import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { IProject } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';


@Component({

    templateUrl: './create.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCreateComponent implements OnInit {
    x$: Observable<any>;

    constructor(private route: ActivatedRoute, private projectService: ProjectService) {
        //
    }
    ngOnInit(): void {
        //
        this.x$ = this.route.data.pipe(
            tap(n => _attn(n, 'route data'))
        );


    }

    create(project: Partial<IProject>) {
        this.projectService.CreateProject(project).subscribe({
            next: (data) => {
                _attn(data?.id, 'succeded');
            },
            error: (error) => {
                _attn(error, 'failed');
            }
        });

    }
}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { IProject, SeoService } from '../../core/services';

const projects: IProject[] = [
    {
        id: '1',
        title: 'Turtle Rock',
        description: 'A place to build a turtle',
        image: 'https://picsum.photos/50/50',
        category: 'Turtles'
    },
    {
        id: '2',
        title: 'Turtle Rock 2',
        description: 'A place to build a turtle',
        image: 'https://picsum.photos/50/50',
        category: 'Turtles'
    },
    {
        id: '3',
        title: 'Turtle Rock 3',
        description: 'A place to build a turtle 4',
        image: 'https://picsum.photos/50/50',
        category: 'Turtles'
    }
]
@Component({

    templateUrl: './list.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent implements OnInit {

    projects$: Observable<any>;
    constructor(private seoService: SeoService) {
        //
    }
    ngOnInit(): void {

        // get list then update
        this.projects$ = of(projects).pipe(
            map(projects => {
                this.seoService.setSearchResults(342, 'Turtles');
                return projects;
            })
        );
    }
}

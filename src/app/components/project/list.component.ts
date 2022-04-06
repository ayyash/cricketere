import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { IListOptions, IProject, ProjectSeoService } from '../../core/services';

const projects: IProject[] = [
  {
    id: '1',
    title: 'Turtle Rock',
    description: 'A place to build a turtle',
    image: 'https://picsum.photos/50/50',
    category: { key: 'turtles', value: 'Turtles' },
  },
  {
    id: '2',
    title: 'Turtle Rock 2',
    description: 'A place to build a turtle',
    image: 'https://picsum.photos/50/50',
    category: { key: 'turtles', value: 'Turtles' },
  },
  {
    id: '3',
    title: 'Turtle Rock 3',
    description: 'A place to build a turtle 4',
    image: 'https://picsum.photos/50/50',
    category: { key: 'turtles', value: 'Turtles' },
  },
];

@Component({

    templateUrl: './list.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent implements OnInit {

    projects$: Observable<any>;
    seoLink: string;

    constructor(private seoService: ProjectSeoService) {
        //
    }
    ngOnInit(): void {

        // get list then update

        this.projects$ = of(projects).pipe(
            map((projects) => {
              const results: IListOptions = {
                total: 234,
                page: 1,
                category: { key: 'turtles', value: 'Turtles' },
              };
              this.seoLink = this.seoService.getNextLink(results);
              this.seoService.setSearchResults(results, projects);
              return projects;
            })
          );
    }

    next(clickEvent: MouseEvent) {
        // go to next page then stop
        clickEvent.preventDefault();
    }
}

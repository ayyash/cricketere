import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { EnumGtmEvent, EnumGtmSource, GtmTracking } from '../../core/gtm';
import { IListOptions, IProject, StorageService, ProjectSeoService } from '../../core/services';
import { GtmComponent } from '../abstract/gtm.abstract';

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
export class ProjectListComponent extends GtmComponent implements OnInit {

    projects$: Observable<any>;
    seoLink: string;

    constructor(private seoService: ProjectSeoService, private storageService: StorageService) {
        super();
    }
    ngOnInit(): void {

        // resources.keys.ayyash.f = '';
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


                GtmTracking.RegisterEvent({
                    event: EnumGtmEvent.List,
                    source: EnumGtmSource.ProjectsList
                }, GtmTracking.MapProjects(projects));
                return projects;
            })
        );
    }

    next(clickEvent: MouseEvent) {
        // go to next page then stop
        clickEvent.preventDefault();
    }

    search(value: string) {
        // on search register event
        GtmTracking.RegisterEvent({
            event: EnumGtmEvent.Search,
            source: EnumGtmSource.ProjectsList,
        }, GtmTracking.MapSearch(value));


    }

    setOne() {
        // reigster event and push datalayer
        GtmTracking.RegisterEvent({
            event: EnumGtmEvent.Filter,
            source: EnumGtmSource.ProjectsList,
        }, {
            filter: 'one'
        });

        this.storageService.setItem('filter', 'one');
    }
    setTwo() {
        GtmTracking.Reset();
        GtmTracking.RegisterEvent({
            event: EnumGtmEvent.Filter,
            source: EnumGtmSource.EmployeesList,
        }, {
            filter: null
        });

        this.storageService.setItem('filter2', 'another');
    }
}

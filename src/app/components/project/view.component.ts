import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of, switchMap, tap } from 'rxjs';
import { DataService, IData, IProject, ProjectSeoService, ProjectService } from '../../core/services';

const mockProject: IProject = {
    title: 'Turtle Rock',
    description: 'A place to build a turtle',
    image: 'https://picsum.photos/200/300',
    id: '56',
    category: {
        value: 'Turtles',
        key: 'turtles'
    }
}
@Component({

    templateUrl: './view.html',
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ProjectViewComponent implements OnInit {

    project$: Observable<any>;
    categories$: Observable<IData[]>;

    constructor(private route: ActivatedRoute,
        private dataService: DataService,
        private projectService: ProjectService,
        private seoService: ProjectSeoService) {
        //
    }
    ngOnInit(): void {

        this.categories$ = this.dataService.GetCategories();


        this.project$ = this.route.paramMap.pipe(
            switchMap(params => this.projectService.GetProject(params.get('id'))),
            map(response => {
               return mockProject;
            }),
            tap(project => {
                _seqlog('title');
                this.seoService.setProject(project);

                // this.seoSerivce.UpdateTags({
                //     title: project.title,
                //     description: project.description,
                //     keywords: 'do I have any',
                //     url: this.route.snapshot.url,
                //     image: project.image
                // });
            })
        )


    }

}

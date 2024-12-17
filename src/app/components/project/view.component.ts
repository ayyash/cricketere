import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, switchMap, tap } from 'rxjs';
import { IData } from '../../models/data.model';
import { IProject } from '../../models/project.model';
import { DataService } from '../../services/data.service';
import { ProjectSeoService } from '../../services/seo.project.service';

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
    imports: [
        CommonModule
    ]
})
export class ProjectViewComponent implements OnInit {

    project$: Observable<any>;
    categories$: Observable<IData[]>;

    constructor(private route: ActivatedRoute,
        private dataService: DataService,
        private seoService: ProjectSeoService) {
        //
    }
    ngOnInit(): void {

        this.categories$ = this.dataService.GetCategories();


        this.project$ = this.route.paramMap.pipe(
            switchMap(params => {
                // get project from service by params
                return of(mockProject);
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

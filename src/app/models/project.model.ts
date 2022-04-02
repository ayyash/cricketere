import { DataList, IList } from '../core/services';

export interface ICategory {
    id?: string;
    key: string;
    value: string;
}
export interface IProject {
    id: string;
    title: string;
    description?: string;
    image?: string;
    category?: ICategory;
}

export class Project  {

    public static NewInstance(project: any): IProject {
        return {
            id: project.id,
            title: project.title,
            description: project.description,
            image: project.image,
            category: project.category
        }
    }
    public static NewInstances(projects: any[]): IProject[] {
        return projects.map(Project.NewInstance);
    }
    public static NewList(dataset: any): IList<IProject> {
        const dl = new DataList<IProject>();
        dl.mapper = Project.NewInstance;
        return dl.NewDataList(dataset);

    }

    // prepare to POST
    public static PrepCreate(project: IProject): any {
        return {
            id: project.id
        };

    }
    // prepare to PUT
    public static PrepSave(project: IProject): any {

        return {
           id: project.id

        };

    }

}

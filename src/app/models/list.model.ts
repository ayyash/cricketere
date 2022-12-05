import { Config } from '../config';
import { ICategory } from './project.model';

export interface IListItem {
    id: string;
}

export interface IList<T extends IListItem> {
    matches: T[];
    total: number;
}

export interface IListOptions {
    page?: number;
    keyword?: string;
    country?: string;
    size?: number;
    total?: number;
    hasMore?: boolean;
    category?: ICategory;
    isPublic?: boolean;
    source?: string;
}


export class ListOptions {
    public static MapSearchListOptions(options: IListOptions): any {
        // map each to its name in db, watch out for arrays

        return {

            q: options.keyword,
            c: options.country,
            p: options.page || 1,
            s: options.size || Config.Basic.defaultSize,
            cat: options.category?.id,
            public: options.isPublic === false ? -1 : (options.isPublic === true ? 1 : 0)
        };

    }

    public static MapSeoOptions(options: IListOptions): any {
        return {
            page: options.page || 1,
            category: options.category?.key
        };
    }


}

export class DataList<T extends IListItem>  {
    public mapper?: (dataitem: any) => T;



    public NewDataList(dataset: any): IList<T> {
        return {
            total: dataset.total,
            matches: dataset.items.map(this.mapper)
        };
    }
}

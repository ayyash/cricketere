import { Config } from '../config';


export interface IList<T> {
    total: number;
    matches: T[];

}


export interface IListOptions {
    page?: number;
    keyword?: string;
    country?: string;
    size?: number;

}


export class ListOptions {
    public static MapSearchListOptions(options: IListOptions): any {
        // map each to its name in db, watch out for arrays

        return {

            k: options.keyword,
            c: options.country,
            p: options.page || 1,
            s: options.size || Config.Basic.defaultSize
        };

    }


}

export class DataList<T>  {
    public mapper?: (dataitem: any) => T;



    public NewDataList(dataset: any): IList<T> {
        return {
            total: dataset.total,
            matches: dataset.items.map(this.mapper)
        };
    }
}

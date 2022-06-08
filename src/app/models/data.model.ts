// a model for autcomolete data
// TODO: rewrite to have a bit more flexible data types

export interface IData {
    value: string | null;
    id: string | null;
    key?: string;


}

export enum EnumDataType {
   NotDefined,
   Category
}


export class DataClass implements IData {
    constructor(
        public id: string | null,
        public value: string | null,
        public key?: string

    ) {

    }

    public static NewInstance(data: any): IData {
        // according to name define properties
        // if data is null return null values
        if (data === null) {
            return null;
        }
        return {
            id: data.id,
            value: data.value,
            key: data.key
        }
    }
    public static NewInstances(data: any[]): IData[] {

        return data.map(n => DataClass.NewInstance(n));
    }

}

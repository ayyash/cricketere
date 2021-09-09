// a model for autcomolete data
// TODO: rewrite to have a bit more flexible data types

export interface IData {
    name: string | null;
    id: string | null;
    key?: string;

    type: EnumDataType; // internal

}

export enum EnumDataType {
   NotDefined
}


export class DataClass implements IData {
    constructor(
        public type: EnumDataType,
        public id: string | null,
        public name: string | null,
        public key?: string

    ) {

    }
    // defaults
    public static NewData(type: EnumDataType): IData {
        // create switch for defaults if necessary
        return new DataClass(type, '', '', '');
    }
    public static NewInstance(type: EnumDataType, data: any): IData {
        // according to name define properties
        // if data is null return null values
        if (data === null) {
            return new DataClass(type, null, null);
        }
        return new DataClass(
            type,
            data.id,
            data.name,
            data.key);

    }
    public static NewInstances(type: EnumDataType, data: any[]): IData[] {

        return data.map(n => DataClass.NewInstance(type, n));
    }

}


// left side db, right side client
export enum EnumStatus {

    Deleted = 'Deleted',
    Archived = 'Archived',
    Published = 'Published',
    Disabled = 'Disabled',
    Active = 'Active',
    Default = 'None',

}

export class Status {

    // string is coming from db, i need to translate to my enum
    public static MapStatus(status: string): EnumStatus {
        // match keys to enum

        for (const s in EnumStatus) {

            if (s === status) {
                return EnumStatus[status];
            }
        }

        return EnumStatus.Default;
    }

    public static NewInstance(status: any): EnumStatus {
        // map from server and return
        return Status.MapStatus(status.status);
    }




}

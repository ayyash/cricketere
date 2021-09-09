
export enum EnumLoaderSource {
    HTTP,
    PAGER
}


export interface ILoaderState {
    show: boolean;
    source?: EnumLoaderSource;
}


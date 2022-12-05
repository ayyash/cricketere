
export enum EnumLoaderSource {
    HTTP,
    PAGER
}


export interface ILoaderState {
    show: boolean;
    source?: EnumLoaderSource | null;
    url?: string | null;
    context?: string;
}


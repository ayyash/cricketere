
export enum EnumTimeout{
    Short = 4000,
    Long = 20000,
    Never = -1
}
export interface IToast {
    text?: string;
    css?: string;
    extracss?: string;
    buttons?: IToastButton[];
    addDismiss?: boolean;
    timeout?: EnumTimeout;
    visible?: boolean;
}

export interface IToastButton {
    text: string;
    css?: string;
    click?: (event: MouseEvent) => void;
}


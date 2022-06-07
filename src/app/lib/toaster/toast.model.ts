import { Config } from '../../config';

export enum EnumTimeout{
    Short = Config.Basic.defaultToastTimeout,
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
    clickable?: (event: MouseEvent) => void
}

export interface IToastButton {
    text: string;
    css?: string;
    click?: (event: MouseEvent) => void;
}


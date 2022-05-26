

export interface IToast {
    text?: string;
    css?: string;
    extracss?: string;
    buttons?: IToastButton[];
    addDismiss?: boolean;
}

export interface IToastButton {
    text: string;
    css?: string;
    click?: (event: MouseEvent) => void;
}




export interface IToast {
    text?: string;
    sticky?: boolean;
    css?: string;
    closetext?: string;
    delay?: number;
    extracss?: string;
    threshold?: number;
    isHiding?: boolean;
    buttons?: IToastButton[];
    onHide?(): void;
}

export interface IToastButton {
    text: string;
    css?: string;
    click(event: any): void;
}

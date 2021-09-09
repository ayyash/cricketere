import { Observable } from 'rxjs';

export class DialogConfig<D = any> {
    data?: D;
    title?: string;
    mode?: string; // window mode decides the class to add
}

import { Observable, Subject } from 'rxjs';

export class DialogRef {
    private readonly _afterClosed = new Subject<any>();
    afterClosed: Observable<any> = this._afterClosed.asObservable();

    private readonly _afterOpened = new Subject<any>();
    afterOpened: Observable<any> = this._afterOpened.asObservable();

    private readonly _onEmit = new Subject<any>();
    onEmit: Observable<any> = this._onEmit.asObservable();

    dialogTitle: string;

    dialogMode: string;

    constructor() {
        // _debug(this.dialogTitle, '-1. dialogRef title');
    }

    close(result?: any) {
        this._afterClosed.next(result);
    }

    open(childComponent: any) {
        this._afterOpened.next(childComponent);
    }

    emit(data?: any) {
        // emit any data to opener
        this._onEmit.next(data);
    }


}

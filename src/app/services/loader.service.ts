import { Injectable } from '@angular/core';
import { ILoaderState, EnumLoaderSource } from '../core/services';
import { StateService } from './state.abstract';


@Injectable({
    providedIn: 'root'
})
export class LoaderService extends StateService<ILoaderState> {

    constructor() {
        super('NONE');
        _seqlog('loader srvice construct');
        this.SetState({
            show: false, source: null, url: null
        });
    }
    show(source: EnumLoaderSource = EnumLoaderSource.HTTP) {
        this.UpdateState({show: true, source});

    }
    hide(source: EnumLoaderSource = EnumLoaderSource.HTTP) {
        this.UpdateState({show: false, source});
    }
    emitUrl(url: string) {
        this.UpdateState({url});
    }

}

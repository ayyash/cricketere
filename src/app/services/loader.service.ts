import { Injectable } from '@angular/core';
import { share } from 'rxjs';
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
        // this does make the state fired shared amongst all listeners
        this.stateItem$ = this.stateItem$.pipe(share());
    }
    show(context: string, source: EnumLoaderSource = EnumLoaderSource.HTTP) {
        this.UpdateState({show: true, source, context});
    }
    hide(context: string, source: EnumLoaderSource = EnumLoaderSource.HTTP) {
        this.UpdateState({show: false, source, context});
    }
    emitUrl(url: string) {
        this.UpdateState({url});
    }

}

import { Injectable } from '@angular/core';
import { Subject ,  BehaviorSubject } from 'rxjs';
import { ILoaderState, EnumLoaderSource } from '../core/services';


@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    private loaderSubject = new Subject<ILoaderState>();

    urlSubject = new BehaviorSubject<string>('');

    loaderState = this.loaderSubject.asObservable();

    show(source: EnumLoaderSource = EnumLoaderSource.HTTP) {
        this.loaderSubject.next(<ILoaderState>{ show: true, source: source });
    }
    hide(source: EnumLoaderSource = EnumLoaderSource.HTTP) {
        this.loaderSubject.next(<ILoaderState>{ show: false, source: source });
    }
    emitUrl(url: string) {
        this.urlSubject.next(url);
    }

}

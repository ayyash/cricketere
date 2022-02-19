import { Inject, Injectable, Injector, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IConfig } from '../core/services';

// FIXME: VER_NEXT: this needs to change to drop the http call and make the config available on load
@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    private static _config: IConfig;

    private _getUrl: string = Config.API.config.local;

    // WATCH: keep an eye, it should accept null
    private config = new BehaviorSubject<IConfig>(Config as IConfig);
    config$: Observable<IConfig> = this.config.asObservable();

    private _http: HttpClient;

    static configFactory = (config: ConfigService): (() => Observable<boolean>) => {
        return () => config.loadAppConfig();

    }

    private static NewInstance(config: any): IConfig {
        // clone first, because in ssr the object is transfered in state to client, which adds the key again, unless u clone
        const _config = { ...<IConfig>config };
        _config.Cache = { ..._config.Cache };
        // adjust cache key to have language in it
        _config.Cache.Key += '.' + Config.Basic.language;

        // populate static element
        ConfigService._config = _config;


        return _config;
    }

    constructor(
        @Optional() @Inject('localConfig') protected localConfig: IConfig,
        private injector: Injector) {
        this._http = this.injector.get(HttpClient);
        _seqlog('config construct');
    }

    loadAppConfig(): Observable<boolean> {
        // too much typing
        _seqlog('config load');
        // WATCH: on server, retrieve from local file injected from server
        if (this.localConfig) {

            const localconfig = ConfigService.NewInstance(this.localConfig);
            this.config.next(localconfig);

            return of(true);
        }


        return this._http
            .get(this._getUrl)
            .pipe(
                map(response => {
                    const config = ConfigService.NewInstance(<any>response);
                    config.isServed = true;
                    this.config.next(config);
                    _seqlog('config next');
                    return true;
                }),
                catchError(error => {
                    // if in error, return default fall back from environment
                    _debug(error, 'Error in resolve', 'e');
                    this.config.next(Config);
                    return of(false);
                })
            );

    }



    static get Config(): IConfig {
        // add language to cache key
        return ConfigService._config ? ConfigService._config : <IConfig>Config;
    }

    public GetConfig(): IConfig | null {
        return this.config.getValue();
    }

}

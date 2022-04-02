import { ComponentRef, Inject, Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IConfig } from '../core/services';


export const configFactory = (config: ConfigService) => () =>
    config.loadAppConfig();

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    
    constructor(
        private http: HttpClient,
        @Optional() @Inject('localConfig') protected localConfig: IConfig
        ) {
    }

    private _getUrl = Config.API.config.local;

    // keep track of config
    private config = new BehaviorSubject<IConfig>(Config as IConfig);
    config$: Observable<IConfig> = this.config.asObservable();

    private static _config: IConfig;

    static get Config(): IConfig {
        return this._config || Config;
    }

    private NewInstance(config: any, withError: boolean): IConfig {
        // cast all keys as are
        const _config = { ...Config, ...<IConfig>config };
        _config.Cache = { ..._config.Cache };
        // adjust cache key to have language in it
        _config.Cache.Key += '.' + Config.Basic.language;
        _config.isServed = true;
        _config.withErrors = withError; // so now we can distinguish where the config really came from

        // populate static element
        ConfigService._config = _config;

        this.config.next(_config);
        return _config;
    }

    loadAppConfig(): Observable<boolean> {

        if (this.localConfig) {
            this.NewInstance(this.localConfig, true);
            return of(true);
        }

        return this.http.get(this._getUrl).pipe(
            map((response) => {
                this.NewInstance(response, false);
                // also state that it has been isServed

                _seqlog('config next');

                // here next
                return true;
            }),
            catchError((error) => {
                // if in error, return set fall back from environment
                // make it served, if you want to distinguish error, create another flag
                this.NewInstance(Config, true);
                _debug(error, 'Error in resolve', 'e');
                return of(true);
            })
        );
    }
}











// PLATFORMINIT: for platform_init token, use this
declare const WebConfig: any;

export const platformFactory = (): (() => void) => {
    _attn(WebConfig, 'platformFactory');
    StaticConfigService.loadAppConfig();
    return () => null;
};




export class StaticConfigService {

    private static _config: IConfig;

    static get Config(): IConfig {
        return this._config || Config;
    }

    private static NewInstance(config: any): IConfig {
        // clone first, because in ssr the object is transfered in state to client, which adds the key again, unless u clone
        const _config = { ...Config, ...<IConfig>config };

        _config.Cache = { ..._config.Cache };
        // adjust cache key to have language in it
        _config.Cache.Key += '.' + Config.Basic.language;

        // populate static element
        StaticConfigService._config = _config;

        return _config;
    }


    static loadAppConfig(): void {

        _seqlog('loadAppConfig');
        if (WebConfig?.isServed) {
            this.NewInstance(WebConfig);

        } else {
            this.NewInstance(Config);
        }
    }

    // WATCH: keep an eye, it should accept null
    private config = new BehaviorSubject<IConfig>(Config as IConfig);
    config$: Observable<IConfig> = this.config.asObservable();

}

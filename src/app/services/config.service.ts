import { ComponentRef, Inject, Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IConfig } from '../core/services';

declare const WebConfig: any;

// export const configFactory = (config: ConfigService): (() => void) => {
//     return () => config.loadAppConfig();
// };

export const platformFactory = (): (() => void)  => {
    _attn(WebConfig, 'platformFactory');
    ConfigService.loadAppConfig();
    return () => null;
};




export class ConfigService {

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
        ConfigService._config = _config;

        return _config;
    }

    // constructor(
    //     @Optional() @Inject('localConfig') protected localConfig: IConfig
    //     ) {
    // }


    static loadAppConfig(): void {

        _seqlog('loadAppConfig');
        _attn(WebConfig);
        if (WebConfig?.isServed) {
            this.NewInstance(WebConfig);

        } else {
            _attn('error');
            this.NewInstance(Config);
        }
        // WATCH: on server, retrieve from local file injected from server
        // if (this.localConfig) {

        //     const localconfig = this.NewInstance(this.localConfig);
        //     this.config.next(localconfig);

        //     return of(true);
        // }

        // return this.http
        //     .get(this._getUrl)
        //     .pipe(
        //         map(response => {

        //             _seqlog('Config return');
        //             const config = this.NewInstance(<any>response);

        //             this.config.next(config);
        //             return true;
        //         }),
        //         catchError(error => {
        //             // if in error, return default fall back from environment
        //             _debug(error, 'Error in resolve', 'e');
        //             this.config.next(Config);
        //             return of(false);
        //         })
        //     );
    }

     // WATCH: keep an eye, it should accept null
     private config = new BehaviorSubject<IConfig>(Config as IConfig);
     config$: Observable<IConfig> = this.config.asObservable();

}

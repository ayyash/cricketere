import { Injectable } from '@angular/core';
import { ICachedStorage, ConfigService } from '../core/services';
import { first } from 'rxjs/operators';
import { Platform } from '../lib/platform.service';
import { debug } from '../core/rxjs.operators';
import { Res } from '../core/resources';

@Injectable({ providedIn: 'root' })
export class StorageService {

    constructor(private platform: Platform, private configService: ConfigService) {
        this._setResetKey();


    }
    private get ourStorage(): Storage {
        return localStorage;
    }

    private getKey(key: string, withLanguage = false): string {
        return `${ConfigService.Config.Storage.Key}${withLanguage ? '.' + Res.language : ''}.${key}`;
    }


    private _setResetKey(): void {

        // wait for config to be laoded first
        this.configService.config$.pipe(
            debug('config'),
            first(config => config.isServed),
        ).subscribe(config => {
            const _key = this.getKey(config.Storage.ResetKey);
            const _reset: any = this.ourStorage.getItem(_key);
            // if it does not exist, it must have changed in config, remove everything
            if (!_reset || _reset !== 'true') {
                this.clear();
                this.ourStorage.setItem(_key, 'true');
            }

        });
    }


    setItem(key: string, value: any, expiresin: number = ConfigService.Config.Storage.Timeout, withLanguage = false): void {
        // set cache with expiration time stamp, each obect has its own? or one for all?
        const _storage: ICachedStorage = {
            value: value,
            timestamp: Date.now(), // in milliseconds
            expiresin: expiresin, // in hours
        };

        this.ourStorage.setItem(this.getKey(key, withLanguage), JSON.stringify(_storage));
    }

    getItem(key: string, withLanguage = false): any {
        // if browser get storage, else return null

        const _key = this.getKey(key, withLanguage);
        const value: any = this.ourStorage.getItem(_key);


        if (value) {
            const _value: ICachedStorage = JSON.parse(value);

            // calculate expiration
            // if (Date.now() > _value.expiresAt) {

            if (Date.now() - _value.timestamp > _value.expiresin * 3600000) {
                this.removeItem(_key);
                return null;
            }

            return _value.value;
        }
        return null;
    }

    removeItem(key: string, withLanguage = true) {

        this.ourStorage.removeItem(this.getKey(key, withLanguage));
    }
    setCache(key: string, value: any, expiresIn: number = ConfigService.Config.Storage.Timeout): void {
        this.setItem(key, value, expiresIn, true);
    }
    getCache(key: string): any {
        return this.getItem(key, true);
    }
    removeCache(key: string) {
        this.removeItem(key, true);
    }

    clear(): void {
        // remove all prefix
        const toClear = [];

        for (let i = 0; i < this.ourStorage.length; i++) {
            const name = this.ourStorage.key(i);
            if (name.indexOf(ConfigService.Config.Storage.Key) === 0) {
                // delay
                toClear.push(name);
            }
        }
        toClear.forEach(n => this.ourStorage.removeItem(n));

    }

}

import { Injectable } from '@angular/core';
import { ICachedStorage, ConfigService } from '../core/services';
import { skipWhile, take } from 'rxjs/operators';
import { Platform } from '../lib/platform.service';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
    public isBrowser = false;

    constructor(private platform: Platform, private configService: ConfigService) {
        if (this.platform.isBrowser) {
            this.isBrowser = true;
            this._setResetKey();
        }

    }

    private _setResetKey(): void {
        // check DataCacheResetKey, if exists continue, else force reset and save key
        // wait for config
        this.configService.config$.debug('LOCALSTORGAGE', 'CONFIG').pipe(
            skipWhile(config => !config),
            take(1)
        ).subscribe(config => {

            if (config) {

                const _reset: any = this.getItem(config.Cache.ResetKey);
                if (!_reset || _reset !== 'true') {
                    // set key and force reste of data

                    this.clear(); // added, clear localstorage here, bullox this is breaking storage

                    this.setItem(config.Cache.ResetKey, 'true');
                }
            }


        });

    }

    setObject(key: string, value: any, expiresin: number = ConfigService.Config.Cache.Timeout): void {
        // set cache with expiration time stamp, each obect has its own? or one for all?

        if (!this.isBrowser) {
            return;
        }

        const _storage: ICachedStorage = {
            value: value,
            timestamp: Date.now(), // in milliseconds
            expiresin: expiresin, // in hours
            key: ConfigService.Config.Cache.Key + '.' + key
        };


        this.setItem(_storage.key, JSON.stringify(_storage));
    }

    getObject(key: string): any {
        // if browser get storage, else return null

        if (!this.isBrowser) {
            return null;
        }


        const value: any = this.getItem(ConfigService.Config.Cache.Key + '.' + key);

        if (value) {
            const _value: ICachedStorage = JSON.parse(value);

            // calculate expiration

            if (Date.now() - _value.timestamp > _value.expiresin * 3600000) {
                this.removeItem(_value.key);
                return null;
            }

            return _value.value;
        }
        return null;
    }

    removeObject(key: string): void {
        this.removeItem(ConfigService.Config.Cache.Key + '.' + key);
    }

    removeItem(key: string) {
        if (this.isBrowser) {
            localStorage.removeItem(key);
        }
    }

    setItem(key: string, value: string) {
        if (this.isBrowser) {
            localStorage.setItem(key, value);
        }
    }

    getItem(key: string): (string | null) {
        if (this.isBrowser) {
            return localStorage.getItem(key);
        }
        return null;
    }
    clear(): void {
        // TODO: may be  i should be more selective about what to clear?
        if (this.isBrowser) {
            localStorage.clear();
        }
    }
}

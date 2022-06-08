import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigInitService {

    constructor() {
        _seqlog('ConfigInit');
        // _attn(ConfigService.Config.isServed, 'api root static');
    }
}

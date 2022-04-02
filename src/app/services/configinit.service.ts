import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
    providedIn: 'root'
})
export class ConfigInitService {

    constructor() {
        _seqlog('ConfigInit');
        // _attn(ConfigService.Config.isServed, 'api root static');
    }
}

import { Component, OnInit } from '@angular/core';
import { Res } from '../../core/resources';
import { ConfigService, HomeSeoService } from '../../core/services';
import { GtmComponent } from '../abstract/gtm.abstract';
@Component({

    templateUrl: './home.html'
})
export class PublicHomeComponent extends GtmComponent implements OnInit  {

    welcomeText = Res.Get('WELCOME_TEXT');


    constructor(private seoService: HomeSeoService) {
        //
        super();
    }
    ngOnInit(): void {
        // _attn(this.configService.xConfig?.API?.apiRoot, 'on init');
        _attn(ConfigService.Config.isServed, 'served');
        this.seoService.setHome();

    }

}

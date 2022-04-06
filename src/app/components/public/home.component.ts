import { Component, OnInit } from '@angular/core';
import { Res } from '../../core/resources';
import { ConfigService, HomeSeoService } from '../../core/services';
@Component({

    templateUrl: './home.html'
})
export class PublicHomeComponent implements OnInit {

    welcomeText = Res.Get('WELCOME_TEXT');

    constructor(private seoService: HomeSeoService) {
        //
    }
    ngOnInit(): void {
        // _attn(this.configService.xConfig?.API?.apiRoot, 'on init');
        _attn(ConfigService.Config.isServed, 'served');
        this.seoService.setHome();
    }

}

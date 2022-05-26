import { Component, OnInit } from '@angular/core';
import { Res } from '../../core/resources';
import { ConfigService, HomeSeoService } from '../../core/services';
import { Toast } from '../../lib/toaster/toast.state';
import { GtmComponent } from '../abstract/gtm.abstract';
@Component({

    templateUrl: './home.html'
})
export class PublicHomeComponent extends GtmComponent implements OnInit  {

    welcomeText = Res.Get('WELCOME_TEXT');


    constructor(private seoService: HomeSeoService, private toast: Toast) {
        //
        super();
    }
    ngOnInit(): void {
        // _attn(this.configService.xConfig?.API?.apiRoot, 'on init');
        _attn(ConfigService.Config.isServed, 'served');
        this.seoService.setHome();

    }
    showToast1() {
        // show toast to test its working, by exaact code
        this.toast.ShowSuccess('INVALID_VALUE');
      }
      showToast2() {
        // by unknown code, without fallback, this will produce 'Unknown'
        this.toast.ShowError('SomeCode');
      }
      showToast3() {
        // by unknown code, with fallback, fallback will be produced
        this.toast.ShowWarning('SomeCode', {text: 'Some fallback message here'});
      }
      showToast4() {
        // and finally, an all corners mercedes
        this.toast.Show('SomeCode', {text: resources.keys.INVALID_VALUE});
      }

}

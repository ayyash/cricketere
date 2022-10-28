import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Res } from '../../core/resources';
import { ConfigService, HomeSeoService } from '../../core/services';
import { GtmDirective } from '../../lib/directives/gtm.directive';
import { TranslatePipe } from '../../lib/pipes/translate.pipe';
import { EnumTimeout } from '../../lib/toaster/toast.model';
import { Toast } from '../../lib/toaster/toast.state';
import { GtmComponent } from '../abstract/gtm.abstract';
@Component({

    templateUrl: './home.html',
    standalone: true,
    imports: [CommonModule, TranslatePipe, RouterModule, GtmDirective]
})
export class PublicHomeComponent extends GtmComponent implements OnInit  {

    welcomeText = Res.Get('WELCOME_TEXT');

    x$: Observable<any>;

    constructor(private seoService: HomeSeoService, private toast: Toast) {
        //
        super();
    }
    ngOnInit(): void {
        // _attn(this.configService.xConfig?.API?.apiRoot, 'on init');
        _attn(ConfigService.Config.isServed, 'served');
        this.seoService.setHome();

        this.x$ = of(NaN);

    }
    showToast1() {
        // show toast to test its working, by exaact code
        this.toast.ShowSuccess('INVALID_VALUE', {timeout: 1000});
      }
      showToast2() {
        // by unknown code, without fallback, this will produce 'Unknown'
        this.toast.ShowError('SomeCode', {timeout: 5000});
      }
      showToast3() {
        // by unknown code, with fallback, fallback will be produced
        this.toast.ShowWarning('SomeCode', {text: 'Some <strong>fallback</strong> message here',
        clickable: (e) => {_attn(e, 'clicked')}});
      }
      showToast4() {
        // and finally, an all corners mercedes
        this.toast.Show('SomeCode', {text: Res.Get('INVALID_VALUE'), timeout: EnumTimeout.Never});
      }

}

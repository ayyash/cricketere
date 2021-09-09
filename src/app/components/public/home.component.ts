import { Component, OnInit } from '@angular/core';
import { Res } from '../../core/resources';
import { SeoService } from '../../core/services';
@Component({

    templateUrl: './home.html'
})
export class PublicHomeComponent implements OnInit {

    welcomeText = Res.Get('WELCOME_TEXT');

    constructor( private seoService: SeoService) {
        //
    }
    ngOnInit(): void {
        //
        // this.seoService.SetHomeSeo();
        this.seoService.setPageSeo();
    }

}

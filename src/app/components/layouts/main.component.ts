import { Component, OnInit } from '@angular/core';
import { GtmComponent } from '../abstract/gtm.abstract';
import { AuthService } from '../../services/auth.service';
import { AuthState } from '../../services/auth.state';

@Component({
    templateUrl: './main.component.html'
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent extends GtmComponent implements OnInit {


    constructor(private authState: AuthState, private authService: AuthService) {
        super();
     }

    ngOnInit() {
    }

    logout() {
      // elmafrood authstate.logout then server logout
      this.authState.Logout();
      this.authState.redirectUrl = null;

      this.authService.Logout().subscribe();
    }


}

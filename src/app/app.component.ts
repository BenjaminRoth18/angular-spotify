import { Component, OnInit } from '@angular/core';

import { AuthStateService } from './store/auth/services/auth.state.service';

@Component({
    selector: 'sp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private authStateService: AuthStateService) {}

    ngOnInit(): void {
        this.authStateService.getToken();
    }
}

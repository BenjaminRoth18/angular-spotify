import { Component, OnInit } from '@angular/core';

import { LoginStateService } from './store/login/services/login.state.service';

@Component({
    selector: 'sp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private loginStateService: LoginStateService) {}

    ngOnInit(): void {
        this.loginStateService.setToken();
    }
}

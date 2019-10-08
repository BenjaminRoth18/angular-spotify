import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromLoginActions from '../actions/login.actions';
import * as fromLogin from '../selectors';

@Injectable()
export class LoginStateService {
    constructor(private store: Store<fromLogin.LoginAppState>) {}

    setToken() {
        this.store.dispatch(fromLoginActions.getToken());
    }
}

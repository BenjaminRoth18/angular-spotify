import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromAuthActions from '../actions/auth.actions';
import * as fromAuth from '../selectors';

@Injectable()
export class AuthStateService {
    constructor(private store: Store<fromAuth.AuthAppState>) {}

    getToken(): void {
        this.store.dispatch(fromAuthActions.getToken());
    }
}

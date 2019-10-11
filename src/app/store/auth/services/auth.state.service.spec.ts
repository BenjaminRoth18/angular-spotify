import { MockStore } from '../../models/store.mock';
import * as fromAuthActions from '../actions/auth.actions';
import { Store } from '@ngrx/store';

import * as fromAuth from '../selectors';
import { AuthStateService } from './auth.state.service';

describe('AuthStateService', () => {
    let authStateService: AuthStateService;
    let store: Store<fromAuth.AuthAppState>;

    beforeEach(() => {
        store = new MockStore<fromAuth.AuthAppState>();
        authStateService = new AuthStateService(store);
    });

    it('should get token', () => {
        authStateService.getToken();
        expect(store.dispatch).toBeCalledWith(fromAuthActions.getToken());
    });
});

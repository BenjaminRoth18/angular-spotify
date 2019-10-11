import * as fromAuthReducers from '../reducers/auth.reducers';
import * as fromAuthActions from '../actions/auth.actions';

describe('AuthReducers', () => {
    it('should handle getTokenSucces action', () => {
        expect(
            fromAuthReducers.reducer(
                { token: '' },
                fromAuthActions.getTokenSuccess({ payload: { token: 'foo' } })
            )
        ).toEqual({ token: 'foo' });
    });
});

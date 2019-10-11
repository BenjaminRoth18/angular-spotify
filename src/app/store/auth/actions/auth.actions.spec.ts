import * as fromAuthActions from './auth.actions';

describe('AuthActions', () => {
    it('should create getToken action', () => {
        expect(fromAuthActions.getToken()).toEqual({
            type: fromAuthActions.AuthActionTypes.GET_TOKEN
        });
    });

    it('should create getTokenSucces action', () => {
        expect(
            fromAuthActions.getTokenSuccess({ payload: { token: 'token' } })
        ).toEqual({
            type: fromAuthActions.AuthActionTypes.GET_TOKEN_SUCCESS,
            payload: {
                token: 'token'
            }
        });
    });
});

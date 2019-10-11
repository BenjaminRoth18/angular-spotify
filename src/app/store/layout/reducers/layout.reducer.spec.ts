import * as fromLayout from '../selectors';
import * as fromLayoutActions from '../actions/layout.actions';
import * as fromLayoutReducer from './layout.reducer';

describe('layoutReducer', () => {
    it('should handle addLoading action', () => {
        expect(
            fromLayoutReducer.reducer(
                { loading: 0 },
                fromLayoutActions.addLoading()
            )
        ).toEqual({ loading: 1 });
    });

    it('should handle removeLoading action', () => {
        expect(
            fromLayoutReducer.reducer(
                { loading: 1 },
                fromLayoutActions.removeLoading()
            )
        ).toEqual({ loading: 0 });
    });
});

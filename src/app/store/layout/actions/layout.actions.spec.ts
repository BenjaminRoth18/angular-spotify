import * as fromLayoutActions from './layout.actions';

describe('LayoutActions', () => {
    it('should create addLoading action', () => {
        expect(fromLayoutActions.addLoading()).toEqual({
            type: fromLayoutActions.LayoutActionTypes.ADD_LOADING
        });
    });

    it('should create removeLoading action', () => {
        expect(fromLayoutActions.removeLoading()).toEqual({
            type: fromLayoutActions.LayoutActionTypes.REMOVE_LOADING
        });
    });
});

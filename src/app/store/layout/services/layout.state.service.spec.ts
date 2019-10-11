import { LayoutStateService } from './layout.state.service';
import { MockStore } from '../../models/store.mock';
import { of, BehaviorSubject, Observable } from 'rxjs';
import * as fromLayoutReducers from '../reducers/layout.reducer';
import { Store } from '@ngrx/store';

import * as fromLayout from '../selectors';

describe('LayoutStateService', () => {
    let layoutStateService: LayoutStateService;
    let store: Store<fromLayout.LayoutAppState>;

    beforeEach(() => {
        store = new MockStore<fromLayout.LayoutAppState>();
        layoutStateService = new LayoutStateService(store);
    });

    it('should get loading count', () => {
        layoutStateService.getLoadingCount();
        expect(store.pipe).toBeCalledWith(expect.any(Function));
    });
});

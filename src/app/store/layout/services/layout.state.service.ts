import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromLayout from '../selectors';
import { Observable } from 'rxjs';

import * as fromLayoutReducers from '../reducers/layout.reducer';

@Injectable()
export class LayoutStateService {
    constructor(private store: Store<fromLayout.LayoutAppState>) {}

    getLoadingCount(): Observable<number> {
        return this.store.pipe(select(fromLayout.selectLayoutLoading));
    }
}

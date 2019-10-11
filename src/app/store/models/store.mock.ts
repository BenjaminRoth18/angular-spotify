import { Store } from '@ngrx/store';

export class MockStore<T> extends Store<T> {
    constructor() {
        super({} as any, {} as any, {} as any);
    }

    dispatch = jest.fn();
    pipe = jest.fn();
}

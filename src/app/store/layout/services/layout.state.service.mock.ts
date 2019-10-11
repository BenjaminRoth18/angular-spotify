import { LayoutStateService } from './layout.state.service';

export class MockLayoutStateService extends LayoutStateService {
    getLoadingCount = jest.fn();

    constructor() {
        super({} as any);
    }
}

import * as fromSelectors from '.';

describe('LayoutSelectors', () => {
    it('should create selectLayoutLoading selector', () => {
        expect(
            fromSelectors.selectLayoutLoading.projector({ loading: 2 })
        ).toBe(2);
    });
});

import * as fromSelectors from '.';

describe('AuthSelectors', () => {
    it('should create selectAuthToken selector', () => {
        expect(fromSelectors.selectAuthToken.projector({ token: 'foo' })).toBe(
            'foo'
        );
    });
});

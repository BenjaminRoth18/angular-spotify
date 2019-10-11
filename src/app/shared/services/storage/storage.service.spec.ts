import { StorageService } from './storage.service';

describe('StorageService', () => {
    let storageService: StorageService;

    beforeEach(() => {
        storageService = new StorageService();
    });

    it('should save token', () => {
        localStorage.setItem = jest.fn();
        storageService.saveToken('foo');
        expect(localStorage.setItem).toHaveBeenCalledWith('token', 'foo');
    });

    it('should get token', () => {
        localStorage.getItem = jest.fn();
        storageService.getToken();
        expect(localStorage.getItem).toHaveBeenCalledWith('token');
    });

    it('should get token', () => {
        localStorage.removeItem = jest.fn();
        storageService.removeToken();
        expect(localStorage.removeItem).toHaveBeenCalledWith('token');
    });
});

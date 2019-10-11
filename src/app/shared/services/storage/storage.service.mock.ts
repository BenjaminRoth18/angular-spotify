import { StorageService } from './storage.service';

export class MockStorageService extends StorageService {
    saveToken = jest.fn();
    getToken = jest.fn();
    removeToken = jest.fn();

    constructor() {
        super();
    }
}

import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
    saveToken(token: string): void {
        localStorage.setItem('token', token);
    }

    getToken(): string {
        return localStorage.getItem('token');
    }

    removeToken(): void {
        return localStorage.removeItem('token');
    }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  userIsLoggedIn(): boolean {
    return localStorage.getItem('user') !== null;
  }

  logginUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  logoutUser(): void {
    localStorage.removeItem('user');
  }
}

import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  userIsLoggedIn(): boolean {
    return this.localStorageService.userIsLoggedIn();
  }

  logginUser(user: any): void {
    this.localStorageService.logginUser(user);
  }

  logoutUser(): void {
    this.localStorageService.logoutUser();
  }
}

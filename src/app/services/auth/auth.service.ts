import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';

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

  loginUser(user: any): void {
    this.localStorageService.loginUser(user);
  }

  logoutUser(): void {
    this.localStorageService.logoutUser();
  }
}

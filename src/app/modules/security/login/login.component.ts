import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * Set the user's credentials and navigate to the dashboard page.
   */
  activeCredentials() {
    this.authService.loginUser('NATALIA')
    this.router.navigateByUrl('/dashboard');
  }
}

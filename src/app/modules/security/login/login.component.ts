import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
    public router: Router,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Login');
  }

  /**
   * Set the user's credentials and navigate to the dashboard page.
   */
  activeCredentials() {
    this.authService.loginUser('USER_NAME')
    this.router.navigateByUrl('/dashboard');
  }
}

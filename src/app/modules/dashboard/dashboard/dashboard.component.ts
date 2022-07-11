import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Panel de control');
  }

  closeSession() {
    this.authService.logoutUser();
    this.router.navigateByUrl('');
  }

}

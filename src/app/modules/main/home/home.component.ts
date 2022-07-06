import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * Navigate to the given URL using the Angular router.
   * @param url - url to navigate to
   */
  navegateTo(url: string) {
    this.router.navigate([url]);
  }

}

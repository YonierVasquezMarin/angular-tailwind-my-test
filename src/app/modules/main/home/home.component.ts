import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // data for pipes
  today: number = Date.now();

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}

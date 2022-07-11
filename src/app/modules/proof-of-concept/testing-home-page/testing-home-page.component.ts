import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-testing-home-page',
  templateUrl: './testing-home-page.component.html',
  styleUrls: ['./testing-home-page.component.scss']
})
export class TestingHomePageComponent implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Prueba de conceptos');
  }

}

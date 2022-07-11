import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-styles-scss',
  templateUrl: './styles-scss.component.html',
  styleUrls: ['./styles-scss.component.scss']
})
export class StylesScssComponent implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Prueba de SASS');
  }

}

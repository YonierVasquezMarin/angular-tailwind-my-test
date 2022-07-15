import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tailwindcss',
  templateUrl: './tailwindcss.component.html',
  styleUrls: ['./tailwindcss.component.scss']
})
export class TailwindcssComponent implements OnInit {

  nums: number[] = [];

  constructor() {
    for (let i = 1; i <= 10; i++) {
      this.nums.push(i);
    }
  }

  ngOnInit(): void {
  }

}

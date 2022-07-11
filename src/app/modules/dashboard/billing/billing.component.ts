import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BillingData } from 'src/app/models/billing-data.model';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  billingData: BillingData[] = [
    { month: 'Enero', count: 25000 },
    { month: 'Febrero', count: 40500 },
    { month: 'Marzo', count: 32600 },
  ];

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Facturación');
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { OptionNotSelectedComponent } from './option-not-selected/option-not-selected.component';

@NgModule({
  declarations: [ 
    OptionNotSelectedComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }

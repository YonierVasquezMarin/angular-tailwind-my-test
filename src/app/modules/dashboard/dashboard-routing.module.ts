import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociatedDevicesComponent } from './associated-devices/associated-devices.component';
import { BillingComponent } from './billing/billing.component';
import { OptionNotSelectedComponent } from './option-not-selected/option-not-selected.component';

const routes: Routes = [
  {
    path: '',
    component: OptionNotSelectedComponent
  },
  {
    path: 'associated-devices',
    component: AssociatedDevicesComponent
  },
  {
    path: 'billing',
    component: BillingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

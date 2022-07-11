import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/main/home/home.component';
import { GenderPipe } from './pipes/gender/gender.pipe';
import { PipeComponent } from './modules/proof-of-concept/pipe/pipe.component';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { AssociatedDevicesComponent } from './modules/dashboard/associated-devices/associated-devices.component';
import { BillingComponent } from './modules/dashboard/billing/billing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PipeComponent,
    GenderPipe,
    DashboardComponent,
    AssociatedDevicesComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

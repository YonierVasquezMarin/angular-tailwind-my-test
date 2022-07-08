import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/main/home/home.component';
import { GenderPipe } from './pipes/gender/gender.pipe';
import { PipeComponent } from './modules/proof-of-concept/pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PipeComponent,
    GenderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingHomePageComponent } from './testing-home-page/testing-home-page.component';
import { ProofOfConceptRoutingModule } from './proof-of-concept-routing.module';
import { StylesScssComponent } from './styles-scss/styles-scss.component';

@NgModule({
  declarations: [
    TestingHomePageComponent,
    StylesScssComponent
  ],
  imports: [
    CommonModule,
    ProofOfConceptRoutingModule
  ],
})
export class ProofOfConceptModule { }

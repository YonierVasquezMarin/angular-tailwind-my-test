import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingHomePageComponent } from './testing-home-page/testing-home-page.component';
import { ProofOfConceptRoutingModule } from './proof-of-concept-routing.module';

@NgModule({
  declarations: [
    TestingHomePageComponent
  ],
  imports: [
    CommonModule,
    ProofOfConceptRoutingModule
  ],
})
export class ProofOfConceptModule { }

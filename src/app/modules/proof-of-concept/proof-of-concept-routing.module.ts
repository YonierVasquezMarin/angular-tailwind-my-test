import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeComponent } from './pipe/pipe.component';
import { StylesScssComponent } from './styles-scss/styles-scss.component';
import { TestingHomePageComponent } from './testing-home-page/testing-home-page.component';

const routes: Routes = [
  { path: '', component: TestingHomePageComponent },
  { path: 'pipes', component: PipeComponent },
  { path: 'scss', component: StylesScssComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProofOfConceptRoutingModule { }

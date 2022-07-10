import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { LoginsGuard } from './guards/login/login.guard';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { PageNotFoundComponent } from './modules/errors/page-not-found/page-not-found.component';
import { HomeComponent } from './modules/main/home/home.component';
import { LoginComponent } from './modules/security/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginsGuard]
  },
  {
    path: 'proof-of-concept',
    loadChildren: () => import('./modules/proof-of-concept/proof-of-concept.module').then(m => m.ProofOfConceptModule)
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

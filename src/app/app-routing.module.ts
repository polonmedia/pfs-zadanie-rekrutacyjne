import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './sys/auth-guard/auth-guard.guard';
import { PreloadStrategyService } from './sys/preload-strategy/preload-strategy.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'features',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'features',
    loadChildren: () => import('./features/features.module').then(mod => mod.FeaturesModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'currencies',
    loadChildren: () => import('./currencies/currencies.module').then(mod => mod.CurrenciesModule),
    canLoad: [AuthGuard],
    data: { preload: true }
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadStrategyService })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
